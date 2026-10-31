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

export type PostBlock =
  | { type: "p"; text: Localized }
  | { type: "h2"; text: Localized }
  | { type: "list"; items: Localized[] }
  | { type: "code"; code: string };

export type Post = {
  slug: string;
  title: Localized;
  date: string; // ISO yyyy-mm-dd
  summary: Localized;
  body: PostBlock[];
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

export const posts: Post[] = [
  {
    slug: "mock-post-three",
    title: {
      en: "What I learned shipping my first full-stack app",
      pt: "O que aprendi publicando minha primeira aplicação full-stack",
    },
    date: "2026-10-20",
    summary: {
      en: "Putting an app online taught me more than building it did.",
      pt: "Colocar uma aplicação no ar me ensinou mais do que construí-la.",
    },
    body: [
      {
        type: "p",
        text: {
          en: "For weeks the app only lived on localhost. It worked, the tests passed, and I felt done. Then I tried to deploy it, and a whole new list of problems showed up.",
          pt: "Por semanas a aplicação só existiu no localhost. Funcionava, os testes passavam e eu me sentia pronto. Aí tentei publicar, e apareceu uma lista nova de problemas.",
        },
      },
      {
        type: "h2",
        text: {
          en: "Environment variables are part of the app",
          pt: "Variáveis de ambiente fazem parte da aplicação",
        },
      },
      {
        type: "p",
        text: {
          en: "The first build failed because a key existed only in my local .env file. Now every project starts with a .env.example that lists everything the app needs to run.",
          pt: "O primeiro build falhou porque uma chave só existia no meu .env local. Hoje todo projeto começa com um .env.example que lista tudo o que a aplicação precisa para rodar.",
        },
      },
      {
        type: "code",
        code: "DATABASE_URL=\nRESEND_API_KEY=\nCONTACT_TO_EMAIL=",
      },
      {
        type: "h2",
        text: { en: "What I would do again", pt: "O que eu faria de novo" },
      },
      {
        type: "list",
        items: [
          {
            en: "Deploy on day one, even when there is almost nothing to show.",
            pt: "Publicar no primeiro dia, mesmo com quase nada para mostrar.",
          },
          {
            en: "Keep the database schema in migrations, never edited by hand.",
            pt: "Manter o schema do banco em migrations, nunca editado à mão.",
          },
          {
            en: "Write down every error and how I fixed it.",
            pt: "Anotar cada erro e como resolvi.",
          },
        ],
      },
      {
        type: "p",
        text: {
          en: "The app is small, but shipping it changed how I start every project after it.",
          pt: "A aplicação é pequena, mas publicá-la mudou o jeito como começo todo projeto depois dela.",
        },
      },
    ],
    placeholder: true,
  },
  {
    slug: "mock-post-two",
    title: {
      en: "Server actions vs. API routes in Next.js",
      pt: "Server actions vs. rotas de API no Next.js",
    },
    date: "2026-09-08",
    summary: {
      en: "When I reach for each one, using this site's contact form as the example.",
      pt: "Quando uso cada um, com o formulário de contato deste site como exemplo.",
    },
    body: [
      {
        type: "p",
        text: {
          en: "When I built the contact form on this site, I had to choose: a server action or an API route. Both run on the server, but they solve different problems.",
          pt: "Quando fiz o formulário de contato deste site, precisei escolher: server action ou rota de API. Os dois rodam no servidor, mas resolvem problemas diferentes.",
        },
      },
      {
        type: "h2",
        text: { en: "Server actions", pt: "Server actions" },
      },
      {
        type: "p",
        text: {
          en: "A server action is a function the form calls directly. There is no fetch and no URL to manage, and the form still works before JavaScript loads.",
          pt: "Uma server action é uma função que o formulário chama direto. Não tem fetch nem URL para gerenciar, e o formulário funciona mesmo antes do JavaScript carregar.",
        },
      },
      {
        type: "code",
        code: '"use server";\n\nexport async function sendMessage(state: State, data: FormData) {\n  const email = data.get("email");\n  // validate, then send\n}',
      },
      {
        type: "h2",
        text: { en: "API routes", pt: "Rotas de API" },
      },
      {
        type: "p",
        text: {
          en: "An API route is a public endpoint. I use one when something outside the app needs to call it: a webhook, a mobile app, or another service.",
          pt: "Uma rota de API é um endpoint público. Uso quando algo de fora da aplicação precisa chamar: um webhook, um app mobile ou outro serviço.",
        },
      },
      {
        type: "list",
        items: [
          {
            en: "A form inside the app: server action.",
            pt: "Formulário dentro da aplicação: server action.",
          },
          {
            en: "Something external calls it: API route.",
            pt: "Algo externo chama: rota de API.",
          },
        ],
      },
    ],
    placeholder: true,
  },
  {
    slug: "mock-post-one",
    title: {
      en: "Why I started this blog",
      pt: "Por que comecei este blog",
    },
    date: "2026-07-15",
    summary: {
      en: "Writing down what I learn, so I learn it twice.",
      pt: "Escrever o que aprendo, para aprender duas vezes.",
    },
    body: [
      {
        type: "p",
        text: {
          en: "I learn the most when I build things, but I forget a lot of it. A bug I spent an afternoon on comes back three months later, and I have to solve it again from scratch.",
          pt: "Aprendo mais quando construo coisas, mas esqueço muito. Um bug que me custou uma tarde volta três meses depois, e preciso resolver tudo de novo.",
        },
      },
      {
        type: "p",
        text: {
          en: "This blog is where I write those things down. Short posts about what I built, what broke, and what I understood along the way.",
          pt: "Este blog é onde anoto essas coisas. Posts curtos sobre o que construí, o que quebrou e o que entendi no caminho.",
        },
      },
      {
        type: "h2",
        text: { en: "What to expect", pt: "O que esperar" },
      },
      {
        type: "list",
        items: [
          {
            en: "Notes from the projects on this site.",
            pt: "Notas dos projetos deste site.",
          },
          {
            en: "Comparisons between tools I have tried.",
            pt: "Comparações entre ferramentas que testei.",
          },
          {
            en: "Mistakes, and what they taught me.",
            pt: "Erros, e o que eles me ensinaram.",
          },
        ],
      },
    ],
    placeholder: true,
  },
];

export const pick = (value: Localized, locale: keyof Localized) =>
  value[locale];
