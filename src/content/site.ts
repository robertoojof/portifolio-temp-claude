import type { Localized } from "@/i18n/locales";

/**
 * Everything the site says about Roberto lives here.
 * Entries marked `placeholder: true` render with a visible placeholder mark
 * until real content replaces them; nothing here may be invented.
 */

/** "hidden" until Roberto confirms availability. */
export type Availability = "hidden" | "available" | "unavailable";

export type Link = { href: string; label: string; placeholder?: boolean };

export type JourneyEntry = {
  when: Localized;
  title: Localized;
  body?: Localized;
  current?: boolean;
  placeholder?: boolean;
};

export type ProjectState = "building" | "shipped" | "archived";

export type Project = {
  slug: string;
  name: Localized;
  summary: Localized;
  stack: string[];
  state: ProjectState;
  repo?: string;
  live?: string;
  placeholder?: boolean;
};

export type Post = {
  slug: string;
  title: Localized;
  date: string; // ISO yyyy-mm-dd
  placeholder?: boolean;
};

export const profile = {
  name: "Roberto",
  availability: "hidden" as Availability,
  email: {
    href: "mailto:email@placeholder.invalid",
    label: "email@placeholder.invalid",
    placeholder: true,
  } satisfies Link,
  linkedin: {
    href: "https://www.linkedin.com/in/placeholder",
    label: "linkedin.com/in/placeholder",
    placeholder: true,
  } satisfies Link,
  github: {
    href: "https://github.com/placeholder",
    label: "github.com/placeholder",
    placeholder: true,
  } satisfies Link,
  cv: null as Link | null,
  /** The hero story line (in the dictionaries) awaits Roberto's confirmation. */
  storyPlaceholder: true,
};

export const about: { paragraphs: Localized[]; placeholder: boolean } = {
  placeholder: true,
  paragraphs: [
    {
      en: "Where you started, and what first pulled you into building for the web.",
      pt: "Onde você começou e o que te puxou para construir para a web.",
    },
    {
      en: "What you are learning now, and the kind of team you want to grow in.",
      pt: "O que você está aprendendo agora e em que tipo de time quer crescer.",
    },
  ],
};

export const journey: JourneyEntry[] = [
  {
    when: { en: "Year", pt: "Ano" },
    title: { en: "First line of code", pt: "Primeira linha de código" },
    placeholder: true,
  },
  {
    when: { en: "Year", pt: "Ano" },
    title: {
      en: "First full-stack application",
      pt: "Primeira aplicação full-stack",
    },
    placeholder: true,
  },
  {
    when: { en: "Now", pt: "Agora" },
    title: {
      en: "What you are building now",
      pt: "O que você está construindo agora",
    },
    current: true,
    placeholder: true,
  },
];

export const projects: Project[] = [
  {
    slug: "project-one",
    name: { en: "Project name", pt: "Nome do projeto" },
    summary: {
      en: "One sentence on the problem it solves and what you learned building it.",
      pt: "Uma frase sobre o problema que resolve e o que você aprendeu construindo.",
    },
    stack: [],
    state: "building",
    placeholder: true,
  },
  {
    slug: "project-two",
    name: { en: "Project name", pt: "Nome do projeto" },
    summary: {
      en: "One sentence on the problem it solves and what you learned building it.",
      pt: "Uma frase sobre o problema que resolve e o que você aprendeu construindo.",
    },
    stack: [],
    state: "shipped",
    placeholder: true,
  },
];

export const posts: Post[] = [];

export const pick = (value: Localized, locale: keyof Localized) =>
  value[locale];
