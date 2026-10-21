/**
 * PANDAYAS (PD) — Membership Plans & Tiers Data
 */

export const plansData = {
  tiers: [
    {
      id: "obsidian",
      name: "The Obsidian",
      badge: "Executive Autonomous",
      popular: false,
      tagline: "Uncompromised autonomous training for focused executives & high-performers.",
      description: "Designed for disciplined individuals who demand 24/7 unhindered access to calibrated Olympic platforms, medical-grade biometrics, and a tranquil training atmosphere without distraction.",
      pricing: {
        monthly: 240,
        annualMonthlyEquivalent: 195,
        billingNote: "Billed annually (₹12,340/yr) or ₹1240 monthly",
      },
      features: [
        "24/7 Encrypted Biometric Sanctuary Access",
        "Full access to Olympic platforms & calibrated selectorized machinery",
        "Private Executive Locker Suite & rainfall showers",
        "Monthly Biometric DEXA & InBody 770 body composition scans",
        "Access to Finnish Cedar Sauna & hydro-massage loungers",
        "Complimentary Executive Valet Parking during all sessions",
        "Exclusive Member Mobile Key & digital reservation portal",
        "Complimentary artisanal espresso & hydration bar",
      ],
      ctaText: "APPLY FOR OBSIDIAN",
      ctaHref: "/contact?tier=obsidian",
    },
    {
      id: "aureus",
      name: "The Aureus",
      badge: "Master Mentorship • Most Selected",
      popular: true,
      tagline: "Individualized biomechanical programming, dedicated master coaching, and contrast restoration.",
      description: "Our signature tier combining complete facility privileges with 8 dedicated private 1-on-1 coaching sessions per month, periodized kinetic velocity tracking, and priority hydrotherapy recovery.",
      pricing: {
        monthly: 480,
        annualMonthlyEquivalent: 395,
        billingNote: "Billed annually (₹24,740/yr) or ₹2340 monthly",
      },
      features: [
        "All Obsidian Tier Privileges Included",
        "8 Dedicated 1-on-1 Master Coaching sessions per month",
        "Periodized kinetic bar-path velocity & strength profiling",
        "Full Contrast Suite access (4°C Cold Plunge + Infrared Cedar Sauna)",
        "Custom sports nutrition & metabolic optimization blueprint",
        "Priority reservation for private lifting platforms and recovery suites",
        "Complimentary workout apparel laundry service",
        "Private assigned locker with personalized brushed brass nameplate",
        "2 Guest Sanctuary Passes per month",
      ],
      ctaText: "CLAIM AUREUS MEMBERSHIP",
      ctaHref: "/contact?tier=aureus",
    },
    {
      id: "sovereign",
      name: "The Sovereign",
      badge: "Founding Syndicate • Capped at 50",
      popular: false,
      tagline: "The absolute pinnacle of private fitness architecture, concierge liaisons, and worldwide access.",
      description: "Reserved for only 50 patrons per enclave. Includes unlimited bespoke coaching, dedicated executive director access, worldwide multi-outlet reciprocity, and private boardroom access.",
      pricing: {
        monthly: 850,
        annualMonthlyEquivalent: 720,
        billingNote: "Billed annually (₹18,640/yr) or 2550 monthly",
      },
      features: [
        "All Aureus Tier Privileges Included",
        "Unlimited 1-on-1 Master Coaching & Biomechanical Consultations",
        "Global Reciprocal Sanctuary Access across all Pandayas Outlets",
        "Dedicated 24/7 Training Director & Executive Concierge Liaison",
        "Weekly Sports Physio, Myofascial Release & Mobility Specialist",
        "Private Executive Boardroom & Soundproof Recovery Lounge Access",
        "4 Guest Sanctuary Passes per month with full floor privileges",
        "Custom Monogrammed PD Leather Duffel & Calibrated Belt Kit",
        "Subterranean Private Reserved Valet Bay & EV Supercharging",
      ],
      ctaText: "INQUIRE FOR SOVEREIGN",
      ctaHref: "/contact?tier=sovereign",
    },
  ],

  // Comparison Matrix for deep evaluation
  comparisonCategories: [
    {
      category: "Facility & Floor Access",
      items: [
        { feature: "24/7 Biometric Sanctuary Access", obsidian: true, aureus: true, sovereign: true },
        { feature: "Calibrated Olympic Platforms & Weight Hall", obsidian: true, aureus: true, sovereign: true },
        { feature: "Private Acoustic Coaching Pods", obsidian: false, aureus: "Priority Access", sovereign: "Unlimited Guaranteed" },
        { feature: "Multi-Outlet Worldwide Reciprocity", obsidian: "Single Enclave", aureus: "Regional Outlets", sovereign: "Worldwide All Outlets" },
      ],
    },
    {
      category: "Coaching & Biomechanical Science",
      items: [
        { feature: "1-on-1 Master Coaching Sessions", obsidian: "Add-on Available", aureus: "8 Sessions / Month", sovereign: "Unlimited Bespoke" },
        { feature: "Kinetic Velocity Profiling (Tendo / GymAware)", obsidian: "Quarterly", aureus: "Bi-Weekly", sovereign: "Continuous Real-Time" },
        { feature: "DEXA Scan & Cellular Hydration Analysis", obsidian: "Monthly", aureus: "Bi-Weekly", sovereign: "Weekly Tracking" },
        { feature: "Personalized Sports Nutrition Protocol", obsidian: false, aureus: true, sovereign: true },
      ],
    },
    {
      category: "Contrast Therapy & Restoration",
      items: [
        { feature: "Finnish Cedar Sauna Access", obsidian: true, aureus: true, sovereign: true },
        { feature: "4°C Granite Cold Immersion Plunge", obsidian: "Standard Hours", aureus: "Priority 24/7", sovereign: "Private Suite 24/7" },
        { feature: "Weekly Sports Physiotherapist & Myofascial", obsidian: false, aureus: "Discounted Rates", sovereign: "Included Weekly" },
        { feature: "Normatec Compression & Percussive Therapy", obsidian: "Lounge Access", aureus: "Reserved Pods", sovereign: "Private Suite Service" },
      ],
    },
    {
      category: "Concierge & Syndicate Amenities",
      items: [
        { feature: "Executive Valet Service", obsidian: true, aureus: true, sovereign: "Private Reserved Bay" },
        { feature: "Private Assigned Locker with Brass Nameplate", obsidian: false, aureus: true, sovereign: true },
        { feature: "Training Apparel Laundry Service", obsidian: false, aureus: true, sovereign: true },
        { feature: "Guest Passes per Month", obsidian: "None", aureus: "2 Passes", sovereign: "4 Passes" },
        { feature: "Private Executive Boardroom Access", obsidian: false, aureus: false, sovereign: true },
      ],
    },
  ],

  // Common FAQ
  faqs: [
    {
      question: "Why is membership strictly capped at PANDAYAS?",
      answer: "We adhere to a zero-compromise policy regarding training focus and privacy. By capping membership to no more than 250 active members per enclave, our members experience completely empty lifting platforms, uninterrupted rack availability, and an impeccably quiet atmosphere.",
    },
    {
      question: "Can I upgrade or transition between tiers?",
      answer: "Yes. Members may request a tier transition at the start of any billing cycle, subject to available tier allocation. Our concierge handles the transition and movement screening updates seamlessly.",
    },
    {
      question: "How does the private facility preview and application work?",
      answer: "Because we do not offer walk-in drop-ins, every prospective member submits an initial inquiry. Our membership director coordinates a confidential 45-minute private walk-through and baseline kinetic evaluation.",
    },
    {
      question: "Are multi-outlet privileges included?",
      answer: "Aureus members enjoy regional multi-enclave access across neighboring outlets, while Sovereign syndicate patrons hold universal, worldwide keyless access across every existing and future PANDAYAS sanctuary.",
    },
    {
      question: "What is your freeze and travel policy?",
      answer: "Executive members traveling for extended business or international commitments may pause membership for up to 60 days per calendar year with 14 days prior notice to concierge.",
    },
  ],
};

export default plansData;
