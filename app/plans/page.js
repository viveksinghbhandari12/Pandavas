"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { plansData } from "@/data/plansData";
import SectionHeading from "@/components/SectionHeading";
import {
  Check,
  Shield,
  Sparkles,
  Award,
  ArrowRight,
  ChevronDown,
  Building,
  Lock,
  Compass,
  Star,
  Zap,
} from "lucide-react";

export default function PlansPage() {
  const [billingCycle, setBillingCycle] = useState("annual"); // "annual" | "monthly"
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#080808] pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-dark-radial pointer-events-none" />

      {/* 1. HERO HEADER */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 border border-gold/40 bg-zinc-950/80 shadow-gold-subtle backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-gold">
            MEMBERSHIP TIERS & PRIVILEGES
          </span>
        </div>

        <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary uppercase max-w-5xl mx-auto leading-[1.06]">
          TIERS OF DISCIPLINE.
          <br />
          <span className="text-gold-gradient">LEVELS OF EXCELLENCE.</span>
        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-text-secondary max-w-3xl mx-auto font-light leading-relaxed">
          Membership at PANDAYAS is strictly capped to guarantee zero floor waiting times, unhindered Olympic platform access, and absolute privacy. Choose your disciplinary tier.
        </p>

        {/* Interactive Billing Toggle */}
        <div className="mt-10 inline-flex items-center p-1.5 bg-zinc-950 border border-zinc-800 rounded-none shadow-card-dark">
          <button
            type="button"
            onClick={() => setBillingCycle("annual")}
            className={`px-6 py-2.5 text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
              billingCycle === "annual"
                ? "bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-black font-semibold shadow-gold-subtle"
                : "text-zinc-400 hover:text-text-primary"
            }`}
          >
            Annual Allocation <span className="text-[10px] ml-1 text-black font-bold uppercase py-0.5 px-1 bg-white/40">Save ~20%</span>
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-2.5 text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
              billingCycle === "monthly"
                ? "bg-zinc-800 text-gold font-semibold"
                : "text-zinc-400 hover:text-text-primary"
            }`}
          >
            Quarterly / Monthly
          </button>
        </div>
      </section>

      {/* 2. THE THREE MEMBERSHIP TIERS */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plansData.tiers.map((tier) => {
            const isAureus = tier.popular;
            const price = billingCycle === "annual" 
              ? tier.pricing.annualMonthlyEquivalent 
              : tier.pricing.monthly;

            return (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between p-8 sm:p-10 transition-all duration-300 group ${
                  isAureus
                    ? "bg-zinc-950 border-2 border-gold shadow-2xl shadow-gold/10 scale-100 lg:scale-[1.03] z-10"
                    : "bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700"
                }`}
              >
                {/* Popular Badge */}
                {isAureus && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-black font-mono text-[10px] font-bold tracking-[0.25em] uppercase shadow-gold-subtle">
                    MOST PREFERRED TIER
                  </div>
                )}

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono tracking-widest text-gold uppercase">
                      {tier.badge}
                    </span>
                    {isAureus && <Sparkles className="w-4 h-4 text-gold" />}
                  </div>

                  {/* Tier Title */}
                  <h2 className="font-cinzel text-2xl sm:text-3xl font-bold uppercase text-text-primary mb-3">
                    {tier.name}
                  </h2>

                  <p className="text-xs text-text-secondary leading-relaxed font-light mb-6 min-h-[48px]">
                    {tier.tagline}
                  </p>

                  {/* Pricing Display */}
                  <div className="py-6 border-y border-zinc-900 mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="font-cinzel text-4xl sm:text-5xl font-bold text-text-primary tracking-tight">
                        ${price}
                      </span>
                      <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                        / month
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 mt-2 block">
                      {billingCycle === "annual" ? tier.pricing.billingNote : "Billed quarterly with 30-day notice"}
                    </span>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3.5 mb-8">
                    <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase block mb-4">
                      Included Privileges
                    </span>
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="p-0.5 rounded-full bg-gold/10 text-gold mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs text-text-secondary leading-relaxed font-light">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Application Action */}
                <div className="pt-6 border-t border-zinc-900">
                  <Link
                    href={`/contact?tier=${tier.id}`}
                    className={`w-full py-4 text-center font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 block ${
                      isAureus
                        ? "bg-gradient-to-r from-[#F1D98A] via-[#D4AF37] to-[#A68625] text-black hover:shadow-gold-glow hover:brightness-110"
                        : "border border-gold/40 text-text-primary hover:border-gold hover:text-gold bg-zinc-900/60"
                    }`}
                  >
                    {tier.ctaText}
                  </Link>
                  <p className="text-[10px] text-center text-zinc-500 font-mono mt-3">
                    Subject to enclave member capacity review
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. DETAILED PRIVILEGES COMPARISON TABLE */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-28">
        <SectionHeading
          eyebrow="Side-by-Side Analysis"
          title="Sanctuary Privilege Matrix"
          subtitle="A comprehensive comparison of floor access, biomechanical science, and concierge amenities."
        />

        <div className="overflow-x-auto border border-zinc-800 bg-zinc-950 shadow-card-dark">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-900/60 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                <th className="py-4 px-6 w-2/5">Tier Privilege / Feature</th>
                <th className="py-4 px-6 text-center w-1/5">The Obsidian</th>
                <th className="py-4 px-6 text-center w-1/5 text-gold font-bold">The Aureus</th>
                <th className="py-4 px-6 text-center w-1/5">The Sovereign</th>
              </tr>
            </thead>
            <tbody>
              {plansData.comparisonCategories.map((cat, catIdx) => (
                <React.Fragment key={catIdx}>
                  <tr className="bg-zinc-900/90 border-t border-b border-zinc-800/80">
                    <td
                      colSpan={4}
                      className="py-3 px-6 font-mono text-[11px] font-bold text-gold uppercase tracking-[0.2em]"
                    >
                      {cat.category}
                    </td>
                  </tr>
                  {cat.items.map((item, itemIdx) => (
                    <tr
                      key={itemIdx}
                      className="border-b border-zinc-900 hover:bg-zinc-900/30 transition-colors"
                    >
                      <td className="py-4 px-6 text-text-primary font-medium">
                        {item.feature}
                      </td>
                      <td className="py-4 px-6 text-center font-mono text-zinc-400">
                        {typeof item.obsidian === "boolean" ? (
                          item.obsidian ? (
                            <Check className="w-4 h-4 mx-auto text-gold" />
                          ) : (
                            <span className="text-zinc-600">—</span>
                          )
                        ) : (
                          item.obsidian
                        )}
                      </td>
                      <td className="py-4 px-6 text-center font-mono text-gold font-semibold bg-gold/[0.02]">
                        {typeof item.aureus === "boolean" ? (
                          item.aureus ? (
                            <Check className="w-4 h-4 mx-auto text-gold" />
                          ) : (
                            <span className="text-zinc-600">—</span>
                          )
                        ) : (
                          item.aureus
                        )}
                      </td>
                      <td className="py-4 px-6 text-center font-mono text-zinc-300">
                        {typeof item.sovereign === "boolean" ? (
                          item.sovereign ? (
                            <Check className="w-4 h-4 mx-auto text-gold" />
                          ) : (
                            <span className="text-zinc-600">—</span>
                          )
                        ) : (
                          item.sovereign
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. THE PANDAYAS EXCLUSIVITY CHARTER */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-28">
        <div className="p-8 sm:p-12 bg-gradient-to-b from-zinc-950 to-[#0a0a0a] border border-zinc-800 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 border border-gold/40 flex items-center justify-center text-gold bg-gold/5">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-sm font-bold uppercase text-text-primary tracking-wider">
                Strict Member Caps
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                Every outlet maintains a ceiling of 250 active members. We prioritize space and tranquility over membership volume.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 border border-gold/40 flex items-center justify-center text-gold bg-gold/5">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-sm font-bold uppercase text-text-primary tracking-wider">
                Zero Wait Guarantee
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                Never wait for a power rack or lifting platform. Our equipment-to-member ratio guarantees instantaneous training rhythm.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 border border-gold/40 flex items-center justify-center text-gold bg-gold/5">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-sm font-bold uppercase text-text-primary tracking-wider">
                Biometric Privacy
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                Encrypted touchless iris and palm scanning at every perimeter gate ensures only registered patrons cross the threshold.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 border border-gold/40 flex items-center justify-center text-gold bg-gold/5">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-sm font-bold uppercase text-text-primary tracking-wider">
                Global Reciprocity
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                Aureus and Sovereign members enjoy synchronized biometric access when traveling between our global sanctuaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-28">
        <SectionHeading
          eyebrow="Clarifications & Protocols"
          title="Frequently Inquired Details"
          subtitle="Transparent answers regarding membership onboarding, pauses, and sanctuary standards."
        />

        <div className="space-y-4">
          {plansData.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-zinc-800 bg-zinc-950/80 transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-cinzel text-sm sm:text-base font-bold text-text-primary uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-xs text-text-secondary font-light leading-relaxed border-t border-zinc-900 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. CALL TO ACTION & SANCTUARIES */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-zinc-900">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 border border-gold/40 bg-zinc-950 text-gold text-[10px] font-mono uppercase tracking-[0.3em]">
            EXECUTIVE ALLOCATION DESK
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-text-primary uppercase leading-tight">
            STEP INSIDE THE SANCTUARY.
            <br />
            <span className="text-gold-gradient">FORGE YOUR PEAK CONDITION.</span>
          </h2>

          <p className="text-xs sm:text-sm text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            Begin with a confidential facility tour and movement assessment. Our directors are prepared to structure your admission.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 bg-gradient-to-r from-[#F1D98A] via-[#D4AF37] to-[#A68625] text-black font-semibold tracking-[0.2em] text-xs uppercase hover:shadow-gold-glow hover:brightness-110 transition-all duration-300"
            >
              BOOK PRIVATE FACILITY TOUR
            </Link>
            <Link
              href="/outlets"
              className="px-8 py-4 border border-gold/40 text-text-primary hover:border-gold hover:text-gold tracking-[0.2em] text-xs uppercase bg-zinc-950/70 backdrop-blur-sm transition-all duration-300"
            >
              VIEW ALL SANCTUARIES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
