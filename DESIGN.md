---
name: Jose Vargas — Portfolio
description: Editorial, warm-paper resume site for a Product Manager, built to prove outcomes over titles.
colors:
  paper: "#FBF8F3"
  paper-alt: "#F3EEE5"
  ink: "#17130F"
  ink-soft: "#4A423A"
  ink-faint: "#6E6458"
  rule: "#E0D8CB"
  accent: "#B33A15"
  accent-tint: "#F6E7E0"
  on-accent: "#FFF8F5"
typography:
  display:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(3rem, 8vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.5rem, 3vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  body:
    fontFamily: "'Schibsted Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    letterSpacing: "0.14em"
rounded:
  pill: "100px"
  sm: "4px"
  md: "14px"
spacing:
  sm: "14px"
  md: "32px"
  lg: "56px"
  xl: "84px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.pill}"
    padding: "11px 22px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
  button-ghost:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "11px 22px"
  chip:
    backgroundColor: "{colors.accent-tint}"
    textColor: "{colors.accent}"
    rounded: "{rounded.pill}"
    padding: "7px 14px"
---

# Design System: Jose Vargas — Portfolio

## Overview

**Creative North Star: "The Working Paper"**

This system reads like a well-kept internal memo, not a marketing page: warm paper instead of white, a serif voice for judgment and headlines, a monospace voice for metadata and labels, and a single accent color spent deliberately rather than everywhere. It is a product manager's proof document — evidence-led, hairline-organized, unadorned by cards or shadows — that happens to be beautiful because the person who made it cares about craft.

The palette explicitly rejects the navy/cyan dark-SaaS template look; warm black in dark mode is the deliberate signal of that rejection. Layout is flat and rule-separated rather than boxed, so content density reads as rigor, not clutter.

**Key Characteristics:**
- Warm paper background (never pure white/black)
- Newspaper serif display type (Newsreader) paired with a newsroom grotesk body (Schibsted Grotesk) and a mono label voice (JetBrains Mono)
- One accent — burnt vermilion — spent sparingly: status dot, links, active/hover states, small chips
- Flat, hairline-separated sections; no shadows, no cards
- Pill-shaped interactive elements (buttons, chips, inputs) throughout

## Colors

Warm, low-saturation neutrals with a single loud accent used at low frequency.

### Primary
- **Burnt Vermilion** (`#B33A15` light / `#F0703E` dark): the only saturated color in the system. Used for the status dot, links/CTAs on hover, case-study numerals, chip text, and focus states. Never used as a large fill.

### Neutral
- **Paper** (`#FBF8F3` light / `#14110E` dark): primary background. Warm, not white/pure-black.
- **Paper Alt** (`#F3EEE5` light / `#1D1915` dark): secondary surface (e.g. the Ask section background).
- **Ink** (`#17130F` light / `#F4EFE7` dark): primary text color.
- **Ink Soft** (`#4A423A` light / `#B8ADA0` dark): secondary body text, subheads.
- **Ink Faint** (`#6E6458` light / `#948A7D` dark): tertiary text — eyebrows, labels, timestamps. Darkened/lightened from the original `#8A7F73`/`#7E7469` after an audit found both failed WCAG AA contrast (~3.7:1 / ~4.1:1); both variants now clear ~5.5:1.
- **Rule** (`#E0D8CB` light / `#2E2822` dark): all hairline borders and dividers.
- **Accent Tint** (`#F6E7E0` light / `#2A1A12` dark): low-saturation accent background for chips and the status dot's halo.
- **On-Accent** (`#FFF8F5` light / `#17130F` dark): text placed on a filled accent surface. Flips to dark text in dark mode because light text on the brighter dark-mode orange fails contrast.

### Named Rules
**The One Accent Rule.** Burnt Vermilion never fills a large surface. It marks a single point of attention per view: a status dot, a link, a hover state, a case-study numeral, a chip.

## Typography

**Display Font:** Newsreader, optical sizes 6–72 (with Georgia, Times New Roman fallback)
**Body Font:** Schibsted Grotesk, with a true italic (with system-ui fallback)
**Label/Mono Font:** JetBrains Mono (with ui-monospace fallback)

**Character:** Editorial serif for judgment and headlines, a quiet grotesque for reading, and a technical mono for metadata — three distinct registers that never compete on the same line.

### Hierarchy
- **Display** (600, `clamp(3rem, 8vw, 5.5rem)`, line-height 0.94): hero name/headline only.
- **Headline** (500, `clamp(1.5rem, 3vw, 2rem)`, line-height 1.1): section heads.
- **Title** (600, `clamp(1.25rem, 2.6vw, 1.7rem)`, line-height 1.24): case-study titles, ~26ch max width.
- **Body** (400, 17px / 1.12rem for lead paragraphs, line-height 1.65–1.75): running copy, capped at 68ch measure.
- **Label** (400, 0.7–0.76rem, never below 11px; only the non-interactive colophon sits at 0.66rem, letter-spacing 0.08–0.14em, uppercase, mono): eyebrows, metrics labels, footer links, timestamps.

### Named Rules
**The Three Voices Rule.** Serif carries judgment and headlines, sans carries reading, mono carries metadata/labels. Never substitute one register for another.

## Layout

Single-column editorial grid capped at `--page: 1080px`, with a `--measure: 68ch` cap on running prose so long paragraphs stay readable. Sections use generous vertical rhythm (84px padding, 60px on mobile ≤720px) separated by hairlines rather than background color changes. The hero and case-study rows use two-column grids (`1fr auto` / `200px 1fr`) that collapse to one column at 900px and below. Horizontal page padding steps down from 32px to 22px at 720px.

## Elevation & Depth

Flat by design — no shadows anywhere in the system. Depth and separation are conveyed entirely through hairline borders (`--rule`) and tonal shifts between `--paper` and `--paper-alt`.

### Named Rules
**The Flat-By-Default Rule.** No box-shadow anywhere in the system. Section and component boundaries are drawn with 1px hairlines or a change from `--paper` to `--paper-alt`, never a shadow.

## Shapes

Two form languages, deliberately split: interactive elements (buttons, chips, inputs, the status pill) are fully rounded (`border-radius: 100px`), while content containers (portrait image, chat bubbles) use small, near-square radii (4px–14px). Nothing in between — no `8px`-style "generic rounded card" radius exists in the system.

## Components

Components feel **restrained and precise**: quiet at rest, confident in the one place they use color or motion.

### Buttons
- **Shape:** fully pill (`border-radius: 100px`)
- **Primary:** filled `--accent` background, `--on-accent` text, `11px 22px` padding
- **Hover / Focus:** primary brightens (`filter: brightness(1.08)`); all buttons lift 1px on hover (`translateY(-1px)`)
- **Ghost:** transparent fill, `--rule` border; on hover, fills `--paper-alt` and border darkens to `--ink-faint`

### Chips
- **Style:** pill-shaped, `--accent-tint` background, `--accent` text, mono label type, no border

### Cards / Containers
- No card component exists in this system — content is separated by hairlines (`--rule`) and section padding, not boxes.

### Inputs / Fields
- **Style:** pill-shaped (`border-radius: 100px`), `--paper` background, 1px `--rule` border
- **Focus:** border shifts to `--accent`, no glow/shadow

### Navigation
- No persistent nav bar; navigation is a set of ghost-button anchor links in the hero CTA row.

### Ask (Chat) Component
The interactive centerpiece: a chat thread with pill-shaped suggestion chips, message bubbles with 14px radius (`--paper` background for the assistant, `--accent-tint` for the visitor), a three-dot typing indicator, and a pill-shaped composer input + filled send button.

## Do's and Don'ts

### Do:
- **Do** keep the accent color rare — one point of attention per view.
- **Do** use hairlines (`--rule`) and paper/paper-alt tonal shifts for all separation; never a shadow.
- **Do** keep interactive elements fully pill-shaped; keep content containers near-square (4–14px radius).
- **Do** cap running prose at `--measure` (68ch) and hero/thesis copy at their stated ch-widths.

### Don't:
- **Don't** introduce a navy/cyan dark-SaaS palette — the warm-black dark mode exists specifically to reject that look.
- **Don't** add card backgrounds, box-shadows, or elevation to content sections.
- **Don't** fabricate metrics, testimonials, or case-study content not already in the copy.
- **Don't** use the accent color as a large fill or background.
