
export default function Footer() {
  const currentYear = 2025;

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div>
            <div className="mb-4">
              <span className="text-white font-black text-2xl tracking-widest">SULUS</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              A California-only information marketplace for intrastate vehicle
              transport connections. Direct. Simple. No brokers.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/20 text-blue-300 text-xs font-medium px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              California only — intrastate
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-5">
              Sections
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "#audience", label: "Who It's For" },
                { href: "#problem", label: "The Problem" },
                { href: "#solution", label: "The Solution" },
                { href: "#how-it-works", label: "How It Works" },
                { href: "#benefits", label: "Benefits" },
                { href: "#waitlist", label: "Join Waitlist" },
                { href: "#faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Audience links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-5">
              Join As
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                "Customer",
                "Car Hauler / Carrier",
                "Pickup Truck Owner",
                "Car Flipper",
                "Dealer / Auto Shop",
              ].map((role) => (
                <li key={role}>
                  <a
                    href="#waitlist"
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {role}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal disclaimer */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-slate-800/60 rounded-2xl border border-slate-700/50 p-6 mb-6">
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
              Legal Disclaimer
            </h5>
            <p className="text-xs text-slate-500 leading-relaxed">
              This platform is an informational marketplace operating within
              California for intrastate vehicle transport connections. It does
              not provide transportation services, act as a broker, assign
              drivers, process transportation payments, or guarantee delivery.
              All transportation arrangements are made directly between users.
              This platform does not engage in interstate commerce.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              © {currentYear} Sulus. All rights reserved.
            </p>
            <p className="text-center sm:text-right">
              Information marketplace. Not a broker. Not a carrier.
              California only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
