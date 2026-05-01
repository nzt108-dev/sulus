"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, fadeIn } from "@/lib/animations";

export default function Hero() {
  const scrollToWaitlist = (role?: string) => {
    const el = document.getElementById("waitlist");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      if (role) {
        setTimeout(() => {
          const select = document.getElementById("role-select") as HTMLSelectElement;
          if (select) {
            select.value = role;
            select.dispatchEvent(new Event("change", { bubbles: true }));
          }
        }, 600);
      }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080c14]">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-100 pointer-events-none" />

      {/* Glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2.5 bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold px-5 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Launching in California — Join the Waitlist
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8 max-w-5xl"
          >
            The Direct Way
            <br />
            to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Move Cars
            </span>
            <br />
            in California
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            A new auto transport marketplace where customers, haulers, flippers,
            and dealers{" "}
            <span className="text-white font-medium">connect directly</span> — no brokers, no middlemen.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-16">
            <motion.button
              onClick={() => scrollToWaitlist()}
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(34,197,94,0.35)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold text-base px-8 py-4 rounded-2xl transition-colors duration-200 shadow-lg shadow-green-500/30"
            >
              Join the Waitlist
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
            <motion.button
              onClick={() => scrollToWaitlist("Car Hauler / Carrier")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-200 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 0m7 0H9m4 0h4m0 0l1-3 1-3h-2.5" />
              </svg>
              I&apos;m a Driver / Carrier
            </motion.button>
          </motion.div>

          {/* Trust pills */}
          <motion.div variants={fadeIn} className="flex flex-wrap items-center justify-center gap-3 mb-20">
            {["No broker assignment", "No in-app payments", "Direct connections only"].map((text) => (
              <span key={text} className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] text-slate-400 text-sm px-4 py-2 rounded-full">
                <svg className="w-3.5 h-3.5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {text}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]"
        >
          {[
            { value: "California", label: "Launch state" },
            { value: "5 roles", label: "Audience types" },
            { value: "Direct", label: "Connection model" },
            { value: "Free", label: "Waitlist access" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="flex flex-col items-center justify-center py-7 px-4 bg-[#080c14]"
            >
              <p className="text-2xl sm:text-3xl font-black text-white mb-1">{stat.value}</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
