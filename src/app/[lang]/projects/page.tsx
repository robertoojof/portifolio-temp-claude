import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon } from "@/components/icons";
import { ProjectList } from "@/components/lists";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/content/site";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale } from "@/i18n/locales";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/projects">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return { title: `${dict.projects.title} · Roberto` };
}

export default async function Page({ params }: PageProps<"/[lang]/projects">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <div id="top" className="relative">
      <SiteHeader lang={lang} dict={dict} path="/projects" />
      <main id="main" className="mx-auto max-w-300 px-5 pt-16 pb-24 sm:px-[5%]">
        <Link
          href={`/${lang}`}
          className="group inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-muted hover:text-ink"
        >
          <ArrowRightIcon className="rotate-180 transition-transform duration-200 ease-out group-hover:-translate-x-0.5" />
          {dict.backHome}
        </Link>
        <h1 className="mt-6 mb-12 font-display text-[clamp(2.5rem,7vw,4.5rem)] leading-none font-extrabold tracking-[-0.03em]">
          {dict.projects.title}
        </h1>
        <ProjectList items={projects} lang={lang} dict={dict} />
      </main>
      <SiteFooter dict={dict} />
    </div>
  );
}
