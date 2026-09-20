---
name: submission-review
description: A skill to perform final audits, packaging, and validation of the codebase.
---
# Submission Review Skill

This skill governs the final codebase packaging process. It ensures the integrity of source code and documentation prior to delivery.

## Directives
1. Verify that reference URLs and obfuscated DOM classes have been removed.
2. Confirm the absence of secrets, credentials, and unnecessary development artifacts.
3. Validate that a pristine `npm run build` succeeds seamlessly.
4. Prepare the `submission/` directory according to strict file inclusion criteria.
