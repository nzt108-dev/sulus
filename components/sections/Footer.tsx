export default function Footer() {
  return (
    <footer className="s-footer">
      <a
        href="/"
        style={{
          fontFamily: "var(--font-barlow), sans-serif",
          fontWeight: 900,
          fontSize: "18px",
          letterSpacing: ".08em",
          textTransform: "uppercase",
          color: "#333",
          textDecoration: "none",
        }}
      >
        SU<span style={{ color: "var(--accent)" }}>L</span>US
      </a>
      <p>© 2026 Sulus. California only. Not a broker. Not a carrier.</p>
      <p style={{ fontSize: "11px", color: "#1c1c1c" }}>
        Information marketplace · Intrastate only
      </p>
    </footer>
  );
}
