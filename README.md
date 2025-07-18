
# ACM-W UMN Website

Official site for the ACM-W student chapter at the University of Minnesota, built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Designed to be clean, responsive, and easy to maintain through structured data and modular components.

---

## Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Framer Motion
* Vercel (Deployment)

---

## Project Structure

```
.
├── app/               // Pages and routing (App Router)
│   ├── api/           // Dynamic API routes
│   ├── events/        // Events page
│   ├── team/          // Team page
│   ├── layout.tsx     // Global layout
│   ├── page.tsx       // Home page
│   └── globals.css    // Tailwind + base styles
├── components/        // Reusable UI
│   ├── common/
│   ├── events/
│   ├── home/
│   ├── team/
│   └── ui/
├── data/              // Static site content
│   ├── events.ts
│   └── members.ts
├── lib/               // Utility functions
│   └── getPhotos.ts   // Dynamic photo loader
├── public/images/     // Images used on site
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

* Live site is deployed via **Vercel**
* Any commit to `main` triggers an automatic deploy
* Add new webmasters to:

  * GitHub repo as collaborators
  * Vercel project as team members (for deploy logs and previews)

---

## Data Structure (in `/data/`)

### `members.ts`

```ts
type Member = {
  name: string
  role: string | null
  major: string | null
  minor: string | null
  year: string | null
  gradYear: string | null
  imgSrc: string
  description: string | null
  about: { q: string | null; a: string | null }[]
}
```

**Example Entry:**

```ts
{
  name: "Jane Doe",
  role: "President",
  major: "Computer Science",
  minor: "Math",
  year: "Junior",
  gradYear: "2026",
  imgSrc: "/images/jane.jpg",
  description: "Loves building inclusive spaces for women in tech.",
  about: [
    { q: "What do you enjoy outside tech?", a: "Painting and kickboxing." },
    { q: "Why ACM-W?", a: "Community and mentorship." }
  ]
}
```

---

### `events.ts`

```ts
type Event = {
  id: number
  title: string
  date: string
  time: string | null
  location: string | null
  image: string
  description: string
  rsvpLink: string | null
}
```

**Example Entry:**

```ts
{
  id: 1,
  title: "Resume Workshop",
  date: "2025-09-15",
  time: "5:00 PM – 6:30 PM",
  location: "Keller 3-230",
  image: "/images/resume.jpg",
  description: "Hands-on workshop to polish your resume before fall career fair.",
  rsvpLink: "https://z.umn.edu/acmw-resume"
}
```

---

## Best Practices

* Add/update content using the `data/` folder—don’t hardcode.
* Match image names to member/event names when possible.
* Test all changes locally (`npm run dev`) before pushing to `main`.
* Keep commits descriptive and code clean.

---

## Credits

Developed by Norah Haque (2025). Maintained by ACM-W Tech Leads.

---

