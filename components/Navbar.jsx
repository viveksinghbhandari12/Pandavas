"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { gymConfig } from "@/data/gymConfig";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080808]/90 backdrop-blur-md border-b border-gold/15 py-3 shadow-xl"
          : "bg-transparent py-5 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <Link
            href="/"
            className="group flex items-center space-x-3 text-decoration-none focus:outline-none focus:ring-1 focus:ring-gold/50"
            id="nav-brand-logo"
            aria-label="PANDAYAS Luxury Gym Home"
          >
            {/* Monogram Badge */}
            <div className="relative flex items-center justify-center w-10 h-10 border border-gold/60 bg-zinc-950/80 group-hover:border-gold group-hover:shadow-gold-subtle transition-all duration-300">
              <span className="font-cinzel font-bold text-xs tracking-widest text-gold group-hover:text-gold-light transition-colors">
                PD
              </span>
              <div className="absolute -inset-0.5 border border-gold/20 scale-90 group-hover:scale-100 transition-transform duration-300 pointer-events-none" />
            </div>

            {/* Wordmark */}
            <div className="flex flex-col">
              <span className="font-cinzel text-lg md:text-xl font-bold tracking-[0.25em] text-text-primary uppercase group-hover:text-gold-light transition-colors">
                {gymConfig.brand.name}
              </span>
              <span className="text-[9px] tracking-[0.35em] text-gold uppercase font-mono -mt-1">
                EXECUTIVE FITNESS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-8" aria-label="Main Navigation">
            {gymConfig.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-200 relative py-1 ${
                    isActive
                      ? "text-gold font-semibold"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Direct Action Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/plans"
              id="nav-cta-plans"
              className="px-5 py-2.5 bg-gradient-to-r from-[#F1D98A] via-[#D4AF37] to-[#A68625] text-black font-semibold text-xs tracking-[0.2em] uppercase hover:shadow-gold-glow hover:brightness-110 transition-all duration-300"
            >
              MEMBERSHIP PLANS
            </Link>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              type="button"
              id="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-zinc-800 text-zinc-300 hover:text-gold hover:border-gold/40 transition-colors focus:outline-none focus:ring-1 focus:ring-gold"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-gold/20 px-6 py-6 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {gymConfig.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm uppercase tracking-[0.2em] py-2 border-b border-zinc-900 transition-colors ${
                    isActive
                      ? "text-gold font-semibold pl-2 border-l-2 border-l-gold"
                      : "text-zinc-300 hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Mobile CTAs */}
            <div className="pt-4 space-y-2.5">
              <Link
                href="/plans"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center py-3 bg-gradient-to-r from-[#F1D98A] via-[#D4AF37] to-[#A68625] text-black font-semibold text-xs tracking-[0.2em] uppercase shadow-gold-subtle"
              >
                VIEW MEMBERSHIP PLANS
              </Link>
              <Link
                href="/outlets"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center py-2.5 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold/10 transition-all"
              >
                OUR OUTLETS & SANCTUARIES
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
