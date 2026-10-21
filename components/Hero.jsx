"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { gymConfig } from "@/data/gymConfig";
import { Shield, Sparkles, MapPin, Award } from "lucide-react";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Explicitly enforce muted and trigger playback if reduced motion is not requested
    if (videoRef.current && !prefersReducedMotion) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback if browser policy requires user interaction
        });
      }
    }
  }, []);

  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden pt-36 pb-20 md:pt-48 md:pb-28 border-b border-zinc-900/60 bg-[#080808]">
      {/* Full-width Background Video Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-fallback.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/videos/Athlete_lifting_weights_in_gym_20261021114312.mp4"
            type="video/mp4"
          />
          <source
            src="/videos/hero-athlete.mp4"
            type="video/mp4"
          />
        </video>

        {/* Refined, transparent overlay ensuring high video visibility with pristine text contrast */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/60" />
      </div>

      {/* Hero Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Brand Monogram Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-8 border border-gold/40 bg-zinc-950/80 shadow-gold-subtle backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-gold">
              {gymConfig.brand.name} ({gymConfig.brand.abbreviation}) — LUXURY FITNESS CLUB
            </span>
          </motion.div>

          {/* Main Cinematic Headlines */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="font-cinzel text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-text-primary uppercase max-w-5xl leading-[1.06] drop-shadow-2xl"
          >
            FORGED BY <span className="text-gold-gradient">DISCIPLINE.</span>
            <br />
            BUILT FOR <span className="text-gold-gradient">GREATNESS.</span>
          </motion.h1>

          {/* Supporting Headline & Short Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="mt-6 text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl font-light leading-relaxed drop-shadow"
          >
            An uncompromising sanctuary where architectural refinement meets high-performance conditioning. Built for those who understand that elite strength requires relentless consistency and an exceptional environment.
          </motion.p>

          {/* Primary & Secondary Call To Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/plans"
              className="px-8 py-4 bg-gradient-to-r from-[#F1D98A] via-[#D4AF37] to-[#A68625] text-black font-semibold tracking-[0.2em] text-xs uppercase hover:shadow-gold-glow hover:brightness-110 transition-all duration-300"
            >
              EXPLORE MEMBERSHIP PLANS
            </Link>
            <Link
              href="/outlets"
              className="px-8 py-4 border border-gold/40 text-text-primary hover:border-gold hover:text-gold tracking-[0.2em] text-xs uppercase bg-zinc-950/70 backdrop-blur-md transition-all duration-300"
            >
              FIND AN OUTLET
            </Link>
          </motion.div>

          {/* Luxury Executive Privileges Bar */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
            className="mt-14 pt-8 border-t border-zinc-800/80 w-full max-w-4xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-zinc-950/40 border border-zinc-900">
                <span className="font-mono text-gold text-lg md:text-xl font-bold block">250</span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono">Strict Member Cap</span>
              </div>
              <div className="p-3 bg-zinc-950/40 border border-zinc-900">
                <span className="font-mono text-gold text-lg md:text-xl font-bold block">24 / 7</span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono">Biometric Keyless</span>
              </div>
              <div className="p-3 bg-zinc-950/40 border border-zinc-900">
                <span className="font-mono text-gold text-lg md:text-xl font-bold block">4</span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono">Prime Sanctuaries</span>
              </div>
              <div className="p-3 bg-zinc-950/40 border border-zinc-900">
                <span className="font-mono text-gold text-lg md:text-xl font-bold block">0 min</span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono">Zero Wait Guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
