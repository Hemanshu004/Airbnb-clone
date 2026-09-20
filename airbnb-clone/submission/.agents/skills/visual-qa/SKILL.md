---
name: visual-qa
description: A skill to perform visual quality assurance against a reference layout.
---
# Visual QA Skill

This skill enforces strict visual parity without modifying underlying DOM layout logic unnecessarily. It guarantees that padding, margin, border-radius, font sizes, and layout grids remain entirely faithful to the provided reference design. 

## Directives
1. Do not rename classes during Visual QA.
2. Only adjust values that explicitly deviate from the reference.
3. Validate spacing using exact pixels.
