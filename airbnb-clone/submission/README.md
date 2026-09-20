# Airbnb Listing Clone

## Project Overview
This project is a high-fidelity frontend clone of an Airbnb listing page, built as a take-home assignment for PlayPower Labs. It accurately reproduces the visual design, layout, and core interactive behaviors of the reference implementation, emphasizing modularity, accessibility, and visual fidelity.

## Technologies Actually Used
- React (v19)
- Vite
- Vanilla CSS
- Node.js

## Installation
1. Clone or extract the project repository.
2. Navigate to the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```

## Development Command
To start the local development server:
```bash
npm run dev
```

## Production Build Command
To create an optimized production build:
```bash
npm run build
```

## Testing Command
Currently, this project relies on manual visual QA and accessibility testing as per the assignment guidelines. A formal test runner is not configured.

## Features
- **Listing Page**: A pixel-perfect replication of the listing details, including header, image gallery, property info, and reservation card.
- **Photo Tour & Lightbox**: Interactive modal gallery for viewing all property photos.

## Keyboard Interactions & Accessibility
- **Modals**: Escape key closes active modals. Focus is managed within the modal when open and restored to the trigger element upon closing.
- **Navigation**: Left and Right arrow keys navigate through images in the Lightbox.
- **Semantics**: Interactive elements use meaningful accessible names and appropriate ARIA attributes.
- **Focus**: Visible focus indicators are preserved for keyboard navigation.

## AI Workflow
The development process was assisted by Antigravity AI agents. The exact prompts, inspection steps, and modifications are documented in `AI_WORKFLOW.md`.

## Architecture Diagram
The system architecture for a production-scale version of this application is documented in the `architecture/` directory, including a visual diagram (`vacation-rental-architecture.pdf`) and detailed explanations (`README.md`).

## Project Structure
- `src/`: Contains all React components and CSS files.
- `public/`: Static assets (images, icons).
- `.agents/`: Antigravity AI workflow configuration, rules, and skills.
- `architecture/`: Production architecture documentation.
- `docs/`: Engineering decisions and other documentation.
