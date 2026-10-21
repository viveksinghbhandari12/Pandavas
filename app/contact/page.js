"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { gymConfig } from "@/data/gymConfig";
import { outletsData } from "@/data/outletsData";
import { plansData } from "@/data/plansData";
import SectionHeading from "@/components/SectionHeading";
import {
  Shield,
  CheckCircle2,
  Calendar,
  Lock,
  Building,
  Clock,
  Sparkles,
  ArrowRight,
  User,
  Phone,
  Mail,
  Target,
  FileCheck,
  X,
} from "lucide-react";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialTier = searchParams.get("tier") || "aureus";
  const initialOutlet = searchParams.get("outlet") || "downtown-flagship";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tier: initialTier,
    outlet: initialOutlet,
    focus: "Strength & Biomechanics",
    preferredTime: "Morning (06:00 – 10:00)",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [docketNumber, setDocketNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomDocket = "PD-" + Math.floor(100000 + Math.random() * 900000);
    setDocketNumber(randomDocket);
    setSubmitted(true);
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#080808] pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background Ambient Radial Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-dark-radial pointer-events-none" />

      {/* 1. HERO HEADER */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 border border-gold/40 bg-zinc-950/80 shadow-gold-subtle backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-gold" />
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-gold">
            CONFIDENTIAL MEMBERSHIP LIAISON
          </span>
        </div>

        <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary uppercase max-w-5xl mx-auto leading-[1.08]">
          CONNECT WITH PANDAYAS.
          <br />
          <span className="text-gold-gradient">INITIATE CONSULTATION.</span>
        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-text-secondary max-w-3xl mx-auto font-light leading-relaxed">
          In alignment with our strict standard of privacy and floor exclusivity, admission is conducted via private consultation, baseline kinetic movement screening, and executive facility preview.
        </p>
      </section>

      {/* 2. MAIN CONSULTATION APPLICATION & ADMISSION HUB */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN: APPLICATION FORM */}
          <div className="lg:col-span-7 bg-zinc-950 border border-zinc-800 p-8 sm:p-10 shadow-card-dark relative">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-900">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-gold uppercase block">
                  Private Registry Form
                </span>
                <h2 className="font-cinzel text-xl sm:text-2xl font-bold uppercase text-text-primary">
                  Facility Preview & Admission Request
                </h2>
              </div>
              <Shield className="w-6 h-6 text-gold" />
            </div>

            {submitted ? (
              <div className="p-8 bg-zinc-900/60 border border-gold/40 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 border border-gold flex items-center justify-center text-gold">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gold tracking-widest uppercase block mb-1">
                    CONFIDENTIAL DOCKET GENERATED
                  </span>
                  <h3 className="font-cinzel text-2xl font-bold text-text-primary uppercase">
                    Consultation Request Lodged
                  </h3>
                  <div className="inline-block mt-3 px-4 py-1.5 bg-black border border-gold/40 font-mono text-gold text-sm tracking-widest">
                    DOCKET: {docketNumber}
                  </div>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed font-light max-w-md mx-auto">
                  Thank you, <strong className="text-text-primary">{formData.name}</strong>. Your inquiry for <strong className="text-gold uppercase">{formData.tier} tier</strong> at our <strong className="text-gold uppercase">{formData.outlet}</strong> has been assigned to our Executive Director. You will receive confidential confirmation within 2 hours.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 border border-zinc-700 text-zinc-300 text-xs font-mono uppercase tracking-widest hover:border-gold"
                  >
                    Submit Another Inquiry
                  </button>
                  <Link
                    href="/plans"
                    className="px-6 py-3 bg-gold text-black font-semibold text-xs tracking-widest uppercase hover:bg-gold-light"
                  >
                    Review Plan Privileges
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Tier Selection */}
                <div>
                  <label className="text-xs font-mono text-zinc-300 uppercase tracking-wider block mb-2">
                    01 / Select Membership Tier of Interest *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {plansData.tiers.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, tier: t.id })}
                        className={`p-3 text-left border transition-all text-xs ${
                          formData.tier === t.id
                            ? "bg-gold/10 border-gold text-gold"
                            : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                        }`}
                      >
                        <span className="font-cinzel font-bold block">{t.name}</span>
                        <span className="text-[10px] font-mono text-zinc-500 block mt-0.5">
                          From ${t.pricing.annualMonthlyEquivalent}/mo
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Outlet Sanctuary Selection */}
                <div>
                  <label className="text-xs font-mono text-zinc-300 uppercase tracking-wider block mb-2">
                    02 / Select Preferred Sanctuary Enclave *
                  </label>
                  <select
                    name="outlet"
                    value={formData.outlet}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-800 text-text-primary px-4 py-3 text-xs focus:outline-none focus:border-gold font-mono"
                  >
                    {outletsData.outlets.map((o) => (
                      <option key={o.id} value={o.id} className="bg-zinc-950 text-text-primary">
                        {o.name} ({o.region}) — {o.status.split("•")[0]}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-zinc-300 uppercase tracking-wider block mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Harrison Sterling"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-800 text-text-primary px-4 py-3 text-xs focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-zinc-300 uppercase tracking-wider block mb-1">
                      Confidential Mobile *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-800 text-text-primary px-4 py-3 text-xs focus:outline-none focus:border-gold font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-300 uppercase tracking-wider block mb-1">
                    Direct Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="sterling@enterprise.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-800 text-text-primary px-4 py-3 text-xs focus:outline-none focus:border-gold font-mono"
                  />
                </div>

                {/* Primary Training Focus & Timing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-zinc-300 uppercase tracking-wider block mb-1">
                      Primary Conditioning Focus
                    </label>
                    <select
                      name="focus"
                      value={formData.focus}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-800 text-text-primary px-4 py-3 text-xs focus:outline-none focus:border-gold font-mono"
                    >
                      <option>Strength & Olympic Lifting</option>
                      <option>Biomechanical Velocity & Power</option>
                      <option>Hypertrophy & Physique Architecture</option>
                      <option>Longevity & Contrast Restoration</option>
                      <option>Executive Master Mentorship (1-on-1)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-mono text-zinc-300 uppercase tracking-wider block mb-1">
                      Preferred Preview Window
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-800 text-text-primary px-4 py-3 text-xs focus:outline-none focus:border-gold font-mono"
                    >
                      <option>Morning (06:00 – 10:00)</option>
                      <option>Mid-Day (11:00 – 14:00)</option>
                      <option>Evening (17:00 – 20:00)</option>
                      <option>Weekend Private Appointment</option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="text-xs font-mono text-zinc-300 uppercase tracking-wider block mb-1">
                    Special Training Objectives or Prior Athletic Background
                  </label>
                  <textarea
                    rows={3}
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Mention any existing training regime, powerlifting / athletic background, or specific privacy requests."
                    className="w-full bg-zinc-900 border border-zinc-800 text-text-primary px-4 py-3 text-xs focus:outline-none focus:border-gold font-light"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#F1D98A] via-[#D4AF37] to-[#A68625] text-black font-semibold tracking-[0.2em] text-xs uppercase hover:shadow-gold-glow hover:brightness-110 transition-all duration-300 shadow-gold-subtle"
                >
                  REQUEST CONFIDENTIAL FACILITY PREVIEW
                </button>

                <p className="text-[10px] text-center text-zinc-500 font-mono">
                  * All communications are encrypted and kept strictly confidential. Non-disclosure agreements provided upon request.
                </p>
              </form>
            )}
          </div>

          {/* RIGHT COLUMN: PROTOCOL & CONCIERGE DESK */}
          <div className="lg:col-span-5 space-y-8">
            {/* The 4 Admission Protocol Steps */}
            <div className="p-8 bg-zinc-950 border border-zinc-800">
              <span className="text-[10px] font-mono tracking-widest text-gold uppercase block mb-2">
                ADMISSION BLUEPRINT
              </span>
              <h3 className="font-cinzel text-xl font-bold uppercase text-text-primary mb-6">
                How Consultation Operates
              </h3>

              <div className="space-y-6 text-xs text-text-secondary">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-gold font-bold text-sm bg-gold/10 px-2 py-0.5 border border-gold/30">
                    01
                  </span>
                  <div>
                    <strong className="text-text-primary block font-mono uppercase mb-1">
                      Direct Application Lodgement
                    </strong>
                    Submit your preview request with preferred tier and sanctuary enclave.
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-mono text-gold font-bold text-sm bg-gold/10 px-2 py-0.5 border border-gold/30">
                    02
                  </span>
                  <div>
                    <strong className="text-text-primary block font-mono uppercase mb-1">
                      10-Minute Executive Call
                    </strong>
                    Our performance director reviews training history, schedule, and capacity allocation.
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-mono text-gold font-bold text-sm bg-gold/10 px-2 py-0.5 border border-gold/30">
                    03
                  </span>
                  <div>
                    <strong className="text-text-primary block font-mono uppercase mb-1">
                      Private Facility Walk-Through
                    </strong>
                    A 45-minute 1-on-1 walkthrough and baseline kinetic movement screening.
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-mono text-gold font-bold text-sm bg-gold/10 px-2 py-0.5 border border-gold/30">
                    04
                  </span>
                  <div>
                    <strong className="text-text-primary block font-mono uppercase mb-1">
                      Biometric Keyless Onboarding
                    </strong>
                    Encrypted iris and palm registration, private locker assignment, and full access activation.
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Executive Liaisons */}
            <div className="p-8 bg-zinc-950 border border-zinc-800 space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-gold uppercase block">
                EXECUTIVE DESK DIRECTORY
              </span>
              <h3 className="font-cinzel text-lg font-bold uppercase text-text-primary mb-2">
                Sanctuary Concierge Liaisons
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-zinc-900/60 border border-zinc-850">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Private Admissions Desk</span>
                  <span className="text-text-primary font-mono text-xs">admissions@pandayas.com</span>
                </div>
                <div className="p-3 bg-zinc-900/60 border border-zinc-850">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Executive Syndicate Liaison</span>
                  <span className="text-text-primary font-mono text-xs">sovereign@pandayas.com</span>
                </div>
                <div className="p-3 bg-zinc-900/60 border border-zinc-850">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Operating Desks</span>
                  <span className="text-text-primary font-mono text-xs">Mon – Fri: 06:00 – 21:00 | Sat – Sun: 07:00 – 19:00</span>
                </div>
              </div>
            </div>

            {/* Fast Quick Links to Outlets & Plans */}
            <div className="p-6 bg-gradient-to-r from-zinc-950 via-[#101010] to-zinc-950 border border-gold/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-gold uppercase block">Looking for Enclaves?</span>
                <span className="font-cinzel text-sm font-bold text-text-primary">Explore All 4 Sanctuaries</span>
              </div>
              <Link
                href="/outlets"
                className="px-4 py-2 border border-gold text-gold text-xs font-mono uppercase tracking-wider hover:bg-gold hover:text-black transition-colors"
              >
                VIEW OUTLETS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SANCTUARY LOCATIONS PREVIEW BAR */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900 pt-20">
        <SectionHeading
          eyebrow="Prime Enclaves"
          title="Our Physical Sanctuaries"
          subtitle="Explore our active and upcoming locations across premier metropolitan districts."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outletsData.outlets.slice(0, 3).map((outlet) => (
            <div
              key={outlet.id}
              className="p-6 bg-zinc-950 border border-zinc-800 hover:border-gold/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-gold uppercase tracking-widest block mb-1">
                  {outlet.region}
                </span>
                <h4 className="font-cinzel text-lg font-bold text-text-primary uppercase mb-2">
                  {outlet.name}
                </h4>
                <p className="text-xs text-zinc-400 font-light mb-4">
                  {outlet.address}
                </p>
                <p className="text-xs text-text-secondary font-light leading-relaxed mb-6">
                  {outlet.tagline}
                </p>
              </div>

              <Link
                href="/outlets"
                className="inline-flex items-center gap-2 text-xs font-mono text-gold uppercase tracking-wider hover:text-gold-light"
              >
                <span>View Full Facility Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#080808] flex items-center justify-center text-gold font-mono text-xs">LOADING PANDAYAS CONCIERGE...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
