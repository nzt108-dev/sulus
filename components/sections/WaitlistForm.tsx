"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger, scaleIn, viewportOnce } from "@/lib/animations";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  state: string;
  city: string;
  need: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  role: "",
  state: "California",
  city: "",
  need: "",
};

const roles = ["Customer", "Car Hauler / Carrier", "Pickup Truck Owner", "Car Flipper", "Dealer / Auto Shop", "Other"];
const needs = ["I need to move a car", "I want to find transport jobs", "I buy/sell cars", "I represent a business", "Other"];

const inputBase = "w-full rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500/40 transition-all duration-200 text-sm";
const labelBase = "block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2";

export default function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Waitlist submission:", formData);
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="waitlist" className="py-28 bg-[#080c14] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern pointer-events-none opacity-60" />
        <div className="relative max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="text-center bg-white/[0.03] border border-green-500/20 rounded-3xl p-12"
          >
            <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-white mb-3">You&apos;re on the list!</h3>
            <p className="text-slate-400 leading-relaxed">
              Thank you. We&apos;ll notify you when the platform is ready in California.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold px-5 py-2.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              California early access confirmed
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-28 bg-[#080c14] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 70%)" }} />

      <div className="relative max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeUp} className="inline-block text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
            Early Access
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight">
            Join the waitlist
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-slate-400">
            Be the first to know when the platform launches in California.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="bg-white/[0.03] border border-white/[0.08] rounded-3xl overflow-hidden"
        >
          {/* Green top line */}
          <div className="h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent" />

          <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-5">
            <div>
              <label htmlFor="fullName" className={labelBase}>Full Name <span className="text-red-500 normal-case">*</span></label>
              <input id="fullName" name="fullName" type="text" required placeholder="John Smith" value={formData.fullName} onChange={handleChange} className={inputBase} />
            </div>

            <div>
              <label htmlFor="email" className={labelBase}>Email Address <span className="text-red-500 normal-case">*</span></label>
              <input id="email" name="email" type="email" required placeholder="john@example.com" value={formData.email} onChange={handleChange} className={inputBase} />
            </div>

            <div>
              <label htmlFor="phone" className={labelBase}>Phone <span className="text-slate-600 font-normal normal-case">(optional)</span></label>
              <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleChange} className={inputBase} />
            </div>

            <div>
              <label htmlFor="role-select" className={labelBase}>Your Role <span className="text-red-500 normal-case">*</span></label>
              <select id="role-select" name="role" required value={formData.role} onChange={handleChange} className={`${inputBase} appearance-none cursor-pointer`}>
                <option value="" disabled className="bg-[#0d1424]">Select your role...</option>
                {roles.map((role) => <option key={role} value={role} className="bg-[#0d1424]">{role}</option>)}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="state" className={labelBase}>State</label>
                <input id="state" name="state" type="text" value="California" readOnly className={`${inputBase} opacity-40 cursor-not-allowed`} />
              </div>
              <div>
                <label htmlFor="city" className={labelBase}>City <span className="text-slate-600 font-normal normal-case">(opt.)</span></label>
                <input id="city" name="city" type="text" placeholder="Los Angeles" value={formData.city} onChange={handleChange} className={inputBase} />
              </div>
            </div>

            <div>
              <label htmlFor="need" className={labelBase}>What do you need? <span className="text-slate-600 font-normal normal-case">(optional)</span></label>
              <select id="need" name="need" value={formData.need} onChange={handleChange} className={`${inputBase} appearance-none cursor-pointer`}>
                <option value="" className="bg-[#0d1424]">Select an option...</option>
                {needs.map((need) => <option key={need} value={need} className="bg-[#0d1424]">{need}</option>)}
              </select>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(34,197,94,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 disabled:opacity-60 text-white font-bold text-base py-4 rounded-2xl transition-colors duration-200 shadow-lg shadow-green-500/25"
            >
              {loading ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Joining...
                </>
              ) : (
                <>
                  Join Waitlist
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </>
              )}
            </motion.button>

            <p className="text-center text-xs text-slate-600">
              California residents only · No spam · Launch notification only
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
