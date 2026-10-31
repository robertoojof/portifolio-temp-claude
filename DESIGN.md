---
name: Roberto
description: A junior full-stack developer's portfolio in two lights, a huge two-line name opening straight onto the work.
colors:
  night-ground: "#08090b"
  night-surface: "#111316"
  night-line: "#ffffff14"
  night-line-strong: "#ffffff26"
  night-ink: "#e9ebee"
  night-muted: "#8d939c"
  night-signal: "#3ddcff"
  night-on-signal: "#03141a"
  night-on-ink: "#08090b"
  day-ground: "#f4f6f9"
  day-surface: "#ffffff"
  day-line: "#0e17261a"
  day-line-strong: "#0e172633"
  day-ink: "#0e1726"
  day-muted: "#586374"
  day-signal: "#0047ff"
  day-on-signal: "#ffffff"
  day-on-ink: "#f4f6f9"
typography:
  display:
    fontFamily: "Unbounded, M PLUS 1, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 8.5vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  display-page:
    fontFamily: "Unbounded, M PLUS 1, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Unbounded, M PLUS 1, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  title-card:
    fontFamily: "Unbounded, M PLUS 1, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 2.6vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Unbounded, M PLUS 1, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    letterSpacing: "-0.02em"
  wordmark:
    fontFamily: "Unbounded, M PLUS 1, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 800
    letterSpacing: "-0.02em"
  preview-label:
    fontFamily: "Unbounded, M PLUS 1, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.02em"
  role:
    fontFamily: "M PLUS 1, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 2.2vw, 1.3125rem)"
    fontWeight: 400
  lede:
    fontFamily: "M PLUS 1, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 2vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "M PLUS 1, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.8
  row-title:
    fontFamily: "M PLUS 1, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
  label:
    fontFamily: "M PLUS 1, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
  label-strong:
    fontFamily: "M PLUS 1, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
  small:
    fontFamily: "M PLUS 1, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
  meta:
    fontFamily: "M PLUS 1, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    fontFeature: "\"tnum\""
  switch:
    fontFamily: "M PLUS 1, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.05em"
  chip:
    fontFamily: "M PLUS 1, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.025em"
rounded:
  focus: "4px"
  tag: "6px"
  button: "8px"
  row: "12px"
  card: "16px"
  pill: "9999px"
spacing:
  container: "1200px"
  gutter-mobile: "1.25rem"
  gutter: "5%"
  header: "4.5rem"
  section-mobile: "5rem"
  section: "7rem"
  heading-gap-mobile: "2.5rem"
  heading-gap: "3rem"
  card-gap: "1.5rem"
  row-gap: "0.75rem"
  card-pad-mobile: "1.5rem"
  card-pad: "2.25rem"
components:
  button-primary:
    backgroundColor: "{colors.day-signal}"
    textColor: "{colors.day-on-signal}"
    typography: "{typography.label-strong}"
    rounded: "{rounded.button}"
    padding: "12px 24px"
    height: "52px"
  button-outline:
    textColor: "{colors.day-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "12px 24px"
    height: "52px"
  button-outline-hover:
    backgroundColor: "{colors.day-surface}"
  button-header:
    backgroundColor: "{colors.day-signal}"
    textColor: "{colors.day-on-signal}"
    typography: "{typography.label-strong}"
    rounded: "{rounded.button}"
    padding: "0 16px"
    height: "40px"
  button-submit-disabled:
    textColor: "{colors.day-muted}"
    typography: "{typography.label-strong}"
    rounded: "{rounded.button}"
    padding: "0 24px"
    height: "52px"
  theme-toggle:
    textColor: "{colors.day-ink}"
    rounded: "{rounded.button}"
    size: "40px"
  card-project:
    backgroundColor: "{colors.day-surface}"
    textColor: "{colors.day-ink}"
    rounded: "{rounded.card}"
    padding: "36px"
  row-post:
    backgroundColor: "{colors.day-surface}"
    textColor: "{colors.day-ink}"
    typography: "{typography.row-title}"
    rounded: "{rounded.row}"
    padding: "20px 24px"
  row-contact:
    backgroundColor: "{colors.day-surface}"
    textColor: "{colors.day-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.row}"
    padding: "16px 20px"
  input:
    backgroundColor: "{colors.day-ground}"
    textColor: "{colors.day-ink}"
    rounded: "{rounded.button}"
    padding: "0 16px"
    height: "48px"
  form-card:
    backgroundColor: "{colors.day-surface}"
    rounded: "{rounded.card}"
    padding: "36px"
  tag-stack:
    textColor: "{colors.day-muted}"
    rounded: "{rounded.tag}"
    padding: "4px 10px"
  placeholder-mark:
    textColor: "{colors.day-muted}"
    typography: "{typography.chip}"
    rounded: "{rounded.pill}"
    padding: "1px 8px"
---

# Design System: Roberto

## Overview

**Creative North Star: "Day & Night, neon edition"**

A name set huge and wide in two lines, the second line lit in a neon signal, opening straight onto the work. The layout and energy follow a reference the user chose (el-one-and-only.vercel.app), with its lime swapped for a signal linked to the anime influences: electric cyan by night, cobalt by day. Night is the native mood: a near-black ground, faintly lifted surface cards, white-alpha hairlines. Day is cool paper with pure-white cards and deep navy ink. Both themes are first-class; each is a full set of role values on `[data-theme]`, never an inversion of the other.

The material is type, hairlines and one signal. Unbounded at extrabold carries every display moment (name, page and section titles, card titles, the RO. wordmark); M PLUS 1 carries everything else with a humane, slightly rounded voice. Surfaces are flat rounded rectangles outlined in hairlines; there are no shadows, no blur, no glass. Content is honest: every unsupplied piece of copy is visibly marked as a placeholder and never wears the signal.

Motion is elastic at arrival and scroll-linked after that. The hero name springs into place with a real overshoot; everything below moves with the reader's scroll (never on a timer), using transform and opacity only, and only where scroll timelines exist and motion is welcome.

**Key Characteristics:**
- Two-line Unbounded name: ink over signal.
- One signal per theme (cyan #3ddcff night, cobalt #0047ff day) on the name's second line, primary actions and live states.
- Flat hairline-bordered rectangles: 8px controls, 12px rows, 16px cards.
- Opaque sticky header, no blur, no shadows anywhere.
- Spring entrance for the hero; scroll-linked choreography for everything else.
- Placeholders marked by a dashed underline and a dashed pill, never by colour.

## Colors

Near-monochrome grounds and inks with a single high-voltage signal per theme.

### Primary
- **Electric Cyan** (night-signal, #3ddcff): the night signal. The name's second line, filled primary actions (hero Email, header Contact, form submit, Live link), the building-state dot and label, the current Journey entry, the reading-progress hairline, contact-row icons, the wordmark's full stop, field errors, focus ring, selection and caret. Text on it uses Deep Teal Ink (night-on-signal, #03141a).
- **Cobalt** (day-signal, #0047ff): the same roles by day, with white text (day-on-signal) on fills.

### Neutral
- **Void Black** (night-ground, #08090b): night page ground, header fill, input fill.
- **Graphite Surface** (night-surface, #111316): night cards, rows, form panel.
- **Night Hairline** (night-line, white at 8%) and **Night Hairline Strong** (night-line-strong, white at 15%): card and row borders at rest; strong for outlined buttons, inputs, card hover, dashed empty states.
- **Frost Ink** (night-ink, #e9ebee) and **Ash Muted** (night-muted, #8d939c): night text and secondary text.
- **Cool Paper** (day-ground, #f4f6f9) and **White** (day-surface, #ffffff): day ground and cards.
- **Day Hairline** (day-line, navy at 10%) and **Day Hairline Strong** (day-line-strong, navy at 20%): day borders.
- **Deep Navy Ink** (day-ink, #0e1726) and **Slate Muted** (day-muted, #586374): day text.
- **On-ink** (night-on-ink / day-on-ink): the ground value, kept for text on ink fills; currently unused (the skip link uses signal fill with on-signal text and the 8px control radius).

### Named Rules
**The Paired Theme Rule.** Every colour is a role variable defined for both `[data-theme="light"]` and `[data-theme="dark"]`; components reference roles (`ground`, `surface`, `line`, `line-strong`, `ink`, `muted`, `signal`, `on-signal`), never raw hex.

**The Signal Duty Rule.** The signal marks identity (the name's second line, the wordmark dot), the primary action of a region, live state (building, current), and attention (focus, field errors, reading progress). Secondary actions borrow it only as a hover border. Placeholders, decoration and preview panels never wear it.

**The Neutral Disabled Rule.** A disabled primary action drops its fill entirely and becomes a muted outlined button; a dimmed signal fill would read as a live action.

## Typography

**Display Font:** Unbounded (with M PLUS 1, system-ui fallback)
**Body Font:** M PLUS 1 (with system-ui, sans-serif fallback)

**Character:** Unbounded is wide, geometric and loud at extrabold, giving the name and section titles poster weight; M PLUS 1 is a soft, legible Japanese-origin sans that keeps the reading text warm and quiet against it.

### Hierarchy
- **Display** (800, clamp 2.25rem to 6rem, 0.98): the hero name, two lines, once per site.
- **Display Page** (800, clamp 2.5rem to 4.5rem, 1): index page titles (Projects, Blog).
- **Headline** (800, clamp 2rem to 3.25rem, 1.05): home section titles, with nothing stacked above them.
- **Card Title** (700, clamp 1.375rem to 1.75rem, 1.25): project names inside cards.
- **Title** (700, 1.25rem): sub-headings inside a section (Journey, Send a message, sent confirmation at 1.5rem).
- **Wordmark** (800, 1.125rem): "RO." in the header and footer, the dot in signal.
- **Preview Label** (Unbounded 700, 0.875rem, +0.02em, muted): "Preview coming soon" in preview panels.
- **Role** (400, clamp 1.0625rem to 1.3125rem, muted): the line under the name.
- **Lede** (400, clamp 1.125rem to 1.3125rem, 1.625, max 40ch): the Let's talk lead. The hero story runs at clamp 1rem to 1.125rem, 1.8 line height, max 46ch.
- **Body** (400, 1.0625rem, 1.8, max 60ch): About paragraphs, in ink at 80%.
- **Row Title** (600, 1.125rem): post titles.
- **Label** (600 or 700, 0.9375rem): buttons, nav, contact-row names, View all / Back links.
- **Meta** (600, 0.875rem, tabular figures): dates, Journey years, project state.
- **Switch** (700, 0.8125rem, +0.05em, uppercase): EN / PT.
- **Chip** (500, 0.6875rem, +0.025em): the Placeholder Mark.

### Named Rules
**The Display Moments Rule.** Unbounded is for names and titles only: the hero name, page and section titles, card and sub-section titles, the wordmark, and the preview label. Never for running text, buttons or metadata.

## Layout

A centred container of 1200px with 5% side padding from 640px up (1.25rem below). The header is 4.5rem tall, sticky and opaque. The hero fills the first viewport (up to 60rem): availability badge when enabled, the two-line name, role, story, the Email and LinkedIn buttons side by side (stacked on mobile), then a quiet Scroll cue. Sections run 5rem vertical padding on mobile, 7rem from 640px, with the title row (title left, optional View all link right, baseline-aligned) 2.5 to 3rem above content.

- **About + Journey:** two columns from 1024px (1.1fr / 1fr, 5rem gap); stacked below.
- **Projects:** one card per row, 1.5rem apart. From 768px each card splits into preview and text (1fr / 1.1fr), alternating which side the preview takes.
- **Blog:** full-width row cards, 0.75rem apart.
- **Let's talk:** two columns from 1024px (1fr / 1.15fr): lead and contact-link rows left, message form right.
- **Index pages** (Projects, Blog): Back link, Display Page title, then the same lists.

Breakpoints are Tailwind's: 640px (gutter, button row, form field pair), 768px (nav links, card split), 1024px (two-column sections). The header's text nav hides below 768px; the Contact button, language switch and theme toggle always stay.

## Elevation & Depth

Flat. There are no shadows, halos or backdrop blur anywhere. Depth comes from three tonal steps (ground, surface, hairline) and nothing else: surfaces sit one step above the ground and are outlined by a hairline that strengthens on hover. The sticky header is filled with the ground colour and gains a bottom hairline only once the page scrolls.

### Named Rules
**The Hairline Depth Rule.** Separation is a 1px hairline in the line colour, raised to line-strong for interaction. If an element needs to feel lifted, change its border or its surface tone, never add a shadow or a blur.

## Shapes

Rounded rectangles in three sizes, matched to scale: gently rounded controls (8px) for buttons, inputs, the theme toggle and contact icons; softer rows (12px) for post and contact rows and empty states; generous cards (16px) for project cards and the form panel. Stack tags use 6px. Full pills appear only for the Placeholder Mark, the off-by-default availability badge and status dots. All borders are 1px. Dashed borders are reserved for placeholder and empty states (Placeholder Mark, empty-list panels, the missing-CV button, the form's not-configured note, placeholder state dots). The focus ring is a 2px signal outline at 3px offset with a 4px radius. The preview panel is the one textured surface: a 2rem grid of hairlines on the ground colour.

## Components

### Buttons
Rectangular, confident, 8px corners; icon, label, optional muted detail, trailing arrow.
- **Primary (Email, submit, project Live):** signal fill, on-signal text, bold label, 52px minimum height (40px for Live). Hover lifts 2px and drops to 90% opacity; the arrow nudges 2px right. Transitions 200ms ease-out.
- **Outline (LinkedIn, Résumé, project Repo):** transparent with a line-strong border, semibold ink label, muted detail. Hover turns the border signal and fills with surface.
- **Header Contact:** compact signal button (40px tall, 16px padding) at the far right of the header on every viewport. Hover lifts 1px, 90% opacity.
- **Disabled submit:** no fill, line-strong border, muted text, no lift (The Neutral Disabled Rule).
- **Quiet links (View all, Back, Scroll, Back to top):** muted label with an arrow; hover turns the text ink and nudges the arrow.

### Navigation
- **Header:** RO. wordmark left; muted nav links (About, Projects, Blog) from 768px, ink on hover; EN/PT switch with 40px targets (current in ink, other muted); theme toggle; Contact button. A 2px signal reading-progress line runs along the header's bottom edge.
- **Theme toggle:** 40px square, 8px radius, line-strong border, sun by day and moon by night; hover border signal.

### Cards / Containers
- **Project card:** surface, 16px radius, hairline border (line-strong on hover), clipped to its radius. Preview panel (grid texture, Preview Label centred, min 13rem tall, 18rem from 768px) separated from the text side by a hairline. Text side: Card Title, muted summary (max 52ch), state line with an 8px dot (signal for building, ink for shipped, muted outline for archived, dashed when placeholder), optional stack tags, Live and Repo buttons.
- **Post row:** surface, 12px radius, hairline border; row title left, tabular muted date right. Empty state is a dashed line-strong row with the placeholder first-post title and a muted note.
- **Contact row:** surface, 12px radius, 64px min height; a 40px hairline-bordered icon tile with the icon in signal, label plus muted detail, and an up-right arrow that turns ink and nudges diagonally on hover.
- **Journey:** a 1px line-strong rail with 10px ringed dots; past entries muted on ground, the current real entry filled signal with its date in signal.

### Inputs / Fields
- **Style:** ground fill inside the surface form card, 1px line-strong border, 8px radius, 48px tall (textarea min 10rem, vertical resize), 0.9375rem ink text, muted placeholder at 70%. Labels sit above in 0.875rem semibold ink.
- **States:** hover border muted; focus border signal plus the global focus ring; error border signal with the message below in signal (0.875rem, medium); disabled at 60% opacity with a not-allowed cursor.
- **Not configured:** until `RESEND_API_KEY` and `CONTACT_TO_EMAIL` are both set, every field and the submit are disabled, the form title carries the Placeholder Mark, and a dashed muted note explains that sending is off and points to email or LinkedIn. A sent message replaces the form with a surface card in Title type.

### Placeholder system
Placeholder text renders with a 1px dashed muted underline at 0.3em offset plus the Placeholder Mark, a dashed muted pill reading "Placeholder" / "A preencher". Placeholder links render with `aria-disabled` and no href. Placeholders keep their real position and size so the layout is honest about what is missing.

### Motion
- **Spring arrival:** the hero's name lines rise (from 0.45em down, scaled 0.9 vertically, 20% opacity) and the contact buttons pop (from 88% scale) on a spring curve written as `linear()` stops that overshoots about 11% and settles; 1000 to 1100ms, staggered 90ms per step. Text is legible from the first frame.
- **Scroll choreography:** reading-progress line, header hairline settling in over the first 8rem, section titles rising whole, the Journey rail drawing down with entries and dots arriving in turn, project cards sliding in from alternating sides with their preview grid moving at parallax, and post and contact rows rising one by one. All scroll-linked. The hero name has no exit effect: it scrolls plainly under the opaque header, fully opaque at rest.
- **Theme change:** a top-down horizon wipe of the new theme over the old (620ms, cubic-bezier(0.16, 1, 0.3, 1)) via view transitions; instant under reduced motion or without support.

### Named Rules
**The Whole-Content Rule.** Content reveals move with transform and opacity only and are never clipped; text is whole and readable at every frame. The theme wipe is the only clip, and it reveals a theme, not content.

**The Optional Motion Rule.** Every animation runs only under `prefers-reduced-motion: no-preference`, and scroll choreography additionally only inside `@supports (animation-timeline: scroll())`. Without either, everything rests in its final, visible state.

## Do's and Don'ts

### Do:
- **Do** define every new colour as a day and night pair behind a role variable (The Paired Theme Rule).
- **Do** keep the signal for identity, the primary action, live state and attention (The Signal Duty Rule).
- **Do** separate with 1px hairlines and lift with border or tone, not shadows (The Hairline Depth Rule).
- **Do** use 8px for controls, 12px for rows, 16px for cards.
- **Do** mark every unsupplied piece of content with the dashed underline and the Placeholder Mark, and render placeholder links without an href.
- **Do** keep reveals to transform and opacity, scroll-linked, and gated on reduced-motion and scroll-timeline support (The Whole-Content Rule, The Optional Motion Rule).
- **Do** reserve Unbounded for names and titles (The Display Moments Rule).

### Don't:
- **Don't** put eyebrow or kicker labels above headings.
- **Don't** add invented stats, metrics, skill bars or percentages.
- **Don't** use glass, backdrop blur, drop shadows or halo glows; the header is opaque.
- **Don't** reveal content with clipping masks or wipes.
- **Don't** colour placeholders, preview panels or decoration with the signal.
- **Don't** use characters, logos or recognisable franchise UI from the anime influences.
