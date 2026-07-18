import { parsePaperSummary } from "@paper-atlas/content-schema";
import computationalPropaganda from "../papers/computational-propaganda.json" with { type: "json" };
import inkling from "../papers/inkling.json" with { type: "json" };
import llmEvaluatorsLanguages from "../papers/llm-evaluators-languages.json" with { type: "json" };
import attentionIsAllYouNeed from "../papers/paper-summary.json" with { type: "json" };
import partitionPromptAggregate from "../papers/partition-prompt-aggregate.json" with { type: "json" };
import robott from "../papers/robott.json" with { type: "json" };
import searchosV1 from "../papers/searchos-v1.json" with { type: "json" };
import trace from "../papers/trace.json" with { type: "json" };

export const paperSummaryFixture = parsePaperSummary(attentionIsAllYouNeed);

export const paperSummaryFixtures = [
  trace,
  computationalPropaganda,
  llmEvaluatorsLanguages,
  partitionPromptAggregate,
  robott,
  searchosV1,
  inkling,
  attentionIsAllYouNeed,
].map(parsePaperSummary);
