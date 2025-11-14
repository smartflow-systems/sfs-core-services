# Design Guidelines: Node.js Boilerplate Platform

## Design Approach
**System-Based Approach**: GitHub Primer + Material Design hybrid for developer-focused clarity and efficiency. This boilerplate serves developers who prioritize function over form—clean, scannable interfaces with excellent information hierarchy.

## Core Design Principles

### Typography
- **Headings**: Inter font family
  - H1: text-4xl font-bold (landing), text-3xl (dashboard)
  - H2: text-2xl font-semibold
  - H3: text-xl font-semibold
  - H4: text-lg font-medium
- **Body**: text-base (16px) for readability
- **Code/Technical**: JetBrains Mono font-mono text-sm
- **Labels**: text-sm font-medium
- **Captions**: text-xs text-gray-600

### Layout System
**Tailwind Spacing Primitives**: 4, 6, 8, 12, 16, 24
- Component padding: p-6 or p-8
- Section spacing: py-12 or py-16
- Card gaps: gap-6
- Form field spacing: space-y-4
- Grid gaps: gap-8

### Component Library

**Navigation**
- Top navbar: Sticky header with logo, main nav links, user menu dropdown
- Sidebar (dashboard): Collapsible with icon + text, grouped sections (Auth, Billing, Webhooks, Analytics, Settings)
- Breadcrumbs for deep navigation paths

**Cards & Containers**
- Standard card: Subtle border, rounded-lg, p-6
- Feature cards (3-column grid): Icon, title, description
- Stat cards: Large number, label, trend indicator
- Code blocks: Syntax-highlighted, copy button, rounded border

**Forms**
- Input fields: Full-width, consistent height (h-10), rounded-md borders
- Labels: Always above inputs, font-medium
- Helper text: Below inputs, text-sm
- Error states: Red border + error message
- Success states: Green border + checkmark icon

**Data Display**
- Tables: Striped rows, sticky headers, sortable columns, pagination
- Lists: Clean separation, hover states for interactivity
- Metrics dashboard: Grid of stat cards showing user count, revenue, API calls
- Logs viewer: Monospace font, timestamp, level badges, search/filter

**Buttons**
- Primary: Solid fill, font-medium, px-6 py-2.5, rounded-md
- Secondary: Border outline, transparent bg
- Danger: For destructive actions
- Icon buttons: Square aspect, centered icon
- Size variants: sm (py-1.5 px-4), md (default), lg (py-3 px-8)

**Badges & Pills**
- Status indicators: Small rounded-full pills (Active, Inactive, Pending)
- Plan badges: Rounded-md px-3 py-1 (Free, Pro, Enterprise)
- Webhook event types: Monospace, subtle background

**Modals & Overlays**
- Confirmation dialogs: Centered, max-w-md, clear actions
- Settings panels: Slide-out drawer from right, full height
- API key reveal: Modal with copy-to-clipboard functionality

## Page Structure

### Landing/Marketing Page (/)
1. **Hero Section** (h-screen): Large headline "Production-Ready Node.js Boilerplate", subheading about features, two CTAs (Get Started, View Docs), code snippet preview showing quick setup
2. **Features Grid** (3 columns): Auth, Billing, Email, Analytics, Webhooks, Database—each with icon, title, bullet points
3. **Quick Start Section**: Step-by-step cards (1. Clone, 2. Configure, 3. Deploy) with code examples
4. **Tech Stack**: Logos/icons for Express, Prisma, PostgreSQL, Stripe, Resend in a horizontal showcase
5. **Integration Showcase**: 2-column layout showing Stripe dashboard mock + Replit Auth interface
6. **CTA Section**: "Start Building Now" with GitHub star count, documentation link

### Dashboard (/dashboard)
- **Sidebar**: Pinned left, sections for Overview, Users, Subscriptions, Webhooks, Analytics, Settings
- **Main Content Area**: Page-specific content with breadcrumbs
- **Top Bar**: Search, notifications, user profile dropdown

### Authentication Pages (/login, /signup)
- Centered card (max-w-md), logo at top
- Replit OAuth buttons (Google, GitHub, Email) stacked vertically
- Divider with "or" text
- Simple, focused, no distractions

### Billing/Subscriptions (/billing)
- Current plan card: Plan name, price, features list, upgrade/cancel buttons
- Pricing comparison table: 3 plans side-by-side
- Payment method card: Card details, update button
- Invoice history table: Date, amount, status, download link

### Webhooks Management (/webhooks)
- Webhook endpoints table: URL, events, status, actions (edit, delete, test)
- Event log viewer: Recent webhook deliveries with response codes, timing
- Add webhook form: URL input, event checkboxes, secret key display

### Analytics Dashboard (/analytics)
- Metrics grid (4 columns): Total users, Active subscriptions, Revenue, API calls
- Charts: Line graph for user growth, bar chart for revenue by plan
- Event tracking table: Recent analytics events with timestamps

### Settings (/settings)
- Tabbed interface: Account, API Keys, Team, Integrations
- API key management: Generate, revoke, copy functionality
- Environment variables display: Key-value pairs with reveal/hide toggle

## Images
**Hero Section Image**: Abstract developer workflow illustration or terminal/code editor screenshot overlay—subtle, non-distracting background. Position: Background with overlay gradient for text readability.

**Integration Screenshots**: Actual interface screenshots of Stripe dashboard, Replit Auth modal, email templates—authentic product visuals in Integration Showcase section.

**Icons**: Use Heroicons (outline style) for navigation, actions, feature cards via CDN.

## Animations
Minimal—only hover states on interactive elements (buttons, table rows, cards). No scroll animations or transitions beyond standard UI feedback.