# Phases 5-11: Detailed Implementation Breakdown

**Status:** Phases 1-4 Complete (Brand, Landing Page, Form, Emails)
**Remaining:** Automation, CRM, Audit System, Sales, Content, Deployment, Skills

---

## ✅ Completed (Phases 1-4)

- Phase 1: Brand Identity ✓ (Brand colors, typography, logo, messaging)
- Phase 2: Landing Page ✓ (Next.js 14, 7 sections, fully responsive)
- Phase 3: Lead Form ✓ (5-step multi-step form with Zod validation)
- Phase 4: Email Templates ✓ (10 templates, HTML + plaintext)

**Git Commits:** 15 feature commits
**Lines of Code:** ~2,500+ lines across brand, landing page, forms, emails

---

## Phase 5: n8n Automation Engine

**Goal:** Build 6 n8n workflow JSON files that automate the entire lead-to-audit funnel.

### Deliverables

**5.1 Workflow: Lead Capture & Qualification** (High Priority)
- **File:** `/automation/workflows/01-lead-capture.json`
- **Trigger:** Webhook from form submission
- **Actions:**
  1. Parse form data (extract all 5 steps)
  2. Create record in Airtable "Leads" table
  3. Evaluate Q5 answer (price sensitivity)
  4. Route to appropriate email sequence (Emails 2-5)
  5. Send Slack/email notification to founder
  6. Tag lead with source, date, qualification status
- **Dependencies:** Airtable CRM schema (Phase 6), Email templates (✓ Done)
- **Effort:** 2-3 hours to build + test

**5.2 Workflow: Payment & Booking** (High Priority)
- **File:** `/automation/workflows/02-payment-booking.json`
- **Trigger:** Stripe webhook (payment_intent.succeeded)
- **Actions:**
  1. Match payment to lead in Airtable (by email)
  2. Update status to "Paid"
  3. Send Email 6 (Payment Confirmation) with Calendly link
  4. Create entry in "Audits Scheduled" table
  5. Notify founder: "Payment received: [Name] — £497"
- **Dependencies:** Stripe setup, Calendly setup
- **Effort:** 2 hours

**5.3 Workflow: Pre-Call Automation** (Medium Priority)
- **File:** `/automation/workflows/03-pre-call-prep.json`
- **Trigger:** Cron job (checks T-24h before calls)
- **Actions:**
  1. Query "Audits Scheduled" for calls tomorrow
  2. Send Email 7 (Pre-Call Prep)
  3. Update Airtable: "Prep email sent"
- **Dependencies:** Calendly integration
- **Effort:** 1-2 hours

**5.4 Workflow: Post-Call Sequence** (Medium Priority)
- **File:** `/automation/workflows/04-post-call-sequence.json`
- **Trigger:** Manual trigger when call completed
- **Actions:**
  1. T+0: Update status to "Audit Delivered"
  2. T+24h: Send Email 8 (Roadmap delivery)
  3. T+7d: Send Email 9 (Implementation upsell)
  4. T+14d: Send Email 10 (Testimonial request)
- **Dependencies:** Email templates (✓ Done)
- **Effort:** 2 hours

**5.5 Workflow: Objection Nurture Sequences** (Low Priority)
- **File:** `/automation/workflows/05-nurture-sequences.json`
- **Trigger:** Q5 = "Seems high" | "Too expensive" | "Need to understand"
- **Actions:**
  1. T+0: Send appropriate objection email (3, 4, or 5)
  2. T+3d: Follow-up
  3. T+7d: Social proof email
  4. T+14d: Final soft touch
- **Dependencies:** Email templates (✓ Done)
- **Effort:** 2 hours

**5.6 Workflow: Weekly Content Scheduling** (Low Priority - Nice to Have)
- **File:** `/automation/workflows/06-content-scheduler.json`
- **Trigger:** Cron job (Sunday 9am)
- **Actions:**
  1. Pull content from Airtable "Content" table
  2. Format for LinkedIn, Instagram, Facebook
  3. Queue via Buffer/Hypefury API
  4. Notify founder
- **Dependencies:** Content system (Phase 9), Buffer/Hypefury setup
- **Effort:** 2-3 hours

**Supporting Files:**
- `/automation/README.md` — n8n setup guide, webhook URLs, env vars
- `/automation/webhook-endpoints.md` — All webhook URLs documented

**Total Effort:** 10-15 hours
**Priority:** HIGH (Core business automation)

---

## Phase 6: Airtable CRM Structure

**Goal:** Design complete Airtable base with 4 tables ready to import.

### Deliverables

**6.1 Table: Leads** (High Priority)
- **File:** `/crm/tables/leads-schema.json`
- **Fields:** 17 fields including:
  - Contact info (Name, Email, Phone, Business Name, Website)
  - Form data (Frustration, Time Wasted, Revenue, AI Tools, AI Wish)
  - Qualification (Price Sensitivity, Source, Status, Tags)
  - Tracking (Created Date, Last Contact, Notes)
- **Views:** Pipeline Kanban, Calendar, This Week's Actions, Follow-ups Due
- **Effort:** 1-2 hours

**6.2 Table: Audits Scheduled** (High Priority)
- **File:** `/crm/tables/audits-schema.json`
- **Fields:** 11 fields including:
  - Link to Leads table
  - Call scheduling (Date/Time)
  - Payment tracking (Status, Amount, Stripe ID)
  - Delivery tracking (Prep email sent, Call completed, Audit doc sent)
  - Assets (Recording link, Loom link)
  - Upsell (Implementation interest)
- **Effort:** 1 hour

**6.3 Table: Implementation Projects** (Medium Priority)
- **File:** `/crm/tables/projects-schema.json`
- **Fields:** 9 fields including:
  - Link to Leads
  - Package tier (Starter/Growth/Scale)
  - Value, Status, Dates
  - Outsourcing tracking
- **Effort:** 1 hour

**6.4 Table: Content Calendar** (Low Priority)
- **File:** `/crm/tables/content-schema.json`
- **Fields:** 7 fields for content scheduling
- **Effort:** 1 hour

**Supporting Files:**
- `/crm/airtable-schema.json` — Complete importable base
- `/crm/sample-data.json` — Test records
- `/crm/README.md` — Setup instructions, API configuration

**Total Effort:** 5-7 hours
**Priority:** HIGH (Required by Phase 5 workflows)

---

## Phase 7: AI Audit Delivery System

**Goal:** Build complete audit delivery framework (forms, scoring, templates, scripts).

### Deliverables

**7.1 Client Intake Form (Post-Payment)** (High Priority)
- **File:** `/audit-system/intake-form.md`
- **Content:** 50-60 questions across 7 sections:
  - Business Basics
  - Sales & Marketing
  - Operations
  - Systems & Data
  - AI & Automation
  - Security & Risk
  - Goals & Budget
- **Format:** Copy-paste ready for Tally/Typeform OR standalone page
- **Effort:** 2-3 hours

**7.2 Audit Scoring System** (High Priority)
- **File:** `/audit-system/scoring-sheet.md`
- **Content:** 7 sections × 5 sub-areas = 35 scoring points
  - Section 1: Business Model & Revenue Flow (/25)
  - Section 2: Operations & Workflow (/25)
  - Section 3: Data & Systems Stack (/25)
  - Section 4: AI Readiness (/25)
  - Section 5: Customer Journey (/25)
  - Section 6: Security & Compliance (/25)
  - Section 7: Org Capacity (/25)
- **Master Scores:**
  - Revenue Leverage (/50)
  - Ops Efficiency (/50)
  - AI Readiness (/50)
  - Risk Exposure (/25)
- **Upsell Routing:** Logic for Automation/CAIO/Security bridges
- **Effort:** 3-4 hours

**7.3 Audit Report Template** (High Priority)
- **Files:**
  - `/audit-system/report-template/audit-report.md` (Markdown template)
  - `/audit-system/report-template/cover.svg` (Brand cover page)
  - `/audit-system/report-template/styles.css` (PDF export styles)
- **Content:** 11-page structured report:
  - Cover page
  - Executive Summary (3 biggest: bottlenecks, opportunities, risks)
  - System Scores (4 master scores + visual gauges)
  - Current System Map (tools, workflows, data flow)
  - Opportunity Map (10-15 opportunities, impact/effort matrix)
  - Risk Map (exposure points)
  - ROI Snapshot (time saved, revenue potential, payback)
  - 30/60/90 Day Roadmap
  - Recommended Build Plan (3 tiers)
- **Effort:** 4-6 hours

**7.4 Diagnosis Call Script** (Medium Priority)
- **File:** `/audit-system/call-script.md`
- **Content:** 60-minute structured script:
  - Pre-call prep (5 mins)
  - Context setting (0-5 min)
  - Problem mapping (5-15 min)
  - Opportunity presentation (15-25 min)
  - Risk exposure (25-30 min)
  - Roadmap walkthrough (30-40 min)
  - Transition to upsell (40-50 min)
  - Close & next steps (50-60 min)
- **Effort:** 2 hours

**7.5 Proposal Template** (Medium Priority)
- **File:** `/audit-system/proposal-template.md`
- **Content:** Implementation proposal structure
  - Scope, Deliverables, Tools, Timeline
  - 3-tier pricing (Starter/Growth/Scale)
  - Support model, KPIs, Next steps
- **Effort:** 1-2 hours

**7.6 ROI Calculator** (Low Priority - Nice to Have)
- **Files:** `/audit-system/roi-calculator/`
  - React component OR Google Sheets template
- **Inputs:** Hours lost, hourly cost, lead value, missed leads
- **Outputs:** Monthly leak, annual waste, revenue opportunity, payback
- **Effort:** 3-4 hours (React) OR 1 hour (Sheets)

**Supporting Files:**
- `/audit-system/README.md` — Complete delivery SOP

**Total Effort:** 15-22 hours
**Priority:** HIGH (Core product delivery)

---

## Phase 8: Sales System

**Goal:** Build complete sales playbook (scripts, sequences, objection handling).

### Deliverables

**8.1 LinkedIn Outbound Scripts** (High Priority)
- **File:** `/sales/linkedin-scripts.md`
- **Content:**
  - Connection message (Day 0)
  - Soft opener (Day 2-3)
  - Qualification branches (YES/NO to AI usage)
  - Audit pitch script
- **Effort:** 1-2 hours

**8.2 Cold Email Sequences** (Medium Priority)
- **File:** `/sales/cold-email-sequences.md`
- **Content:** 3-email sequence
  - Email 1: Direct problem-oriented
  - Email 2: Follow-up (T+3-4 days)
  - Email 3: Value + close (T+7 days)
- **Effort:** 1-2 hours

**8.3 Warm Network DM Scripts** (High Priority)
- **File:** `/sales/dm-scripts.md`
- **Content:**
  - Warm DM (friends/contacts)
  - Instagram story announcement
  - Facebook group post
  - LinkedIn launch post
- **Effort:** 1 hour

**8.4 Objection Handling Guide** (High Priority)
- **File:** `/sales/objection-handling.md`
- **Content:** 5 common objections + responses
  - "Sounds expensive"
  - "I don't know anything about AI"
  - "Not relevant to my business"
  - "Can I see examples?"
  - "I'll think about it"
- **Effort:** 1 hour

**8.5 Pricing Tiers & Psychology** (Medium Priority)
- **File:** `/sales/pricing-guide.md`
- **Content:**
  - Warm network: £149-£249
  - LinkedIn/cold: £497+
  - Enterprise: £1,500-£5,000
  - Psychology and rationale
- **Effort:** 30 mins

**8.6 Launch Social Posts** (High Priority)
- **Files:** `/sales/social-posts/`
  - `linkedin-launch.md`
  - `instagram-launch.md`
  - `facebook-launch.md`
- **Content:** Ready-to-post launch content for first week
- **Effort:** 1-2 hours

**Supporting Files:**
- `/sales/README.md` — Sales system overview

**Total Effort:** 7-10 hours
**Priority:** HIGH (Go-to-market critical)

---

## Phase 9: Content Generation System

**Goal:** Build AI prompt library + 30-day content calendar for launch.

### Deliverables

**9.1 AI Content Prompts** (High Priority)
- **Files:** `/content/prompts/`
  - `weekly-calendar-generator.md` — Generates 7-day content calendar
  - `social-proof-generator.md` — Turns audit results into posts
  - `educational-content.md` — Creates valuable educational posts
- **Content:** 3 structured prompts for Claude/ChatGPT
- **Effort:** 2-3 hours

**9.2 Weekly Content Workflow SOP** (Medium Priority)
- **File:** `/content/README.md`
- **Content:**
  - Sunday routine (60 mins): Generate + schedule week's content
  - Daily routine (30 mins): Check DMs, reply, update Airtable
- **Effort:** 1 hour

**9.3 Pre-Generated 30-Day Calendar** (High Priority)
- **File:** `/content/first-30-days.md`
- **Content:** Complete 30-day launch content calendar
  - 20 LinkedIn posts
  - 20 Instagram stories
  - 8 Facebook posts
  - Mix: Educational (40%), Behind-scenes (30%), Social proof (15%), CTA (15%)
- **Effort:** 3-4 hours

**Supporting Files:**
- `/content/content-calendar-template.md`

**Total Effort:** 6-8 hours
**Priority:** HIGH (Launch readiness)

---

## Phase 10: Deployment & Documentation

**Goal:** Production-ready deployment with complete documentation.

### Deliverables

**10.1 Environment Variables Documentation** (High Priority)
- **File:** `/docs/ENV-VARS.md`
- **Content:** Complete list of all env vars needed:
  - Stripe (4 vars)
  - Calendly (2 vars)
  - Airtable (4 vars)
  - n8n (2 vars)
  - Email service (3 vars)
  - General (2 vars)
- **Total:** ~17 environment variables
- **Effort:** 1 hour

**10.2 Deployment Checklist** (High Priority)
- **File:** `/docs/DEPLOYMENT.md`
- **Content:**
  - Pre-launch manual steps (11 items)
  - Launch day checklist (6 items)
- **Effort:** 1 hour

**10.3 Testing Guide** (High Priority)
- **File:** `/docs/TESTING.md`
- **Content:** End-to-end testing checklist
  - Full funnel test (9 test scenarios)
  - Mobile testing
  - Performance testing
  - Link validation
- **Effort:** 1-2 hours

**10.4 Weekly Operations SOP** (High Priority)
- **File:** `/docs/WEEKLY-OPS.md`
- **Content:** ADHD-friendly weekly routine
  - Sunday (60 mins): Content generation
  - Mon-Fri (30 mins/day): DMs + admin
  - Audit days: Pre-call, call, delivery
  - Total time: 2.5 hrs/week admin + 3-4 hrs per audit
- **Effort:** 1 hour

**10.5 Setup Guide** (High Priority)
- **File:** `/docs/SETUP.md`
- **Content:** Complete setup checklist
  - Account creation (7 services)
  - Configuration steps
  - Integration connections
  - Verification tests
- **Effort:** 2 hours

**10.6 Troubleshooting Guide** (Medium Priority)
- **File:** `/docs/TROUBLESHOOTING.md`
- **Content:** Common issues + fixes
  - Form submission failures
  - Email delivery issues
  - Stripe webhook problems
  - Airtable connection errors
- **Effort:** 1-2 hours

**10.7 Master README** (High Priority)
- **File:** `/README.md` (root)
- **Content:** System overview, quick start, architecture diagram
- **Effort:** 1-2 hours

**Total Effort:** 8-11 hours
**Priority:** HIGH (Production readiness)

---

## Phase 11: Claude Code Skills

**Goal:** Build Claude Code skill for automated audit report generation.

### Deliverables

**11.1 Audit Report Generation Skill** (Low Priority - Future Enhancement)
- **File:** `/skills/generate-audit-report.md`
- **Purpose:** Automate audit report generation from intake + scores
- **Inputs:** Client data JSON, scores, founder notes
- **Process:** 9-step generation pipeline
- **Outputs:** PDF report, Loom script, proposal (if applicable)
- **Effort:** 4-6 hours

**11.2 Skill Testing & Documentation** (Low Priority)
- **Files:**
  - `/skills/test-data/sample-intake.json`
  - `/skills/test-data/sample-scores.json`
  - `/skills/README.md`
- **Effort:** 1-2 hours

**Total Effort:** 5-8 hours
**Priority:** LOW (Nice to have, not launch-critical)

---

## Summary: Phases 5-11 Overview

| Phase | Deliverables | Effort | Priority | Dependencies |
|-------|--------------|--------|----------|--------------|
| **5: n8n Automation** | 6 workflows + docs | 10-15h | HIGH | Phase 6 (Airtable) |
| **6: Airtable CRM** | 4 tables + schema | 5-7h | HIGH | None |
| **7: Audit System** | 6 assets + templates | 15-22h | HIGH | None |
| **8: Sales System** | 6 playbooks + scripts | 7-10h | HIGH | None |
| **9: Content System** | 3 prompts + 30-day calendar | 6-8h | HIGH | None |
| **10: Deployment** | 7 documentation files | 8-11h | HIGH | All phases |
| **11: Claude Skills** | 1 skill + tests | 5-8h | LOW | Phase 7 |
| **TOTAL** | **~40 deliverables** | **56-81h** | | |

---

## Recommended Execution Order

### Sprint 1: Core Infrastructure (Weeks 1-2)
1. **Phase 6: Airtable CRM** (5-7h) — Foundation for automation
2. **Phase 5: n8n Automation** (10-15h) — Wire everything together
3. **Phase 10: Deployment Setup** (4-5h partial) — Env vars + setup guide

**Deliverable:** Functioning lead capture → Airtable → email automation

### Sprint 2: Product Delivery (Week 3)
1. **Phase 7: Audit System** (15-22h) — Core product delivery assets
2. **Phase 8: Sales System** (7-10h) — Go-to-market playbooks

**Deliverable:** Complete audit delivery system + sales scripts ready

### Sprint 3: Launch Prep (Week 4)
1. **Phase 9: Content System** (6-8h) — 30-day content calendar
2. **Phase 10: Deployment Docs** (3-6h remaining) — Testing + ops guides
3. **Testing & QA** (4-6h) — End-to-end validation

**Deliverable:** Production-ready system, launch content queued

### Sprint 4: Polish & Launch (Week 5)
1. Final testing & bug fixes (4-6h)
2. Launch execution (sales outreach, content posting)
3. **Phase 11: Claude Skills** (5-8h optional) — Future enhancement

---

## Critical Path Dependencies

```
Phase 6 (CRM) → Phase 5 (Automation) → Phase 10 (Deploy)
     ↓
Phase 7 (Audit) → Phase 8 (Sales) → Phase 9 (Content) → LAUNCH
```

**Launch-critical:** Phases 5, 6, 7, 8, 9, 10
**Nice-to-have:** Phase 11

---

## Next Steps

1. **Review this breakdown** — Confirm priorities and scope
2. **Choose execution approach:**
   - **Option A:** Execute all Phases 5-11 now (56-81 hours estimated)
   - **Option B:** Execute Sprint 1 only (Core Infrastructure)
   - **Option C:** Cherry-pick specific high-priority deliverables
3. **Set up external accounts** (if not done already):
   - Stripe account
   - Calendly account
   - Airtable account
   - n8n account
   - Resend/SendGrid account
4. **Begin implementation** based on your choice

**Recommendation:** Start with Sprint 1 (Phases 6 + 5 + partial 10) to get the automation working end-to-end, then review before continuing.

---

**Questions?**
- Which sprint/phase should we tackle first?
- Any scope adjustments needed?
- Ready to start, or want to review the landing page first?
