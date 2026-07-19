import Ajv2020, { type ErrorObject } from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

import explainerSchema from "../schema/explainer-document.schema.json" with { type: "json" };
import schema from "../schema/paper-summary.schema.json" with { type: "json" };
import type { ExplainerDocument } from "./generated/explainer-document.js";
import type { PaperSummary } from "./generated/paper-summary.js";

const ajv = new Ajv2020({ allErrors: true, strict: true });
addFormats(ajv);

const validate = ajv.compile<PaperSummary>(schema);
const validateExplainer = ajv.compile<ExplainerDocument>(explainerSchema);

const requiredBlockTypes: ExplainerDocument["blocks"][number]["type"][] = [
  "WHY_IT_EXISTS",
  "WHAT_IT_CHANGES",
  "HOW_IT_WORKS",
  "WORKED_EXAMPLE",
  "EVIDENCE",
  "LIMITATIONS",
  "CRITICAL_REVIEW",
];

export function validateExplainerDocument(
  value: unknown,
): value is ExplainerDocument {
  return validateExplainer(value) && getExplainerIntegrityErrors(value).length === 0;
}

export function parseExplainerDocument(value: unknown): ExplainerDocument {
  if (!validateExplainer(value)) {
    const details = formatErrors(validateExplainer.errors);
    throw new TypeError(`Invalid ExplainerDocument: ${details}`);
  }

  const integrityErrors = getExplainerIntegrityErrors(value);
  if (integrityErrors.length > 0) {
    throw new TypeError(`Invalid ExplainerDocument: ${integrityErrors.join("; ")}`);
  }

  return value;
}

export function getExplainerIntegrityErrors(
  explainer: ExplainerDocument,
): string[] {
  const errors: string[] = [];
  const blockIds = new Set(explainer.blocks.map(({ id }) => id));
  const claimIds = new Set(explainer.claims.map(({ id }) => id));
  const sourceIds = new Set(explainer.source_refs.map(({ id }) => id));

  reportDuplicateIds(errors, "block", explainer.blocks.map(({ id }) => id));
  reportDuplicateIds(errors, "claim", explainer.claims.map(({ id }) => id));
  reportDuplicateIds(errors, "source", explainer.source_refs.map(({ id }) => id));
  reportDuplicateIds(errors, "visual", explainer.visuals.map(({ id }) => id));

  if (!claimIds.has(explainer.central_claim.claim_id)) {
    errors.push(`central claim references unknown claim ${explainer.central_claim.claim_id}`);
  }

  for (const type of requiredBlockTypes) {
    if (!explainer.blocks.some((block) => block.type === type)) {
      errors.push(`missing required block type ${type}`);
    }
  }

  for (const depth of ["FIVE_MIN", "TWENTY_MIN", "DEEP"] as const) {
    const path = explainer.reading_paths[depth];
    reportUnknownIds(errors, `${depth} reading path`, path, blockIds);

    for (const requiredType of ["HOW_IT_WORKS", "LIMITATIONS"] as const) {
      const includesRequiredType = path.some((blockId) =>
        explainer.blocks.some(
          (block) => block.id === blockId && block.type === requiredType,
        ),
      );
      if (!includesRequiredType) {
        errors.push(`${depth} reading path omits ${requiredType}`);
      }
    }
  }

  for (const block of explainer.blocks) {
    reportUnknownIds(errors, `block ${block.id} claim`, block.claim_ids, claimIds);
    reportUnknownIds(errors, `block ${block.id} source`, block.source_refs, sourceIds);

    for (const depth of block.reading_depths) {
      if (!explainer.reading_paths[depth].includes(block.id)) {
        errors.push(`block ${block.id} declares ${depth} but is absent from that path`);
      }
    }

    for (const depth of ["FIVE_MIN", "TWENTY_MIN", "DEEP"] as const) {
      if (
        explainer.reading_paths[depth].includes(block.id) &&
        !block.reading_depths.includes(depth)
      ) {
        errors.push(`block ${block.id} appears in ${depth} but does not declare that depth`);
      }
    }
  }

  for (const claim of explainer.claims) {
    reportUnknownIds(errors, `claim ${claim.id} source`, claim.source_refs, sourceIds);
  }

  for (const visual of explainer.visuals) {
    const placementBlock = explainer.blocks.find(
      (block) => block.id === visual.after_block_id,
    );
    if (!placementBlock) {
      errors.push(
        `visual ${visual.id} references unknown placement block ${visual.after_block_id}`,
      );
    } else {
      const paragraphIds = new Set(
        placementBlock.paragraphs.map(
          (_, index) => `${placementBlock.id}_p${index + 1}`,
        ),
      );
      if (!paragraphIds.has(visual.after_paragraph_id)) {
        errors.push(
          `visual ${visual.id} references unknown placement paragraph ${visual.after_paragraph_id}`,
        );
      }
    }
    reportUnknownIds(errors, `visual ${visual.id} claim`, visual.claim_ids, claimIds);
    reportUnknownIds(errors, `visual ${visual.id} source`, visual.source_refs, sourceIds);

    if (visual.delivery_medium === "source asset") {
      if (visual.source_asset === undefined) {
        errors.push(`visual ${visual.id} uses source asset delivery without source_asset metadata`);
      }
    } else if (visual.source_asset !== undefined) {
      errors.push(
        `visual ${visual.id} declares source_asset metadata for ${visual.delivery_medium} delivery`,
      );
    }

    const sourceImages = [
      ...(visual.source_asset?.images ?? []),
      ...(visual.source_asset?.mobile_images ?? []),
    ];
    for (const image of sourceImages) {
      if (!image.path.startsWith("/paper-assets/")) {
        errors.push(
          `visual ${visual.id} source asset path must start with /paper-assets/: ${image.path}`,
        );
      }
    }

    const nodeIds = visual.items.flatMap((item) =>
      item.node_id === undefined ? [] : [item.node_id],
    );
    reportDuplicateIds(errors, `visual ${visual.id} node`, nodeIds);
    const knownNodeIds = new Set(nodeIds);
    for (const item of visual.items) {
      if (item.input_ids !== undefined) {
        reportUnknownIds(
          errors,
          `visual ${visual.id} item ${item.label} input`,
          item.input_ids,
          knownNodeIds,
        );
      }
      if (
        (item.domain_min === undefined) !== (item.domain_max === undefined)
      ) {
        errors.push(
          `visual ${visual.id} item ${item.label} must declare both domain bounds`,
        );
      } else if (
        item.domain_min !== undefined &&
        item.domain_max !== undefined &&
        item.domain_min >= item.domain_max
      ) {
        errors.push(
          `visual ${visual.id} item ${item.label} has a non-increasing domain`,
        );
      }
      if (
        item.value !== undefined &&
        item.value_end !== undefined &&
        item.value > item.value_end
      ) {
        errors.push(
          `visual ${visual.id} item ${item.label} has a reversed value interval`,
        );
      }
    }
  }

  for (const term of explainer.glossary) {
    reportUnknownIds(errors, `glossary term ${term.term} source`, term.source_refs, sourceIds);
  }

  return errors;
}

export function validatePaperSummary(value: unknown): value is PaperSummary {
  return validate(value);
}

export function parsePaperSummary(value: unknown): PaperSummary {
  if (validate(value)) {
    return value;
  }

  const details = formatErrors(validate.errors);
  throw new TypeError(`Invalid PaperSummary: ${details}`);
}

function formatErrors(errors: ErrorObject[] | null | undefined): string {
  if (!errors?.length) {
    return "unknown schema error";
  }

  return errors
    .map((error) => `${error.instancePath || "/"} ${error.message ?? "is invalid"}`)
    .join("; ");
}

function reportDuplicateIds(errors: string[], kind: string, ids: string[]): void {
  const seen = new Set<string>();
  for (const id of ids) {
    if (seen.has(id)) {
      errors.push(`duplicate ${kind} id ${id}`);
    }
    seen.add(id);
  }
}

function reportUnknownIds(
  errors: string[],
  owner: string,
  ids: readonly string[],
  knownIds: Set<string>,
): void {
  for (const id of ids) {
    if (!knownIds.has(id)) {
      errors.push(`${owner} references unknown id ${id}`);
    }
  }
}
