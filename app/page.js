import React from "react";
import Image from "next/image";
import Link from "next/link";
import { gymConfig } from "@/data/gymConfig";
import { programsData } from "@/data/programs";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProgramCard from "@/components/ProgramCard";
import {
  Shield,
  Sparkles,
  Award,
  ChevronRight,
  ArrowRight,
  Flame,
  CheckCircle2,
  Compass,
  Zap,
  Target,
  Quote,
  Clock,
  UserCheck,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#080808]">
      {/* 1. CINEMATIC HERO SECTION */}
      <Hero />

      {/* 2. BRAND PHILOSOPHY & STORY */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-gold" />
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-gold">
                The Pandayas Creed
              </span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary uppercase leading-tight">
              STRENGTH IS NOT ACCIDENTAL.
              <br />
              <span className="text-gold-gradient">IT IS FORGED IN SILENCE.</span>
            </h2>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-light">
              PANDAYAS (PD) was established on a single uncompromising truth: physical greatness demands relentless consistency, focused discipline, and a sanctuary free from the noise of commercial fitness culture.
            </p>

            <p className="text-sm text-text-secondary/80 leading-relaxed font-light">
              Within our walls, every detail—from the acoustic dampening and low-profile amber lighting to the competition-grade calibrated steel—is engineered to elevate mental acuity and muscular recruitment. Here, training is treated as an art of refinement and sovereign strength.
            </p>

            {/* Philosophy Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-zinc-950 border border-zinc-900/90">
                <span className="text-gold font-mono text-xs block mb-1">01 / UNCOMPROMISING STANDARDS</span>
                <p className="text-xs text-zinc-400 font-light">
                  No overcrowding, no shortcuts. Every training station is maintained to Olympic competition specifications.
                </p>
              </div>
              <div className="p-4 bg-zinc-950 border border-zinc-900/90">
                <span className="text-gold font-mono text-xs block mb-1">02 / BIOMECHANICAL RIGOR</span>
                <p className="text-xs text-zinc-400 font-light">
                  Training programs grounded in verified kinetics, progressive overload, and intelligent longevity.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-gold uppercase hover:text-gold-light transition-colors py-2 border-b border-gold/40 hover:border-gold"
              >
                <span>Read Full Philosophy & Ethos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Visual Editorial Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden border border-zinc-800 shadow-2xl">
              <Image
                src="/images/facility-interior.jpg"
                alt="Pandayas Luxury Gym Floor and Equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-zinc-950/80 backdrop-blur-md border border-gold/30">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-gold uppercase block">
                      ARCHITECTURAL SANCTUARY
                    </span>
                    <span className="font-cinzel text-xs text-text-primary uppercase tracking-wider font-semibold">
                      Main Training Floor & Heavy Platforms
                    </span>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">PD // EST. 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED TRAINING PROGRAMS */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-900">
        <SectionHeading
          eyebrow="The Disciplines"
          title="Disciplined Programs. Measurable Evolution."
          subtitle="Engineered for high performers seeking absolute strength, muscular definition, and kinetic mastery. Explore our 6 core pillars."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programsData.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/programs"
            className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-950 border border-gold/50 text-gold text-xs font-semibold tracking-[0.25em] uppercase hover:bg-gold hover:text-black transition-all duration-300 shadow-gold-subtle"
          >
            <span>Explore All Program Disciplines</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. GYM FACILITIES & EQUIPMENT SHOWCASE */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-900">
        <SectionHeading
          eyebrow="World-Class Environment"
          title="Engineered Equipment. Architectural Precision."
          subtitle="Every apparatus at Pandayas is sourced from premier international manufacturers and customized with bespoke matte-black and gold detailing."
        />

        {/* Feature Grid with Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Card 1: Equipment Closeup */}
          <div className="lg:col-span-7 relative group overflow-hidden border border-zinc-800 bg-[#0e0e0e] flex flex-col justify-between">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src="/images/equipment-closeup.jpg"
                alt="Calibrated Olympic Barbell Plates and Barbells"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent" />
            </div>
            <div className="p-8 relative z-10 -mt-6">
              <span className="text-[10px] font-mono tracking-widest text-gold uppercase block mb-1">
                COMPETITION SPECIFICATIONS
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold uppercase text-text-primary mb-3">
                Calibrated Olympic Free Weights & Platforms
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary font-light leading-relaxed mb-4">
                Precision-milled barbells with tuned knurling ratios, certified weight plates accurate to within 10 grams, and vibration-dampening acoustic hardwood lifting platforms.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-zinc-400">
                <span className="px-2.5 py-1 bg-zinc-950 border border-zinc-800">Olympic Barbells</span>
                <span className="px-2.5 py-1 bg-zinc-950 border border-zinc-800">Calibrated Steel</span>
                <span className="px-2.5 py-1 bg-zinc-950 border border-zinc-800">Dumbbells to 70kg</span>
              </div>
            </div>
          </div>

          {/* Card 2: Biomechanical Isolations & Turf */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="relative group overflow-hidden border border-zinc-800 bg-[#0e0e0e] flex flex-col justify-between">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src="/images/recovery-suite.jpg"
                  alt="Hydrotherapy Cold Plunge and Infrared Sauna Suite"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent" />
              </div>
              <div className="p-6 relative z-10 -mt-4">
                <span className="text-[10px] font-mono tracking-widest text-gold uppercase block mb-1">
                  HYDROTHERAPY & CONTRAST SUITE
                </span>
                <h3 className="font-cinzel text-lg font-bold uppercase text-text-primary mb-2">
                  Granite Cold Plunge & Infrared Cedar Sauna
                </h3>
                <p className="text-xs text-text-secondary font-light leading-relaxed">
                  Sub-45°F cold immersion plunge tanks paired with medical-grade dry cedar infrared saunas for vascular conditioning and accelerated nervous system recovery.
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden border border-zinc-800 bg-[#0e0e0e] flex flex-col justify-between">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src="/images/functional-fitness.jpg"
                  alt="High Density Sprint Turf and Functional Agility Platform"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent" />
              </div>
              <div className="p-6 relative z-10 -mt-4">
                <span className="text-[10px] font-mono tracking-widest text-gold uppercase block mb-1">
                  KINETIC TURF & ATHLETIC POWER
                </span>
                <h3 className="font-cinzel text-lg font-bold uppercase text-text-primary mb-2">
                  Indoor Sprint Lane & Functional Platforms
                </h3>
                <p className="text-xs text-text-secondary font-light leading-relaxed">
                  Heavy friction sled tracks, competition kettlebells, and torque-absorbing functional platforms for raw athletic capability and metabolic output.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY TRAIN AT PANDAYAS (THE STANDARD) */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-900">
        <SectionHeading
          eyebrow="The Pandayas Difference"
          title="Why Train At Pandayas"
          subtitle="Designed intentionally for those who require more from their training environment than overcrowded commercial gyms can provide."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 bg-zinc-950 border border-zinc-800/80 hover:border-gold/50 transition-all duration-300">
            <span className="text-gold font-mono text-2xl font-bold block mb-4">01</span>
            <h3 className="font-cinzel text-lg font-bold uppercase text-text-primary mb-2">
              Absolute Exclusivity
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed font-light">
              Total membership volume is strictly capped. You never wait for a squat rack, platform, or dumbbell rack. Focus remains unbroken.
            </p>
          </div>

          <div className="p-8 bg-zinc-950 border border-zinc-800/80 hover:border-gold/50 transition-all duration-300">
            <span className="text-gold font-mono text-2xl font-bold block mb-4">02</span>
            <h3 className="font-cinzel text-lg font-bold uppercase text-text-primary mb-2">
              Architectural Acoustics
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed font-light">
              Low-reverb acoustic architecture and calibrated ambient lighting create a high-focus sensory state that primes the central nervous system.
            </p>
          </div>

          <div className="p-8 bg-zinc-950 border border-zinc-800/80 hover:border-gold/50 transition-all duration-300">
            <span className="text-gold font-mono text-2xl font-bold block mb-4">03</span>
            <h3 className="font-cinzel text-lg font-bold uppercase text-text-primary mb-2">
              Elite Mentorship
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed font-light">
              Work with master coaches dedicated to biomechanical integrity, measurable velocity metrics, and progressive strength development.
            </p>
          </div>

          <div className="p-8 bg-zinc-950 border border-zinc-800/80 hover:border-gold/50 transition-all duration-300">
            <span className="text-gold font-mono text-2xl font-bold block mb-4">04</span>
            <h3 className="font-cinzel text-lg font-bold uppercase text-text-primary mb-2">
              Bespoke Diagnostics
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed font-light">
              Baseline kinetic assessments, body composition profiling, and objective load periodization tailored specifically to your physiology.
            </p>
          </div>
        </div>
      </section>

      {/* 6. TRAINER & COACHING HIGHLIGHTS */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Coaching Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden border border-zinc-800 shadow-2xl">
              <Image
                src="/images/coaching-athlete.jpg"
                alt="Elite Coach Guiding Athlete Through Heavy Barbell Training"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-zinc-950/80 backdrop-blur-md border border-gold/30">
                <span className="text-[10px] font-mono tracking-widest text-gold uppercase block">
                  PRIVATE COACHING FLOOR
                </span>
                <span className="font-cinzel text-xs text-text-primary uppercase tracking-wider font-semibold">
                  Precision Biomechanics & Load Periodization
                </span>
              </div>
            </div>
          </div>

          {/* Coaching Highlights Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-gold" />
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-gold">
                Master Mentorship
              </span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary uppercase leading-tight">
              COACHES WHO LIVE BY
              <br />
              <span className="text-gold-gradient">THE CODE OF DISCIPLINE.</span>
            </h2>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-light">
              At Pandayas, personal training is not an auxiliary service—it is the heartbeat of our discipline. Our master coaches specialize in postural alignment, power development, and injury-resilient strength.
            </p>

            <div className="space-y-4 pt-2">
              {/* Role 1 */}
              <div className="p-4 bg-zinc-950 border border-zinc-800 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-cinzel text-sm font-semibold uppercase text-text-primary">
                      Head of Strength & Biomechanics
                    </h4>
                    <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 bg-zinc-900 text-zinc-400 border border-zinc-800">
                      [Profile Pending]
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 font-light">
                    Specializing in maximum voluntary contraction, bar path velocity, and heavy structural barbell adaptation.
                  </p>
                </div>
              </div>

              {/* Role 2 */}
              <div className="p-4 bg-zinc-950 border border-zinc-800 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-cinzel text-sm font-semibold uppercase text-text-primary">
                      Director of Athletic Conditioning
                    </h4>
                    <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 bg-zinc-900 text-zinc-400 border border-zinc-800">
                      [Profile Pending]
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 font-light">
                    Focusing on anaerobic threshold conditioning, multi-planar power, and metabolic body composition architecture.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-zinc-500 font-light italic">
              * Official coach rosters and certifications will be published upon private facility preview.
            </p>
          </div>
        </div>
      </section>

      {/* 7. MEMBER TESTIMONIALS (CLEARLY IDENTIFIED PLACEHOLDER CONTENT) */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-900">
        <SectionHeading
          eyebrow="Member Voices"
          title="The Standard Experienced"
          subtitle="Reflections from our private registry. (Content presented as clearly identified preview testimonials pending official launch reviews)."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="p-8 bg-zinc-950 border border-zinc-800 flex flex-col justify-between relative hover:border-gold/40 transition-colors">
            <Quote className="w-6 h-6 text-gold/30 mb-4" />
            <p className="text-xs sm:text-sm text-text-secondary font-light leading-relaxed mb-6 italic">
              “The atmosphere at Pandayas demands absolute focus. There is no comparable training environment for high performers who value their time and physical output.”
            </p>
            <div className="pt-4 border-t border-zinc-900">
              <span className="text-[11px] font-mono text-gold uppercase block">
                [Member Review Placeholder]
              </span>
              <span className="text-xs text-zinc-400 block mt-0.5">
                Private Executive Tier Member
              </span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-8 bg-zinc-950 border border-zinc-800 flex flex-col justify-between relative hover:border-gold/40 transition-colors">
            <Quote className="w-6 h-6 text-gold/30 mb-4" />
            <p className="text-xs sm:text-sm text-text-secondary font-light leading-relaxed mb-6 italic">
              “From the calibrated barbell knurling to the private atmosphere, this is the only facility where serious physical progress is treated with absolute reverence.”
            </p>
            <div className="pt-4 border-t border-zinc-900">
              <span className="text-[11px] font-mono text-gold uppercase block">
                [Member Review Placeholder]
              </span>
              <span className="text-xs text-zinc-400 block mt-0.5">
                Competitive Athletics Member
              </span>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="p-8 bg-zinc-950 border border-zinc-800 flex flex-col justify-between relative hover:border-gold/40 transition-colors">
            <Quote className="w-6 h-6 text-gold/30 mb-4" />
            <p className="text-xs sm:text-sm text-text-secondary font-light leading-relaxed mb-6 italic">
              “An architectural sanctuary. Training at Pandayas feels like an elite daily ritual rather than an obligation. The standard of discipline here elevates everything.”
            </p>
            <div className="pt-4 border-t border-zinc-900">
              <span className="text-[11px] font-mono text-gold uppercase block">
                [Member Review Placeholder]
              </span>
              <span className="text-xs text-zinc-400 block mt-0.5">
                Private Coaching Member
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CALL-TO-ACTION SECTION */}
      <section className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-dark-radial pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 border border-gold/40 bg-zinc-950 text-gold text-[10px] font-mono uppercase tracking-[0.3em]">
            Private Registry Access
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary uppercase leading-tight">
            FORGE YOUR LEGACY.
            <br />
            <span className="text-gold-gradient">STEP INSIDE PANDAYAS.</span>
          </h2>

          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            Private facility previews and membership inquiries are scheduled by appointment to maintain uncompromising privacy and standard. Connect with our concierge to initiate your consultation.
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
              EXPLORE OUR SANCTUARIES
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-zinc-800 text-zinc-400 hover:text-text-primary hover:border-zinc-700 tracking-[0.2em] text-xs uppercase bg-zinc-950/40 backdrop-blur-sm transition-all duration-300"
            >
              CONSULTATION
            </Link>
          </div>

          {/* Privacy & Standard Reassurance Banner */}
          <div className="pt-10 flex flex-col items-center">
            <div className="flex flex-wrap justify-center items-center gap-6 text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
              <span className="flex items-center gap-1.5 text-gold/80">
                <Shield className="w-3.5 h-3.5" />
                Capped at 250 Members / Enclave
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-zinc-400">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                Zero Floor Waiting Policy
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-zinc-400">
                <Target className="w-3.5 h-3.5 text-gold" />
                24/7 Keyless Biometrics
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
