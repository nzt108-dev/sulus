export default function Footer() {
  return (
    <footer className="bg-[#080c14] text-white border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="text-white font-black text-xl tracking-widest">SULUS</span>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mt-4">
              A California-only information marketplace for intrastate vehicle transport connections. Direct. Simple. No brokers.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 bg-green-500/10 border border-green-500/15 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              California only — intrastate
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-5">Sections</h4>
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
                  <a href={link.href} className="text-slate-500 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Roles */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-5">Join As</h4>
            <ul className="flex flex-col gap-3">
              {["Customer", "Car Hauler / Carrier", "Pickup Truck Owner", "Car Flipper", "Dealer / Auto Shop"].map((role) => (
                <li key={role}>
                  <a href="#waitlist" className="text-slate-500 hover:text-white text-sm transition-colors duration-200">
                    {role}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 mb-6">
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-3">Legal Disclaimer</h5>
            <p className="text-xs text-slate-600 leading-relaxed">
              This platform is an informational marketplace operating within California for intrastate vehicle transport connections. It does not provide transportation services, act as a broker, assign drivers, process transportation payments, or guarantee delivery. All transportation arrangements are made directly between users. This platform does not engage in interstate commerce.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <p>© 2025 Sulus. All rights reserved.</p>
            <p>Information marketplace. Not a broker. Not a carrier. California only.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
