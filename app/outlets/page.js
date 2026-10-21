"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { outletsData } from "@/data/outletsData";
import SectionHeading from "@/components/SectionHeading";
import {
  MapPin,
  Clock,
  Shield,
  Sparkles,
  ArrowRight,
  Maximize2,
  CheckCircle2,
  ChevronRight,
  Building,
  Layers,
  Phone,
  Mail,
  X,
  Compass,
} from "lucide-react";

const REGIONS = [
  { label: "All Sanctuaries", value: "all" },
  { label: "Downtown Metro", value: "Downtown Metro" },
  { label: "Coastal Bay", value: "Coastal Bay" },
  { label: "Uptown Estates", value: "Uptown Estates" },
  { label: "Highline Vista (Upcoming)", value: "Highline Vista" },
];

export default function OutletsPage() {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [activeModalOutlet, setActiveModalOutlet] = useState(null);

  const filteredOutlets = outletsData.outlets.filter((outlet) => {
    if (selectedRegion === "all") return true;
    return outlet.region === selectedRegion;
  });

  return (
    <div className="relative w-full overflow-hidden bg-[#080808] pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-dark-radial pointer-events-none" />

      {/* 1. HERO HEADER */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 border border-gold/40 bg-zinc-950/80 shadow-gold-subtle backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-gold">
            GLOBAL ENCLAVES & SANCTUARIES
          </span>
        </div>

        <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary uppercase max-w-5xl mx-auto leading-[1.06]">
          ARCHITECTURAL PRECISION.
          <br />
          <span className="text-gold-gradient">STRATEGIC SANCTUARIES.</span>
        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-text-secondary max-w-3xl mx-auto font-light leading-relaxed">
          Discreetly embedded within prime metropolitan financial hubs and coastal enclaves. Each PANDAYAS facility is individually architected for acoustic isolation, unhindered floor access, and sovereign performance.
        </p>

        {/* Region Filter Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {REGIONS.map((reg) => (
            <button
              key={reg.value}
              type="button"
              onClick={() => setSelectedRegion(reg.value)}
              className={`px-5 py-2.5 text-xs font-mono tracking-widest uppercase transition-all duration-300 border ${
                selectedRegion === reg.value
                  ? "bg-gold text-black font-semibold border-gold shadow-gold-subtle"
                  : "bg-zinc-950/80 border-zinc-800 text-zinc-400 hover:border-gold/50 hover:text-text-primary"
              }`}
            >
              {reg.label}
            </button>
          ))}
        </div>
      </section>

      {/* 2. OUTLETS SHOWCASE */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-28">
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredOutlets.map((outlet, index) => (
              <motion.div
                key={outlet.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-950 border border-zinc-800 hover:border-gold/40 transition-all duration-300 overflow-hidden shadow-card-dark group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image Column */}
                  <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-[460px] overflow-hidden bg-black">
                    <Image
                      src={outlet.image}
                      alt={outlet.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/30 lg:bg-gradient-to-r lg:from-transparent lg:to-zinc-950 pointer-events-none" />

                    {/* Status Badge */}
                    <div className="absolute top-5 left-5 z-10">
                      <span className="px-3.5 py-1.5 bg-black/80 backdrop-blur-md border border-gold/40 text-gold font-mono text-[10px] tracking-widest uppercase flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
                        {outlet.status}
                      </span>
                    </div>

                    {/* Capacity Specs Tag */}
                    <div className="absolute bottom-5 left-5 z-10 flex gap-3 text-[11px] font-mono text-zinc-300">
                      <span className="px-2.5 py-1 bg-black/70 backdrop-blur-md border border-zinc-800">
                        {outlet.squareFootage}
                      </span>
                      <span className="px-2.5 py-1 bg-black/70 backdrop-blur-md border border-zinc-800 text-gold">
                        {outlet.memberCap}
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                    <div>
                      {/* Enclave Sub-badge */}
                      <div className="flex items-center gap-2 text-xs font-mono text-gold tracking-widest uppercase mb-2">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{outlet.region} — {outlet.city}</span>
                      </div>

                      {/* Main Title */}
                      <h2 className="font-cinzel text-2xl sm:text-3xl font-bold uppercase text-text-primary tracking-wide mb-2">
                        {outlet.name}
                      </h2>
                      <span className="text-[11px] font-mono text-zinc-400 block mb-4">
                        {outlet.address}
                      </span>

                      {/* Tagline */}
                      <p className="text-xs text-gold/90 font-light italic mb-4">
                        &ldquo;{outlet.tagline}&rdquo;
                      </p>

                      {/* Description */}
                      <p className="text-xs text-text-secondary leading-relaxed font-light mb-6">
                        {outlet.description}
                      </p>

                      {/* Key Highlights Grid */}
                      <div className="space-y-2.5 mb-8">
                        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase block mb-3">
                          Facility Highlights & Amenities
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-secondary font-light">
                          {outlet.highlights.slice(0, 4).map((h, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="text-gold font-mono text-xs">▸</span>
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Operating Hours Bar */}
                      <div className="p-3.5 bg-zinc-900/60 border border-zinc-850 flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-8">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-gold" />
                          <span>{outlet.operatingHours.facility}</span>
                        </div>
                        <span className="text-gold uppercase tracking-wider">
                          Keyless Biometric
                        </span>
                      </div>
                    </div>

                    {/* Actions Row */}
                    <div className="pt-6 border-t border-zinc-900 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/contact?outlet=${outlet.id}`}
                        className="px-6 py-3.5 bg-gradient-to-r from-[#F1D98A] via-[#D4AF37] to-[#A68625] text-black font-semibold text-xs tracking-[0.2em] uppercase hover:shadow-gold-glow hover:brightness-110 transition-all duration-300"
                      >
                        BOOK PRIVATE TOUR
                      </Link>
                      <button
                        type="button"
                        onClick={() => setActiveModalOutlet(outlet)}
                        className="px-5 py-3.5 border border-zinc-800 text-text-primary hover:border-gold hover:text-gold text-xs font-mono tracking-widest uppercase transition-all bg-zinc-900/40"
                      >
                        VIEW FULL BLUEPRINT
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 3. UNIVERSAL SANCTUARY STANDARDS */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-28">
        <SectionHeading
          eyebrow="The Sovereign Standard"
          title="Universal Architectural Principles"
          subtitle="Regardless of which enclave you step into, every PANDAYAS facility operates under strict foundational principles."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outletsData.sanctuaryStandards.map((std, i) => (
            <div
              key={i}
              className="p-8 bg-zinc-950 border border-zinc-850 hover:border-gold/40 transition-colors duration-300 space-y-4"
            >
              <div className="w-10 h-10 border border-gold/40 bg-gold/5 text-gold flex items-center justify-center font-mono text-sm font-bold">
                0{i + 1}
              </div>
              <h3 className="font-cinzel text-sm font-bold uppercase text-text-primary tracking-wider">
                {std.title}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                {std.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MODAL: DETAILED OUTLET BLUEPRINT */}
      {activeModalOutlet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl p-8 bg-zinc-950 border border-gold/40 shadow-2xl shadow-black max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalOutlet(null)}
              className="absolute top-4 right-4 p-1 text-zinc-400 hover:text-gold transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-gold uppercase tracking-widest">
              <Building className="w-4 h-4" />
              <span>Architectural Blueprint</span>
            </div>

            <h3 className="font-cinzel text-2xl font-bold uppercase text-text-primary mb-1">
              {activeModalOutlet.name}
            </h3>
            <p className="text-xs font-mono text-zinc-400 mb-6">
              {activeModalOutlet.address}
            </p>

            <div className="space-y-6">
              {/* Floor Zones */}
              <div>
                <h4 className="text-xs font-mono text-gold uppercase tracking-widest mb-3 pb-1 border-b border-zinc-900">
                  Zoned Training Suites
                </h4>
                <div className="space-y-2.5">
                  {activeModalOutlet.zones.map((zone, idx) => (
                    <div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-850">
                      <span className="font-mono text-xs text-text-primary font-bold block mb-1">
                        {zone.name}
                      </span>
                      <p className="text-xs text-text-secondary font-light">
                        {zone.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Concierge & Access Specs */}
              <div>
                <h4 className="text-xs font-mono text-gold uppercase tracking-widest mb-3 pb-1 border-b border-zinc-900">
                  Concierge & Operating Parameters
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-zinc-900/50 border border-zinc-850">
                    <span className="text-[10px] uppercase text-zinc-500 font-mono block">Sanctuary Access</span>
                    <span className="text-text-primary font-mono text-xs">{activeModalOutlet.operatingHours.facility}</span>
                  </div>
                  <div className="p-3 bg-zinc-900/50 border border-zinc-850">
                    <span className="text-[10px] uppercase text-zinc-500 font-mono block">Concierge Desk</span>
                    <span className="text-text-primary font-mono text-xs">{activeModalOutlet.operatingHours.concierge}</span>
                  </div>
                </div>
              </div>

              {/* Direct Liaison */}
              <div className="p-4 bg-gold/5 border border-gold/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-gold font-mono block">Director of Performance</span>
                  <span className="text-sm font-cinzel text-text-primary font-bold">{activeModalOutlet.headCoach}</span>
                </div>
                <Link
                  href={`/contact?outlet=${activeModalOutlet.id}`}
                  onClick={() => setActiveModalOutlet(null)}
                  className="px-4 py-2 bg-gold text-black font-semibold text-xs tracking-wider uppercase hover:bg-gold-light transition-colors"
                >
                  SCHEDULE PREVIEW
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. CALL TO ACTION SECTION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-zinc-900">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 border border-gold/40 bg-zinc-950 text-gold text-[10px] font-mono uppercase tracking-[0.3em]">
            UNIVERSAL SYNDICATE RECIPROCITY
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-text-primary uppercase leading-tight">
            FIND YOUR LOCAL ENCLAVE.
            <br />
            <span className="text-gold-gradient">EXPERIENCE THE ARCHITECTURE.</span>
          </h2>

          <p className="text-xs sm:text-sm text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            All private previews require 24 hours advance registration to uphold our members&apos; training privacy and floor availability.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/plans"
              className="px-10 py-4 bg-gradient-to-r from-[#F1D98A] via-[#D4AF37] to-[#A68625] text-black font-semibold tracking-[0.2em] text-xs uppercase hover:shadow-gold-glow hover:brightness-110 transition-all duration-300"
            >
              MEMBERSHIP PLANS & TIERS
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-gold/40 text-text-primary hover:border-gold hover:text-gold tracking-[0.2em] text-xs uppercase bg-zinc-950/70 backdrop-blur-sm transition-all duration-300"
            >
              SCHEDULE PRIVATE CONSULTATION
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
