import type { Locale } from "./locales";

const en = {
  meta: {
    title: "Roberto · Junior full-stack developer",
    description:
      "Roberto is a junior full-stack developer who builds web applications and learns through hands-on projects.",
  },
  nav: {
    label: "Main",
    about: "About",
    projects: "Projects",
    blog: "Blog",
    language: "Language",
    switchTo: "Ler em português",
    theme: "Switch between light and dark theme",
    skip: "Skip to content",
  },
  hero: {
    nameTail: "Full\u2011stack dev.",
    role: "Junior developer · web applications, front to back",
    story:
      "I build web applications and learn by building them. Every project and post here is a step on that path.",
    contact: "Contact",
    email: "Email",
    linkedin: "LinkedIn",
    cv: "Résumé (PDF)",
    github: "GitHub",
    available: "Open to work",
    scroll: "Scroll",
    unavailable: "Not looking for a new role right now",
  },
  about: {
    title: "About",
  },
  journey: {
    title: "Journey",
    now: "Now",
  },
  projects: {
    title: "Projects",
    viewAll: "All projects",
    repo: "Code",
    live: "Live site",
    empty: "No projects published yet.",
    state: {
      building: "Building now",
      shipped: "Shipped",
      archived: "Archived",
    },
  },
  blog: {
    title: "Blog",
    viewAll: "All posts",
    empty: "No posts yet.",
    firstPost: "Title of the first post",
  },
  contact: {
    title: "Let's talk",
    lead: "Want to talk about a role or a project? Email and LinkedIn are the fastest ways to reach me.",
  },
  projects_preview: "Preview coming soon",
  form: {
    title: "Send a message",
    name: "Name",
    email: "Email",
    message: "Message",
    messageHint: "What would you like to talk about?",
    send: "Send message",
    sending: "Sending…",
    sentTitle: "Message sent.",
    sentBody:
      "Thanks for writing. I'll reply to the email you left as soon as I can.",
    notConfigured:
      "Sending isn't switched on yet. Use email or LinkedIn for now.",
    errors: {
      name: {
        required: "Enter your name.",
        long: "Use 120 characters or fewer.",
      },
      email: {
        required: "Enter your email so I can reply.",
        invalid:
          "That doesn't look like an email address. Check it and try again.",
      },
      message: {
        required: "Write a message.",
        short: "Add a little more: at least 10 characters.",
        long: "Keep it under 5,000 characters.",
      },
      form: {
        unavailable:
          "Sending isn't switched on yet. Use email or LinkedIn for now.",
        failed:
          "The message couldn't be sent. Your text is still here: try again, or use email or LinkedIn.",
      },
    },
  },
  footer: {
    top: "Back to top",
  },
  placeholder: "Placeholder",
  backHome: "Back to home",
};

export type Dictionary = typeof en;

const pt: Dictionary = {
  meta: {
    title: "Roberto · Desenvolvedor full-stack júnior",
    description:
      "Roberto é um desenvolvedor full-stack júnior que constrói aplicações web e aprende com projetos práticos.",
  },
  nav: {
    label: "Principal",
    about: "Sobre",
    projects: "Projetos",
    blog: "Blog",
    language: "Idioma",
    switchTo: "Read in English",
    theme: "Alternar entre tema claro e escuro",
    skip: "Pular para o conteúdo",
  },
  hero: {
    nameTail: "Dev full\u2011stack.",
    role: "Desenvolvedor júnior · aplicações web, do front ao back",
    story:
      "Construo aplicações web e aprendo construindo. Cada projeto e cada post aqui é um passo nesse caminho.",
    contact: "Contato",
    email: "E-mail",
    linkedin: "LinkedIn",
    cv: "Currículo (PDF)",
    github: "GitHub",
    available: "Aberto a oportunidades",
    scroll: "Role a página",
    unavailable: "Não estou procurando vaga no momento",
  },
  about: {
    title: "Sobre",
  },
  journey: {
    title: "Trajetória",
    now: "Agora",
  },
  projects: {
    title: "Projetos",
    viewAll: "Todos os projetos",
    repo: "Código",
    live: "Site no ar",
    empty: "Nenhum projeto publicado ainda.",
    state: {
      building: "Em construção",
      shipped: "Publicado",
      archived: "Arquivado",
    },
  },
  blog: {
    title: "Blog",
    viewAll: "Todos os posts",
    empty: "Nenhum post ainda.",
    firstPost: "Título do primeiro post",
  },
  contact: {
    title: "Vamos conversar",
    lead: "Quer conversar sobre uma vaga ou um projeto? E-mail e LinkedIn são os jeitos mais rápidos de falar comigo.",
  },
  projects_preview: "Prévia em breve",
  form: {
    title: "Envie uma mensagem",
    name: "Nome",
    email: "E-mail",
    message: "Mensagem",
    messageHint: "Sobre o que você quer conversar?",
    send: "Enviar mensagem",
    sending: "Enviando…",
    sentTitle: "Mensagem enviada.",
    sentBody:
      "Obrigado por escrever. Respondo no e-mail que você deixou assim que puder.",
    notConfigured:
      "O envio ainda não está ativado. Por enquanto, use o e-mail ou o LinkedIn.",
    errors: {
      name: { required: "Informe seu nome.", long: "Use até 120 caracteres." },
      email: {
        required: "Informe seu e-mail para eu poder responder.",
        invalid:
          "Isso não parece um endereço de e-mail. Confira e tente de novo.",
      },
      message: {
        required: "Escreva uma mensagem.",
        short: "Escreva um pouco mais: pelo menos 10 caracteres.",
        long: "Use menos de 5.000 caracteres.",
      },
      form: {
        unavailable:
          "O envio ainda não está ativado. Por enquanto, use o e-mail ou o LinkedIn.",
        failed:
          "Não foi possível enviar. Seu texto continua aqui: tente de novo ou use o e-mail ou o LinkedIn.",
      },
    },
  },
  footer: {
    top: "Voltar ao topo",
  },
  placeholder: "A preencher",
  backHome: "Voltar ao início",
};

const dictionaries: Record<Locale, Dictionary> = { en, pt };

export const getDictionary = (locale: Locale): Dictionary =>
  dictionaries[locale];
