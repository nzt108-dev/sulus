"use client";

import { motion } from "framer-motion";
import { DocumentIcon, SearchIcon, HandshakeIcon, LockIcon } from "@/components/ui/Icons";
import { ComponentType, SVGProps } from "react";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;

const steps: { number: string; title: string; description: string; Icon: IconComponent }[] = [
  {
    number: "01",
    title: "Post or discover",
    description: "Customers describe the vehicle, pickup, delivery, and timing. Drivers browse available opportunities across California.",
    Icon: DocumentIcon,
  },
  {
    number: "02",
    title: "Compare & connect",
    description: "Drivers express interest. Customers review who is available and choose who to contact directly — no intermediary.",
    Icon: SearchIcon,
  },
  {
    number: "03",
    title: "Arrange directly",
    description: "Users agree on price, timing, and payment directly — without any platform involvement in the transaction.",
    Icon: HandshakeIcon,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 relative overflow-hidden" style={{ background: "#0d1424" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeUp} className="inline-block text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
            How It Works
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
            Three simple steps
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-slate-400 text-lg max-w-xl mx-auto">
            The platform removes friction. You handle the rest directly.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Connector line on desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-green-500/30 via-green-500/10 to-green-500/30" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Icon container */}
              <motion.div
                className="relative w-20 h-20 rounded-2xl bg-green-500/[0.08] border border-green-500/20 flex items-center justify-center mb-8"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(34,197,94,0.15)", transition: { duration: 0.3 } }}
              >
                <step.Icon className="w-9 h-9 text-green-400" />
                {/* Step number badge */}
                <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-xs font-black text-white">
                  {idx + 1}
                </div>
              </motion.div>

              <span className="text-green-500/40 text-xs font-black tracking-widest uppercase mb-3">
                Step {step.number}
              </span>
              <h3 className="text-xl font-black text-white mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="inline-flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.07] rounded-full px-6 py-3 text-sm text-slate-500">
            <LockIcon className="w-4 h-4 text-green-400 flex-shrink-0" />
            All arrangements are made directly between users. Platform provides information only.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
