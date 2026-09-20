# Engineering Decisions

## Frontend Scope
The frontend remains strictly focused on the requested scope: structuring and refining the visual design and interactive behaviors (like the photo tour and lightbox) of the Airbnb listing page. The codebase relies entirely on vanilla React and static CSS without complex state management libraries (like Redux), prioritizing lightweight performance and simplicity for a static UI.

## Backend Implementation
A backend implementation was deemed optional and unnecessary. The core requirements emphasize visual fidelity, accessibility, and UI/UX replication. Mocking the data directly within the frontend provides a sufficient and much simpler way to evaluate these core frontend competencies without the added complexity of setting up and running a local API server.

## Omission of Unnecessary Features
Features not explicitly visible or functionally required by the assignment (e.g., a functional booking engine, a chatbot, live messaging) were intentionally omitted to avoid bloating the frontend and violating the rule against inventing unrequested functionality.

## AI-Assisted Workflow & Cleanup
AI (Antigravity agents) was strictly utilized in a highly mechanical, multi-stage cleanup and refactoring pipeline. Instead of fabricating code from scratch, a monolithic, obfuscated codebase was meticulously extracted, structurally de-minified, semantically renamed, and made accessible as a reverse-engineering/refactoring exercise. All prompts and interactions are strictly documented in `AI_WORKFLOW.md`. 

## Accessibility Considerations
Accessibility was structurally enforced. A dynamic focus-trapping engine (`modalManager.js`) was engineered to isolate keyboard cycles safely within active modals. The UI now fully supports semantic keyboard navigation (Escape to close modals, Arrow keys for galleries), logical DOM flow, and semantic `aria-labels` for icon buttons, guaranteeing compliance without compromising original visual fidelity.
