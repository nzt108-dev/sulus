"use client";

import { motion } from "framer-motion";
import { UserIcon, DollarIcon, LinkIcon, ClockIcon, MapPinIcon } from "@/components/ui/Icons";
import { ComponentType, SVGProps } from "react";
import { fadeUp, slideLeft, slideRight, stagger, staggerFast, viewportOnce } from "@/lib/animations";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;

const problems: { Icon: IconComponent; text: string }[] = [
  { Icon: UserIcon, text: "Customers often do not know who is actually moving the vehicle." },
  { Icon: DollarIcon, text: "Brokers increase cost and create communication gaps between customers and drivers." },
  { Icon: LinkIcon, text: "Drivers need direct access to customers — not another middleman." },
  { Icon: ClockIcon, text: "Small dealers and car flippers need faster repeat transport options." },
  { Icon: MapPinIcon, text: "Pickup owners have earning potential but no simple place to find local opportunities." },
];

export default function Problem() {
  return (
    <section id="problem" className="py-28 relative overflow-hidden" style={{ background: "#0d1424" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] -translate-y-1/2 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)" }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className="inline-block text-red-400 text-xs font-bold uppercase tracking-widest mb-5">
              The Problem
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
              Auto transport
              <br />
              is still too{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">
                broken
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              The current model is fragmented and inefficient. Customers, drivers, and businesses all pay the price. California deserves better.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-3"
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {problems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={slideRight}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="flex items-start gap-4 bg-white/[0.03] border border-white/[0.07] hover:border-red-500/20 hover:bg-red-500/[0.04] rounded-xl p-5 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/15 flex items-center justify-center mt-0.5">
                  <item.Icon className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-slate-400 leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
