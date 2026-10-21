import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProgramCard({ program }) {
  if (!program) return null;

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden bg-[#101010] border border-zinc-800/80 hover:border-gold/50 transition-all duration-500 hover:shadow-gold-subtle">
      {/* Subtle top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

      <div>
        {/* Program Image Visual Preview */}
        {program.image && (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
            <Image
              src={program.image}
              alt={program.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-black/30 to-transparent" />

            {/* Category Tag Overlay */}
            <div className="absolute top-4 left-4 z-10">
              <span className="text-[10px] font-mono tracking-[0.25em] text-gold uppercase px-2.5 py-1 border border-gold/40 bg-zinc-950/80 backdrop-blur-md shadow-md">
                {program.category || "Discipline"}
              </span>
            </div>
          </div>
        )}

        <div className="p-8 pt-6">
          {/* Tag without Image fallback */}
          {!program.image && (
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono tracking-[0.25em] text-gold uppercase px-2 py-0.5 border border-gold/30 bg-gold/5">
                {program.category || "Discipline"}
              </span>
              <span className="text-[11px] font-mono text-zinc-600">
                PD / {program.id}
              </span>
            </div>
          )}

          {/* Title & Subtitle */}
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wide text-text-primary uppercase group-hover:text-gold-light transition-colors">
            {program.title}
          </h3>
          <p className="text-xs font-mono text-gold/80 tracking-wider uppercase mt-1 mb-4">
            {program.subtitle}
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light mb-6">
            {program.description}
          </p>

          {/* Key Features / Pillars */}
          {program.features && program.features.length > 0 && (
            <ul className="space-y-2 mb-6 pt-4 border-t border-zinc-900">
              {program.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-xs text-zinc-400 gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60 mt-1.5 flex-shrink-0" />
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Action CTA */}
      <div className="px-8 pb-8 pt-2">
        <div className="pt-4 border-t border-zinc-900/80">
          <Link
            href="/contact"
            className="inline-flex items-center justify-between w-full text-xs font-semibold tracking-widest uppercase text-text-primary group-hover:text-gold transition-colors py-2"
          >
            <span>{program.ctaText || "Inquire Discipline"}</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-gold" />
          </Link>
        </div>
      </div>
    </div>
  );
}
