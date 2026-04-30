"use client";

import { motion } from "framer-motion";
import { DocumentIcon, SearchIcon, HandshakeIcon, LockIcon } from "@/components/ui/Icons";
import { ComponentType, SVGProps } from "react";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;

interface Step {
  number: string;
  title: string;
  description: string;
  Icon: IconComponent;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Post or discover a request",
    description: "Customers describe the vehicle, pickup location, delivery destination, and timing. Drivers browse available opportunities across California.",
    Icon: DocumentIcon,
  },
  {
    number: "02",
    title: "Compare and connect",
    description: "Drivers can express interest or send offers. Customers review who is available and choose who to contact directly.",
    Icon: SearchIcon,
  },
  {
    number: "03",
    title: "Arrange directly",
    description: "Users agree on price, timing, payment method, and all details directly — without any platform involvement in the transaction.",
    Icon: HandshakeIcon,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeUp} className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            How It Works
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Three simple steps
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-slate-400 text-lg max-w-xl mx-auto">
            The platform removes friction. You handle the rest directly with the other party.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="relative flex flex-col items-center text-center group cursor-default"
            >
              <div className="relative mb-6">
                <motion.div
                  className="w-20 h-20 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(59,130,246,0.3)", transition: { duration: 0.3 } }}
                >
                  <step.Icon className="w-9 h-9 text-blue-300" />
                </motion.div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold text-white">
                  {idx + 1}
                </div>
              </div>

              <span className="text-blue-400/60 text-xs font-bold tracking-widest uppercase mb-2">
                Step {step.number}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-14 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="inline-flex items-center gap-2.5 bg-slate-800/80 border border-slate-700 rounded-full px-6 py-3 text-sm text-slate-400">
            <LockIcon className="w-4 h-4 text-blue-400 flex-shrink-0" />
            All arrangements are made directly between users. Platform provides information only.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
