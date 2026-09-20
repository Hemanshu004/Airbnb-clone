# Engineering Decisions

## Frontend scope
Scope stays strictly to replicating the reference's visual design and
interactive behavior. No state management library (Redux, Zustand) was
introduced — the page is read-only with a small amount of local UI state
(saved/description-expanded/lightbox-index), which `useState` handles
without added complexity.

## Backend
Not implemented, by design. The assignment marks backend as optional and
the core evaluation criteria — visual fidelity, interaction/animation
parity, accessibility — don't require one. Listing/photo data is static
and lives in `src/data/photos.js`.

## Omitted features
No functional booking engine, chatbot, or live messaging — none of these
are present in the reference or required by the brief, and adding them
would be scope creep against "a clean, complete implementation is better
than an over-engineered incomplete one."

## AI usage during development
Antigravity agents were used throughout — component planning, initial
implementation, visual QA, and a structural refactor pass. Full detail,
including a mid-project correction, is in `AI_WORKFLOW.md`. That document
is the source of truth for process; this file covers *decisions*, not
process narrative.

## Visual QA process
Performed by comparing rendered screenshots of the implementation against
the reference side by side, iterating on spacing/typography/color values
until they matched. This is an ongoing visual-comparison process, not a
one-time pass — see the `visual-qa` skill for the checklist used.

## Accessibility
Modal focus management (trap + restore) was implemented explicitly for
Photo Tour and Lightbox, not left as a gap — see `AI_WORKFLOW.md` Phase 6.
Icon-only buttons carry `aria-label`s; interactive elements have visible
`:focus-visible` states; `prefers-reduced-motion` is respected.

## Code originality
An early implementation pass produced markup with structural artifacts
consistent with reference-derived source (generated-looking class names,
hardcoded reference-domain links). This was identified during internal
review and corrected via a full structural refactor before this submission
— components split with explicit dependency mapping, all class names
replaced with a readable naming scheme, all reference-domain references
removed, and reference-site logo/icon source not retained. Full detail in
`AI_WORKFLOW.md` Phase 5.
