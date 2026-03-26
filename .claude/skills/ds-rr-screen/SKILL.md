---
name: ds-rr-screen
description: "Generate UI screens using the @romainrichardpro Design System. Use for any screen, page, form or layout needing DS components (Button, Checkbox, InputContainer, SupportingText). Targets Linear/Vercel/Stripe-level UI quality: dense, typographic, precise."
---
# Design System Screen Generator — @romainrichardpro
This skill generates React screens using the @romainrichardpro Design System. The ambition is **Linear/Vercel/Stripe-level UI quality**: dense, typographic, precise — every spacing decision, every weight choice, every alignment intentional. The DS tokens and components are the vocabulary. How you compose them is the craft.
Before writing any code: read `COMPONENTS.md` at the repo root.
---
## The standard to aim for
Think Linear's onboarding. Vercel's dashboard. Stripe's settings pages.
What makes them exceptional isn't the components — it's the **intentionality of every detail**:
- Text doesn't just exist, it *anchors* the screen
- Spacing isn't applied mechanically, it *creates relationships*
- Hierarchy isn't declared, it's *felt*
- Every element earns its place
That's the bar. A generated screen should feel like a designer made deliberate choices, not like a template was filled in.
---
## Token naming — non-negotiable rule
CSS variables have **no `--color-` prefix**.
✅ `--focus`, `--background-neutral-default`, `--text-neutral-default`, `--border-brand-primary-default`, `--icon-neutral-alt`, `--size-09`
❌ `--color-focus`, `--color-background-*`, `--color-text-*`, `--color-border-*`, `--color-icon-*`, `--sizes-09`
When in doubt: check `packages/tokens/build/css/colors-light.css`.
---
## Before coding — commit to a vision
Don't start with a component. Start with a question: **what should this screen feel like?**
A login screen for a developer tool feels different from a settings page for a consumer app. Both can use the same DS. Neither should look the same.
Decide:
- **Density** — how much content, how much air? Linear is dense but never cramped. Find the right tension.
- **Dominant element** — what does the eye land on first? Commit to it. Give it weight.
- **Spatial logic** — where do sections begin and end? What creates the sense of structure without needing visual dividers?
- **Tone** — serious, neutral, warm? The DS is black and white at its core. Tone comes from spacing and type.
Only after this, start laying out components.
---
## Composition — freedom within the DS
Layout is entirely free as long as components and tokens come from the DS. There are no required patterns. The only rule is intentionality.
Some directions worth exploring:
**Split layouts** — content on one side, form on the other. Used by Linear's auth, Vercel's new project flow. Creates a sense of context and purpose.
**Full-bleed headers** — a wide, dark or tinted header with the page title, then a contained content zone below. Creates hierarchy at the page level, not just the component level.
**Asymmetric grids** — a narrow label column + a wider content column. Feels structured and professional. Works well for settings and profile pages.
**Compact stacking** — tight vertical rhythm, everything close, no wasted space. Feels fast and focused. Works for dense forms and dashboards.
**Generous centering** — a single narrow column centered on a large canvas. Nothing but the essential. Works for onboarding, confirmation screens, empty states.
These are starting points, not templates. Combine, subvert, invent — within the DS.
---
## Typography — where quality is won or lost
The DS has Inter and Vesterbro. Use them with precision.
- **Vesterbro** (`--font-family-tagline`) is for display moments only — a screen title, a marketing headline, an empty state. Use it once per screen, if at all. It's a statement.
- **Inter** carries everything else. The quality comes from *how* you use it.
Type hierarchy rules:
- Maximum 3 sizes per screen. Often 2 is enough.
- Weight contrast is more powerful than size contrast. `semibold` title + `regular` body reads cleaner than two sizes of `regular`.
- `--text-neutral-alt` (#888888) is your second voice — metadata, captions, placeholder-level information. Use it to reduce noise, not to fill space.
- Line-height and letter-spacing matter. For display text (`--font-size-24` and above), slightly tighter letter-spacing reads as intentional. CSS allows this even without a token.
- Labels above inputs: `--font-size-14`, `--font-weight-medium`. Not `--font-size-16`. The smaller size creates hierarchy between label and input.
---
## Spacing — rhythm, not rules
Don't apply spacing tokens mechanically. Think in terms of **visual grouping**.
Elements that belong together breathe *less* between them than elements that are separate. This is the primary tool for creating structure without borders or dividers.
Practical guidance:
- Label → Input → SupportingText: these are one unit. Tight internal spacing (`--spacing-02` to `--spacing-03`).
- Field → Field within the same logical group: `--spacing-06` to `--spacing-07`.
- Group → Group (e.g. "Personal info" → "Security"): `--spacing-09` to `--spacing-11`.
- Section header → first field: `--spacing-05` to `--spacing-06`. Closer than you think.
- Container padding: generous. `--spacing-09` minimum on forms. The content should never touch the edges.
The goal: the eye reads the structure from the spacing alone, before reading a single word.
---
## Details that separate good from exceptional
**Alignment is everything.** Every element on the same invisible left edge. No exceptions. Mixed alignment reads as unfinished.
**Button placement is a statement.** A full-width primary button on a narrow form says "this is the only thing to do." A right-aligned button says "this is a step." Choose deliberately.
**Empty states deserve care.** If a screen can have an empty state, design it. A well-crafted empty state (icon, title, description, CTA) demonstrates system maturity.
**Error states are part of the design.** Always design the error variant of every form. `status="Error"` + `withSupportingText` + a precise, human error message. Not "Invalid input." — "L'adresse email saisie n'est pas valide."
**Realistic content is non-negotiable.** Placeholder names, realistic email addresses, plausible descriptions. The screen should feel like it could ship tomorrow. French by default.
---
## File structure
Follow `packages/storybook/src/stories/screens/`:[ScreenName].tsx [ScreenName].module.css [ScreenName].stories.tsx
CSS Modules rules: no inline styles, no hardcoded values, `var(--token)` for everything, camelCase class names.
Storybook: title `Screens/[ScreenName]`, at minimum one default story.
---
## Accessibility — always, invisibly
- Form fields: `label` prop on every `InputContainer`
- Required fields: `isRequired` prop
- Error feedback: `status="Error"` + `withSupportingText` + meaningful French message
- Button labels: action verbs, not nouns ("Se connecter" not "Connexion")
- Single `<h1>` per screen
- Tab order follows visual reading order
Accessibility should be invisible to the user and effortless to the developer. The DS components handle most of it — use the props correctly.
---
## The one question before delivering
Before outputting any file, ask: **would a senior designer at Linear or Vercel be proud of this screen?**
Not "does it technically work" — that's the floor. The question is whether every choice was made, not just filled in.
If the answer is uncertain: tighten the spacing, sharpen the hierarchy, make the dominant element more dominant, remove anything that doesn't earn its place.
---
## Reference
- Components + tokens: `COMPONENTS.md` at repo root
- Existing screens: `packages/storybook/src/stories/screens/`
- Token source: `packages/tokens/build/css/`
- Storybook: http://localhost:6006
