import Ajv2020, { type ErrorObject } from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

import schema from "../schema/paper-summary.schema.json" with { type: "json" };
import type { PaperSummary } from "./generated/paper-summary.js";

const ajv = new Ajv2020({ allErrors: true, strict: true });
addFormats(ajv);

const validate = ajv.compile<PaperSummary>(schema);

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

