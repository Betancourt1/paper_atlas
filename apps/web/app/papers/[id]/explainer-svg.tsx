import type { CSSProperties, ReactNode } from "react";

import type { Visual } from "@paper-atlas/content-schema";

const WIDTH = 760;

export function ExplainerSvg({ visual }: { visual: Visual }) {
  const body = renderVisual(visual.id);
  if (body === null) return null;
  const height = visual.id === "visual_attention_query_key_field" ? 520 : 440;

  const titleId = `${visual.id}-svg-title`;
  const descriptionId = `${visual.id}-svg-description`;
  const arrowId = `${visual.id}-arrow`;
  return (
    <div className="explainer-svg" tabIndex={0} aria-label="Scrollable explanatory figure">
      <svg
        data-visual-id={visual.id}
        viewBox={`0 0 ${WIDTH} ${height}`}
        role="img"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        preserveAspectRatio="xMidYMid meet"
      >
        <title id={titleId}>{visual.title}</title>
        <desc id={descriptionId}>{visual.alt_text}</desc>
        <defs>
          <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0 10 5 0 10Z" />
          </marker>
        </defs>
        <g style={{ "--visual-arrow": `url(#${arrowId})` } as CSSProperties}>{body}</g>
      </svg>
    </div>
  );
}

function renderVisual(id: string): ReactNode {
  switch (id) {
    case "visual_attention_query_key_field": return <AttentionField />;
    case "visual_attention_decoder_dependencies": return <DecoderDependencies />;
    case "propaganda_visual_halflife_tree": return <HalfLifeTree />;
    case "visual_inkling_sparse_routing_field": return <SparseRouting />;
    case "language_visual_ranking_acceptance_graph": return <RankingAcceptanceGraph />;
    case "visual_ppa_weighted_reconstruction_graph": return <WeightedReconstruction />;
    case "visual_robottt_fast_weight_architecture": return <FastWeightArchitecture />;
    case "visual_searchos_socm_state_graph": return <SocmStateGraph />;
    case "visual_searchos_evidence_gate": return <EvidenceGate />;
    case "visual_searchos_sensor_policy_dispatch": return <SensorPolicy />;
    case "trace_visual_credit_dependency_dag": return <CreditDag />;
    default: return null;
  }
}

function AttentionField() {
  const pairs = [
    { y: 55, key: "k₁⁽¹⁾", value: "v₁⁽¹⁾", weight: "αᵢ₁v₁" },
    { y: 130, key: "k₂⁽¹⁾", value: "v₂⁽¹⁾", weight: "αᵢ₂v₂" },
    { y: 205, key: "kₙ⁽¹⁾", value: "vₙ⁽¹⁾", weight: "αᵢₙvₙ" },
  ];
  const otherHeads = Array.from({ length: 7 }, (_, index) => ({
    head: index + 2,
    x: 70 + index * 78,
  }));
  return <>
    <Label x={28} y={25}>detailed head 1 · exactly one query row</Label><Label x={178} y={25}>explicit key/value pairs</Label>
    <g data-attention-query="q_i"><Node x={55} y={130} accent>qᵢ⁽¹⁾</Node></g>
    {pairs.map(({ y, key, value, weight }) => <g key={key}>
      <line className="v-edge v-edge--soft v-attention-score" x1={91} y1={130} x2={164} y2={y} />
      <Node x={200} y={y}>{key}</Node>
      <line className="v-pair-link v-key-value-pair" x1={236} y1={y} x2={284} y2={y} />
      <Node x={320} y={y}>{value}</Node>
      <line className="v-edge v-weighted-value" x1={356} y1={y} x2={442} y2={130} />
      <Label x={365} y={y - 8}>{weight}</Label>
    </g>)}
    <g data-attention-output="z_i" data-head-output="1"><Node x={500} y={130} accent wide>zᵢ⁽¹⁾ = Σⱼ αᵢⱼvⱼ</Node></g>
    <g data-geometry-caption="attention-recombination"><Label x={28} y={275}>second stage · eight distinct head outputs recombine</Label></g>
    {otherHeads.map(({ head, x }) => <g data-head-output={head} key={head}><Node x={x} y={330}>zᵢ⁽{head}⁾</Node></g>)}
    <path className="v-edge v-head-fan" d="M500 160 C500 245 610 245 620 315" />
    {otherHeads.map(({ head, x }) => <line className="v-edge v-head-fan" x1={x + 36} y1={330} x2={620} y2={330 + (head - 5) * 3} key={head} />)}
    <Node x={660} y={330} accent wide>Concat · 8 heads</Node>
    <line className="v-edge v-head-projection" x1={660} y1={360} x2={660} y2={390} /><Node x={660} y={420}>Wₒ</Node>
    <line className="v-edge v-head-projection" x1={660} y1={450} x2={660} y2={465} /><Node x={660} y={490} accent wide>multi-head output</Node>
  </>;
}

function DecoderDependencies() {
  return <>
    <Label x={35} y={34}>target prefix</Label>
    {[0, 1, 2].map(i => <Node x={80 + i * 88} y={95} key={i}>y{i + 1}</Node>)}
    <Node x={350} y={95} accent>current yₜ</Node><Node x={535} y={95} boundary>future yₜ₊₁</Node>
    {[0, 1, 2].map(i => <line className="v-edge" x1={115 + i * 88} y1={95} x2={305} y2={95} key={i} />)}
    <path className="v-block" d="M490 68 580 122 M580 68 490 122" /><Label x={510} y={150}>future target blocked</Label>
    <Node x={430} y={220} wide>cross-attention</Node><line className="v-edge" x1={350} y1={130} x2={400} y2={190} />
    <Label x={35} y={285}>encoded source positions</Label>
    {[0, 1, 2, 3].map(i => <g key={i}><Node x={95 + i * 105} y={340}>s{i + 1}</Node><line className="v-edge" x1={95 + i * 105} y1={310} x2={415} y2={250} /></g>)}
    <line className="v-edge" x1={490} y1={220} x2={610} y2={220} /><Node x={665} y={220} wide>next-token distribution</Node>
    <path className="v-edge v-edge--feedback" d="M705 252 C705 405 350 405 350 132" />
    <Label x={445} y={430}>selection returns as the next prefix state</Label>
  </>;
}

function HalfLifeTree() {
  return <>
    <Node x={90} y={205} wide>sampled pages</Node><Split x={165} y={205} />
    <g data-geometry-node="comment-signature"><Node x={270} y={105} accent wide>3.4% signature pages</Node></g><Node x={270} y={300} boundary>other pages</Node>
    <line className="v-edge" x1={175} y1={195} x2={215} y2={115} /><line className="v-edge v-edge--reject" x1={175} y1={215} x2={215} y2={290} />
    <Split x={375} y={105} /><Node x={485} y={65} accent>71.9% extracted</Node><Node x={485} y={155} boundary>28.1% lost</Node>
    <line className="v-edge" x1={385} y1={100} x2={430} y2={70} /><line className="v-edge v-edge--reject" x1={385} y1={110} x2={430} y2={150} />
    <Split x={585} y={65} /><Node x={690} y={45} accent>5.5% retained</Node><Node x={690} y={130} boundary>94.5% filtered</Node>
    <line className="v-edge" x1={595} y1={62} x2={635} y2={48} /><line className="v-edge v-edge--reject" x1={595} y1={70} x2={635} y2={125} />
    <rect className="v-note" x={420} y={245} width={300} height={120} rx={8} /><Label x={440} y={275}>stage product ≈ 0.13%</Label><Label x={440} y={310}>Introduction summary: 0.15%</Label><Label x={440} y={345}>reported discrepancy remains visible</Label>
  </>;
}

function SparseRouting() {
  return <>
    <Node x={70} y={210}>token</Node><Node x={185} y={210} accent>router</Node><line className="v-edge" x1={105} y1={210} x2={145} y2={210} />
    <rect className="v-zone" x={255} y={55} width={310} height={250} rx={8} /><Label x={275} y={82}>complete routed pool: 256 experts</Label>
    <Node x={360} y={145} accent wide>6 selected</Node><Node x={470} y={250} boundary wide>250 inactive</Node>
    <line className="v-edge" x1={220} y1={195} x2={302} y2={155} /><line className="v-edge v-edge--reject" x1={220} y1={220} x2={412} y2={245} />
    <Label x={285} y={285}>aggregate counts; no expert sample is drawn</Label>
    <rect className="v-zone v-zone--shared" x={255} y={340} width={230} height={65} rx={8} /><Label x={275} y={378}>2 shared experts · always active</Label><line className="v-edge" x1={220} y1={225} x2={255} y2={370} />
    <line className="v-edge" x1={418} y1={145} x2={640} y2={205} /><line className="v-edge" x1={485} y1={372} x2={640} y2={230} /><Node x={700} y={218} wide>41B active path</Node>
  </>;
}

function RankingAcceptanceGraph() {
  return <>
    <Node x={95} y={120} wide>language A score pair</Node><Node x={95} y={315} wide>language B pair + offset</Node>
    <Node x={315} y={95} accent wide>pairwise comparator</Node><Node x={315} y={300} boundary wide>global threshold</Node>
    <path className="v-edge" d="M150 110 C205 95 220 95 255 95" /><path className="v-edge" d="M150 300 C205 245 220 150 255 115" />
    <path className="v-edge" d="M150 135 C210 195 220 270 255 290" /><path className="v-edge" d="M150 325 C205 315 220 305 255 305" />
    <Node x={530} y={95} accent wide>same preferred response</Node><line className="v-edge" x1={375} y1={95} x2={470} y2={95} />
    <Node x={530} y={235} wide>A accepted</Node><Node x={530} y={345} boundary wide>B decision changes</Node>
    <path className="v-edge" d="M375 290 C420 270 440 245 470 240" /><path className="v-edge v-edge--reject" d="M375 310 C420 330 440 340 470 345" />
    <g data-geometry-caption="language-decision"><Bracket x={35} y={385} width={680} label="ordering uses a difference; acceptance uses absolute position against one threshold" /></g>
  </>;
}

function WeightedReconstruction() {
  return <>
    {[0,1,2].map(i => { const y = 90 + i * 115; return <g key={i}>
      <Node x={85} y={y - 25}>prior p{i + 1}</Node><Node x={245} y={y + 25}>estimate q{i + 1}</Node>
      <line className="v-edge v-prior-input" x1={120} y1={y - 20} x2={340} y2={y - 5} />
      <line className="v-edge v-estimate-input" x1={281} y1={y + 20} x2={340} y2={y + 5} />
      <circle className="v-operator v-multiply" cx={365} cy={y} r={25} /><Text x={365} y={y + 5}>×</Text>
    </g>; })}
    <Bracket x={35} y={395} width={120} label="Σ priors = 1" />
    {[0,1,2].map(i => <line className="v-edge" x1={390} y1={90+i*115} x2={495} y2={205} key={i} />)}
    <circle className="v-operator" cx={525} cy={205} r={30} /><Text x={525} y={211}>Σ</Text><line className="v-edge" x1={555} y1={205} x2={625} y2={205} /><Node x={675} y={205} wide>reconstructed root</Node>
    <Node x={525} y={350} wide>direct root estimate</Node><line className="v-compare" x1={575} y1={320} x2={650} y2={245} /><Label x={600} y={310}>consistency comparator</Label>
  </>;
}

function FastWeightArchitecture() {
  return <>
    <Node x={90} y={90}>keys K</Node><Node x={90} y={175}>values V</Node><Node x={90} y={320}>query Q</Node>
    <Node x={260} y={130} wide>inner loss L(K,V;Wₜ)</Node><line className="v-edge" x1={125} y1={90} x2={210} y2={120} /><line className="v-edge" x1={125} y1={175} x2={210} y2={140} />
    <Node x={410} y={130} accent wide>updated weights Wₜ₊₁</Node><line className="v-gradient" x1={310} y1={130} x2={352} y2={130} /><Label x={315} y={108}>gradient update</Label>
    <Node x={410} y={300} wide>updated MLP(Q)</Node><line className="v-edge" x1={125} y1={320} x2={352} y2={300} /><line className="v-edge" x1={410} y1={165} x2={410} y2={265} />
    <Node x={270} y={385} wide>parallel attention path</Node><line className="v-edge" x1={125} y1={330} x2={220} y2={380} />
    <Node x={540} y={300} accent wide>gated merge</Node><line className="v-edge" x1={468} y1={300} x2={482} y2={300} /><line className="v-edge" x1={320} y1={385} x2={490} y2={325} />
    <Node x={680} y={300} wide>action denoiser</Node><line className="v-edge" x1={598} y1={300} x2={622} y2={300} />
    <g data-fast-weight-state="next-timestep"><Node x={650} y={90} boundary wide>next step: Wₜ ← Wₜ₊₁</Node></g>
    <path className="v-edge v-edge--feedback v-recurrent-state" d="M468 125 C525 120 550 95 592 90" /><Label x={500} y={72}>recurrent state</Label>
  </>;
}

function SocmStateGraph() {
  const nodes = [[120,100,"Frontier Task"],[620,100,"Evidence Graph"],[620,340,"Coverage Map"],[120,340,"Failure Memory"]] as const;
  return <>
    <Node x={370} y={220} accent wide>schema cells</Node>
    {nodes.map(([x,y,label]) => <Node x={x} y={y} wide key={label}>{label}</Node>)}
    <path className="v-edge" d="M170 110 C260 120 270 180 325 205" /><Label x={190} y={115}>targets gaps</Label>
    <path className="v-edge" d="M570 110 C500 130 465 175 415 205" /><Label x={470} y={115}>binds value + span</Label>
    <path className="v-edge" d="M415 235 C475 270 520 310 570 330" /><Label x={455} y={300}>updates grounded coverage</Label>
    <path className="v-edge" d="M170 330 C260 305 280 265 330 235" /><Label x={180} y={300}>redirects failed routes</Label>
    <path className="v-edge v-edge--soft" d="M570 95 C420 20 260 20 170 85" /><Label x={285} y={35}>anchored evidence resolves tasks</Label>
  </>;
}

function EvidenceGate() {
  return <>
    <Node x={80} y={220} wide>candidate value</Node><Split x={175} y={220} />
    <Node x={290} y={120} wide>schema binding?</Node><Node x={290} y={320} wide>anchored source span?</Node>
    <line className="v-edge" x1={185} y1={212} x2={240} y2={130} /><line className="v-edge" x1={185} y1={228} x2={240} y2={310} />
    <Node x={465} y={220} accent>AND gate</Node><line className="v-edge" x1={340} y1={120} x2={425} y2={205} /><line className="v-edge" x1={340} y1={320} x2={425} y2={235} />
    <Node x={650} y={220} wide>atomic commit</Node><line className="v-edge" x1={505} y1={220} x2={600} y2={220} />
    <Node x={650} y={90} accent>Evidence Graph</Node><Node x={650} y={350} accent>Coverage Map</Node><line className="v-edge" x1={650} y1={185} x2={650} y2={125} /><line className="v-edge" x1={650} y1={255} x2={650} y2={315} />
    <path className="v-edge v-edge--reject" d="M290 155 C290 205 420 385 500 385" /><path className="v-edge v-edge--reject" d="M290 355 C350 395 430 395 500 385" /><Label x={505} y={390}>distinct rejection record</Label>
  </>;
}

function SensorPolicy() {
  return <>
    <Node x={80} y={55} wide>coverage Δ</Node><Node x={80} y={130} wide>evidence Δ</Node><Node x={80} y={205} wide>remaining budgets</Node>
    {[55,130,205].map(y => <line className="v-edge" x1={138} y1={y} x2={245} y2={130} key={y} />)}<Node x={290} y={130} accent>policy state</Node>
    {[[470,45,"continue"],[610,80,"backfill"],[650,135,"correction"],[610,195,"drain-only"],[470,235,"stop"]].map(([x,y,label]) => <g key={String(label)}><line className="v-edge" x1={335} y1={130} x2={Number(x)-40} y2={Number(y)} /><Node x={Number(x)} y={Number(y)}>{String(label)}</Node></g>)}
    <Label x={35} y={300}>independent dispatch eligibility</Label>
    <Node x={100} y={360} wide>slot released</Node><Node x={285} y={360} wide>ready unresolved gap</Node>
    <line className="v-edge" x1={158} y1={360} x2={430} y2={345} /><line className="v-edge" x1={343} y1={360} x2={430} y2={375} />
    <Node x={470} y={360} accent>AND</Node><line className="v-edge v-edge--feedback v-dispatch-edge" x1={510} y1={360} x2={590} y2={360} />
    <g data-dispatch-state="ready-gap"><Node x={660} y={360} accent wide>dispatch ready gap</Node></g>
  </>;
}

function CreditDag() {
  const xs = [90,220,350,480,610];
  return <>
    <Label x={35} y={38}>prefix-value states</Label>
    {xs.map((x,i) => <Node x={x} y={165} key={i}>V(s{i})</Node>)}
    {xs.slice(0,-1).map((x,i) => <line className="v-edge" x1={x+35} y1={165} x2={xs[i+1]-35} y2={165} key={i} />)}
    <Bracket x={125} y={195} width={450} label="adjacent differences telescope exactly" />
    <path className="v-skip" d="M90 125 Q220 35 350 125" /><path className="v-skip" d="M220 125 Q350 35 480 125" /><path className="v-skip" d="M350 125 Q480 35 610 125" />
    <Label x={245} y={55}>short look-ahead skip dependencies</Label>
    <Node x={350} y={340} boundary wide>verified final outcome</Node>
    {xs.slice(0,-1).map((x,i) => <line className="v-outcome" x1={350} y1={310} x2={x} y2={205} key={i} />)}
    <Label x={430} y={410}>separate global anchor broadcasts to local turns</Label>
  </>;
}

function Node({ x, y, children, wide = false, accent = false, boundary = false }: { x:number; y:number; children:ReactNode; wide?:boolean; accent?:boolean; boundary?:boolean }) {
  const width = wide ? 116 : 72;
  return <g><rect className={`v-node${accent ? " v-node--accent" : ""}${boundary ? " v-node--boundary" : ""}`} x={x-width/2} y={y-30} width={width} height={60} rx={8}/><Text x={x} y={y+4}>{children}</Text></g>;
}
function Label({x,y,children}:{x:number;y:number;children:ReactNode}) { return <text className="v-label" x={x} y={y}>{children}</text>; }
function Text({x,y,children}:{x:number;y:number;children:ReactNode}) { return <text className="v-text" textAnchor="middle" x={x} y={y}>{children}</text>; }
function Split({x,y}:{x:number;y:number}) { return <circle className="v-operator" cx={x} cy={y} r={11}/>; }
function Bracket({x,y,width,label}:{x:number;y:number;width:number;label:string}) { return <g><path className="v-bracket" d={`M${x} ${y}v12h${width}v-12`}/><text className="v-label" textAnchor="middle" x={x+width/2} y={y+34}>{label}</text></g>; }
