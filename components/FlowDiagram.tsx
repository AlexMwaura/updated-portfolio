// Illustrative system map: channels → loan engine → payment rails, plus the reporting path.

type Node = { x: number; y: number; w: number; h: number; label: string; sub: string; hub?: boolean };

const W = 110;
const H = 44;
const centers = [62, 150, 238];

const channels: Node[] = [
  { label: "USSD", sub: "*483# menus" },
  { label: "Mobile app", sub: "Ionic · React" },
  { label: "Back office", sub: "Next.js · TS" },
].map((n, i) => ({ ...n, x: 14, y: centers[i] - H / 2, w: W, h: H }));

const rails: Node[] = [
  { label: "M-Pesa", sub: "disbursements" },
  { label: "MTN MoMo", sub: "RW · UG" },
  { label: "Core banking", sub: "REST · SOAP" },
].map((n, i) => ({ ...n, x: 356, y: centers[i] - H / 2, w: W, h: H }));

const hub: Node = { x: 185, y: 115, w: 110, h: 70, label: "Loan engine", sub: "Spring · Kotlin", hub: true };
const store: Node = { x: 185, y: 250, w: 110, h: 44, label: "Warehouse", sub: "→ S3 · ECL · EIR" };

const inWires = centers.map((cy) => `M${14 + W} ${cy} C${157} ${cy} ${157} 150 ${hub.x} 150`);
const outWires = centers.map((cy) => `M${hub.x + hub.w} 150 C${325} 150 ${325} ${cy} ${356} ${cy}`);
const downWire = `M240 ${hub.y + hub.h} L240 ${store.y}`;

function Box({ n }: { n: Node }) {
  return (
    <g className={`node${n.hub ? " hub" : ""}`}>
      <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={10} />
      <text x={n.x + 12} y={n.y + (n.hub ? 30 : 19)}>{n.label}</text>
      <text className="sub" x={n.x + 12} y={n.y + (n.hub ? 46 : 33)}>
        {n.sub}
      </text>
      {n.hub && (
        <text className="sub" x={n.x + 12} y={n.y + 60}>
          ⇄ RabbitMQ
        </text>
      )}
    </g>
  );
}

export default function FlowDiagram() {
  return (
    <svg className="flow" viewBox="0 0 480 310" role="img" aria-label="Diagram: USSD, mobile and back-office channels flow into a loan engine that pays out over M-Pesa, MTN MoMo and core banking, with reporting to a data warehouse.">
      <text className="col-label" x={14} y={22}>CHANNELS</text>
      <text className="col-label" x={185} y={22}>CORE</text>
      <text className="col-label" x={356} y={22}>RAILS</text>

      {[...inWires, ...outWires, downWire].map((d, i) => (
        <g key={i}>
          <path className="wire" d={d} />
          <path className="wire-live" d={d} />
        </g>
      ))}

      {[...inWires, ...outWires].map((d, i) => (
        <circle key={`p${i}`} className="packet" r={3}>
          <animateMotion dur="2.6s" begin={`${(i * 0.43) % 2.6}s`} repeatCount="indefinite" path={d} />
        </circle>
      ))}
      <circle className="packet" r={3}>
        <animateMotion dur="1.8s" begin="0.9s" repeatCount="indefinite" path={downWire} />
      </circle>

      {channels.map((n) => (
        <Box key={n.label} n={n} />
      ))}
      <Box n={hub} />
      <Box n={store} />
      {rails.map((n) => (
        <Box key={n.label} n={n} />
      ))}
    </svg>
  );
}
