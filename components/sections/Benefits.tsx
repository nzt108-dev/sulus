"use client";

import { useState } from "react";
import { CarIcon, WrenchIcon, BuildingIcon, TruckIcon, PickupIcon, CheckIcon, ArrowRightIcon, ZapIcon, RefreshIcon, SearchIcon, DollarIcon, UserIcon, ShieldIcon } from "@/components/ui/Icons";
import { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;

interface Benefit {
  Icon: IconComponent;
  text: string;
}

interface Tab {
  id: string;
  label: string;
  Icon: IconComponent;
  color: string;
  activeColor: string;
  headline: string;
  subline: string;
  benefits: Benefit[];
}

const tabs: Tab[] = [
  {
    id: "customers",
    label: "Customers",
    Icon: CarIcon,
    color: "text-blue-500",
    activeColor: "bg-blue-500",
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
    color: "text-emerald-500",
    activeColor: "bg-emerald-500",
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
    color: "text-purple-500",
    activeColor: "bg-purple-500",
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
    color: "text-orange-500",
    activeColor: "bg-orange-500",
    headline: "Find loads without broker dependency",
    subline: "Discover direct customer requests across California.",
    benefits: [
      { Icon: SearchIcon, text: "More visibility with customers posting directly" },
      { Icon: UserIcon, text: "Connect with customers without going through a broker" },
      { Icon: DollarIcon, text: "Subscription-based model planned — no per-job commission" },
      { Icon: ZapIcon, text: "Respond to opportunities when it fits your route" },
    ],
  },
  {
    id: "pickup",
    label: "Pickup Owners",
    Icon: PickupIcon,
    color: "text-rose-500",
    activeColor: "bg-rose-500",
    headline: "Turn your truck into a side income",
    subline: "Find local transport jobs that work around your schedule.",
    benefits: [
      { Icon: DollarIcon, text: "Explore side-income opportunities near you" },
      { Icon: SearchIcon, text: "Start with local California jobs — no long hauls required" },
      { Icon: ZapIcon, text: "Work on your own schedule and terms" },
      { Icon: ShieldIcon, text: "Low barrier to entry — no special licenses for local moves" },
    ],
  },
];

export default function Benefits() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

  return (
    <section id="benefits" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Early Access Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Why join <span className="text-blue-500">early?</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Early members help shape the platform and get first access when it launches in California.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(idx)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === idx
                  ? `${t.activeColor} text-white shadow-md`
                  : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
              }`}
            >
              <t.Icon className="w-4 h-4" />
              {t.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-5">
            {/* Left: headline */}
            <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-slate-900 to-slate-800">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-white/10`}>
                <tab.Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                {tab.headline}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                {tab.subline}
              </p>
              <a
                href="#waitlist"
                className={`inline-flex items-center gap-2 self-start text-sm font-semibold text-white px-5 py-2.5 rounded-xl ${tab.activeColor} transition-opacity duration-200 hover:opacity-90`}
              >
                Join as {tab.label.split(" ")[0]}
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Right: benefits list */}
            <div className="md:col-span-3 p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                What you get
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {tab.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center mt-0.5">
                      <benefit.Icon className="w-4 h-4 text-slate-600" />
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed pt-1.5">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom strip */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-sm text-slate-400">
                <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                Early access is free. Be first in line when we launch in California.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
