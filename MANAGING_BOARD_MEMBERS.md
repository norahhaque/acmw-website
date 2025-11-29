# Managing Board Members - Guide for Future Webmasters

This guide explains how to manage current and past board members on the ACM-W website.

## Overview

The board members system is organized into two categories:
- **Current Board**: Active officers displayed on `/team`
- **Past Board**: Alumni officers displayed on `/team/past`, grouped by academic year

All member data is managed through `/data/members.ts`.

## Data Structure

### File: `/data/members.ts`

```typescript
export type MembersData = {
  current: Member[]
  past: {
    [academicYear: string]: Member[]
  }
}
```

### Member Schema

Each member object contains:
- `name`: Full name (string)
- `role`: Position title (e.g., "President", "Vice President")
- `major`: Academic major (string or null)
- `minor`: Academic minor (string or null)
- `year`: Current year (e.g., "4th") (string or null)
- `gradYear`: Expected graduation (e.g., "May 2026") (string or null)
- `imgSrc`: Path to profile photo (string)
- `about`: Array of 3 Q&A objects with `q` (question) and `a` (answer) fields
- `description`: Bio paragraph (string or null)

## Common Tasks

### 1. Adding a New Board Member to Current Board

1. Open `/data/members.ts`
2. Add a new member object to the `current` array:

```typescript
const membersData: MembersData = {
  current: [
    // ... existing members
    {
      name: "Jane Doe",
      role: "Event Chair",
      major: "Computer Science",
      minor: "Math",
      year: "3rd",
      gradYear: "May 2026",
      imgSrc: "/images/team/members/jane-events.png",
      about: [
        { q: "What is your favorite CSCI class?", a: "CSCI 4041" },
        { q: "Tell us a fun fact about you!", a: "I love rock climbing!" },
        { q: "What advice would you give to someone new to CS?", a: "Don't be afraid to ask questions!" }
      ],
      description: "Jane is a 3rd-year Computer Science major with a minor in Math, graduating in May 2026!"
    }
  ],
  // ...
}
```

3. Add the member's profile photo to `/public/images/team/members/`
   - Naming convention: `firstname-role.png` (e.g., `jane-events.png`)
   - Recommended size: 300x300px minimum

### 2. Removing a Member from Current Board

Simply delete the member object from the `current` array in `/data/members.ts`.

### 3. Transitioning Current Board to Past Board (End of Academic Year)

When a new board takes over, move the entire previous board to the `past` section:

**Step-by-step:**

1. Open `/data/members.ts`

2. Copy the entire `current` array

3. Create a new entry in the `past` object with the academic year as the key:

```typescript
const membersData: MembersData = {
  current: [
    // New board members go here
  ],
  past: {
    "2025-2026": [
      // Paste the previous board members here
      {
        name: "Amelia Lunning",
        role: "President",
        major: "Computer Science",
        minor: "Math",
        year: "4th",
        gradYear: "May 2026",
        imgSrc: "/images/team/members/amelia-president.png",
        about: [
          { q: "What is your favorite CSCI class?", a: "CSCI 5161: Compilers" },
          { q: "Tell us a fun fact about you!", a: "I figure skated for 10 years, and now I skate recreationally" },
          { q: "What advice would you give to someone new to CS?", a: "Get involved! Being a part of ACM-W has been so beneficial to me both professionally and socially" }
        ],
        description: "Amelia is a senior majoring in Computer Science and minoring in Math! She expects to graduate in May 2026."
      },
      // ... rest of the previous board
    ],
    "2024-2025": [
      // Even older boards go here
    ]
  }
}
```

4. Replace the `current` array with the new board's data

**Note:** You don't need to move or rename any photos! The `imgSrc` paths can stay the same (e.g., `/images/team/members/amelia-president.png`). All board member photos can live in the same directory.

### 4. Academic Year Naming Convention

Use the format `"YYYY-YYYY"` for academic years:
- Start year = when the board term begins (typically fall semester)
- End year = when the board term ends (typically spring semester)

Examples:
- `"2024-2025"`: Board serving from Fall 2024 to Spring 2025
- `"2025-2026"`: Board serving from Fall 2025 to Spring 2026

## File Organization

### Profile Photos

**All Board Members (Current and Past):**
- Location: `/public/images/team/members/`
- Naming: `firstname-role.png`
- Example: `amelia-president.png`
- Note: Keep all photos in the same directory - no need to move them when transitioning boards

## Pages

### Current Board Page: `/team`

- Route: `/app/team/page.tsx`
- Component: `/components/team/bios.tsx`
- Displays: `membersData.current`

### Past Board Page: `/team/past`

- Route: `/app/team/past/page.tsx`
- Component: `/components/team/past-members-view.tsx`
- Displays: `membersData.past`, grouped by academic year (most recent first)

## Testing Your Changes

After modifying `/data/members.ts`:

1. Run the development server: `npm run dev`
2. Visit `http://localhost:3000/team` to see current board
3. Visit `http://localhost:3000/team/past` to see past boards
4. Verify:
   - All photos load correctly
   - Member info displays properly
   - No console errors

## Tips

- **Keep the advisor**: The faculty advisor (Dr. Watters or current advisor) should remain in the `current` array across board transitions
- **Photo organization**: All photos stay in `/public/images/team/members/` - no need to move or reorganize when archiving boards
- **Photo quality**: Use high-quality, professional photos (headshots work best)
- **Consistent formatting**: Follow the existing patterns for role names, majors, etc.
- **Q&A variety**: Try to vary the questions for each member to keep bios interesting
- **Academic year consistency**: Always use the `YYYY-YYYY` format for past board years

## Example: Complete Board Transition

Let's say it's Spring 2026 and a new board is taking over for 2026-2027:

```typescript
const membersData: MembersData = {
  current: [
    // NEW 2026-2027 BOARD
    {
      name: "New President",
      role: "President",
      // ... new board member data
    },
    // ... rest of new board
    {
      name: "Shana Watters",  // Keep the advisor
      role: "Advisor",
      // ... advisor data stays the same
    }
  ],
  past: {
    "2025-2026": [
      // PREVIOUS BOARD (moved from current)
      {
        name: "Amelia Lunning",
        role: "President",
        // ... (exact copy from previous current array)
      },
      // ... rest of 2025-2026 board
    ],
    "2024-2025": [
      // Even older board (already existed)
    ]
  }
}
```

## Troubleshooting

**Photos not loading?**
- Check that the file path in `imgSrc` matches the actual file location
- Ensure photos are in `/public/images/team/members/`
- File paths are case-sensitive

**TypeScript errors?**
- Ensure all required fields are present
- Use `null` for optional fields (don't omit them)
- Each member must have exactly 3 Q&A objects in the `about` array

**Past members page is empty?**
- The page shows a placeholder if `membersData.past` has no entries
- This is normal if no boards have been archived yet
