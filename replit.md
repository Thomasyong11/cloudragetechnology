# Overview

This is a modern Web3-styled React application for Cloudrage Technology, a smart home automation company based in Ontario, Canada. The application serves as a professional website showcasing smart living and home automation services. Built with a full-stack architecture, it features a React frontend with Tailwind CSS styling and shadcn/ui components, backed by an Express.js server with PostgreSQL database integration using Drizzle ORM.

The site targets middle to upper-class homeowners, landlords, and small business owners in Canada, presenting professional home automation services including design consultation, installation, and training. The brand emphasizes trust, reliability, precision, energy efficiency, and eco-friendliness through its navy blue, cyan, orange, and sage green color palette.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built with React 18 using TypeScript and follows a modern component-based architecture:

- **Framework**: React with TypeScript for type safety and better developer experience
- **Routing**: Wouter for lightweight client-side routing with pages for Home, About, Services, Blog, and Contact
- **State Management**: React Query (TanStack Query) for server state management and caching
- **UI Library**: shadcn/ui components built on Radix UI primitives for accessibility and customization
- **Styling**: Tailwind CSS with custom brand colors (navy, cyan, orange, sage) and CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Component Structure**: Organized into pages, components, and reusable UI components with proper separation of concerns

## Backend Architecture
The server follows a Node.js/Express architecture with TypeScript:

- **Framework**: Express.js with TypeScript for API development
- **Development Server**: Custom Vite integration for hot module replacement in development
- **Storage Interface**: Abstract storage interface with in-memory implementation (MemStorage) for development
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Request Logging**: Custom middleware for API request logging and performance monitoring

## Database Schema
Uses Drizzle ORM with PostgreSQL for type-safe database operations:

- **ORM**: Drizzle ORM for SQL-first approach with excellent TypeScript integration
- **Schema**: Defined in shared directory for code reuse between client and server
- **User System**: Basic user schema with username/password authentication structure
- **Validation**: Zod schemas for runtime validation integrated with Drizzle schema definitions
- **Migrations**: Drizzle Kit for database schema migrations and management

## Build and Development Workflow
- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript**: Full TypeScript support across frontend, backend, and shared code
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **Development**: Hot reload with Vite dev server and Express backend integration
- **Production**: Optimized builds with ESBuild for server bundling

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database using @neondatabase/serverless driver
- **Drizzle ORM**: Type-safe SQL toolkit with PostgreSQL dialect configuration

## UI and Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives for building design system
- **Tailwind CSS**: Utility-first CSS framework with custom configuration for brand colors
- **Lucide React**: Icon library for consistent iconography throughout the application
- **Embla Carousel**: Touch-friendly carousel component for interactive content

## Development Tools
- **Vite**: Modern build tool with React plugin for fast development
- **TypeScript**: Static type checking across the entire codebase
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins

## Form and Data Management
- **React Hook Form**: Performance-focused form library with minimal re-renders
- **Zod**: Schema validation library for runtime type checking and form validation
- **TanStack React Query**: Data fetching and caching library for server state management

## Authentication and Session Management
- **Express Session**: Session middleware setup with connect-pg-simple for PostgreSQL session store
- Basic user authentication structure in place for future expansion

## Fonts and Assets
- **Google Fonts**: Inter font family for modern typography
- **Custom Logo Component**: SVG-based logo with smart home iconography
- **Unsplash Images**: External image hosting for blog and marketing content