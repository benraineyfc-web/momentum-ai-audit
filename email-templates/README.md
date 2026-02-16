# Email Templates

## Overview
10 email templates for the Momentum AI audit funnel, each with HTML + plaintext versions.

## Template Variables
All templates use these variables:
- `{name}` - Client name
- `{business_type}` - Type of business
- `{frustration}` - Their biggest frustration
- `{stripe_link}` - Stripe payment link
- `{calendly_link}` - Calendly booking link
- `{audit_doc_link}` - Audit document link
- `{loom_link}` - Loom walkthrough link

## Triggers
| Email | Trigger | Timing |
|-------|---------|--------|
| 1 - Initial Response | Form submitted | Immediate |
| 2 - No Problem → Booking | Q5 = "No problem" | Immediate |
| 3 - Seems High → Comparison | Q5 = "Seems high" | Immediate |
| 4 - Too Expensive → Calculator | Q5 = "Too expensive" | Immediate |
| 5 - Need Value → Breakdown | Q5 = "Need value" | Immediate |
| 6 - Payment Confirmation | Stripe payment success | Immediate |
| 7 - Pre-Call Prep | T-24h before call | 24hrs before |
| 8 - Post-Call Delivery | Manual trigger | T+24h after call |
| 9 - Implementation Upsell | Manual trigger | T+7d after audit |
| 10 - Testimonial Request | Manual trigger | T+14d after audit |

## Email Service Integration
- Resend.com (recommended) or SendGrid
- Connect via n8n automation workflows
- Template variables replaced at send time

## Testing
Test all emails with:
- Litmus or Email on Acid (rendering tests)
- SpamAssassin (spam score check)
- Real inbox tests (Gmail, Outlook, Apple Mail)

## Brand Voice
- Founder-led (use "I", not "we")
- Direct, no-BS tone
- British English (£, colour, etc.)
- No jargon or hype
