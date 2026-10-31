import { profile, type Link as SiteLink } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  FileIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "./icons";
import { PlaceholderMark } from "./placeholder";

const live = (link: SiteLink) => (link.placeholder ? undefined : link.href);

/** Email and LinkedIn: the two primary ways to reach Roberto. */
export function ContactButtons({ dict }: { dict: Dictionary }) {
  const { email, linkedin } = profile;
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a
        href={live(email)}
        aria-disabled={email.placeholder || undefined}
        className="group inline-flex min-h-13 flex-wrap items-center gap-x-2.5 gap-y-0.5 sm:flex-nowrap rounded-lg bg-signal px-5 py-3 sm:px-6 text-[0.9375rem] font-bold text-on-signal transition-[opacity,transform] duration-200 ease-out hover:-translate-y-0.5 hover:opacity-90"
      >
        <MailIcon className="shrink-0 text-[1.15rem]" />
        <span className="shrink-0 whitespace-nowrap">{dict.hero.email}</span>
        <span
          className={`order-last basis-full pl-[1.875rem] break-all sm:order-none sm:basis-auto sm:pl-0 sm:break-normal font-medium opacity-80 ${email.placeholder ? "is-placeholder" : ""}`}
        >
          {email.label}
        </span>
        <ArrowRightIcon className="ml-auto shrink-0 transition-transform sm:ml-0 duration-200 ease-out group-hover:translate-x-0.5" />
      </a>
      <a
        href={live(linkedin)}
        aria-disabled={linkedin.placeholder || undefined}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex min-h-13 flex-wrap items-center gap-x-2.5 gap-y-0.5 sm:flex-nowrap rounded-lg border border-line-strong px-5 py-3 sm:px-6 text-[0.9375rem] font-semibold text-ink transition-[border-color,background-color] duration-200 ease-out hover:border-signal hover:bg-surface"
      >
        <LinkedInIcon className="shrink-0 text-[1.05rem]" />
        <span className="shrink-0 whitespace-nowrap">{dict.hero.linkedin}</span>
        <span
          className={`order-last basis-full pl-[1.875rem] break-all sm:order-none sm:basis-auto sm:pl-0 sm:break-normal font-normal text-muted ${linkedin.placeholder ? "is-placeholder" : ""}`}
        >
          {linkedin.label}
        </span>
        <ArrowRightIcon className="ml-auto shrink-0 transition-transform sm:ml-0 duration-200 ease-out group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}

/** The full contact list: each channel as its own row. */
export function ContactList({ dict }: { dict: Dictionary }) {
  const { email, linkedin, github, cv } = profile;
  const rows = [
    { key: "email", icon: <MailIcon />, label: dict.hero.email, link: email },
    {
      key: "linkedin",
      icon: <LinkedInIcon />,
      label: dict.hero.linkedin,
      link: linkedin,
    },
    {
      key: "github",
      icon: <GitHubIcon />,
      label: dict.hero.github,
      link: github,
    },
    {
      key: "cv",
      icon: <FileIcon />,
      label: dict.hero.cv,
      link: cv ?? { href: "#", label: "", placeholder: true },
    },
  ];
  return (
    <ul className="flex flex-col gap-3">
      {rows.map(({ key, icon, label, link }) => (
        <li key={key} className="sr-row">
          <a
            href={live(link)}
            aria-disabled={link.placeholder || undefined}
            target={key === "email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group flex min-h-16 items-center gap-4 rounded-xl border border-line bg-surface px-5 py-4 transition-colors duration-200 ease-out hover:border-line-strong"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-line text-[1.15rem] text-signal">
              {icon}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[0.9375rem] font-semibold">
                {label}
                {link.placeholder ? (
                  <PlaceholderMark label={dict.placeholder} />
                ) : null}
              </span>
              {link.label ? (
                <span
                  className={`block truncate text-sm text-muted ${link.placeholder ? "is-placeholder" : ""}`}
                >
                  {link.label}
                </span>
              ) : null}
            </span>
            <ArrowUpRightIcon className="shrink-0 text-muted transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
          </a>
        </li>
      ))}
    </ul>
  );
}
