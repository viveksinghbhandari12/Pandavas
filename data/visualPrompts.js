/**
 * PANDAYAS (PD) — Google Flow Visual Asset Specifications & Prompts
 * 
 * Central registry of refined cinematic prompts used for Google Flow generation,
 * fallbacks, and multi-media asset pipelines.
 */

export const visualPrompts = {
  // 1. Hero Cinematic Video & Static Fallback
  heroVideo: {
    title: "Luxury Gym Hero Background & Athlete",
    assetVideo: "/videos/Athlete_lifting_weights_in_gym_20261021114312.mp4",
    assetPoster: "/images/hero-fallback.jpg",
    specs: {
      duration: "10 seconds",
      aspectRatio: "16:9 Landscape",
      fps: "24/30 fps",
      resolution: "4K / 1080p Ultra-HD",
      audio: "Muted / No ambient audio",
      composition: "Subject positioned toward the right, leaving darker negative space on the left for Next.js typographic overlays.",
    },
    googleFlowPrompt: `Create a 10-second cinematic background video for PANDAYAS (PD), a luxury fitness club. Show a premium, modern gym with an athletic individual training using heavy weights. Begin with a close-up of polished metal weights, then smoothly transition to a controlled, powerful training shot. Use deep black shadows, sophisticated golden rim lighting, warm metallic reflections, realistic textures, subtle atmospheric haze, and professional commercial cinematography. Camera movement should be smooth and deliberate, with a slow dolly-in and subtle side-tracking movement. The atmosphere should feel exclusive, disciplined, powerful, and refined. Keep the main subject toward the right side of the frame and leave darker negative space on the left for website text. End with a dark, visually calm frame suitable for a transition. Do not generate logos, text, watermarks, or distorted lettering.`,
    fallbackPosterPrompt: `Cinematic commercial frame of an athletic individual training with heavy weights in an ultra-luxury gym, warm golden amber rim lighting, deep charcoal and black shadows, warm metallic reflections, subtle atmospheric haze, sharp realistic texture, 16:9 landscape composition with subject towards the right and darker negative space on the left, quiet elite disciplined atmosphere, 8k photorealistic fitness cinematography, no logos or text.`,
  },

  // 2. Equipment Close-up
  equipmentCloseup: {
    title: "Competition Free Weights & Barbell Close-Up",
    assetImage: "/images/equipment-closeup.jpg",
    specs: {
      aspectRatio: "16:9",
      resolution: "8K UHD",
      focus: "Macro shallow depth of field on calibrated steel plate & knurled bar",
    },
    googleFlowPrompt: `Cinematic macro close-up of premium luxury gym barbell with matte black calibrated Olympic weight plates, subtle engraved gold metallic rim accents, warm amber side lighting, dramatic dark bokeh background, sharp realistic metallic texture, commercial fitness photography, zero distortion, no text.`,
  },

  // 3. Atmospheric Gym Interior Floor
  gymInterior: {
    title: "Atmospheric Training Floor & Architectural Lighting",
    assetImage: "/images/facility-interior.jpg",
    specs: {
      aspectRatio: "16:9",
      resolution: "8K UHD",
      focus: "Wide-angle architectural symmetry, polished dark flooring",
    },
    googleFlowPrompt: `Ultra-luxury commercial gym interior, dark architectural design, matte black steel and charcoal walls, warm golden amber accent lighting and recessed linear ceiling LEDs, polished dark concrete floor reflecting warm gold light, state-of-the-art selectorized workout machines and free weight area, clean minimal editorial aesthetic, cinematic composition, quiet elite atmosphere.`,
  },

  // 4. One-on-One Master Mentorship Coaching
  personalCoaching: {
    title: "Master Coach & Athlete Mentorship Session",
    assetImage: "/images/coaching-athlete.jpg",
    specs: {
      aspectRatio: "16:9",
      resolution: "8K UHD",
      focus: "Biomechanical precision, private floor atmosphere",
    },
    googleFlowPrompt: `An athletic trainer providing elite one-on-one personal coaching to a client in a luxury private dark gym, cinematic warm gold rim lighting, dark moody background, high-end equipment, professional commercial fitness photography, intense focused expression of discipline and strength.`,
  },

  // 5. Functional Kinetic Agility & Sprint Lane
  functionalFitness: {
    title: "High-Density Sprint Turf & Kettlebell Conditioning",
    assetImage: "/images/functional-fitness.jpg",
    specs: {
      aspectRatio: "16:9",
      resolution: "8K UHD",
      focus: "Dynamic agility, athletic kinetic movement",
    },
    googleFlowPrompt: `An athletic individual performing dynamic functional training with matte black kettlebells on a dark indoor sprint turf track inside a luxury private fitness club, cinematic warm golden side lighting, deep shadows, atmospheric haze, athletic intensity and focus, editorial commercial photography.`,
  },

  // 6. Hydrotherapy Contrast Suite (Cold Plunge & Cedar Sauna)
  recoverySuite: {
    title: "Granite Cold Plunge & Dry Infrared Cedar Sauna",
    assetImage: "/images/recovery-suite.jpg",
    specs: {
      aspectRatio: "16:9",
      resolution: "8K UHD",
      focus: "Restorative contrast recovery suite, tranquil ambient reflections",
    },
    googleFlowPrompt: `Ultra-luxury hydrotherapy recovery suite in a private executive gym, dark granite cold plunge tub with crystal clear still water reflecting warm amber ambient lighting, modern cedar wood infrared sauna cabin in the background, sleek dark architectural design, peaceful restorative atmosphere, editorial interior design photography, 8k.`,
  },
};

export default visualPrompts;
