# Dhaba Junction Faridabad - Restaurant Website

## Overview

Dhaba Junction Faridabad is a single-page restaurant website showcasing an authentic North Indian dhaba-style dining experience. The application presents the restaurant's menu, ambiance, location, and contact information in a visually appealing, mobile-responsive format following vibrant dhaba design aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript using Vite as the build tool and development server.

**Routing**: Wouter (lightweight React router) handles client-side routing with a single-page application structure.

**UI Component System**: 
- Shadcn/ui component library (New York style variant) for pre-built, accessible UI components
- Radix UI primitives for low-level accessible components
- Tailwind CSS for utility-first styling with custom design tokens

**State Management**: 
- TanStack Query (React Query) for server state management and data fetching
- React hooks for local component state

**Styling Architecture**:
- Tailwind CSS with custom configuration extending base colors and design tokens
- CSS variables for theming (light/dark mode support)
- Custom spacing primitives (4, 8, 12, 16, 20, 24px units)
- Responsive design with mobile-first approach

**Animation**: Framer Motion for page transitions, scroll animations, and interactive UI elements.

**Design System**:
- Typography: Serif fonts (Playfair Display/Cormorant Garamond) for headings, Sans-serif (Inter/Montserrat) for body text
- Color system based on HSL values with CSS custom properties
- Component variants using class-variance-authority

**Page Structure**: Single-page layout with 7 main sections:
1. Hero section with full-screen background
2. Pop-up/restaurant information
3. Featured dishes grid
4. Ambiance section
5. Menu highlights
6. Printable menu with gallery
7. Location and contact form

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**Development Environment**: Vite middleware integration for hot module replacement in development mode.

**API Structure**: RESTful API design with `/api` prefix for all backend routes (currently minimal implementation with storage interface prepared).

**Session Management**: Configured for connect-pg-simple (PostgreSQL session store) though not actively implemented.

**Build Process**: 
- Frontend: Vite builds React application to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js` as ESM module

**Logging**: Custom logging middleware for request/response tracking with timestamp formatting.

### Data Storage

**ORM**: Drizzle ORM with PostgreSQL dialect configured for type-safe database operations.

**Database Provider**: Neon Database (serverless PostgreSQL) via `@neondatabase/serverless`.

**Schema Design**: 
- Users table with UUID primary keys, username, and password fields
- Zod validation schemas generated from Drizzle schema for type safety

**Migration Strategy**: Drizzle Kit handles schema migrations with `db:push` command.

**In-Memory Fallback**: MemStorage class provides temporary in-memory storage implementation for development/testing.

### External Dependencies

**Third-Party UI Libraries**:
- Radix UI (15+ component primitives for accessibility)
- Shadcn/ui component collection
- Embla Carousel for image galleries
- Lucide React for icon system
- CMDK for command palette patterns

**Form Handling**:
- React Hook Form for form state management
- Hookform Resolvers with Zod for validation

**Database & Backend Services**:
- Neon Database (serverless PostgreSQL)
- Drizzle ORM and Drizzle Zod for type-safe database operations
- Connect-pg-simple for session storage

**Development Tools**:
- Replit-specific plugins (vite-plugin-runtime-error-modal, vite-plugin-cartographer, vite-plugin-dev-banner)
- TSX for TypeScript execution in development
- esbuild for production builds

**Utilities**:
- date-fns for date manipulation
- clsx and tailwind-merge for className composition
- nanoid for ID generation

**Asset Management**: Static assets stored in `attached_assets` directory including generated images and menu text files.

**Font Loading**: Google Fonts integration for typography (Architects Daughter, DM Sans, Fira Code, Geist Mono families).

**SEO Configuration**: Meta tags configured for restaurant discovery including Open Graph properties and structured description.