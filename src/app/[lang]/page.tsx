import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { contactConfigured } from "@/app/actions/contact";
import { ContactButtons, ContactList } from "@/components/contact";
import { ContactForm } from "@/components/contact-form";
import { ArrowDownIcon, ArrowRightIcon, FileIcon } from "@/components/icons";
import { PostList, ProjectList } from "@/components/lists";
import { PlaceholderMark } from "@/components/placeholder";
import { Section } from "@/components/section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { about, journey, pick, posts, profile, projects } from "@/content/site";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale } from "@/i18n/locales";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const { availability } = profile;

  return (
    <div id="top" className="relative">
      <SiteHeader lang={lang} dict={dict} />

      <main id="main">
        <section
          aria-labelledby="hero-title"
          className="mx-auto flex min-h-[min(calc(100svh-4.5rem),60rem)] max-w-300 flex-col justify-center px-5 pt-14 pb-16 sm:px-[5%]"
        >
          {availability !== "hidden" ? (
            <p className="mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-line-strong px-4 py-1.5 text-sm text-muted">
              <span
                aria-hidden="true"
                className={`size-2 rounded-full ${
                  availability === "available"
                    ? "bg-signal"
                    : "border border-muted"
                }`}
              />
              {availability === "available"
                ? dict.hero.available
                : dict.hero.unavailable}
            </p>
          ) : null}

          <h1
            id="hero-title"
            className="font-display text-[clamp(2.25rem,8.5vw,6rem)] leading-[0.98] font-extrabold tracking-[-0.03em]"
          >
            <span className="spring-in block">{profile.name}</span>
            <span
              className="spring-in block text-signal"
              style={{ "--i": 1 } as CSSProperties}
            >
              {dict.hero.nameTail}
            </span>
          </h1>
          <p className="mt-5 text-[clamp(1.0625rem,2.2vw,1.3125rem)] text-muted">
            {dict.hero.role}
          </p>

          <p className="mt-8 max-w-[46ch] text-[clamp(1rem,1.8vw,1.125rem)] leading-[1.8] text-ink/80 text-pretty">
            {dict.hero.story}
            {profile.storyPlaceholder ? (
              <PlaceholderMark label={dict.placeholder} />
            ) : null}
          </p>

          <div
            className="spring-pop mt-10 origin-left"
            style={{ "--i": 4 } as CSSProperties}
          >
            <h2 className="sr-only">{dict.hero.contact}</h2>
            <ContactButtons dict={dict} />
          </div>

          <a
            href="#about"
            className="mt-16 inline-flex w-fit items-center gap-2 text-sm text-muted hover:text-ink"
          >
            <ArrowDownIcon />
            {dict.hero.scroll}
          </a>
        </section>

        <Section id="about" title={dict.about.title}>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <div>
              <div className="max-w-[60ch] space-y-4 text-[1.0625rem] leading-[1.8]">
                {about.paragraphs.map((p) => (
                  <p
                    key={p.en}
                    className={
                      about.placeholder
                        ? "is-placeholder text-muted"
                        : "text-ink/80"
                    }
                  >
                    {pick(p, lang)}
                  </p>
                ))}
              </div>
              {profile.cv ? (
                <a
                  href={profile.cv.href}
                  className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg border border-line-strong px-5 text-[0.9375rem] font-semibold hover:border-signal"
                >
                  <FileIcon className="text-[1.1rem]" />
                  {dict.hero.cv}
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg border border-dashed border-line-strong px-5 text-[0.9375rem] font-semibold text-muted"
                >
                  <FileIcon className="text-[1.1rem]" />
                  <span className="is-placeholder">{dict.hero.cv}</span>
                  <PlaceholderMark label={dict.placeholder} />
                </span>
              )}
            </div>

            <div>
              <h3
                id="journey-title"
                className="font-display text-xl font-bold tracking-[-0.02em]"
              >
                {dict.journey.title}
              </h3>
              <ol className="relative mt-7 ml-1 flex flex-col gap-7 pl-7">
                <span
                  aria-hidden="true"
                  className="sr-rail absolute inset-y-0 left-0 w-px bg-line-strong"
                />
                {journey.map((entry) => {
                  const live = entry.current && !entry.placeholder;
                  return (
                    <li
                      key={entry.title.en}
                      className="sr-step relative grid grid-cols-[3.25rem_1fr] gap-x-4 sm:grid-cols-[4.5rem_1fr] sm:gap-x-5"
                    >
                      <span
                        aria-hidden="true"
                        className={`sr-dot absolute top-1.5 -left-[2rem] size-2.5 rounded-full border-[1.5px] ${
                          live
                            ? "border-signal bg-signal"
                            : "border-muted bg-ground"
                        }`}
                      />
                      <p
                        className={`tabular pt-0.5 text-sm font-semibold ${live ? "text-signal" : "text-muted"}`}
                      >
                        {pick(entry.when, lang)}
                      </p>
                      <div>
                        <p className="text-[1.0625rem] font-semibold">
                          <span
                            className={
                              entry.placeholder ? "is-placeholder" : ""
                            }
                          >
                            {pick(entry.title, lang)}
                          </span>
                          {entry.placeholder ? (
                            <PlaceholderMark label={dict.placeholder} />
                          ) : null}
                        </p>
                        {entry.body ? (
                          <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted">
                            {pick(entry.body, lang)}
                          </p>
                        ) : null}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </Section>

        <Section
          id="projects"
          title={dict.projects.title}
          aside={
            projects.length > 0 ? (
              <ViewAll
                href={`/${lang}/projects`}
                label={dict.projects.viewAll}
              />
            ) : null
          }
        >
          <ProjectList items={projects.slice(0, 3)} lang={lang} dict={dict} />
        </Section>

        <Section
          id="blog"
          title={dict.blog.title}
          aside={
            posts.length > 0 ? (
              <ViewAll href={`/${lang}/blog`} label={dict.blog.viewAll} />
            ) : null
          }
        >
          <PostList items={posts.slice(0, 3)} lang={lang} dict={dict} />
        </Section>

        <Section id="contact" title={dict.contact.title}>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <div>
              <p className="max-w-[40ch] text-[clamp(1.125rem,2vw,1.3125rem)] leading-relaxed text-ink/80 text-pretty">
                {dict.contact.lead}
              </p>
              <div className="mt-8">
                <ContactList dict={dict} />
              </div>
            </div>
            <ContactForm
              lang={lang}
              copy={dict.form}
              placeholderLabel={dict.placeholder}
              enabled={await contactConfigured()}
            />
          </div>
        </Section>
      </main>

      <SiteFooter dict={dict} />
    </div>
  );
}

function ViewAll({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex shrink-0 items-center gap-1.5 pb-1.5 text-[0.9375rem] font-semibold text-muted hover:text-ink"
    >
      {label}
      <ArrowRightIcon className="transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
    </Link>
  );
}
