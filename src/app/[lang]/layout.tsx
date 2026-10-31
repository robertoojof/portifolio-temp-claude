import type { Metadata } from "next";
import { M_PLUS_1, Unbounded } from "next/font/google";
import { notFound } from "next/navigation";
import { ThemeSync, themeScript } from "@/components/theme-toggle";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale, locales } from "@/i18n/locales";
import "../globals.css";

const mplus = M_PLUS_1({
  variable: "--font-mplus",
  subsets: ["latin", "latin-ext"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "latin-ext"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      languages: { en: "/en", pt: "/pt" },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang === "pt" ? "pt-BR" : "en"}
      className={`${mplus.variable} ${unbounded.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: static theme bootstrap, no user input */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh">
        <ThemeSync />
        <a
          href="#main"
          className="sr-only z-50 rounded-lg bg-signal px-4 py-2 font-semibold text-on-signal focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {dict.nav.skip}
        </a>
        {children}
      </body>
    </html>
  );
}
