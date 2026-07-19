import { describe, expect, it } from "vitest";

import { getExplainerByPaperId, getPaperById, listPapers } from "./papers";

describe("getPaperById", () => {
  it("returns the canonical fixture", () => {
    expect(getPaperById("paper_attention_is_all_you_need")?.title).toBe(
      "Attention Is All You Need",
    );
  });

  it("returns undefined for an unknown paper", () => {
    expect(getPaperById("paper_missing")).toBeUndefined();
  });
});

describe("listPapers", () => {
  it("returns the digest first and keeps the baseline fixture", () => {
    expect(listPapers()).toHaveLength(8);
    expect(listPapers()[0]?.id).toBe("paper_trace");
    expect(listPapers().at(-1)?.id).toBe(
      "paper_attention_is_all_you_need",
    );
  });
});

describe("getExplainerByPaperId", () => {
  it("returns each source-backed explainer", () => {
    const explainer = getExplainerByPaperId("paper_trace");

    expect(explainer?.paper_version).toBe("v1");
    expect(explainer?.blocks).toHaveLength(7);
    expect(explainer?.editorial_status).toBe("REVIEWED");
  });

  it("returns undefined for an unknown paper", () => {
    expect(getExplainerByPaperId("paper_missing")).toBeUndefined();
  });

  it("keeps only the revision-6 YES placements in SVG", () => {
    const expectedVisuals = {
      paper_attention_is_all_you_need: [
        ["visual_attention_query_key_field", "attn_mechanism_p2"],
        ["visual_attention_decoder_dependencies", "attn_mechanism_p3"],
      ],
      paper_computational_propaganda: [["propaganda_visual_halflife_tree", "propaganda_example_p2"]],
      paper_inkling: [["visual_inkling_sparse_routing_field", "ink_mechanism_p1"]],
      paper_llm_evaluators_languages: [["language_visual_ranking_acceptance_graph", "language_mechanism_p1"]],
      paper_partition_prompt_aggregate: [["visual_ppa_weighted_reconstruction_graph", "ppa_mechanism_p2"]],
      paper_robott: [["visual_robottt_fast_weight_architecture", "rttt_mechanism_p2"]],
      paper_searchos_v1: [
        ["visual_searchos_socm_state_graph", "sos_mechanism_p1"],
        ["visual_searchos_evidence_gate", "sos_mechanism_p2"],
        ["visual_searchos_sensor_policy_dispatch", "sos_mechanism_p3"],
      ],
      paper_trace: [["trace_visual_credit_dependency_dag", "trace_mechanism_p3"]],
    };

    for (const [paperId, expected] of Object.entries(expectedVisuals)) {
      const visuals = getExplainerByPaperId(paperId)?.visuals ?? [];
      expect(visuals.map((visual) => [visual.id, visual.after_paragraph_id])).toEqual(expected);
      expect(visuals.every((visual) => visual.delivery_medium === "SVG")).toBe(true);
    }
  });
});
