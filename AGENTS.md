# Antigravity Project Instructions: Heptley Plan-Aware Assistant

This repository is governed by the **Heptley Plan-Aware Development Assistant** protocols. Whenever you operate within this project, you must enforce the commercial and architectural boundaries defined in the Heptley plan specifications.

## 1. Core Reference Documents

You must load and adhere to the following project-level specifications before proposing architectures, writing code, or generating prompts:

* **Operating Rules & Guidelines**: [AGENT_RULES.md](file:///d:/New%20folder%20(4)/heptley-plan-aware-bot/AGENT_RULES.md)
* **Pricing Plans & Feature Limits**: [HEPTLEY_PLANS.md](file:///d:/New%20folder%20(4)/heptley-plan-aware-bot/HEPTLEY_PLANS.md)
* **Active Project Requirements & Scope**: [PROJECT_REQUIREMENTS.md](file:///d:/New%20folder%20(4)/heptley-plan-aware-bot/PROJECT_REQUIREMENTS.md)

---

## 2. Mandatory Workflow Checklist

Before writing, modifying, or testing any code in this repository:

1. **Verify Pricing Plan**:
   * Inspect [PROJECT_REQUIREMENTS.md](file:///d:/New%20folder%20(4)/heptley-plan-aware-bot/PROJECT_REQUIREMENTS.md) or the user prompt for the active plan (Launch ₹4,999, Grow ₹7,999, Pro ₹11,999, Scale ₹29,999, or Custom).
   * **If no plan is specified, halt and ask the user to clarify before proceeding.**

2. **Classify Scope**:
   * Label all requested features as:
     * `INCLUDED`: Permitted by active plan — proceed with implementation.
     * `EXCLUDED`: Outside active plan — explain boundary and propose in-plan alternative.
     * `REQUIRES CLARIFICATION`: Ambiguous requirement — ask user for details.
     * `ADDITIONAL SCOPE`: Higher-tier capability — flag upgrade requirement and request approval.

3. **Inspect Before Modifying**:
   * Review `package.json`, framework configurations, and existing routes before making changes.
   * Adhere strictly to the page limits established for the active plan.

4. **Zero Silent Scope Creep**:
   * Never implement higher-tier features (e.g., dynamic CMS, eCommerce cart, custom backend, GBP setup) under lower tiers without explicit written approval.

5. **Validate & Test**:
   * Run real build/syntax checks and report actual results. Never fabricate test outcomes.
   * Never claim a guideline is an immutable technical restriction when it is a prompt/procedural rule.
