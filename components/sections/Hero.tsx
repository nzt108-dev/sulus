"use client";

import Button from "@/components/ui/Button";
import { CheckIcon, ArrowRightIcon, TruckIcon } from "@/components/ui/Icons";

export default function Hero() {
  const scrollToWaitlist = (role?: string) => {
    const el = document.getElementById("waitlist");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      if (role) {
        setTimeout(() => {
          const select = document.getElementById(
            "role-select"
          ) as HTMLSelectElement;
          if (select) {
            select.value = role;
            select.dispatchEvent(new Event("change", { bubbles: true }));
          }
        }, 600);
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/30 text-blue-300 text-sm font-medium px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Launching in California — Join the Waitlist
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center leading-tight tracking-tight mb-6">
          The Direct Way to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
            Move Cars
          </span>{" "}
          in California
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
          Join the waitlist for a new auto transport marketplace where customers,
          drivers, car flippers, and auto businesses{" "}
          <span className="text-white font-semibold">connect directly.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button
            size="lg"
            variant="primary"
            onClick={() => scrollToWaitlist()}
            className="text-lg px-10 py-4 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
          >
            Join the Waitlist
            <svg
              className="w-5 h-5"
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
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToWaitlist("Car Hauler / Carrier")}
            className="border-slate-400 text-slate-200 hover:bg-slate-700 hover:border-slate-300 hover:text-white"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 0m7 0H9m4 0h4m0 0l1-3 1-3h-2.5"
              />
            </svg>
            I&apos;m a Driver / Carrier
          </Button>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <CheckIcon className="w-4 h-4 text-blue-400 flex-shrink-0" /> No broker assignment
          </span>
          <span className="w-px h-4 bg-slate-600 hidden sm:block" />
          <span className="flex items-center gap-2">
            <CheckIcon className="w-4 h-4 text-blue-400 flex-shrink-0" /> No in-app transport payments
          </span>
          <span className="w-px h-4 bg-slate-600 hidden sm:block" />
          <span className="flex items-center gap-2">
            <CheckIcon className="w-4 h-4 text-blue-400 flex-shrink-0" /> Direct connections only
          </span>
        </div>

        {/* Stats row */}
        <div className="mt-16 pt-10 border-t border-slate-700/50 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "California", label: "Launch state" },
            { value: "4 roles", label: "Audience types" },
            { value: "Direct", label: "Connection model" },
            { value: "Free", label: "Waitlist access" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
