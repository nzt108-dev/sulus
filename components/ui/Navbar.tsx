export default function Navbar() {
  return (
    <nav className="s-nav">
      <a href="/" className="s-logo">SU<span>L</span>US</a>
      <ul className="s-nav-links">
        <li><a href="#hiw">How it works</a></li>
        <li><a href="#compare">vs Brokers</a></li>
        <li><a href="#waitlist">For carriers</a></li>
      </ul>
      <a href="#waitlist" className="s-nav-cta">Join Waitlist</a>
    </nav>
  );
}
