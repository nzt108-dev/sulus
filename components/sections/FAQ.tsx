"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger, staggerFast, viewportOnce } from "@/lib/animations";

const faqs = [
  { question: "Is this a transport company?", answer: "No. The platform is an information marketplace that helps users connect directly. It does not provide transportation services, act as a broker, or manage any aspect of the transport." },
  { question: "Do you assign drivers?", answer: "No. Customers choose who they want to contact. The platform provides information to help users discover each other — the decision is entirely yours." },
  { question: "Do you process payments?", answer: "No. Payments are arranged directly between users. The platform does not handle, facilitate, or process any transportation payments." },
  { question: "Where is the platform available?", answer: "The platform is launching in California first, serving intrastate vehicle transport connections within the state. It is not designed for interstate transport." },
  { question: "Who can join?", answer: "Customers, drivers, carriers, pickup owners, car flippers, dealers, auto shops, and other auto-related businesses in California are welcome to join the waitlist." },
  { question: "When will it launch?", answer: "We're building and preparing for launch. Join the waitlist and we'll notify you directly when early access opens in California." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 relative overflow-hidden" style={{ background: "#0d1424" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeUp} className="inline-block text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
            FAQ
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight">
            Common questions
          </motion.h2>
        </motion.div>

        <motion.div
          className="flex flex-col gap-2"
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                className={`rounded-2xl border overflow-hidden transition-colors duration-300 ${
                  isOpen ? "border-green-500/25 bg-green-500/[0.03]" : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none"
                >
                  <span className={`font-semibold text-sm transition-colors duration-200 ${isOpen ? "text-green-400" : "text-white"}`}>
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isOpen ? "bg-green-500 text-white" : "bg-white/[0.06] text-slate-500"
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <div className="h-px bg-white/[0.06] mb-4" />
                        <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="text-slate-600 mb-4 text-sm">Still have questions?</p>
          <a href="#waitlist" className="inline-flex items-center gap-2 text-green-400 font-semibold hover:text-green-300 text-sm transition-colors duration-200">
            Join the waitlist and we&apos;ll be in touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
