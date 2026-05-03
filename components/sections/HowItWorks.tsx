export default function HowItWorks() {
  return (
    <section id="hiw">
      <div className="s-hiw">
        <div style={{ textAlign: "center" }}>
          <div className="s-tag">How It Works</div>
          <h2 className="s-title">
            Three steps.<br />
            <span style={{ color: "var(--accent)" }}>No broker.</span>
          </h2>
        </div>

        <div className="s-steps">
          <div className="s-step">
            <div className="s-sn">01</div>
            <div className="s-st">Post Your Route</div>
            <p className="s-sp">
              Describe your vehicle, pickup and delivery address, and timing.
              Takes 2 minutes. Carriers in California will see your listing immediately.
            </p>
          </div>

          <div className="s-step">
            <div className="s-sn">02</div>
            <div className="s-st">Browse &amp; Choose</div>
            <p className="s-sp">
              Real California carriers with reviews and pricing reach out directly.
              Pick who you want. No middleman, no surprises, no assigned broker.
            </p>
          </div>

          <div
            className="s-step"
            style={{
              backgroundImage: "url('/images/car-key.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,.78)",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="s-sn">03</div>
              <div className="s-st">Deal Done</div>
              <p className="s-sp">
                Agree on price and terms directly with your carrier. No hidden fees.
                No broker taking 30% off the top. Your car moves. You keep the savings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
