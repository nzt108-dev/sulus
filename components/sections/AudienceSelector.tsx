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
  accentColor: string;
  borderColor: string;
  bgColor: string;
  iconBg: string;
  btnHover: string;
}

const audiences: AudienceCard[] = [
  {
    Icon: CarIcon,
    role: "Customers",
    roleValue: "Customer",
    description: "Need to move a car? Post your transport request and connect with available drivers in California.",
    accentColor: "text-blue-600",
    borderColor: "border-blue-100 hover:border-blue-300",
    bgColor: "bg-blue-50 hover:bg-blue-50/80",
    iconBg: "bg-blue-100 text-blue-600",
    btnHover: "hover:bg-blue-600 hover:border-blue-600 hover:text-white",
  },
  {
    Icon: WrenchIcon,
    role: "Car Flippers",
    roleValue: "Car Flipper",
    description: "Buying, fixing, and reselling cars? Find transport options faster and save on repeated moves.",
    accentColor: "text-emerald-600",
    borderColor: "border-emerald-100 hover:border-emerald-300",
    bgColor: "bg-emerald-50 hover:bg-emerald-50/80",
    iconBg: "bg-emerald-100 text-emerald-600",
    btnHover: "hover:bg-emerald-600 hover:border-emerald-600 hover:text-white",
  },
  {
    Icon: BuildingIcon,
    role: "Dealers & Auto Shops",
    roleValue: "Dealer / Auto Shop",
    description: "Move inventory, customer vehicles, or repair-related cars with direct access to drivers.",
    accentColor: "text-purple-600",
    borderColor: "border-purple-100 hover:border-purple-300",
    bgColor: "bg-purple-50 hover:bg-purple-50/80",
    iconBg: "bg-purple-100 text-purple-600",
    btnHover: "hover:bg-purple-600 hover:border-purple-600 hover:text-white",
  },
  {
    Icon: TruckIcon,
    role: "Car Haulers",
    roleValue: "Car Hauler / Carrier",
    description: "Find direct transport opportunities in California without waiting on brokers.",
    accentColor: "text-orange-600",
    borderColor: "border-orange-100 hover:border-orange-300",
    bgColor: "bg-orange-50 hover:bg-orange-50/80",
    iconBg: "bg-orange-100 text-orange-600",
    btnHover: "hover:bg-orange-600 hover:border-orange-600 hover:text-white",
  },
  {
    Icon: PickupIcon,
    role: "Pickup Owners",
    roleValue: "Pickup Truck Owner",
    description: "Have a pickup and trailer? Join early and explore local earning opportunities.",
    accentColor: "text-rose-600",
    borderColor: "border-rose-100 hover:border-rose-300",
    bgColor: "bg-rose-50 hover:bg-rose-50/80",
    iconBg: "bg-rose-100 text-rose-600",
    btnHover: "hover:bg-rose-600 hover:border-rose-600 hover:text-white",
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
    <section id="audience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeUp} className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Who It&apos;s For
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Built for every side of{" "}
            <span className="text-blue-500">auto transport</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Whether you&apos;re moving a car, hauling vehicles, or building a business — the platform connects you directly to who you need.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
              className={`group flex flex-col rounded-2xl border-2 p-7 transition-all duration-300 ${audience.bgColor} ${audience.borderColor}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${audience.iconBg}`}>
                <audience.Icon className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${audience.accentColor}`}>{audience.role}</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">{audience.description}</p>
              <motion.button
                onClick={() => handleJoin(audience.roleValue)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold bg-white border-2 ${audience.accentColor} border-current transition-all duration-200 ${audience.btnHover} group-hover:shadow-md`}
              >
                Join as {audience.role.split(" ")[0]}
                <ArrowRightIcon className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}

          {/* California badge */}
          <motion.div
            variants={scaleIn}
            className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 p-7 text-center bg-slate-50"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
              <CaliforniaIcon className="w-6 h-6 text-slate-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-700 mb-2">California Only</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Launching intrastate within California first. All connections are within the state.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
