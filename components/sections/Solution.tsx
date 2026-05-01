"use client";

import { motion } from "framer-motion";
import { DocumentIcon, SearchIcon, HandshakeIcon, DollarIcon, ShieldIcon, UserIcon, TruckIcon } from "@/components/ui/Icons";
import { ComponentType, SVGProps } from "react";
import { fadeUp, slideLeft, slideRight, stagger, staggerFast, viewportOnce } from "@/lib/animations";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;

const points: { Icon: IconComponent; text: string }[] = [
  { Icon: DocumentIcon, text: "Customers post transport requests — vehicle details, pickup, delivery, and timing." },
  { Icon: SearchIcon, text: "Drivers and carriers discover available opportunities across California." },
  { Icon: HandshakeIcon, text: "Users connect directly — no middlemen involved in the conversation." },
  { Icon: DollarIcon, text: "Pricing is discussed and agreed between both sides." },
  { Icon: ShieldIcon, text: "Platform provides information only — not brokerage services." },
];

export default function Solution() {
  return (
    <section id="solution" className="py-28 bg-[#080c14] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-60" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeUp} className="inline-block text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
            The Solution
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-3xl mx-auto">
            A simpler marketplace
            <br />
            for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              California
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual card */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div
              className="relative bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 overflow-hidden"
              whileHover={{ y: -4, borderColor: "rgba(34,197,94,0.2)", transition: { duration: 0.3 } }}
            >
              {/* Green top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent" />

              <div className="text-center mb-8">
                <div className="w-14 h-14 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-7 h-7 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">California Marketplace</h3>
                <p className="text-slate-500 text-sm mt-1">Intrastate connections within CA</p>
              </div>

              <div className="flex flex-col gap-3">
                <motion.div
                  className="flex items-center gap-3 bg-blue-500/[0.08] border border-blue-500/20 rounded-xl px-4 py-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center flex-shrink-0">
                    <UserIcon className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="font-semibold text-blue-300">Customer</span>
                </motion.div>

                <div className="flex items-center mx-6">
                  <div className="flex-1 h-px bg-white/10" />
                  <div className="mx-3 bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-1 text-xs text-slate-500 font-medium">
                    Information Marketplace
                  </div>
                  <div className="flex-1 h-px bg-white/10" />
                </div>

                <motion.div
                  className="flex items-center gap-3 bg-orange-500/[0.08] border border-orange-500/20 rounded-xl px-4 py-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-500/15 flex items-center justify-center flex-shrink-0">
                    <TruckIcon className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="font-semibold text-orange-300">Driver / Carrier</span>
                </motion.div>
              </div>

              <p className="text-center text-xs text-slate-600 mt-6">No broker. No assignment. Direct contact only.</p>
            </motion.div>
          </motion.div>

          {/* Points */}
          <motion.div
            className="flex flex-col gap-5"
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {points.map((point, idx) => (
              <motion.div key={idx} variants={slideRight} className="flex items-start gap-4">
                <motion.div
                  className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/15 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <point.Icon className="w-5 h-5 text-green-400" />
                </motion.div>
                <p className="text-slate-400 leading-relaxed pt-2 text-sm">{point.text}</p>
              </motion.div>
            ))}

            <motion.div variants={fadeUp} className="mt-2 bg-amber-500/[0.06] border border-amber-500/15 rounded-xl p-5">
              <p className="text-amber-400/80 text-sm leading-relaxed">
                <span className="font-semibold text-amber-400">Note:</span> Users make their own agreements directly. The platform does not assign drivers or process transportation payments.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
