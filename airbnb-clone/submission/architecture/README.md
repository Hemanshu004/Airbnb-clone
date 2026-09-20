# Frontend Architecture

This directory contains the visual hierarchy of the React components constructed for the Airbnb clone.

## Component Hierarchy & Scaling Decisions

The architecture follows a strictly modular hierarchy, ensuring single-responsibility boundaries for each major UI section:
- **`App`**: Serves as the master orchestrator and state holder for global interactions (e.g., controlling the `Lightbox` index and `PhotoTour` visibility).
- **Page Sections**: Structurally flat components like `HeroGallery`, `ListingInfo`, `BookingCard`, and `ReviewsSection` compose the main grid layout without requiring deep prop drilling.
- **`modalManager.js`**: A standalone utility decoupled from the component tree. This design decision scales gracefully by preventing deeply nested modals from conflicting over body scroll-locking and focus trapping, centralized in a single module.
