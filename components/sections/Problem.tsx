"use client";

import { motion } from "framer-motion";
import { UserIcon, DollarIcon, LinkIcon, ClockIcon, MapPinIcon } from "@/components/ui/Icons";
import { ComponentType, SVGProps } from "react";
import { fadeUp, slideLeft, slideRight, stagger, staggerFast, viewportOnce } from "@/lib/animations";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;

interface ProblemItem {
  Icon: IconComponent;
  text: string;
}

const problems: ProblemItem[] = [
  { Icon: UserIcon, text: "Customers often do not know who is actually moving the vehicle." },
  { Icon: DollarIcon, text: "Brokers increase cost and create communication gaps between customers and drivers." },
  { Icon: LinkIcon, text: "Drivers need direct access to customers — not another middleman." },
  { Icon: ClockIcon, text: "Small dealers and car flippers need faster repeat transport options." },
  { Icon: MapPinIcon, text: "Pickup owners have earning potential but no simple place to find local opportunities." },
];

export default function Problem() {
  return (
    <section id="problem" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className="inline-block text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">
              The Problem
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Auto transport is still too{" "}
              <span className="text-red-400">slow, expensive,</span> and{" "}
              <span className="text-red-400">complicated</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              The current model is fragmented and inefficient. Everyone in the chain pays the price — customers, drivers, and businesses alike. There&apos;s a better way to do this in California.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {problems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={slideRight}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="flex items-start gap-4 bg-slate-800/60 border border-slate-700/50 rounded-xl p-5 hover:bg-slate-800 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-red-500/15 border border-red-500/20 flex items-center justify-center mt-0.5">
                  <item.Icon className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-slate-300 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
