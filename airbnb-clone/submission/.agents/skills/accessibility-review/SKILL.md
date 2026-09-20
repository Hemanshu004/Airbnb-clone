---
name: accessibility-review
description: A skill to enforce semantic HTML and robust keyboard navigation.
---
# Accessibility Review Skill

This skill governs the integration of proper WAI-ARIA roles, semantic HTML attributes, and programmatic focus trapping. 

## Directives
1. Ensure all icon-only buttons possess a descriptive `aria-label`.
2. Guarantee that modal overlays trap `Tab` and `Shift+Tab` cycles.
3. Handle semantic closing triggers (`Escape`) and component-specific navigation (e.g. `ArrowLeft`/`ArrowRight` for galleries).
4. Restore `document.activeElement` reliably upon modal closure.
