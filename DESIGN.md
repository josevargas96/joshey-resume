---
name: Jose Vargas — Portfolio
description: A friendly personal portfolio at Read.cv clarity and Stripe finish; person first, proof second, nothing themed.
colors:
  paper: "#FFFFFF"
  surface: "#F7F8FA"
  ink: "#111827"
  ink-soft: "#4B5563"
  ink-faint: "#6B7280"
  line: "#E5E7EB"
  accent: "#2F6FEB"
  accent-ink: "#FFFFFF"
  accent-tint: "#EEF3FE"
  accent-strong: "#1D4ED8"
  status-green: "#16A34A"
typography:
  display:
    fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(3rem, 7.5vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.045em"
  metric:
    fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "tnum"
  headline:
    fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.6rem, 3vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.25rem, 2.2vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  lede:
    fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)"
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "-0.015em"
  subtitle:
    fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.05rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.82rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  control-sm: "8px"
  control: "10px"
  field: "14px"
  card: "16px"
  bubble: "18px"
  panel: "24px"
  pill: "100px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  section: "88px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "46px"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "46px"
  button-secondary-hover:
    backgroundColor: "{colors.surface}"
  button-more:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "44px"
  nav-link:
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.control-sm}"
    padding: "0 12px"
    height: "40px"
  nav-link-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
  card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "30px 32px"
  metric-tile:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent}"
    typography: "{typography.metric}"
    rounded: "{rounded.card}"
    padding: "24px"
  status-pill:
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    padding: "6px 14px 6px 12px"
  chip:
    backgroundColor: "{colors.accent-tint}"
    textColor: "{colors.accent-strong}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  suggestion-pill:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  ask-panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.panel}"
    padding: "48px"
  composer:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "6px"
  bubble-them:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.bubble}"
    padding: "14px 18px"
  bubble-you:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.bubble}"
    padding: "14px 18px"
---

# Design System: Jose Vargas — Portfolio

## Overview

**Creative North Star: "The Friendly Profile"**

A personal portfolio played straight: the category standard, finished at Read.cv clarity and Stripe craft. The person comes first (a status pill, the name at display size, one plain sentence), then the proof (four metric tiles, a role timeline of case-study cards), then a way to talk (an inline chat and an email card). Nothing is themed. The world is a white page, cool near-black ink, one confident blue, and one typeface, and it earns its polish through spacing, tight bold headings, and soft rounded containers rather than decoration.

Density is relaxed and readable. Sections breathe on a wide vertical rhythm, text holds a comfortable measure, and containers are either hairline-bordered white cards or borderless cool-grey tiles. Blue is reserved for action and evidence, so a scan of any screen lands on the buttons and the numbers. Dark mode is a full peer of light mode, not an afterthought: every color token has a dark value tuned for contrast.

This world replaces an earlier warm-paper "decision memo" treatment that was rejected as too serious. It carries no serif, no paper texture, and no warm accent.

**Key Characteristics:**
- White ground, cool ink, one blue accent; green appears only as the status dot.
- Figtree for everything, bold and tightly tracked at heading sizes.
- Soft rounded geometry: 10px controls, 16px cards and tiles, 24px large panels, pills for status and tags.
- Flat by default; the primary button is the only surface with a shadow at rest.
- A timeline whose role details stay in view while case-study cards scroll past.
- Full dark mode through `prefers-color-scheme`; print maps everything to black on white.

## Colors

A cool, near-monochrome neutral scale with a single saturated blue doing all of the pointing.

### Primary
- **Signal Blue** (accent): the only emphasis color. Primary button fill, the visitor's chat bubble, the send button, metric numbers, the Problem / Decision / Outcome labels, result-chip text, the footer email link, the focus ring, caret, and selection tint. Dark mode lifts it to a brighter periwinkle (#6A9BFF) with near-black text on fills.
- **Blue Wash** (accent-tint): the pale ground under result chips only. Dark value #18233A.
- **Deep Blue** (accent-strong): blue text set on Blue Wash, i.e. result-chip text. Signal Blue measures only 4.1:1 on the wash; Deep Blue measures 6.0:1. Dark mode reuses #6A9BFF (5.8:1 on the dark wash).
- **On-Blue** (accent-ink): text on blue fills; white in light mode, near-black (#0E1116) in dark.

### Tertiary
- **Available Green** (status-green): the status dot in the hero pill and its soft 4px halo. Nowhere else. Dark value #4ADE80.

### Neutral
- **Paper** (paper): page ground, card fills, secondary buttons, the chat composer, the other party's chat bubble. Dark #0E1116.
- **Cool Surface** (surface): quiet fills: metric tiles, the Ask panel, hover states for nav links and secondary buttons. Dark #161A21.
- **Ink** (ink): headings, strong text, lead paragraphs, card summaries. Dark #F3F4F6.
- **Ink Soft** (ink-soft): body copy, the hero one-liner, nav links at rest, beat text. Dark #B4BBC6.
- **Ink Faint** (ink-faint): meta only: section-head meta, dates, chat speaker labels, notes, placeholder, colophon. Measures 4.8:1 on white and 4.55:1 on Cool Surface; do not lighten it. Dark #8C95A3.
- **Hairline** (line): 1px card borders, role dividers, pill outlines, toolkit rules. Dark #262C36.

### Named Rules
**The One Blue Rule.** Blue is the only hue that carries emphasis. No second accent, no gradients, no colored section backgrounds. Green exists only as the status dot.

**The Proof Is Blue Rule.** Accent-colored text marks evidence or action: numbers, outcome labels, result chips, links you can use. Body copy never turns blue for decoration.

## Typography

**Display Font:** Figtree (with -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif)
**Body Font:** Figtree (same stack)

**Character:** A single friendly geometric sans. Headings get their authority from weight 700 and negative tracking that tightens as size grows; body copy stays at regular weight with generous leading. Weights loaded: 400, 500, 600, 700, plus 400 italic.

### Hierarchy
- **Display** (700, clamp 3rem to 5.25rem, line-height 1, -0.045em): the name in the hero. One per page.
- **Metric** (700, clamp 1.8rem to 2.4rem, line-height 1, -0.04em, tabular numerals): metric tile numbers, in blue.
- **Headline** (700, clamp 1.6rem to 2rem, 1.15, -0.03em): section headings. The footer call to action uses a larger step of the same voice (clamp 1.6rem to 2.4rem, -0.035em).
- **Title** (700, clamp 1.25rem to 1.5rem, 1.25, -0.025em): case-study headings, capped at 30ch and balanced.
- **Lede** (500, clamp 1.2rem to 1.5rem, 1.45 to 1.5): the hero one-liner (ink-soft, 34ch) and the About section's first paragraph (ink, -0.015em). Emphasis inside the one-liner is upright 600 in full ink, not italic.
- **Subtitle** (700, 1.05rem to 1.12rem, -0.01em to -0.015em): role titles in the timeline, "What I'm looking for" and Toolkit card headings.
- **Body** (400, 17px desktop / 16px phone, 1.6; 1.65 to 1.85 in dense lists): paragraphs, capped at 66ch.
- **Label** (600, 0.82rem, +0.02em, sentence case): Problem / Decision / Outcome terms and chat speaker names. Never uppercase.

### Named Rules
**The One Family Rule.** Figtree only. Hierarchy comes from size, weight, tracking, and color, never from a second typeface.

**The Tighten As You Grow Rule.** Tracking scales with size: -0.01em at subtitle size down to -0.045em at display size. Body text stays at normal tracking.

## Layout

A single centered column, 1120px max, with 32px side gutters (20px under 640px). Sections sit on an 88px top rhythm (64px on phones); the footer opens with 96px. Each section starts with a head row: the heading on the left and a short faint meta fact (a place, a date range, a credential) on its baseline to the right, wrapping under it on narrow screens.

- **Hero:** two columns (text, then a 320px 4:5 portrait) with a 72px gap. When no portrait is present, the grid collapses to one column instead of reserving an empty slot. Under 900px the portrait moves above the name as a 112px square avatar with 22px corners, zoomed 1.6x onto the face from the top of the frame, because the full 4:5 photo leaves the face too small at that size.
- **Metrics:** four equal tiles with 16px gaps; two columns under 900px.
- **Selected work timeline:** each role is a 220px meta column plus a fluid card column, 48px apart, separated by hairlines. The role meta (title, company, dates) is sticky 28px from the top so it stays in view while that role's cards scroll. Under 900px it becomes one inline line separated by middle dots, and stops sticking.
- **Case-study beats:** an 88px label column beside the text; stacked under 640px.
- **Looking for:** three equal cards; one column under 900px. **Toolkit:** two columns with 32px / 48px gaps; one column under 640px.
- **Spacing rhythm:** 8, 16, 24, 32, 48 for gaps and padding; 88 between sections.
- **Print:** navigation, buttons, portrait, the Ask section, expand buttons, and the footer action row are hidden; collapsed panels print open; sticky meta goes static; every color token is overridden to black, white, and grey (#000, #222, #555, #ccc). Those print values are print-only and are not part of the palette.

### Named Rules
**The Sticky Meta Rule.** Context holds still while evidence scrolls: role details stay pinned beside their case studies on wide screens.

## Elevation & Depth

Flat by default. Depth comes from two tools: a 1px hairline border on white cards, and a cool-grey surface fill for tiles and the Ask panel. The only shadow at rest belongs to the primary button, which also lifts 1px on hover. The green status dot carries a soft 4px halo ring, which is a glow, not elevation.

### Shadow Vocabulary
- **Primary lift** (`box-shadow: 0 1px 2px rgb(17 24 39 / .12), 0 6px 16px -6px color-mix(in srgb, var(--accent) 60%, transparent)`): the primary button only; a tight contact shadow plus a soft blue bloom.
- **Status halo** (`box-shadow: 0 0 0 4px color-mix(in srgb, var(--green) 20%, transparent)`): the status dot only.

### Named Rules
**The Earned Shadow Rule.** One shadow per screen at rest, and it belongs to the primary action. Cards, tiles, pills, and panels stay flat; they separate by hairline or fill, never by drop shadow. Shadows are soft and blurred; never a hard offset.

## Shapes

Soft, friendly geometry with a small, consistent radius set tied to what an element is:

- **8px:** text links styled as hit areas (nav links, footer links).
- **10px:** buttons, the expand button, the send button.
- **14px:** the chat composer field.
- **16px:** cards and metric tiles.
- **18px with one 6px tail corner:** chat bubbles; the tail sits bottom-left for Jose and bottom-right for the visitor.
- **24px:** the largest panels (the Ask panel and the portrait); on phones the Ask panel drops to 20px and the avatar uses 22px.
- **Pill:** status, result chips, and suggestion pills.
- **Circle:** the status dot and list bullets.

Borders are always 1px hairlines in the line color. Small marks are drawn in CSS rather than set as glyphs: the expand chevron is a rotated two-sided border, and list bullets are tiny ringed dots.

### Named Rules
**The Radius Follows Role Rule.** Controls get 10px, containers get 16px, tags and status get pills. A new element takes the radius of its role; it does not invent a new one.

## Components

### Buttons
Confident and quiet at once: one filled blue action, everything else outlined white.
- **Shape:** gently rounded (10px), 46px tall, 20px side padding, weight 600 at 0.97rem.
- **Primary:** blue fill, on-blue text, the primary lift shadow; lifts 1px on hover. One per group. On phones it takes the full row and the secondaries share the next.
- **Secondary:** paper fill, ink text, hairline border; hover shifts the fill to Cool Surface and darkens the border slightly.
- **Expand ("Also in this role"):** a secondary-style 44px button with a CSS chevron that rotates to point up when open; its label switches to "Show less". Transitions are 150ms ease.
- **Focus:** every interactive element gets a 2px blue outline at 3px offset with a 6px radius.

### Chips
- **Result chips:** pill, Blue Wash ground, Deep Blue text, 600 at 0.88rem. They restate a case study's measurable outcome and never carry opinions.
- **Status pill:** hairline pill with the green dot, ink-soft 500 text. One per page, in the hero.
- **Suggestion pills:** 44px outlined pills on paper; on real pointers only (`hover: hover`), hover turns the border and text blue. Disabled while an answer is loading.

### Cards / Containers
- **Corner Style:** 16px.
- **Background:** Paper with a hairline border (case studies, "What I'm looking for", footer), or Cool Surface with no border (metric tiles, the Ask panel at 24px).
- **Shadow Strategy:** none; see Elevation & Depth.
- **Internal Padding:** 24px tiles, 26px small cards, 30px / 32px case studies, 44px / 48px footer, 48px Ask panel; about 20px on phones.

### Inputs / Fields
- **Style:** the composer is one 14px-radius paper field with a hairline border and 6px inset, holding a borderless text input and the blue send button side by side.
- **Focus:** focus-within turns the whole field's border blue; the input itself shows no separate outline.
- **Text size:** input text stays at 16px minimum so iOS does not zoom.
- **Disabled:** the send button drops to 45% opacity while busy.

### Navigation
Name on the left in 700 ink; Work / About / Ask on the right as 40px-tall ink-soft links with 8px radius. Hover fills Cool Surface and darkens to ink. No sticky header, no hamburger; the links tighten their padding on phones.

### Ask Chat Panel (signature)
A Cool Surface panel (24px radius) with a section head, a lede, suggestion pills, the thread, the composer, and a faint note. Bubbles cap at 85% width (full width on phones). Jose's bubbles are paper with a hairline; the visitor's are blue with on-blue text. A typing state shows three faint dots blinking in sequence. An error turns the bubble border dashed and the text ink-soft, and offers an inline blue underlined "Try again" button followed by an email fallback.

### Case Study Card (signature)
A white card with a title, then a definition list of Problem / Decision / Outcome with blue labels in a left column, then a row of result chips. Lighter roles show a one-line summary in ink and put the full study behind the expand button, separated by a hairline when open.

### Footer Card
A white card holding a large headline-voice call to action with the email as a blue link (2px underline at 35% blue, full blue on hover), a secondary "Copy email" button with a polite live status, and LinkedIn / GitHub links styled like nav links. A centered faint colophon sits below.

## Do's and Don'ts

### Do:
- **Do** keep blue for action and evidence only: buttons, metric numbers, outcome labels, result chips, usable links, focus.
- **Do** set every heading in Figtree 700 with negative tracking that tightens as size grows.
- **Do** separate containers with a 1px hairline or a Cool Surface fill.
- **Do** give controls 10px corners, containers 16px, and tags or status a pill.
- **Do** collapse a layout slot that has no content (the hero drops to one column without a portrait).
- **Do** keep hit areas at 44px minimum and scope hover color changes to `hover: hover` where a tap would leave them stuck.
- **Do** define a dark value for every new color token, and a print override for it.
- **Do** keep accent text at 4.5:1 or better against its own ground at body and label sizes.

### Don't:
- **Don't** add a second accent hue, gradients, or colored section backgrounds.
- **Don't** introduce a second typeface, a serif, or uppercase letterspaced labels.
- **Don't** put shadows on cards, tiles, or pills, and never use a hard offset shadow.
- **Don't** place a small label or kicker above a section heading; section context goes in the faint meta on the heading's baseline, and it states a fact.
- **Don't** use glyph or emoji icons; draw small marks in CSS or inline SVG.
- **Don't** lighten Ink Faint below its current value or use it for body copy.
- **Don't** bring back warm paper, Newsreader, or vermilion; that direction was rejected.
