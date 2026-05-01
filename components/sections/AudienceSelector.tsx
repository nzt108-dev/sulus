"use client";

import { motion } from "framer-motion";
import { CarIcon, WrenchIcon, BuildingIcon, TruckIcon, PickupIcon, CaliforniaIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { ComponentType, SVGProps } from "react";
import { fadeUp, stagger, scaleIn, viewportOnce } from "@/lib/animations";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;

interface AudienceCard {
  Icon: IconComponent;
  role: string;
  roleValue: string;
  description: string;
  accent: string;
  iconBg: string;
  iconColor: string;
  borderHover: string;
}

const audiences: AudienceCard[] = [
  {
    Icon: CarIcon,
    role: "Customers",
    roleValue: "Customer",
    description: "Need to move a car? Post your transport request and connect with available drivers in California.",
    accent: "text-blue-400",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    borderHover: "hover:border-blue-500/30",
  },
  {
    Icon: WrenchIcon,
    role: "Car Flippers",
    roleValue: "Car Flipper",
    description: "Buying, fixing, and reselling cars? Find transport options faster and save on repeated moves.",
    accent: "text-green-400",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-400",
    borderHover: "hover:border-green-500/30",
  },
  {
    Icon: BuildingIcon,
    role: "Dealers & Auto Shops",
    roleValue: "Dealer / Auto Shop",
    description: "Move inventory, customer vehicles, or repair-related cars with direct access to drivers.",
    accent: "text-purple-400",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    borderHover: "hover:border-purple-500/30",
  },
  {
    Icon: TruckIcon,
    role: "Car Haulers",
    roleValue: "Car Hauler / Carrier",
    description: "Find direct transport opportunities in California without waiting on brokers.",
    accent: "text-orange-400",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    borderHover: "hover:border-orange-500/30",
  },
  {
    Icon: PickupIcon,
    role: "Pickup Owners",
    roleValue: "Pickup Truck Owner",
    description: "Have a pickup and trailer? Join early and explore local earning opportunities.",
    accent: "text-rose-400",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-400",
    borderHover: "hover:border-rose-500/30",
  },
];

export default function AudienceSelector() {
  const handleJoin = (roleValue: string) => {
    const el = document.getElementById("waitlist");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const select = document.getElementById("role-select") as HTMLSelectElement;
        if (select) {
          select.value = roleValue;
          select.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }, 600);
    }
  };

  return (
    <section id="audience" className="py-28 bg-[#080c14] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeUp} className="inline-block text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
            Who It&apos;s For
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
            Built for every side
            <br />
            of <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">auto transport</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto">
            Whether you&apos;re moving a car, hauling vehicles, or building a business — connect directly with who you need.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {audiences.map((audience) => (
            <motion.div
              key={audience.role}
              variants={scaleIn}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`group flex flex-col bg-white/[0.03] border border-white/[0.08] rounded-2xl p-7 transition-all duration-300 ${audience.borderHover} hover:bg-white/[0.05]`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${audience.iconBg}`}>
                <audience.Icon className={`w-5 h-5 ${audience.iconColor}`} />
              </div>
              <h3 className={`text-lg font-bold mb-2 ${audience.accent}`}>{audience.role}</h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-6">{audience.description}</p>
              <motion.button
                onClick={() => handleJoin(audience.roleValue)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center gap-2 text-sm font-semibold ${audience.accent} transition-all duration-200 group-hover:gap-3`}
              >
                Join as {audience.role.split(" ")[0]}
                <ArrowRightIcon className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}

          {/* CA badge */}
          <motion.div
            variants={scaleIn}
            className="flex flex-col items-center justify-center bg-white/[0.02] border border-dashed border-white/[0.1] rounded-2xl p-7 text-center"
          >
            <div className="w-11 h-11 rounded-xl bg-white/[0.05] flex items-center justify-center mb-4">
              <CaliforniaIcon className="w-5 h-5 text-slate-500" />
            </div>
            <h3 className="text-base font-bold text-slate-400 mb-2">California Only</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Launching intrastate within California first. All connections within the state.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
