"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is this a transport company?",
    answer:
      "No. The platform is an information marketplace that helps users connect directly. It does not provide transportation services, act as a broker, or manage any aspect of the transport.",
  },
  {
    question: "Do you assign drivers?",
    answer:
      "No. Customers choose who they want to contact. The platform provides information to help users discover each other — the decision is entirely yours.",
  },
  {
    question: "Do you process payments?",
    answer:
      "No. Payments are arranged directly between users. The platform does not handle, facilitate, or process any transportation payments.",
  },
  {
    question: "Where is the platform available?",
    answer:
      "The platform is launching in California first, serving intrastate vehicle transport connections within the state. It is not designed for interstate transport.",
  },
  {
    question: "Who can join?",
    answer:
      "Customers, drivers, carriers, pickup owners, car flippers, dealers, auto shops, and other auto-related businesses in California are welcome to join the waitlist.",
  },
  {
    question: "When will it launch?",
    answer:
      "We're building and preparing for launch. Join the waitlist and we'll notify you directly when early access opens in California.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Common questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-blue-300 shadow-md shadow-blue-100"
                    : "border-slate-200 hover:border-slate-300"
                } bg-white`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                >
                  <span
                    className={`font-semibold text-base transition-colors duration-200 ${
                      isOpen ? "text-blue-600" : "text-slate-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-blue-500 text-white rotate-45"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-5">
                    <div className="h-px bg-slate-100 mb-4" />
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 mb-4">Still have questions?</p>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
          >
            Join the waitlist and we&apos;ll be in touch
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
