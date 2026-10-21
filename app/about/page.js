import React from "react";
import Image from "next/image";
import Link from "next/link";
import { gymConfig } from "@/data/gymConfig";
import SectionHeading from "@/components/SectionHeading";
import {
  Shield,
  Award,
  Sparkles,
  ArrowRight,
  Compass,
  CheckCircle2,
  Flame,
  Zap,
  Target,
  Clock,
  Layers,
  Building2,
} from "lucide-react";

export const metadata = {
  title: "About — PANDAYAS (PD) Luxury Fitness Club",
  description:
    "Discover the philosophy, architectural environment, and uncompromising commitment to discipline behind PANDAYAS (PD).",
};

export default function AboutPage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#080808] pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background Ambient Radial Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-dark-radial pointer-events-none" />

      {/* 1. HERO HEADER */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 md:mb-28 text-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 border border-gold/40 bg-zinc-950/80 shadow-gold-subtle backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-gold" />
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-gold">
            OUR CREED & HERITAGE
          </span>
        </div>

        <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary uppercase max-w-5xl mx-auto leading-[1.08]">
          FORGED IN SILENCE.
          <br />
          <span className="text-gold-gradient">BUILT FOR GREATNESS.</span>
        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-text-secondary max-w-3xl mx-auto font-light leading-relaxed">
          PANDAYAS (PD) is an uncompromising sanctuary where architectural refinement meets high-performance physical conditioning. Built for those who understand that elite strength requires relentless consistency, profound focus, and an exceptional environment.
        </p>

        <div className="mt-8 flex justify-center items-center gap-6 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <span>{gymConfig.brand.name} ARCHIVE</span>
          <span>•</span>
          <span>ESTABLISHED 2025</span>
          <span>•</span>
          <span>PRIVATE REGISTRY</span>
        </div>
      </section>

      {/* 2. THE BRAND STORY & PHILOSOPHY */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-gold" />
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-gold">
                The Origin Of Discipline
              </span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-text-primary uppercase leading-tight">
              A REJECTION OF THE
              <br />
              <span className="text-gold-gradient">COMMONPLACE.</span>
            </h2>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
              Modern fitness culture has succumbed to vanity, crowded commercial spaces, and superficial trends. Pandayas was conceived as the antidote: a sovereign sanctuary where athletic discipline is elevated to a focused craft.
            </p>

            <p className="text-xs sm:text-sm text-text-secondary/80 leading-relaxed font-light">
              We believe that physical transformation is not accidental—it is the direct neurological and muscular consequence of continuous, disciplined execution. Here, there are no social distractions or promotional spectacles. There is only the barbell, calibrated resistance curves, and the unwavering pursuit of human capability.
            </p>

            <div className="p-6 bg-zinc-950/80 border-l-2 border-gold border border-zinc-900">
              <p className="font-cinzel text-sm sm:text-base text-text-primary uppercase tracking-wide italic">
                “Discipline is the bridge between human intention and absolute physical sovereignty.”
              </p>
              <span className="text-[10px] font-mono tracking-widest text-gold uppercase block mt-2">
                — PANDAYAS (PD) DIRECTIVE
              </span>
            </div>
          </div>

          {/* Visual Asset */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950">
              <Image
                src="/images/facility-interior.jpg"
                alt="Pandayas Luxury Training Floor Architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-zinc-950/85 backdrop-blur-md border border-gold/30">
                <span className="text-[10px] font-mono tracking-widest text-gold uppercase block">
                  ARCHITECTURAL SPACE
                </span>
                <span className="font-cinzel text-xs text-text-primary uppercase font-semibold">
                  Acoustic Dampened Heavy Training Floor
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION AND CORE VALUES */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
        <SectionHeading
          eyebrow="Our Foundation"
          title="The Four Sovereign Values"
          subtitle="Every policy, equipment selection, and coaching standard is governed by four non-negotiable principles."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Value 1 */}
          <div className="p-8 bg-zinc-950 border border-zinc-800/80 hover:border-gold/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <span className="font-mono text-gold text-2xl font-bold block mb-4">01</span>
              <h3 className="font-cinzel text-lg font-bold uppercase text-text-primary mb-3">
                Absolute Discipline
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                Consistency is non-negotiable. We cater exclusively to those who hold themselves to the highest standards of effort, punctuality, and focus.
              </p>
            </div>
            <div className="pt-6 border-t border-zinc-900 mt-6">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                PILLAR // EXECUTION
              </span>
            </div>
          </div>

          {/* Value 2 */}
          <div className="p-8 bg-zinc-950 border border-zinc-800/80 hover:border-gold/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <span className="font-mono text-gold text-2xl font-bold block mb-4">02</span>
              <h3 className="font-cinzel text-lg font-bold uppercase text-text-primary mb-3">
                Biomechanical Rigor
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                Training without science is guesswork. All movement pathways, load curves, and periodized cycles are tailored to anatomical longevity.
              </p>
            </div>
            <div className="pt-6 border-t border-zinc-900 mt-6">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                PILLAR // KINETICS
              </span>
            </div>
          </div>

          {/* Value 3 */}
          <div className="p-8 bg-zinc-950 border border-zinc-800/80 hover:border-gold/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <span className="font-mono text-gold text-2xl font-bold block mb-4">03</span>
              <h3 className="font-cinzel text-lg font-bold uppercase text-text-primary mb-3">
                Total Exclusivity
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                Our floor capacity is capped by design. We strictly reject open crowding to guarantee that every athlete has immediate access to heavy platforms.
              </p>
            </div>
            <div className="pt-6 border-t border-zinc-900 mt-6">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                PILLAR // SANCTUARY
              </span>
            </div>
          </div>

          {/* Value 4 */}
          <div className="p-8 bg-zinc-950 border border-zinc-800/80 hover:border-gold/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <span className="font-mono text-gold text-2xl font-bold block mb-4">04</span>
              <h3 className="font-cinzel text-lg font-bold uppercase text-text-primary mb-3">
                Systemic Restoration
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                Neuromuscular adaptation requires equal reverence for recovery. Hydrotherapy cold plunge and infrared heat restore systemic vitality.
              </p>
            </div>
            <div className="pt-6 border-t border-zinc-900 mt-6">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                PILLAR // LONGEVITY
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GYM ENVIRONMENT & FACILITIES EDITORIAL */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
        <SectionHeading
          eyebrow="Architectural Environment"
          title="The Sanctuary Blueprint"
          subtitle="Designed with deep charcoal finishes, warm amber linear illumination, and acoustic isolation."
        />

        {/* Feature Split 1: Free Weights & Competition Steel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 relative aspect-[16/10] w-full overflow-hidden border border-zinc-800 bg-zinc-950">
            <Image
              src="/images/equipment-closeup.jpg"
              alt="Calibrated Olympic Barbell Knurling and Plates"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-gold uppercase block">
              FLOOR ZONE 01
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold uppercase text-text-primary">
              Calibrated Free Weights & Power Platforms
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
              Every barbell in our facility is calibrated with competition knurling to guarantee a secure, tactile grip under maximal loads. Hardwood Olympic lifting platforms are acoustically floating to dissipate kinetic energy without shock to the joints.
            </p>
            <ul className="space-y-2 text-xs text-zinc-400 pt-2 font-mono">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold" />
                <span>Calibrated competition steel plates (within 10g accuracy)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold" />
                <span>Custom-milled solid steel dumbbells ranging to 70kg</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold" />
                <span>Acoustic floating hardwood Olympic platforms</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature Split 2: Recovery & Hydrotherapy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-gold uppercase block">
              FLOOR ZONE 02
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold uppercase text-text-primary">
              Hydrotherapy & Thermal Recovery Chamber
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
              Post-training recovery is treated with the same precision as lifting. Our thermal suite features sub-45°F granite cold plunge tanks paired with medical-grade dry cedar infrared saunas to flush metabolic byproducts and reset the nervous system.
            </p>
            <ul className="space-y-2 text-xs text-zinc-400 pt-2 font-mono">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold" />
                <span>Sub-45°F continuous circulation cold plunge tubs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold" />
                <span>Dry cedar wood full-spectrum infrared saunas</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold" />
                <span>Private sensory relaxation & recovery lounge</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative aspect-[16/10] w-full overflow-hidden border border-zinc-800 bg-zinc-950">
            <Image
              src="/images/recovery-suite.jpg"
              alt="Hydrotherapy Cold Plunge and Cedar Infrared Sauna Suite"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* 5. ETHOS ON COACHING & MENTORSHIP */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-[16/11] w-full overflow-hidden border border-zinc-800 bg-zinc-950">
            <Image
              src="/images/coaching-athlete.jpg"
              alt="Master Coach Guiding Athlete Through Heavy Barbell Training"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-zinc-950/85 backdrop-blur-md border border-gold/30">
              <span className="text-[10px] font-mono tracking-widest text-gold uppercase block">
                ONE-ON-ONE MENTORSHIP
              </span>
              <span className="font-cinzel text-xs text-text-primary uppercase font-semibold">
                Anatomical Guidance Without Compromise
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-gold" />
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-gold">
                The Mentorship Standard
              </span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-text-primary uppercase leading-tight">
              MASTERS OF THE CRAFT.
              <br />
              <span className="text-gold-gradient">GUARDIANS OF DISCIPLINE.</span>
            </h2>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
              At Pandayas, coaches are not cheerleaders—they are biomechanical practitioners. They scrutinize bar path velocities, joint angles, and central nervous system fatigue to ensure every training session yields maximum adaptation with zero wasted effort.
            </p>

            <p className="text-xs sm:text-sm text-text-secondary/80 leading-relaxed font-light">
              Each member admitted to private mentorship receives a customized kinetic blueprint, continuous velocity monitoring, and periodized training progressions aligned with their physiological goals.
            </p>

            <p className="text-[11px] text-zinc-500 font-light italic pt-2">
              * Dedicated coach rosters and credential registries are unveiled during private member onboarding.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-zinc-900">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 border border-gold/40 bg-zinc-950 text-gold text-[10px] font-mono uppercase tracking-[0.3em]">
            MEMBERSHIP BY INVITATION & CONSULTATION
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-text-primary uppercase leading-tight">
            DISCIPLINE IS A CHOICE.
            <br />
            <span className="text-gold-gradient">CLAIM YOUR SANCTUARY.</span>
          </h2>

          <p className="text-xs sm:text-sm text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            Ready to step inside Pandayas? Inquire about private membership availability, schedule a facility preview, or connect with our concierge.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/plans"
              className="px-10 py-4 bg-gradient-to-r from-[#F1D98A] via-[#D4AF37] to-[#A68625] text-black font-semibold tracking-[0.2em] text-xs uppercase hover:shadow-gold-glow hover:brightness-110 transition-all duration-300"
            >
              MEMBERSHIP PLANS & PRIVILEGES
            </Link>
            <Link
              href="/outlets"
              className="px-8 py-4 border border-gold/40 text-text-primary hover:border-gold hover:text-gold tracking-[0.2em] text-xs uppercase bg-zinc-950/70 backdrop-blur-sm transition-all duration-300"
            >
              EXPLORE OUR OUTLETS
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-zinc-800 text-zinc-400 hover:text-text-primary hover:border-zinc-700 tracking-[0.2em] text-xs uppercase bg-zinc-950/40 backdrop-blur-sm transition-all duration-300"
            >
              SCHEDULE PRIVATE PREVIEW
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
