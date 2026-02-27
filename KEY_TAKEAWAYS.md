# Key Takeaways

- **Design System:**
  - All colors, spacing, and border radii are defined as CSS variables and Tailwind tokens in `globals.css`.
  - Utility classes like `.btn`, `.btn-primary`, and `.card` ensure consistent, reusable styling.

- **Dark Mode:**
  - Uses a `dark` class on `<html>` and CSS variables for instant theme switching.
  - Custom logic with `classList` and localStorage for persistent user preference.

- **Next.js API & Config:**
  - CRUD operations handled with API routes and dynamic `[id]` routing.
  - Environment variables (e.g., `MONGODB_URI`) for secure config.

- **MongoDB Setup:**
  - Mongoose models for schema and DB interaction, connected via `MONGODB_URI`.
  - Models are reused in all API routes for consistency.

- **PostCSS & Tooling:**
  - Tailwind, autoprefixer, and utility-first classes for modern, cross-browser CSS.
  - `clsx` and `tailwind-merge` for clean, conflict-free class management.

- **Component Structure:**
  - Components organized by feature (Card, Navbar, TicketForm, etc.) and responsibility.
  - All form logic is encapsulated in TicketForm for both create and edit flows.
