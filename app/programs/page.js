"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { programsData } from "@/data/programs";
import ProgramCard from "@/components/ProgramCard";
import SectionHeading from "@/components/SectionHeading";
import { Shield, Sparkles, Target, Zap, Clock, ArrowRight, Layers } from "lucide-react";

const CATEGORIES = [
  { label: "All Disciplines", value: "all" },
  { label: "Performance", value: "Performance" },
  { label: "Aesthetics", value: "Aesthetics" },
  { label: "Private Coaching", value: "Private" },
  { label: "Athletics", value: "Athletics" },
  { label: "Wellness", value: "Wellness" },
  { label: "Longevity", value: "Longevity" },
];

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPrograms =
    activeCategory === "all"
      ? programsData
      : programsData.filter((p) => p.category === activeCategory);

  return (
    <div className="relative w-full overflow-hidden bg-[#080808] pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background Ambient Radial Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-dark-radial pointer-events-none" />

      {/* 1. HERO HEADER */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 border border-gold/40 bg-zinc-950/80 shadow-gold-subtle backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-gold" />
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-gold">
            THE 6 DISCIPLINARY PILLARS
          </span>
        </div>

        <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary uppercase max-w-5xl mx-auto leading-[1.08]">
          PROGRAMS FORGED FOR
          <br />
          <span className="text-gold-gradient">UNCOMPROMISING STRENGTH.</span>
        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-text-secondary max-w-3xl mx-auto font-light leading-relaxed">
          Every program at PANDAYAS (PD) is constructed upon biomechanical integrity, progressive overload, and nervous system adaptation. Select a discipline to explore its kinetic parameters.
        </p>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-2 bg-zinc-950/80 border border-zinc-800/80 max-w-4xl mx-auto backdrop-blur-md">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-300 focus:outline-none ${
                  isActive
                    ? "bg-gold text-black font-semibold shadow-gold-subtle"
                    : "text-zinc-400 hover:text-gold hover:bg-zinc-900"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. DISCIPLINE CARDS GRID */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program) => (
              <motion.div
                key={program.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProgramCard program={program} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. METHODOLOGY & PERIODIZATION ARCHITECTURE */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
        <SectionHeading
          eyebrow="The Training Blueprint"
          title="Periodization & Kinetics"
          subtitle="How every member's training protocol is designed, calibrated, and evolved over time."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-zinc-950 border border-zinc-800/80 hover:border-gold/40 transition-colors">
            <span className="font-mono text-gold text-2xl font-bold block mb-4">PHASE 01</span>
            <h3 className="font-cinzel text-lg font-bold uppercase text-text-primary mb-3">
              Diagnostic Kinetic Assessment
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed font-light mb-4">
              Baseline joint mobility screening, structural imbalances identification, and power output benchmarks to build an accurate physiological foundation.
            </p>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block pt-4 border-t border-zinc-900">
              STEP 01 // CALIBRATION
            </span>
          </div>

          <div className="p-8 bg-zinc-950 border border-zinc-800/80 hover:border-gold/40 transition-colors">
            <span className="font-mono text-gold text-2xl font-bold block mb-4">PHASE 02</span>
            <h3 className="font-cinzel text-lg font-bold uppercase text-text-primary mb-3">
              Progressive Load Periodization
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed font-light mb-4">
              Mesocycles tailored with specific intensity waves, barbell velocity tracking, and mechanical tension protocols engineered for hypertrophy or raw strength.
            </p>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block pt-4 border-t border-zinc-900">
              STEP 02 // EXECUTION
            </span>
          </div>

          <div className="p-8 bg-zinc-950 border border-zinc-800/80 hover:border-gold/40 transition-colors">
            <span className="font-mono text-gold text-2xl font-bold block mb-4">PHASE 03</span>
            <h3 className="font-cinzel text-lg font-bold uppercase text-text-primary mb-3">
              Neuromuscular Deload & Recovery
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed font-light mb-4">
              Scheduled systemic fatigue mitigation combining soft-tissue therapy, hydrotherapy cold plunge sessions, and deload microcycles to protect long-term longevity.
            </p>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block pt-4 border-t border-zinc-900">
              STEP 03 // ADAPTATION
            </span>
          </div>
        </div>

        {/* Notice on Private Customization */}
        <div className="mt-12 p-6 bg-zinc-950/70 border border-zinc-800 text-center max-w-3xl mx-auto">
          <p className="text-xs text-zinc-400 font-light leading-relaxed">
            * In alignment with the Pandayas standard of exclusivity, exact scheduling parameters, frequencies, and private consultation terms are tailored individually upon confidential member consultation.
          </p>
        </div>
      </section>

      {/* 5. CALL TO ACTION SECTION */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-zinc-900">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 border border-gold/40 bg-zinc-950 text-gold text-[10px] font-mono uppercase tracking-[0.3em]">
            TAILORED MEMBERSHIP INQUIRY
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-text-primary uppercase leading-tight">
            SELECT YOUR DISCIPLINE.
            <br />
            <span className="text-gold-gradient">FORGE YOUR STRENGTH.</span>
          </h2>

          <p className="text-xs sm:text-sm text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            Connect with our training directors to discuss your athletic background and determine the appropriate disciplinary pathway.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/plans"
              className="px-10 py-4 bg-gradient-to-r from-[#F1D98A] via-[#D4AF37] to-[#A68625] text-black font-semibold tracking-[0.2em] text-xs uppercase hover:shadow-gold-glow hover:brightness-110 transition-all duration-300"
            >
              MEMBERSHIP PLANS & TIERS
            </Link>
            <Link
              href="/outlets"
              className="px-8 py-4 border border-gold/40 text-text-primary hover:border-gold hover:text-gold tracking-[0.2em] text-xs uppercase bg-zinc-950/70 backdrop-blur-sm transition-all duration-300"
            >
              LOCATE AN ENCLAVE
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-zinc-800 text-zinc-400 hover:text-text-primary hover:border-zinc-700 tracking-[0.2em] text-xs uppercase bg-zinc-950/40 backdrop-blur-sm transition-all duration-300"
            >
              SCHEDULE CONSULTATION
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
