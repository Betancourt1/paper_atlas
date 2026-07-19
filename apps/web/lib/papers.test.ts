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

  it("keeps the approved revision-7 placements and delivery media", () => {
    const expectedVisuals = {
      paper_attention_is_all_you_need: [
        ["visual_attention_source_figure_1_change", "attn_change_p2", "source asset"],
        ["visual_attention_source_figure_1_mechanism", "attn_mechanism_p1", "source asset"],
        ["visual_attention_query_key_field", "attn_mechanism_p2", "source asset"],
        ["visual_attention_decoder_dependencies", "attn_mechanism_p3", "source asset"],
        ["visual_attention_source_figure_1_review", "attn_review_p1", "source asset"],
      ],
      paper_computational_propaganda: [
        ["propaganda_visual_source_figure_7", "propaganda_change_p2", "source asset"],
        ["propaganda_visual_source_figure_3", "propaganda_example_p1", "source asset"],
        ["propaganda_visual_halflife_tree", "propaganda_example_p2", "SVG"],
      ],
      paper_inkling: [["visual_inkling_sparse_routing_field", "ink_mechanism_p1", "SVG"]],
      paper_llm_evaluators_languages: [
        ["language_visual_source_figure_4_why", "language_why_p2", "source asset"],
        ["language_visual_source_figure_1", "language_change_p1", "source asset"],
        ["language_visual_source_figure_3", "language_change_p2", "source asset"],
        ["language_visual_ranking_acceptance_graph", "language_mechanism_p2", "source asset"],
        ["language_visual_source_figures_5_7_mechanism", "language_mechanism_p3", "source asset"],
        ["language_visual_source_figure_4_example", "language_example_p1", "source asset"],
        ["language_visual_source_figures_1_3", "language_evidence_p1", "source asset"],
        ["language_visual_source_figure_4_evidence", "language_evidence_p2", "source asset"],
        ["language_visual_source_figures_5_7_evidence", "language_evidence_p3", "source asset"],
        ["language_visual_source_figure_4_review", "language_review_p1", "source asset"],
      ],
      paper_partition_prompt_aggregate: [["visual_ppa_weighted_reconstruction_graph", "ppa_mechanism_p2", "SVG"]],
      paper_robott: [
        ["visual_robott_source_figure_2_change", "rttt_change_p2", "source asset"],
        ["visual_robott_source_figure_2_mechanism", "rttt_mechanism_p2", "source asset"],
        ["visual_robott_source_figures_2_4_mechanism", "rttt_mechanism_p3", "source asset"],
        ["visual_robott_source_figure_7", "rttt_evidence_p1", "source asset"],
        ["visual_robott_source_figure_8", "rttt_evidence_p2", "source asset"],
      ],
      paper_searchos_v1: [
        ["visual_searchos_source_figure_2", "sos_mechanism_p2", "source asset"],
        ["visual_searchos_source_figures_2_5", "sos_mechanism_p3", "source asset"],
        ["visual_searchos_source_figure_5_limit", "sos_limitations_p2", "source asset"],
      ],
      paper_trace: [
        ["trace_visual_source_figure_1_why", "trace_why_p1", "source asset"],
        ["trace_visual_source_figure_1_change", "trace_change_p1", "source asset"],
        ["trace_visual_source_figure_1_example", "trace_example_p2", "source asset"],
        ["trace_visual_source_figures_3_4", "trace_evidence_p3", "source asset"],
        ["trace_visual_credit_dependency_dag", "trace_mechanism_p3", "SVG"],
      ],
    };

    for (const [paperId, expected] of Object.entries(expectedVisuals)) {
      const visuals = getExplainerByPaperId(paperId)?.visuals ?? [];
      expect(visuals.map((visual) => [
        visual.id,
        visual.after_paragraph_id,
        visual.delivery_medium,
      ])).toEqual(expected);
    }
  });
});
