import { DocumentIcon, SearchIcon, HandshakeIcon, DollarIcon, ShieldIcon, UserIcon, TruckIcon } from "@/components/ui/Icons";
import { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;

interface SolutionPoint {
  Icon: IconComponent;
  text: string;
}

const points: SolutionPoint[] = [
  {
    Icon: DocumentIcon,
    text: "Customers post transport requests — vehicle details, pickup, delivery, and timing.",
  },
  {
    Icon: SearchIcon,
    text: "Drivers and carriers discover available opportunities across California.",
  },
  {
    Icon: HandshakeIcon,
    text: "Users connect directly — no middlemen involved in the conversation.",
  },
  {
    Icon: DollarIcon,
    text: "Pricing is discussed and agreed between both sides.",
  },
  {
    Icon: ShieldIcon,
    text: "Platform provides information only — not brokerage services.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            The Solution
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight max-w-3xl mx-auto">
            A simpler marketplace for vehicle transport{" "}
            <span className="text-blue-500">in California</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: visual flow */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl border-2 border-slate-100 shadow-xl p-8 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-t-3xl" />

              <div className="text-center mb-8">
                <div className="w-14 h-14 bg-blue-50 border-2 border-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-7 h-7 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800">California Marketplace</h3>
                <p className="text-slate-500 text-sm mt-1">Intrastate connections within CA</p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 rounded-xl border-2 border-blue-200 bg-blue-50 px-4 py-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <UserIcon className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="font-semibold text-blue-700">Customer</span>
                </div>

                <div className="flex items-center mx-8">
                  <div className="flex-1 h-px bg-slate-200" />
                  <div className="mx-3 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500">
                    Information Marketplace
                  </div>
                  <div className="flex-1 h-px bg-slate-200" />
                </div>

                <div className="flex items-center gap-3 rounded-xl border-2 border-orange-200 bg-orange-50 px-4 py-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <TruckIcon className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="font-semibold text-orange-700">Driver / Carrier</span>
                </div>
              </div>

              <p className="text-center text-xs text-slate-400 mt-6 leading-relaxed">
                No broker. No assignment. Direct contact only.
              </p>
            </div>
          </div>

          {/* Right: points */}
          <div className="flex flex-col gap-5">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <point.Icon className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-slate-700 leading-relaxed pt-1.5">{point.text}</p>
              </div>
            ))}

            <div className="mt-2 rounded-xl bg-amber-50 border border-amber-200 p-5">
              <p className="text-amber-800 text-sm leading-relaxed">
                <span className="font-semibold">Note:</span> Users make their own agreements directly. The platform does not assign drivers or process transportation payments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
