"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <section id="waitlist" className="s-waitlist">
      <h2>
        Skip the Broker.<br />
        Join Now.
      </h2>
      <p>California early access · No broker fees · Direct connections only</p>

      {done ? (
        <div
          style={{
            display: "inline-block",
            background: "rgba(0,0,0,.2)",
            padding: "18px 48px",
            fontSize: "15px",
            fontWeight: 700,
            letterSpacing: ".06em",
            color: "#000",
          }}
        >
          ✓ You&apos;re on the list!
        </div>
      ) : (
        <form className="s-wlf" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Join Waitlist →</button>
        </form>
      )}
    </section>
  );
}
