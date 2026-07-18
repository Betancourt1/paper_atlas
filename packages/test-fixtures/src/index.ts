import {
  parseExplainerDocument,
  parsePaperSummary,
} from "@paper-atlas/content-schema";
import attentionExplainer from "../explainers/attention-is-all-you-need.json" with { type: "json" };
import computationalPropagandaExplainer from "../explainers/computational-propaganda.json" with { type: "json" };
import inklingExplainer from "../explainers/inkling.json" with { type: "json" };
import llmEvaluatorsLanguagesExplainer from "../explainers/llm-evaluators-languages.json" with { type: "json" };
import partitionPromptAggregateExplainer from "../explainers/partition-prompt-aggregate.json" with { type: "json" };
import robottExplainer from "../explainers/robott.json" with { type: "json" };
import searchosV1Explainer from "../explainers/searchos-v1.json" with { type: "json" };
import traceExplainer from "../explainers/trace.json" with { type: "json" };
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

export const explainerFixtures = [
  traceExplainer,
  computationalPropagandaExplainer,
  llmEvaluatorsLanguagesExplainer,
  partitionPromptAggregateExplainer,
  robottExplainer,
  searchosV1Explainer,
  inklingExplainer,
  attentionExplainer,
].map(parseExplainerDocument);
