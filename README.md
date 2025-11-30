
# ACM-W UMN Website

Official site for the ACM-W student chapter at the University of Minnesota, built with **Next.js 15**, **TypeScript**, and **Tailwind CSS v4**. Designed to be clean, responsive, and easy to maintain through structured data and modular components.

Live site: **[acmw.umn.edu](https://acmw.umn.edu)**

---

## Tech Stack

* Next.js 15 (App Router)
* TypeScript
* Tailwind CSS v4
* Framer Motion
* Material-UI (MUI)
* Sharp (Image Processing)
* Vercel (Deployment)

---

## Project Structure

```
.
├── app/               // Pages and routing (App Router)
│   ├── api/
│   │   └── photos/    // API endpoint for event photo metadata
│   ├── events/
│   │   ├── recent/    // Past events gallery page
│   │   └── page.tsx   // Upcoming events page
│   ├── team/
│   │   ├── past/      // Past board members page
│   │   └── page.tsx   // Current board page
│   ├── layout.tsx     // Global layout (fonts, navbar, footer, analytics)
│   ├── page.tsx       // Home page
│   └── globals.css    // Tailwind config and custom styles
├── components/        // All custom React components
│   ├── common/        // Shared components (navbar, footer, breadcrumb, etc.)
│   ├── events/        // Event-specific components (calendar, cards, gallery)
│   ├── home/          // Home page components (hero, mission, stats, etc.)
│   ├── team/          // Team page components (bio cards, board header)
│   └── ui/            // Reusable utilities (Masonry, BlurText, CountUp, Stepper, etc.)
├── data/              // Content management (all site content lives here)
│   ├── events.ts      // Upcoming and past events
│   └── members.ts     // Current and past board members
├── lib/               // Utility functions
│   └── getPhotos.ts   // Dynamic photo loader using Sharp
├── public/images/     // Static assets
│   ├── events/
│   │   ├── posters/   // Event poster images
│   │   └── event-images/  // Event photo gallery
│   └── team/
│       ├── members/   // Current board member photos
│       └── board/     // Board header image
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Local Setup

```bash
git clone https://github.com/norahhaque/acmw-website.git
cd acmw-website
npm install
npm run dev
```

Site runs locally at `http://localhost:3000`

---

## Deployment

* Live site: **[acmw.umn.edu](https://acmw.umn.edu)**
* Hosted on **Vercel** with automatic deploys on pushes to `main`
* Git hooks (via Husky) run lint and build checks before each push to ensure code quality
* Add new webmasters to:
  * GitHub repo as collaborators
  * Vercel project as team members (for deploy logs and previews)

---

## Content Management

All site content is managed through **data files** (`/data/`), not hardcoded in components:

### Events (`data/events.ts`)

- **Upcoming events**: Array of future events with RSVP links
- **Past events**: Organized by year (e.g., "2024", "2025")
- Event photos in `/public/images/events/event-images/` are automatically grouped by event ID

**Event Schema:**
```ts
{
  id: number           // Unique ID (used to link photos)
  title: string        // Event name
  date: string         // YYYY-MM-DD format
  time: string | null
  location: string | null
  image: string        // Path to poster image
  description: string
  rsvpLink: string | null
}
```

### Board Members (`data/members.ts`)

- **Current members**: Active board + advisor
- **Past members**: Organized by academic year (e.g., "2024-2025")
- Supports detailed Q&A sections for each member

**Member Schema:**
```ts
{
  name: string
  role: string | null
  major: string | null
  minor: string | null
  year: string | null        // e.g., "Junior"
  gradYear: string | null    // e.g., "2026"
  imgSrc: string             // Path to profile photo
  description: string | null
  about: { q: string | null; a: string | null }[]
}
```

---

## Best Practices

* **Always edit content through `/data/` files** — never hardcode content in components
* **Name event photos with event ID prefix**: `{eventId}-description.ext` (e.g., `28-workshop-1.webp`)
* **Test locally before pushing**: Run `npm run dev` and verify changes at `localhost:3000`
* **Pre-push hooks automatically check**: Linting and build pass before code reaches production
* **Keep commits descriptive**: Clear commit messages help track changes over time

---

## Additional Documentation

* **[DOCUMENTATION.md](./DOCUMENTATION.md)**: Complete step-by-step guide for webmasters (adding events, managing board transitions, photo guidelines, etc.)

---

## Credits

Developed by **Norah Haque** (2025). Maintained by ACM-W Tech Leads.

---

