# PANDAYAS (PD) — Luxury Fitness Club Website

> **Forged By Discipline. Built For Greatness.**  
> An ultra-luxury, modern, cinematic website built with Next.js (App Router), Tailwind CSS, Framer Motion, and Lucide React.

---

## 1. Project Overview

**PANDAYAS (PD)** is an exclusive, high-performance executive fitness sanctuary communicating strength, discipline, and architectural sophistication.

- **Stack**: Next.js 15 (App Router, JavaScript), React 19, Tailwind CSS 3.4, Framer Motion, Lucide React.
- **Visual Palette**:
  - Primary Background: `#080808`
  - Secondary Background: `#121212`
  - Metallic Gold Accents: `#D4AF37` / `#F1D98A`
  - Primary Typography: `#F7F5EF` (Ivory)
  - Secondary Typography: `#A7A7A7` (Muted Silver)
- **Typography Pairing**:
  - Headlines & Monograms: **Cinzel** (Roman chiseled architectural elegance)
  - Body & Kinetics: **Plus Jakarta Sans** (Ultra-clean modern geometric sans-serif)

---

## 2. Website Structure & Routes

1. **Home (`/`)**:
   - Cinematic hero with Google Flow athlete video background, dark luxury overlay, and staggered entry animations.
   - Brand philosophy & origin creed (*"Strength is not accidental. It is forged in silence."*).
   - Core disciplines preview with photographic cards.
   - World-class facilities & equipment showcase (Olympic weights, selectorized machinery, sprint turf, hydrotherapy suite).
   - Why train at Pandayas (4-pillar architectural grid).
   - Master coaching mentorship highlights.
   - Member preview testimonials with clear placeholder notation.
   - Final call to action & luxury footer.

2. **About (`/about`)**:
   - The Pandayas heritage, origin story, and philosophy.
   - The Four Sovereign Values (*Absolute Discipline, Biomechanical Rigor, Total Exclusivity, Systemic Restoration*).
   - Architectural sanctuary breakdown: Floor Zone 01 (Free Weights) and Floor Zone 02 (Hydrotherapy & Thermal Recovery).
   - Coaching ethos and human potential.
   - Direct consultation call to action.

3. **Programs (`/programs`)**:
   - The 6 Disciplinary Pillars:
     1. **Strength Training** (Absolute Power & Structural Integrity)
     2. **Muscle Building** (Hypertrophy & Muscular Architecture)
     3. **Personal Training** (One-on-One Master Mentorship)
     4. **Functional Fitness** (Dynamic Agility & Kinetic Capability)
     5. **Weight Management** (Metabolic Optimization & Composition)
     6. **General Fitness** (Longevity, Mobility & Vital Conditioning)
   - Interactive category filter tabs (*All, Performance, Aesthetics, Private, Athletics, Wellness, Longevity*).
   - Training periodization architecture (Diagnostic Assessment, Load Periodization, Neuromuscular Deload).
   - Notice clarifying customized member consultation.

4. **Contact (`/contact`)**:
   - The Three Core Contact Actions: **WhatsApp**, **Call Now**, **Directions**.
   - Operating hours and facility schedule.
   - The 3-step membership admission protocol (direct liaison, zero fake web forms).
   - Physical location, perimeter arrival, and GPS directions.
   - Modal notice handling protecting unconfigured placeholders.

---

## 3. Centralized Business Configuration

All business details, contact channels, and operating hours are managed exclusively in:  
📁 **[`data/gymConfig.js`](file:///d:/New%20folder%20%284%29/data/gymConfig.js)**

### How to Update Business Details to Live Values:

Open [`data/gymConfig.js`](file:///d:/New%20folder%20%284%29/data/gymConfig.js) and update the `contact` block:

```javascript
// 1. WhatsApp Configuration
whatsapp: {
  isConfigured: true,                      // Set to true when live
  rawNumber: "1234567890",                 // Numbers only, no '+', spaces, or dashes
  displayNumber: "+1 (234) 567-890",       // Displayed on the website
  defaultMessage: "Hello Pandayas, I would like to inquire about private membership.",
}

// 2. Direct Phone Call Configuration
phone: {
  isConfigured: true,                      // Set to true when live
  rawNumber: "+1234567890",                // Full dialable phone number
  displayNumber: "+1 (234) 567-890",       // Displayed on the website
}

// 3. Physical Address & Google Maps Configuration
location: {
  isConfigured: true,                      // Set to true when live
  displayAddress: "100 Sovereign Way, Suite 400",
  cityState: "Beverly Hills, CA 90210",
  googleMapsUrl: "https://maps.google.com/?q=100+Sovereign+Way", // Verified directions URL
}

// 4. Operating Hours
hours: {
  isConfigured: true,
  display: [
    { days: "Monday – Friday", hours: "05:00 – 22:00" },
    { days: "Saturday", hours: "07:00 – 20:00" },
    { days: "Sunday", hours: "08:00 – 18:00" },
  ],
  note: "Private training and recovery suites by appointment.",
}
```

> **Placeholder Safety Guarantee**: Whenever `isConfigured: false`, clicking any button opens an informative brand notice dialog. The website never dials fake numbers or navigates to 404 links.

---

## 4. How to Replace Visual & Video Assets

All visual assets reside in the `public/` directory:

- **Hero Video Background**:
  - Place your video at `public/videos/Athlete_lifting_weights_in_gym_20261021114312.mp4` (or `public/videos/hero-athlete.mp4`).
  - Recommended format: H.264 MP4, 1080p, 24/30 fps, muted, 16:9.
- **Hero Static Fallback Poster**:
  - `public/images/hero-fallback.jpg` (Paints immediately during loading / reduced motion).
- **Facility & Equipment Imagery**:
  - `public/images/facility-interior.jpg` (Training floor)
  - `public/images/equipment-closeup.jpg` (Free weights & calibrated barbell)
  - `public/images/coaching-athlete.jpg` (Personal coaching)
  - `public/images/functional-fitness.jpg` (Turf & kettlebells)
  - `public/images/recovery-suite.jpg` (Cold plunge & sauna)

> **Prompt Reference**: See [`data/visualPrompts.js`](file:///d:/New%20folder%20%284%29/data/visualPrompts.js) for the exact cinematic prompts used for Google Flow asset generation.

---

## 5. Local Development & Scripts

In the project root:

```bash
# Install dependencies
npm install

# Start local development server (runs on http://localhost:3000 or http://localhost:3001)
npm run dev

# Run ESLint validation
npm run lint

# Build production bundle (prerenders all 4 static routes)
npm run build

# Start production server
npm run start
```

---

## 6. Deploying to Vercel

The application is pre-configured for **zero-config deployment** on [Vercel](https://vercel.com).

### Option A: Via Vercel Web Dashboard (Recommended)
1. Push your repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the `pandayas-luxury-gym` repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **"Deploy"**.

### Option B: Via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy directly from terminal
vercel

# Deploy to production
vercel --prod
```

---

## 7. Quality Assurance Checklist

- [x] **App Router Architecture**: Pure Next.js App Router with clean JavaScript code.
- [x] **Zero Backend Dependencies**: Pure frontend with static prerendering (`○ (Static)`).
- [x] **Responsive Mobile Layout**: Tested and fluid across mobile, tablet, and desktop breakpoints.
- [x] **Accessibility**: High-contrast ivory text on dark charcoal, `@media (prefers-reduced-motion)` detection, accessible touch targets (`min-h-[44px]`).
- [x] **SEO**: Unique metadata titles and descriptions across all four routes with OpenGraph and viewport tags.
- [x] **Performance**: AVIF/WebP image pipeline, MozJPEG compressed static assets (< 700 KB total payload), decoupled video preloading (`preload="metadata"`).
- [x] **ESLint**: Passed with zero warnings or errors.
- [x] **Production Build**: 100% clean compilation.
