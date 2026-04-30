"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";

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

const roles = [
  "Customer",
  "Car Hauler / Carrier",
  "Pickup Truck Owner",
  "Car Flipper",
  "Dealer / Auto Shop",
  "Other",
];

const needs = [
  "I need to move a car",
  "I want to find transport jobs",
  "I buy/sell cars",
  "I represent a business",
  "Other",
];

export default function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log("Waitlist submission:", formData);

    setLoading(false);
    setSubmitted(true);
  };

  const inputBase =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm";

  const labelBase = "block text-sm font-semibold text-slate-700 mb-1.5";

  if (submitted) {
    return (
      <section
        id="waitlist"
        className="py-20 bg-gradient-to-br from-slate-900 to-slate-800"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-10 text-center shadow-2xl">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
              You&apos;re on the list!
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              Thank you. You&apos;re on the waitlist. We&apos;ll notify you when
              the platform is ready in California.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-medium px-5 py-2.5 rounded-full">
              <span>🌴</span> California early access confirmed
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="waitlist"
      className="py-20 bg-gradient-to-br from-slate-900 to-slate-800"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Early Access
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Join the waitlist
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Be the first to know when the platform launches in California.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-blue-500 to-blue-400" />
          <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className={labelBase}>
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder="John Smith"
                value={formData.fullName}
                onChange={handleChange}
                className={inputBase}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelBase}>
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className={inputBase}
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className={labelBase}>
                Phone Number{" "}
                <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className={inputBase}
              />
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role-select" className={labelBase}>
                Your Role <span className="text-red-500">*</span>
              </label>
              <select
                id="role-select"
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                className={`${inputBase} appearance-none cursor-pointer`}
              >
                <option value="" disabled>
                  Select your role...
                </option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>

            {/* State + City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="state" className={labelBase}>
                  State
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  value="California"
                  readOnly
                  className={`${inputBase} bg-slate-50 text-slate-500 cursor-not-allowed`}
                />
              </div>
              <div>
                <label htmlFor="city" className={labelBase}>
                  City{" "}
                  <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Los Angeles"
                  value={formData.city}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>
            </div>

            {/* What do you need */}
            <div>
              <label htmlFor="need" className={labelBase}>
                What do you need?{" "}
                <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <select
                id="need"
                name="need"
                value={formData.need}
                onChange={handleChange}
                className={`${inputBase} appearance-none cursor-pointer`}
              >
                <option value="">Select an option...</option>
                {needs.map((need) => (
                  <option key={need} value={need}>
                    {need}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={loading}
              className="mt-2 py-4 text-base shadow-lg shadow-blue-500/25"
            >
              {loading ? (
                <>
                  <svg
                    className="w-5 h-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Joining...
                </>
              ) : (
                <>
                  Join Waitlist
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
                </>
              )}
            </Button>

            {/* Privacy note */}
            <p className="text-center text-xs text-slate-400 leading-relaxed">
              California residents only. No spam. Your information is used only
              to notify you about the launch.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
