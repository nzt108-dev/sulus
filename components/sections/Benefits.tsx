"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CarIcon, WrenchIcon, BuildingIcon, TruckIcon, PickupIcon, CheckIcon, ArrowRightIcon, ZapIcon, RefreshIcon, SearchIcon, DollarIcon, UserIcon, ShieldIcon } from "@/components/ui/Icons";
import { ComponentType, SVGProps } from "react";
import { fadeUp, stagger, fadeIn, viewportOnce } from "@/lib/animations";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;

interface Tab {
  id: string;
  label: string;
  Icon: IconComponent;
  color: string;
  activeBg: string;
  activeBorder: string;
  headline: string;
  subline: string;
  benefits: { Icon: IconComponent; text: string }[];
}

const tabs: Tab[] = [
  {
    id: "customers",
    label: "Customers",
    Icon: CarIcon,
    color: "text-blue-400",
    activeBg: "bg-blue-500",
    activeBorder: "border-blue-500/30",
    headline: "Move your car without the confusion",
    subline: "Post a request, get responses, choose who to contact — all directly.",
    benefits: [
      { Icon: SearchIcon, text: "Compare transport options from available drivers" },
      { Icon: UserIcon, text: "Contact drivers directly — no broker in between" },
      { Icon: ZapIcon, text: "Save time on coordination and back-and-forth" },
      { Icon: ShieldIcon, text: "Understand exactly who you are dealing with" },
    ],
  },
  {
    id: "flippers",
    label: "Car Flippers",
    Icon: WrenchIcon,
    color: "text-green-400",
    activeBg: "bg-green-500",
    activeBorder: "border-green-500/30",
    headline: "Faster transport for your resale workflow",
    subline: "Less time waiting on brokers, more time buying and flipping.",
    benefits: [
      { Icon: RefreshIcon, text: "Faster repeat transport for ongoing deals" },
      { Icon: DollarIcon, text: "Better price visibility across available drivers" },
      { Icon: UserIcon, text: "Build direct relationships with drivers you trust" },
      { Icon: ZapIcon, text: "Smoother resale workflow with less friction" },
    ],
  },
  {
    id: "dealers",
    label: "Dealers & Shops",
    Icon: BuildingIcon,
    color: "text-purple-400",
    activeBg: "bg-purple-500",
    activeBorder: "border-purple-500/30",
    headline: "Move inventory and vehicles with less hassle",
    subline: "Direct access to California drivers — no broker markup.",
    benefits: [
      { Icon: SearchIcon, text: "Access local California drivers on demand" },
      { Icon: ZapIcon, text: "Move vehicles with less back-and-forth" },
      { Icon: DollarIcon, text: "Find drivers who accept business-friendly terms" },
      { Icon: RefreshIcon, text: "Streamline repeat transport for your inventory" },
    ],
  },
  {
    id: "haulers",
    label: "Car Haulers",
    Icon: TruckIcon,
    color: "text-orange-400",
    activeBg: "bg-orange-500",
    activeBorder: "border-orange-500/30",
    headline: "Find loads without broker dependency",
    subline: "Discover direct customer requests across California.",
    benefits: [
      { Icon: SearchIcon, text: "More visibility with customers posting directly" },
      { Icon: UserIcon, text: "Connect with customers without going through a broker" },
      { Icon: DollarIcon, text: "Subscription-based model — no per-job commission" },
      { Icon: ZapIcon, text: "Respond to opportunities when it fits your route" },
    ],
  },
  {
    id: "pickup",
    label: "Pickup Owners",
    Icon: PickupIcon,
    color: "text-rose-400",
    activeBg: "bg-rose-500",
    activeBorder: "border-rose-500/30",
    headline: "Turn your truck into a side income",
    subline: "Find local transport jobs that work around your schedule.",
    benefits: [
      { Icon: DollarIcon, text: "Explore side-income opportunities near you" },
      { Icon: SearchIcon, text: "Start with local California jobs — no long hauls" },
      { Icon: ZapIcon, text: "Work on your own schedule and terms" },
      { Icon: ShieldIcon, text: "Low barrier to entry for local moves" },
    ],
  },
];

export default function Benefits() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

  return (
    <section id="benefits" className="py-28 bg-[#080c14] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-60" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeUp} className="inline-block text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
            Early Access Benefits
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
            Why join{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              early?
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto">
            Early members help shape the platform and get first access when it launches in California.
          </motion.p>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {tabs.map((t, idx) => (
            <motion.button
              key={t.id}
              onClick={() => setActiveTab(idx)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === idx
                  ? `${t.activeBg} text-white shadow-lg`
                  : "bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.07]"
              }`}
            >
              <t.Icon className="w-4 h-4" />
              {t.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className={`bg-white/[0.03] border rounded-3xl overflow-hidden ${tab.activeBorder}`}
          >
            <div className="grid md:grid-cols-5">
              {/* Left */}
              <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center relative overflow-hidden"
                style={{ background: "#0d1424" }}>
                <div className="absolute top-0 left-0 bottom-0 w-[2px]"
                  style={{ background: `linear-gradient(to bottom, transparent, currentColor, transparent)` }} />
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-white/[0.06]`}>
                  <tab.Icon className={`w-6 h-6 ${tab.color}`} />
                </div>
                <h3 className="text-2xl font-black text-white mb-3 leading-snug">{tab.headline}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{tab.subline}</p>
                <a
                  href="#waitlist"
                  className={`inline-flex items-center gap-2 self-start text-sm font-bold text-white px-5 py-2.5 rounded-xl ${tab.activeBg} transition-opacity hover:opacity-90`}
                >
                  Join as {tab.label.split(" ")[0]}
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>

              {/* Right */}
              <div className="md:col-span-3 p-8 md:p-10">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-6">What you get</p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {tab.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center mt-0.5">
                        <benefit.Icon className="w-4 h-4 text-slate-400" />
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed pt-1.5">{benefit.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center gap-3 text-sm text-slate-600">
                  <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Early access is free. Be first in line when we launch in California.
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
