const CA_PATH =
  "M 22,20 L 158,20 L 168,55 L 172,100 L 168,140 L 158,162 L 148,170 " +
  "L 98,292 L 58,292 L 42,280 L 28,248 L 18,215 L 25,182 L 28,162 " +
  "L 22,148 L 16,135 L 18,110 L 12,88 L 16,62 L 22,40 Z";

const CITIES = [
  { id: "sf",  cx: 24,  cy: 152, label: "SF"  },
  { id: "sac", cx: 85,  cy: 125, label: "SAC" },
  { id: "la",  cx: 62,  cy: 250, label: "LA"  },
  { id: "sd",  cx: 88,  cy: 284, label: "SD"  },
];

const BX = 82, BY = 168;

export default function NetworkViz() {
  return (
    <section id="viz" className="s-viz">
      <div className="s-viz-inner">
        <div className="s-viz-label">Network</div>
        <h2 className="s-viz-title">
          The old way<br />
          <span style={{ color: "var(--accent)" }}>vs Sulus</span>
        </h2>
        <p className="s-viz-sub">Every route. Direct. No broker in the middle.</p>

        <div className="s-viz-panels">
          {/* LEFT — broker routing */}
          <div className="s-viz-panel">
            <div className="s-vp-label">
              <span className="s-vp-dot bad" />
              <span className="bad-l">Traditional Broker Routing</span>
            </div>
            <svg viewBox="0 0 200 330" className="s-ca-map" aria-hidden="true">
              <path d={CA_PATH} className="ca-outline-bad" />

              {/* Routes to/from broker */}
              <path d={`M ${CITIES[0].cx},${CITIES[0].cy} L ${BX},${BY - 14}`} className="route-bad" />
              <path d={`M ${CITIES[1].cx},${CITIES[1].cy} L ${BX},${BY - 14}`} className="route-bad" />
              <path d={`M ${BX},${BY + 14} L ${CITIES[2].cx},${CITIES[2].cy}`} className="route-bad" />
              <path d={`M ${BX},${BY + 14} L ${CITIES[3].cx},${CITIES[3].cy}`} className="route-bad" />

              {/* Broker box */}
              <rect x={BX - 28} y={BY - 14} width={56} height={28} rx={3} className="broker-box" />
              <text x={BX} y={BY + 1} className="broker-lbl" textAnchor="middle" dominantBaseline="middle">
                BROKER
              </text>
              <text x={BX} y={BY + 11} className="broker-fee" textAnchor="middle">
                +$300–500 fee
              </text>

              {CITIES.map((c) => (
                <g key={c.id}>
                  <circle cx={c.cx} cy={c.cy} r={5} className="city-bad" />
                  <text x={c.cx + 8} y={c.cy + 1} className="city-lbl" dominantBaseline="middle">
                    {c.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* RIGHT — direct routing */}
          <div className="s-viz-panel">
            <div className="s-vp-label">
              <span className="s-vp-dot good" />
              <span className="good-l">Sulus Direct Routing</span>
            </div>
            <svg viewBox="0 0 200 330" className="s-ca-map" aria-hidden="true">
              <defs>
                <path id="nvp1" d={`M ${CITIES[0].cx},${CITIES[0].cy} L ${CITIES[1].cx},${CITIES[1].cy}`} />
                <path id="nvp2" d={`M ${CITIES[1].cx},${CITIES[1].cy} L ${CITIES[2].cx},${CITIES[2].cy}`} />
                <path id="nvp3" d={`M ${CITIES[2].cx},${CITIES[2].cy} L ${CITIES[3].cx},${CITIES[3].cy}`} />
              </defs>

              <path d={CA_PATH} className="ca-outline-good" />

              {/* SF → LA dim background line */}
              <path
                d={`M ${CITIES[0].cx},${CITIES[0].cy} L ${CITIES[2].cx},${CITIES[2].cy}`}
                className="route-dim"
              />

              {/* SF → SAC */}
              <path
                d={`M ${CITIES[0].cx},${CITIES[0].cy} L ${CITIES[1].cx},${CITIES[1].cy}`}
                className="route-good"
                style={{ strokeDasharray: 500, strokeDashoffset: 500, animation: "draw 0.9s ease forwards 0.2s" }}
              />
              {/* SAC → LA */}
              <path
                d={`M ${CITIES[1].cx},${CITIES[1].cy} L ${CITIES[2].cx},${CITIES[2].cy}`}
                className="route-good"
                style={{ strokeDasharray: 500, strokeDashoffset: 500, animation: "draw 1.2s ease forwards 0.6s" }}
              />
              {/* LA → SD */}
              <path
                d={`M ${CITIES[2].cx},${CITIES[2].cy} L ${CITIES[3].cx},${CITIES[3].cy}`}
                className="route-good"
                style={{ strokeDasharray: 500, strokeDashoffset: 500, animation: "draw 0.7s ease forwards 1.1s" }}
              />

              {/* Animated dots */}
              <circle r="4" fill="var(--accent)" opacity="0.9">
                <animateMotion dur="2s" repeatCount="indefinite" begin="0s">
                  <mpath href="#nvp1" />
                </animateMotion>
              </circle>
              <circle r="4" fill="var(--accent)" opacity="0.9">
                <animateMotion dur="3.5s" repeatCount="indefinite" begin="0.4s">
                  <mpath href="#nvp2" />
                </animateMotion>
              </circle>
              <circle r="4" fill="var(--accent)" opacity="0.9">
                <animateMotion dur="1.5s" repeatCount="indefinite" begin="1s">
                  <mpath href="#nvp3" />
                </animateMotion>
              </circle>

              {CITIES.map((c) => (
                <g key={c.id}>
                  <circle cx={c.cx} cy={c.cy} r={5} className="city-good" />
                  <text x={c.cx + 8} y={c.cy + 1} className="city-lbl" dominantBaseline="middle">
                    {c.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        <p className="s-viz-note">
          Real California carriers. Real customers. <b>Zero brokers.</b>
        </p>
      </div>
    </section>
  );
}
