# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers looking at a junior full-stack developer for a role. They are often checking several candidates in one sitting, and they want to know quickly who Roberto is, what they have built, and how they are growing. Success means they reach out or move Roberto forward in the hiring process.

## Product Purpose

The personal portfolio of Roberto, a junior full-stack developer who builds web applications and learns through hands-on projects. The site brings three things together: a personal story, technical projects (backed by GitHub), and a personal blog. The goal is to show growth over time, not a finished list of polished work.

## Positioning

It is a story-driven, intimate portfolio. A junior's strongest honest claim is the direction they are moving in and how they learn, not years of experience. The site makes that path visible: the personal journey, the projects, and the writing are presented as one connected story, not three separate sections.

## Operating Context

- Recruiters arrive from a résumé, LinkedIn, or a job application, usually on desktop, sometimes on mobile.
- Projects link out to GitHub repositories and, where they exist, live deployments.
- The blog is a continuing ritual. The site has to work with only a few posts and keep working as more are added.

## Capabilities and Constraints

- Existing stack: Next.js 16 (App Router, Cache Components, React Compiler), React 19, Tailwind CSS 4, TypeScript, Biome, Yarn 4 (PnP).
- Bilingual: English and Portuguese, with a way to switch languages. Every piece of content needs both versions or a clear fallback.
- Theme: light and dark, with a toggle the visitor controls (defaulting to the system preference). Both themes are first-class.
- Sections the site needs: personal journey/about, projects (GitHub-backed), blog.
- Open decision: how blog posts are authored and stored (MDX in the repo, a CMS, etc.).
- Open decision: whether project data is entered by hand or pulled from the GitHub API.
- Open decision: deploy target.
- Contact: email and LinkedIn are the primary channels, both clearly visible in the hero. The contact section also has a message form (name, email, message), added at the user's request; it sends through Resend when RESEND_API_KEY and CONTACT_TO_EMAIL are set, and is shown disabled and marked placeholder until then. The real address and URL are pending from Roberto; until then they are visibly marked placeholders.

## Brand Commitments

- Name shown on the site: "Roberto" (first name only for now).
- Voice: personal, honest, story-driven. It should show an early-career developer learning in public, not overstated seniority.
- Binding influence, set by the user: *Sword Art Online* and *Mobile Suit Gundam: The Witch from Mercury*. The influence stays subtle: no characters, logos, or recognizable franchise UI. The experience must stay warm, accessible, easy to navigate, and technically honest, balancing visual storytelling with professional clarity.
- Visual reference chosen by the user (2026-10-30): the layout and energy of el-one-and-only.vercel.app (wide heavy display name in two lines, near-black ground, one neon accent, hairline cards), with a series-linked accent instead of its lime. No banner or avatar in the hero.
- Anti-goals, set by the user: a template feel (hero + skill badges + card grid), overclaiming, being too slow to scan, feeling cold or corporate.

## Evidence on Hand

As of 2026-10-30, none: no case studies, project write-ups, blog posts, screenshots, or bio copy exist yet. Structure comes first and real content follows. Future work must not invent projects, repositories, posts, metrics, employers, testimonials, or client names. Use clearly marked placeholders until Roberto supplies the real material.

## Product Principles

1. **Growth over polish.** Show trajectory and learning honestly. A junior's progress is the story.
2. **One narrative, three threads.** Journey, projects, and writing should point to each other, not sit in separate silos.
3. **Respect the recruiter's time.** The story is intimate, but who Roberto is, what they build, and how to contact them must be easy to find right away.
4. **Real or nothing.** Every project, link, and claim is real. Placeholders stay visibly placeholders.
5. **Two languages are first-class.** Portuguese and English are equal, not a translated afterthought.
