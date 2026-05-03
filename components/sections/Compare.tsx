import { Fragment } from "react";

const rows: [string, string][] = [
  ["Broker assigned without your approval", "You choose your carrier directly"],
  ["Hidden fees +$150–$400", "No hidden fees ever"],
  ["No direct communication", "Direct messaging with carrier"],
  ["Slow response 24–72 hours", "Fast direct response"],
  ["Multiple middlemen involved", "Zero middlemen"],
  ["Assignment without your consent", "You approve every step"],
  ["Pay per quote $50+", "Free to post your route"],
  ["No price transparency", "See all prices upfront"],
];

export default function Compare() {
  return (
    <section id="compare" style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="s-compare">
        <div className="s-tag">Side by Side</div>
        <h2 className="s-title">Broker vs Sulus</h2>
        <p className="s-subtitle">The same California transport. Half the cost. All the control.</p>

        <div className="s-ctable">
          <div className="s-ch b">
            <div className="s-chn b">Traditional Broker</div>
            <div className="s-chp b">$850</div>
            <div className="s-chn2">avg. total cost LA → SF</div>
          </div>
          <div className="s-ch s">
            <div className="s-chn s">Sulus Direct</div>
            <div className="s-chp s">$420</div>
            <div className="s-chn2">avg. direct price LA → SF</div>
          </div>

          {rows.map(([bad, good], i) => (
            <Fragment key={i}>
              <div className="s-cc b">
                <span className="s-ci">✗</span>
                {bad}
              </div>
              <div className="s-cc s">
                <span className="s-ci">✓</span>
                {good}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
