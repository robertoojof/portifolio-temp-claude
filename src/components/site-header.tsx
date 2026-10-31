import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";
import { type Locale, locales } from "@/i18n/locales";
import { ThemeToggle } from "./theme-toggle";

type Props = {
  lang: Locale;
  dict: Dictionary;
  /** Path after the locale segment, e.g. "" or "/projects". */
  path?: string;
};

export function SiteHeader({ lang, dict, path = "" }: Props) {
  const home = `/${lang}`;
  return (
    <header className="sr-header sticky top-0 z-20 border-b border-transparent bg-ground">
      <div className="mx-auto flex h-18 max-w-300 items-center gap-6 px-5 sm:px-[5%]">
        <Link
          href={home}
          className="mr-auto font-display text-lg font-extrabold tracking-[-0.02em] text-ink"
        >
          RO<span className="text-signal">.</span>
        </Link>
        <nav
          aria-label={dict.nav.label}
          className="hidden gap-7 text-[0.9375rem] text-muted md:flex"
        >
          <Link href={`${home}#about`} className="hover:text-ink">
            {dict.nav.about}
          </Link>
          <Link href={`${home}#projects`} className="hover:text-ink">
            {dict.nav.projects}
          </Link>
          <Link href={`${home}#blog`} className="hover:text-ink">
            {dict.nav.blog}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ul
            aria-label={dict.nav.language}
            className="flex text-[0.8125rem] font-bold tracking-wider"
          >
            {locales.map((l) => (
              <li key={l}>
                {l === lang ? (
                  <span
                    aria-current="true"
                    className="grid h-10 place-items-center px-1.5 text-ink uppercase"
                  >
                    {l}
                  </span>
                ) : (
                  <Link
                    href={`/${l}${path}`}
                    hrefLang={l}
                    lang={l}
                    aria-label={dict.nav.switchTo}
                    className="grid h-10 place-items-center px-1.5 text-muted uppercase hover:text-ink"
                  >
                    {l}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <ThemeToggle label={dict.nav.theme} />
          <Link
            href={`${home}#contact`}
            className="ml-2 inline-flex h-10 items-center rounded-lg bg-signal px-4 text-[0.875rem] font-bold text-on-signal transition-[opacity,transform] duration-200 ease-out hover:-translate-y-px hover:opacity-90"
          >
            {dict.hero.contact}
          </Link>
        </div>
      </div>
      <span aria-hidden="true" className="sr-progress" />
    </header>
  );
}
