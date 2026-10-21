/**
 * PANDAYAS (PD) — Centralized Brand & Business Configuration
 * 
 * NOTE ON BUSINESS DETAILS:
 * Actual business details (phone number, WhatsApp, physical address, Google Maps link,
 * and exact schedule) are intentionally held in placeholder state until officially provided.
 * The application detects whether each field is configured (isConfigured === true)
 * to avoid presenting placeholder text as live functional links or inventing real credentials.
 */

export const gymConfig = {
  brand: {
    name: "PANDAYAS",
    abbreviation: "PD",
    tagline: "FORGED BY DISCIPLINE. BUILT FOR GREATNESS.",
    subTagline: "The premier sanctuary for high-performance training, exclusivity, and athletic transformation.",
    established: "EST. 2025",
    description: "An uncompromising sanctuary where architectural refinement meets high-performance training. Built for those who understand that elite physical conditioning requires absolute discipline and an exceptional environment.",
  },

  // Centralized Contact Actions Configuration
  contact: {
    // WhatsApp Configuration
    // Set isConfigured to true once a real business number (digits only, e.g. "1234567890") is supplied.
    whatsapp: {
      isConfigured: false,
      rawNumber: "PLACEHOLDER_WHATSAPP_NUMBER", // Clean digits only, no '+', spaces, or dashes
      displayNumber: "[WhatsApp Number Pending]",
      defaultMessage: "Hello Pandayas, I would like to inquire about membership and training programs.",
      // Helper function to build safe URL without linking to fake numbers
      getUrl() {
        if (!this.isConfigured || !this.rawNumber || this.rawNumber.includes("PLACEHOLDER")) {
          return null; // Return null so UI renders a polite pending indicator or disabled state
        }
        const encodedMsg = encodeURIComponent(this.defaultMessage);
        return `https://wa.me/${this.rawNumber.replace(/[^0-9]/g, "")}?text=${encodedMsg}`;
      },
    },

    // Phone / Call Now Configuration
    phone: {
      isConfigured: false,
      rawNumber: "+0000000000",
      displayNumber: "[Phone Number Pending]",
      getUrl() {
        if (!this.isConfigured || !this.rawNumber || this.rawNumber.includes("0000000")) {
          return null;
        }
        return `tel:${this.rawNumber.trim()}`;
      },
    },

    // Physical Location & Google Maps Configuration
    location: {
      isConfigured: false,
      displayAddress: "[Official Location Address Pending]",
      cityState: "[City, Region]",
      googleMapsUrl: null, // Insert verified Google Maps directions URL once address is provided
      getDirectionsUrl() {
        if (!this.isConfigured || !this.googleMapsUrl) {
          return null;
        }
        return this.googleMapsUrl;
      },
    },

    // Operating Hours Placeholder
    hours: {
      isConfigured: false,
      display: [
        { days: "Monday – Friday", hours: "[Hours Pending]" },
        { days: "Saturday", hours: "[Hours Pending]" },
        { days: "Sunday", hours: "[Hours Pending]" },
      ],
      note: "Private training and access by appointment.",
    },
  },

  // Navigation Links
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Plans", href: "/plans" },
    { label: "Outlets", href: "/outlets" },
    { label: "Contact", href: "/contact" },
  ],

  // Social Links (Placeholders)
  socials: [
    { name: "Instagram", url: "#", placeholder: true },
    { name: "YouTube", url: "#", placeholder: true },
    { name: "LinkedIn", url: "#", placeholder: true },
  ],
};

export default gymConfig;
