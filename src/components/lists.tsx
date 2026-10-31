import Link from "next/link";
import { type Post, type Project, pick } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";
import { ArrowUpRightIcon } from "./icons";
import { PlaceholderMark } from "./placeholder";

const stateTone: Record<Project["state"], string> = {
  building: "text-signal",
  shipped: "text-ink",
  archived: "text-muted",
};

export function ProjectList({
  items,
  lang,
  dict,
}: {
  items: Project[];
  lang: Locale;
  dict: Dictionary;
}) {
  if (items.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-line-strong px-6 py-10 text-muted">
        {dict.projects.empty}
      </p>
    );
  }
  return (
    <ul className="grid gap-6">
      {items.map((p, i) => (
        <li
          key={p.slug}
          className={`${i % 2 ? "sr-from-right" : "sr-from-left"} grid overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 ease-out hover:border-line-strong md:grid-cols-[1fr_1.1fr] ${i % 2 ? "md:grid-cols-[1.1fr_1fr]" : ""}`}
        >
          <div
            className={`preview sr-parallax relative grid min-h-52 place-items-center border-b border-line md:min-h-72 md:border-b-0 ${i % 2 ? "md:order-2 md:border-l" : "md:border-r"}`}
          >
            <span className="relative font-display text-sm font-bold tracking-[0.02em] text-muted">
              {dict.projects_preview}
            </span>
          </div>
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-9">
            <h3 className="font-display text-[clamp(1.375rem,2.6vw,1.75rem)] leading-tight font-bold tracking-[-0.02em] text-balance">
              <span className={p.placeholder ? "is-placeholder" : ""}>
                {pick(p.name, lang)}
              </span>
              {p.placeholder ? (
                <PlaceholderMark label={dict.placeholder} />
              ) : null}
            </h3>
            <p
              className={`max-w-[52ch] leading-relaxed text-muted ${p.placeholder ? "is-placeholder" : ""}`}
            >
              {pick(p.summary, lang)}
            </p>
            <p
              className={`flex items-center gap-2 text-sm font-semibold ${p.placeholder ? "is-placeholder text-muted" : stateTone[p.state]}`}
            >
              <span
                aria-hidden="true"
                className={`size-2 rounded-full ${
                  p.placeholder
                    ? "border border-dashed border-muted"
                    : p.state === "building"
                      ? "bg-signal"
                      : p.state === "shipped"
                        ? "bg-ink"
                        : "border border-muted"
                }`}
              />
              {dict.projects.state[p.state]}
            </p>
            {p.stack.length > 0 ? (
              <ul className="flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-line px-2.5 py-1 text-xs font-medium text-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            ) : null}
            {p.repo || p.live ? (
              <div className="flex flex-wrap gap-3 pt-1">
                {p.live ? (
                  <a
                    href={p.live}
                    className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-signal px-4 text-sm font-bold text-on-signal hover:opacity-90"
                  >
                    {dict.projects.live}
                    <ArrowUpRightIcon />
                  </a>
                ) : null}
                {p.repo ? (
                  <a
                    href={p.repo}
                    className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-line-strong px-4 text-sm font-semibold hover:border-signal"
                  >
                    {dict.projects.repo}
                    <ArrowUpRightIcon />
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function PostList({
  items,
  lang,
  dict,
}: {
  items: Post[];
  lang: Locale;
  dict: Dictionary;
}) {
  if (items.length === 0) {
    return (
      <div className="sr-row flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 rounded-xl border border-dashed border-line-strong px-6 py-5">
        <p className="text-lg font-semibold text-muted">
          <span className="is-placeholder">{dict.blog.firstPost}</span>
          <PlaceholderMark label={dict.placeholder} />
        </p>
        <p className="text-sm text-muted">{dict.blog.empty}</p>
      </div>
    );
  }
  const format = postDateFormat(lang);
  return (
    <ul className="grid gap-3">
      {items.map((post) => (
        <li key={post.slug} className="sr-row">
          <Link
            href={`/${lang}/blog/${post.slug}`}
            className="group grid gap-2 rounded-xl border border-line bg-surface px-6 py-5 transition-colors duration-300 ease-out hover:border-line-strong"
          >
            <span className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <span className="text-lg font-semibold text-balance group-hover:text-signal">
                <span className={post.placeholder ? "is-placeholder" : ""}>
                  {pick(post.title, lang)}
                </span>
                {post.placeholder ? (
                  <PlaceholderMark label={dict.placeholder} />
                ) : null}
              </span>
              <time dateTime={post.date} className="tabular text-sm text-muted">
                {format.format(new Date(post.date))}
              </time>
            </span>
            <span className="max-w-[60ch] leading-relaxed text-muted">
              {pick(post.summary, lang)}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export const postDateFormat = (lang: Locale) =>
  new Intl.DateTimeFormat(lang === "pt" ? "pt-BR" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
