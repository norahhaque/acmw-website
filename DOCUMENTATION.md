# ACM-W Website Documentation
Heyy future webmaster! This entire document should give you everything you need to upkeep our website. As of August 2025, we have moved from our previous content management system named Drupal (this is the standard University of Minnesota CMS) to an entirely new Next.js application! Maintaining this will give you a lot of exposure to how modern-day web applications are built and should be a really cool thing to add to your resume!! Building and maintaining this site definitely helped me quite a bit during the job application process. You will learn a ton of valuable skills!

If you're getting overwhelmed, just know I've kept coding to a bare minimum so you won't need to pick up any coding skills unless you want to! Without further ado, let's jump in 😝

## Table of Contents
Feel free to use these links to quick-jump to a specific section if you're ever returning to this page and need to find some information!
- [Getting Started](#getting-started)
- [Adding Events](#adding-events)
- [Adding Event Photos](#adding-event-photos)
- [Managing Board Members](#managing-board-members)
- [Transitioning Board Years](#transitioning-board-years)
- [Photo Guidelines](#photo-guidelines)
- [Common Tasks Reference](#common-tasks-reference)

---

## Getting Started

Before you can start making changes to the website, you'll need to set up your development environment on your computer. Don't get too freaked out by all the steps, this is a one-time setup, and I'll walk you through everything! It shouldn't take more than 10-20 minutes.

### 1. Get Github Access

First, make sure you have access to the GitHub repository. You'll need to be added as a **collaborator** on the repo so that you have write access to the codebase. If you haven't been added yet, reach out to the current tech lead and ask them to add you. They can do this by going to the repository settings on GitHub and inviting you via your GitHub account email.

### 2. Get Vercel Access

You'll also want to get added to Vercel! Vercel is the platform that hosts and deploys our website. Having access lets you see deployment logs, check if builds succeeded or failed, and troubleshoot any issues. Just ask the previous webmaster or tech lead to invite you using your email. Once you're in, you can log in at https://vercel.com/dashboard to keep an eye on things!

### 3. Clone the Repository

Once you have GitHub access, you're going to have to clone the repository to your local machine (fancy speak for your computer). Open your terminal (on Mac) or command prompt (on Windows) and run this command to download the website code to your computer. Make sure to run these wherever you want the directory to be on your machine (ie: Desktop, a folder named Projects, whatever you want!).

```bash
git clone https://github.com/norahhaque/acmw-website.git
cd acmw-website
```

This creates a folder called `acmw-website` on your computer with all the website files inside.

### 4. Install Dependencies

The website relies on various packages and libraries to run properly. To install all of them at once, run:

```bash
npm install
```

This might take a few minutes, but you only need to do this once (or whenever new dependencies are added to the project).

### 5. Run the Development Server

Now you're ready to see the website running on your computer! Run:

```bash
npm run dev
```

After a few seconds, you should see a message saying the server is running. Open your web browser and go to:

```
http://localhost:3000
```

And you should see the ACM-W website! This is your **local development version**, any changes you make to the code will automatically show up here. The live website won't be affected by anything you do until you push your changes to GitHub.

### 6. Make Your Changes

Yay! You can now edit files! Common tasks include adding new events to `/data/events.ts`, updating board members in `/data/members.ts`, or uploading new images to the `/public` folder. We'll cover exactly how to do all of these in the sections that follow this one.

### 7. Test Locally

After making your changes, check them on your local development server (the one running at `http://localhost:3000`). Make sure everything looks good and that:
- Images load correctly
- Text is formatted properly
- No errors appear in the browser console
- Links work as expected

Take your time here! It's much easier to catch mistakes locally than after they're already live.

### 8. Use Git to commit your changes!

Once you're happy with your changes and everything looks good, it's time to save them using Git. If you're new to Git, the topic might seem overwhelming at first but genuinely, Git / version control is one of the most important tools to know as a developer that sadly never gets taught to you formally in your coursework at the University. You only need to know three commands to make this all work here!

```bash
git add .
```

Make sure to run this command from the "top level" or root directory of the project, ie: `acmw-website/`.

```bash
git commit -m "Add a clear description of what you changed"
```

The commit message should be short but descriptive. For example:
- `"Add Spring 2026 workshop event"`
- `"Update board members for 2026-2027"`

```bash
git push origin main
```

This command is what actually uploads your changes to the GitHub repository. Within 2-3 minutes, Vercel (our deployment platform) will automatically detect the change, rebuild the website, and deploy it at the live URL. You don't need to do anything else, it all happens automatically!

Quick note, when you run `git push`, I've configured "Git hooks" (basically automatic scripts that run at certain times) to run some checks to make sure you're not pushing broken code that Vercel, our deployment platform, will complain about. The hooks get installed automatically when you run `npm install`, so you don't need to do anything special to set them up!


1. **Linting check** runs first — this checks your code for any style or quality issues
2. **Build check** runs next — this makes sure the website can actually build successfully
3. If both pass, your push goes through normally!
4. If something fails, the push will be blocked and you'll see an error message telling you what went wrong. 

**What you'll see when pushing:**

If everything is good:
```bash
$ git push origin main
Running pre-push checks...
→ Linting code...
✔ No ESLint warnings or errors
→ Building project...
✓ Compiled successfully
✓ All checks passed!
[Your code gets pushed to GitHub]
```

If something needs fixing:
```bash
$ git push origin main
Running pre-push checks...
→ Linting code...
✗ Linting failed. Fix errors and try again.
[Push stops — you will need to fix the errors first]
```


### 9. Verify the Live Site

After a few minutes, if there were no lint or build errors, the live site should be up at **acmw.umn.edu** with your new changes. Double-check that your changes appear as they should. If something looks off, you can always make another fix and do the add/commit/push flow again.

### 10. Done!

That's basically all you need to get started. All of your future work will basically be repeating steps 5-8 whenevever you make any changes to the site from this point onwards. The rest of this document will walk you through the specific changes you might need to make like adding events, managing photos, and updating board members.

---

## Adding Events

Events are managed in the file: `/data/events.ts`.
Each event must have a unique ID and can be listed as either "upcoming" or "past."

### How to Add an Upcoming Event

1. Open the file `/data/events.ts`.
2. Find the `upcoming` array (around line 43).
3. Add a new event object using this template:

**Event Object Template:**
- `id`: (Next available number)
- `title`: (Event name)
- `date`: (Format: YYYY-MM-DD)
- `time`: (Ex: "5:00 PM – 6:30 PM")
- `location`: (Building and room)
- `image`: (Path to poster in `/images/events/posters/`)
- `description`: (Short summary)
- `rsvpLink`: (Google Form link or `null`)

4. Add the event poster image to the folder:
   `/public/images/events/posters/`
   - File name must match the `image` field
   - Recommended: PNG or JPG
   - Recommended size: ~800x800px

5. Test locally by running `npm run dev` and visiting:
   `http://localhost:3000/events`

### Moving Events from Upcoming to Past

When an event is over:

1. Open `/data/events.ts`.
2. Remove the event from the `upcoming` array.
3. Add it under the correct year inside the `past` object.
4. Change the `rsvpLink` value to `null`. (this is optional)

---

## Adding Event Photos

Event photos automatically appear on the `/events/recent` page, grouped by event.

### Steps for Adding Photos

1. Make sure the event exists in `/data/events.ts` and has an ID.
2. Name your photo files using this format:
   `{eventId}-description.ext`
   (For example: `35-workshop-1.webp`)
3. Upload all event photos to:
   `/public/images/events/event-images/`
4. Photos with the same event ID are automatically grouped on the Past Events page.

**Photo Guidelines:**
- Recommended formats: WEBP (best), JPG, PNG
- Any size works — the site resizes automatically
- Multiple photos are encouraged

---

## Managing Board Members

Board members are stored in `/data/members.ts`.

### How to Add a Current Board Member

1. Open `/data/members.ts`.
2. Find the `current` array (around line 24).
3. Add a new member object with:
   - Name
   - Role
   - Major
   - Minor (or `null`)
   - Year
   - Graduation year
   - Profile photo path
   - Three Q&A items
   - A short description

**Photo Requirements:**
- Background removed (I recommend Adobe’s free background remover tool for this)
- White background added (I recommend Adobe for this as well!)
- Semi professional headshot style 
- PNG format preferred
- At least 400×400px
- File name format: `firstname-role.png`

4. Upload photos to:
   `/public/images/team/members/`

5. Test by visiting: `http://localhost:3000/team`

### Removing a Board Member

Simply delete their entry from the `current` array!

---

## Transitioning Board Years

At the end of each academic year:

1. Open `/data/members.ts`.
2. Copy the entire `current` array.
3. Paste it into the `past` object with the year key, e.g., `"2025-2026"`.
4. Replace `current` with the new board members.
5. The advisor (e.g., Dr. Watters) should remain in `current`.
6. Photos stay in the same folder — no need to move anything.

**Academic year format:**
- `"2025-2026"`
- `"2026-2027"`

Past boards appear at: `https://acmw.umn.edu/team/past`

### Updating the Board Header Image

When you transition to a new board, you'll also need to update the big header image at the top of the team page (the one with "THE BOARD" text overlay)!

**Steps:**

1. Take a new group photo of the entire board (this is the image that shows at the very top of the team page)

2. Open the Canva template here: https://www.canva.com/design/DAGsyfs1zig/jXAZRxhmF9fXTGNd3moQQg/edit

3. Replace the current board photo with your new board photo
   - Keep the "THE BOARD" text overlay exactly the same
   - Just adjust the positioning/sizing of the photo if needed to make it look good
   - Don't change the text styling or wording!

4. Download the image from Canva as a PNG

5. Replace the file at: `/public/images/team/board/board-header.png`
   - Keep the same filename: `board-header.png`
   - Just overwrite the old one with your new image

6. Test it by running `npm run dev` and visiting `http://localhost:3000/team`

That's it! The new header image will automatically show up on the team page.

---

## Common Tasks Reference

### File Locations

| Task | File Location | Media Location |
|------|--------------|----------------|
| Upcoming events | `/data/events.ts` | `/public/images/events/posters/` |
| Past events | `/data/events.ts` | `/public/images/events/posters/` |
| Event photos | N/A | `/public/images/events/event-images/` |
| Board members | `/data/members.ts` | `/public/images/team/members/` |

---

## Little Things to Remember!

- **File paths are case-sensitive.** `Image.png` and `image.png` are different files so you really have to be careful with capitalization
- **Event IDs must be unique.** When adding new events, always use the next available number.
- **Event dates must be in YYYY-MM-DD format.** For example: `2026-03-15` for March 15, 2026.
- **Board years must be in YYYY-YYYY** for example `2025-2026`.

---

## Getting Help

If you run into any issues, don't hesitate to reach out! I'm always happy to help troubleshoot or answer questions whenever you need anything.

**Norah Haque**
Phone: (612) 296-1269
Email: norah.haque@gmail.com

---

## More Development?

You are the webmaster now! If you ever want to pick up some new skills in web dev and build out a new feature, section, or page, go ahead! I would recommend watching or reading some tutorials on Next.js or using a generative AI tool to guide your coding as your start out. I am always a resource as well if you need any help building things out. This however shouldn't be a necessary part of the job so don't anticipate having to do much coding if it freaks you out. But again, these are great skills to have and I highly recommend trying your hand in building out a feature or changing some UI!

---

**Last Updated:** November 2025
