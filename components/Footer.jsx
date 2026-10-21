import React from "react";
import Link from "next/link";
import { gymConfig } from "@/data/gymConfig";
import { Clock, MapPin, Building, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-zinc-900 text-text-secondary">
      {/* Top Banner Accent */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 border border-gold/70 flex items-center justify-center bg-zinc-950">
                <span className="font-cinzel text-xs font-bold text-gold">PD</span>
              </div>
              <span className="font-cinzel text-lg font-bold tracking-[0.2em] text-text-primary">
                {gymConfig.brand.name}
              </span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed font-light">
              {gymConfig.brand.description}
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-mono tracking-widest text-gold uppercase block">
                {gymConfig.brand.tagline}
              </span>
            </div>
          </div>

          {/* Column 2: Navigation & Exploration */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.25em] text-text-primary uppercase mb-5 pb-2 border-b border-zinc-900">
              Sanctuary
            </h4>
            <ul className="space-y-2.5 text-xs">
              {gymConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-gold transition-colors duration-200 inline-block py-1 tracking-wider"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours & Facility Status */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.25em] text-text-primary uppercase mb-5 pb-2 border-b border-zinc-900 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-gold" />
              Hours of Operation
            </h4>
            <div className="space-y-2 text-xs">
              {gymConfig.contact.hours.display.map((h, idx) => (
                <div key={idx} className="flex justify-between py-1 border-b border-zinc-950">
                  <span className="text-zinc-400">{h.days}</span>
                  <span className="text-zinc-500 font-mono text-[11px]">{h.hours}</span>
                </div>
              ))}
              <p className="text-[11px] text-gold/80 italic pt-2">
                24/7 Biometric access active for verified members.
              </p>
            </div>
          </div>

          {/* Column 4: Enclaves & Direct Membership Actions */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.25em] text-text-primary uppercase mb-5 pb-2 border-b border-zinc-900 flex items-center gap-2">
              <Building className="w-3.5 h-3.5 text-gold" />
              Our Sanctuaries
            </h4>
            <div className="space-y-2.5 text-xs mb-6">
              <p className="text-zinc-400">
                Flagship: Financial District, Downtown
              </p>
              <p className="text-zinc-500 text-[11px]">
                Waterfront Pavilion: Marina Bay Promenade
              </p>
              <p className="text-zinc-500 text-[11px]">
                Sovereign Club: Uptown Highland Estate
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <Link
                href="/outlets"
                className="w-full flex items-center justify-between px-3.5 py-2 border border-zinc-800 text-xs text-text-primary hover:border-gold hover:text-gold transition-colors"
              >
                <span>EXPLORE ALL OUTLETS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/plans"
                className="w-full flex items-center justify-between px-3.5 py-2 bg-gradient-to-r from-[#F1D98A] via-[#D4AF37] to-[#A68625] text-black font-semibold text-xs tracking-wider uppercase hover:shadow-gold-glow transition-all"
              >
                <span>MEMBERSHIP PLANS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-950 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-600 gap-4">
          <p>© {new Date().getFullYear()} PANDAYAS (PD) Luxury Gym. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">
              Privacy Protocol
            </span>
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">
              Terms of Exclusivity
            </span>
            <span className="text-gold/60 font-mono">PD ARCHIVE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
