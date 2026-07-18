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

export function validateExplainerDocument(
  value: unknown,
): value is ExplainerDocument {
  return validateExplainer(value);
}

export function parseExplainerDocument(value: unknown): ExplainerDocument {
  if (validateExplainer(value)) {
    return value;
  }

  const details = formatErrors(validateExplainer.errors);
  throw new TypeError(`Invalid ExplainerDocument: ${details}`);
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
