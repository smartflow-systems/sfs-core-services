# SFS Core Services

Core backend services and API infrastructure for the SmartFlow Systems ecosystem.

## Overview

SFS Core Services provides the foundational API layer and shared services used across all SmartFlow Systems applications. It includes authentication, authorization, data management, and integration services.

## Features

- RESTful API with Express.js
- JWT-based authentication
- PostgreSQL database with Drizzle ORM
- Rate limiting and API key management
- Stripe payment integration
- Comprehensive logging and error handling
- Redis caching layer
- API versioning support

## Tech Stack

- **Backend**: Node.js, Express.js, TypeScript
- **Database**: PostgreSQL (via Neon)
- **ORM**: Drizzle
- **Authentication**: JWT
- **Caching**: Redis
- **Payment**: Stripe

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Redis (optional)
- Stripe account

### Installation

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Configure your environment variables in .env

# Run database migrations
npm run db:push

# Start development server
npm run dev
```

### Environment Setup

See `.env.example` for required environment variables.

## API Documentation

API documentation is available at `/api/v1/docs` when running in development mode.

### Main Endpoints

- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login
- `GET /api/v1/users/me` - Get current user
- `GET /api/v1/health` - Health check

## Development

```bash
# Run development server
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Start production server
npm start
```

## SmartFlow Design System

This application follows the SFS design system with:
- SFS Blue primary color (HSL: 221 83% 53%)
- Dark mode support
- Responsive design
- Accessibility standards

## Contributing

Part of the SmartFlow Systems ecosystem. For contribution guidelines, see the main organization documentation.

## License

Proprietary - SmartFlow Systems
