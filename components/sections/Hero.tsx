export default function Hero() {
  return (
    <section className="s-hero">
      {/* Left */}
      <div className="s-hero-left">
        <div className="s-badge">
          <span className="s-bdot" />
          Launching California 2026
        </div>
        <h1 className="s-h1">
          Move cars<br />
          <span className="outline">without</span><br />
          <span className="hot">Brokers.</span>
        </h1>
        <p className="s-sub">
          Sulus connects customers, carriers, flippers and dealers{" "}
          <strong>directly</strong>. No broker fees. No assignment without your say.
          California only.
        </p>
        <div className="s-btns">
          <a href="#waitlist" className="s-btn-p">Join the Waitlist →</a>
          <a href="#compare" className="s-btn-s">See savings →</a>
        </div>
        <div className="s-stats">
          <div className="s-stat">
            <div className="s-stat-v">$0</div>
            <div className="s-stat-l">Broker fee</div>
          </div>
          <div className="s-stat">
            <div className="s-stat-v">Direct</div>
            <div className="s-stat-l">Always</div>
          </div>
          <div className="s-stat">
            <div className="s-stat-v">CA</div>
            <div className="s-stat-l">Launch market</div>
          </div>
        </div>
      </div>

      {/* Right — dashboard mockup */}
      <div className="s-hero-right">
        <div className="s-dash">
          <div className="s-dtb">
            <span className="s-dot r" /><span className="s-dot y" /><span className="s-dot g" />
            <div className="s-durl">app.sulus.io/dashboard</div>
            <button className="s-dbtn">+ Post Route</button>
          </div>
          <div className="s-db">
            <div className="s-dh">
              <span className="s-dt">Active Routes — California</span>
            </div>
            <div className="s-dstats">
              <div className="s-ds">
                <div className="s-dsv up">$0</div>
                <div className="s-dsl">Broker fee</div>
                <div className="s-dsd" style={{color:'var(--accent)'}}>↓ 100% saved</div>
              </div>
              <div className="s-ds">
                <div className="s-dsv">24</div>
                <div className="s-dsl">Live listings</div>
                <div className="s-dsd" style={{color:'var(--accent)'}}>↑ 8 today</div>
              </div>
              <div className="s-ds">
                <div className="s-dsv">4.2h</div>
                <div className="s-dsl">Avg response</div>
                <div className="s-dsd" style={{color:'var(--green)'}}>↓ vs broker</div>
              </div>
              <div className="s-ds">
                <div className="s-dsv up">$420</div>
                <div className="s-dsl">Avg saving</div>
                <div className="s-dsd" style={{color:'var(--green)'}}>per move</div>
              </div>
            </div>
            <div className="s-lhead">
              <span className="s-lht">Live listings</span>
            </div>
            {[
              { route: "Los Angeles → San Francisco", detail: "Sedan · 2024 · Open transport", price: "$388", badge: "Open", badgeClass: "s-open" },
              { route: "San Diego → Sacramento", detail: "SUV · 2023 · 2 offers", price: "$628", badge: "2 offers", badgeClass: "s-offers" },
              { route: "Fresno → Los Angeles", detail: "Truck · 2022 · Open transport", price: "$298", badge: "Open", badgeClass: "s-open" },
            ].map((r) => (
              <div key={r.route} className="s-row">
                <div className="s-ri">
                  <div className="s-ric">🚗</div>
                  <div>
                    <div className="s-rr">{r.route}</div>
                    <div className="s-rm">{r.detail}</div>
                  </div>
                </div>
                <div>
                  <div className="s-rp">{r.price}</div>
                  <span className={`s-rs ${r.badgeClass}`}>{r.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
