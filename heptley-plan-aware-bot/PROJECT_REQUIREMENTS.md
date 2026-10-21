# Client Project Requirements & Scope Specification

> **Instructions for Assistant & Developers**:  
> Fill out this template before any development begins. Every pull request, prompt generation, or code modification must comply with the parameters recorded in this document. If a parameter is blank or unconfirmed, ask the project lead or client before proceeding.

---

## 1. Project & Client Metadata

* **Client / Business Name**: *[e.g., Apex Dental Clinic / Urban Roast Cafe]*
* **Contact Person**: *[Client Name & Role]*
* **Email / Phone / WhatsApp**: *[Contact Info]*
* **Project Repository / Path**: `d:\New folder (4)`
* **Project Start Date**: *[YYYY-MM-DD]*
* **Target Delivery Date**: *[YYYY-MM-DD]*
* **Hard Deadline (Go-Live)**: *[YYYY-MM-DD]*

---

## 2. Selected Heptley Plan & Commercial Terms

* **Selected Plan**: *[Launch (₹4,999) | Grow (₹7,999) | Pro (₹11,999) | Scale (₹29,999) | Custom]*
* **Base Package Price**: *[₹4,999 / ₹7,999 / ₹11,999 / ₹29,999 / Custom Quote]*
* **Approved Add-ons / Additional Scope**: *[e.g., None / 2 Extra Pages (+₹X) / Domain purchase]*
* **Total Agreed Budget**: *[₹ Total + applicable GST]*
* **Payment Milestones**:
  * [ ] 50% Advance Received on: *[Date & Txn ID]*
  * [ ] 50% Balance Due upon Go-Live / Domain pointing
* **Plan Specifications Reference**: [HEPTLEY_PLANS.md](./HEPTLEY_PLANS.md)

---

## 3. Approved Page Roster

> **Note**: Do not exceed the maximum page count allowed by the selected plan (Launch: max 5, Grow: max 7, Pro: approved list, Scale: comprehensive).

* **Allowed Plan Maximum**: *[e.g., 5 pages for Launch]*
* **Total Approved Pages Count**: *[e.g., 4 pages]*

| # | Page Name | Route / Path | Purpose & Key Sections | Scope Status |
| :- | :--- | :--- | :--- | :--- |
| 1 | Home | `/` | Hero section, core value proposition, featured highlights, lead CTA | `INCLUDED` |
| 2 | About Us | `/about` | Company story, team credentials, mission, trust badges | `INCLUDED` |
| 3 | Services | `/services` | Detailed breakdown of offerings, service highlights, CTA | `INCLUDED` |
| 4 | Contact | `/contact` | WhatsApp button, Call button, Map embed, static inquiry form | `INCLUDED` |
| 5 | *[Optional 5th Page]* | *[`/gallery` or `/faq`]* | *[Image gallery or frequently asked questions]* | *[Pending]* |

---

## 4. Feature Scope Matrix & Classification

> Every proposed feature must be classified into one of four statuses:  
> - `INCLUDED`: Clearly covered under the active plan.  
> - `EXCLUDED`: Explicitly out-of-scope for the active plan.  
> - `REQUIRES CLARIFICATION`: Ambiguous requirement needing client or lead confirmation.  
> - `ADDITIONAL SCOPE`: Requires tier upgrade or commercial add-on approval.

### 4.1 Design, UI & Branding
| Feature Description | Target Tier | Scope Status | Notes / Plan Limits |
| :--- | :--- | :--- | :--- |
| Mobile-First Responsive Layout | Launch+ | `INCLUDED` | Standard across all devices |
| Starter Logo / Wordmark | Launch/Grow | `INCLUDED` | Basic vector emblem or typographic logo |
| Custom Visiting Card & Signage Templates | Grow+ | `[INCLUDED / EXCLUDED]` | Excluded on Launch unless added |
| Comprehensive Branding Kit (Letterhead, ID cards) | Pro+ | `[EXCLUDED on Launch/Grow]` | Requires Pro plan |

### 4.2 Interactivity & Functional Features
| Feature Description | Target Tier | Scope Status | Notes / Plan Limits |
| :--- | :--- | :--- | :--- |
| Click-to-WhatsApp & Direct Call Buttons | Launch+ | `INCLUDED` | Direct `wa.me` links |
| Interactive FAQ Accordions & Filter Tabs | Grow+ | `INCLUDED` | Client-side React components |
| Dynamic Content Management / Self-Update Panel | Scale | `[EXCLUDED on Launch/Grow/Pro]` | Only in Scale (₹29,999) or Custom |
| Online Booking / Appointment Calendar System | Scale | `[EXCLUDED on Launch/Grow/Pro]` | Use WhatsApp booking alternative |
| Payment Gateway Integration (Razorpay/Stripe) | Scale | `[EXCLUDED on Launch/Grow/Pro]` | Use static UPI QR or upgrade to Scale |

### 4.3 SEO, Search & Local Digital Presence
| Feature Description | Target Tier | Scope Status | Notes / Plan Limits |
| :--- | :--- | :--- | :--- |
| Basic On-Page SEO (Meta tags, OG preview, headings) | Launch+ | `INCLUDED` | Validated in all builds |
| Google Business Profile (GBP) Creation & Setup | Grow+ | `[EXCLUDED on Launch]` | Requires Grow tier or GBP add-on |
| Google Analytics 4 (GA4) & Search Console Setup | Pro+ | `[EXCLUDED on Launch/Grow]` | Included in Pro/Scale |

---

## 5. Approved Integrations Register

* **WhatsApp Lead Alerts**:
  * WhatsApp Business Number: `+91-XXXXXXXXXX`
  * Default Pre-filled Message: *"Hi, I would like to inquire about your services via your website."*
* **Location & Maps**:
  * Google Maps Embed URL: *[Embed iframe or Google Maps pin]*
* **Call Actions**:
  * Primary Phone Number: `+91-XXXXXXXXXX`
* **Care Plan Status**:
  * [ ] None (Launch standard)
  * [ ] 3 Months Free (Grow / Pro)
  * [ ] 12 Months Free (Scale)
  * Free Care Plan Expiry Date: *[YYYY-MM-DD]*

---

## 6. Explicitly Excluded Features (Non-Goals)

The following items have been explicitly confirmed as **OUT OF SCOPE** for this project phase to prevent scope creep:
1. ❌ No custom user authentication or member logins.
2. ❌ No database-backed CMS or self-update panel (unless Scale plan).
3. ❌ No shopping cart, order checkout, or direct payment gateway integration (unless Scale plan).
4. ❌ No native mobile app development.
5. ❌ No page generation exceeding the approved page quota.

---

## 7. Revisions & Delivery Tracking

* **Maximum Permitted Review Rounds**: *[Launch: 2 | Grow: 3 | Pro: 5 | Scale: 8]*
* **Revision Rounds Used**: `0`

| Round # | Request Date | Scope of Modifications Requested | Completion Date | Sign-off Status |
| :- | :--- | :--- | :--- | :--- |
| 1 | *[YYYY-MM-DD]* | *[Initial client feedback adjustments]* | *[YYYY-MM-DD]* | *[Pending]* |
| 2 | *[YYYY-MM-DD]* | *[Final styling and copy polish]* | *[YYYY-MM-DD]* | *[Pending]* |

---

## 8. Sign-Off & Change Approval

* **Requirements Prepared By**: *[Developer / Project Manager]*
* **Requirements Approved By Client**: `[ ] YES | [ ] NO`
* **Sign-Off Date**: *[YYYY-MM-DD]*
* **Change Order Protocol**: Any request outside this document requires a formal add-on quote or tier upgrade before code implementation.
