import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon } from "@/components/icons";
import { postDateFormat } from "@/components/lists";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { type PostBlock, pick, posts } from "@/content/site";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale, type Locale } from "@/i18n/locales";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/blog/[slug]">) {
  const { lang, slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!hasLocale(lang) || !post) return {};
  return {
    title: `${pick(post.title, lang)} · Roberto`,
    description: pick(post.summary, lang),
  };
}

function Block({ block, lang }: { block: PostBlock; lang: Locale }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-12 mb-4 font-display text-[1.25rem] font-bold tracking-[-0.02em]">
          {pick(block.text, lang)}
        </h2>
      );
    case "p":
      return (
        <p className="mb-6 text-[1.0625rem] leading-[1.8] text-ink/85 text-pretty">
          {pick(block.text, lang)}
        </p>
      );
    case "list":
      return (
        <ul className="mb-6 grid list-disc gap-2 pl-6 text-[1.0625rem] leading-[1.8] text-ink/85 marker:text-signal">
          {block.items.map((item) => (
            <li key={item.en}>{pick(item, lang)}</li>
          ))}
        </ul>
      );
    case "code":
      return (
        <pre className="mb-6 overflow-x-auto rounded-xl border border-line bg-surface px-5 py-4 text-sm leading-relaxed">
          <code>{block.code}</code>
        </pre>
      );
  }
}

export default async function Page({
  params,
}: PageProps<"/[lang]/blog/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const dict = getDictionary(lang);

  return (
    <div id="top" className="relative">
      <SiteHeader lang={lang} dict={dict} path={`/blog/${post.slug}`} />
      <main id="main" className="mx-auto max-w-300 px-5 pt-16 pb-24 sm:px-[5%]">
        <Link
          href={`/${lang}/blog`}
          className="group inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-muted hover:text-ink"
        >
          <ArrowRightIcon className="rotate-180 transition-transform duration-200 ease-out group-hover:-translate-x-0.5" />
          {dict.blog.back}
        </Link>
        <article className="mx-auto mt-10 max-w-[68ch]">
          <header className="mb-10">
            <time
              dateTime={post.date}
              className="tabular text-sm font-semibold text-muted"
            >
              {postDateFormat(lang).format(new Date(post.date))}
            </time>
            <h1 className="mt-3 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] font-extrabold tracking-[-0.025em] text-balance">
              {pick(post.title, lang)}
            </h1>
            <p className="mt-5 text-[clamp(1.125rem,2vw,1.3125rem)] leading-relaxed text-muted text-pretty">
              {pick(post.summary, lang)}
            </p>
            {post.placeholder ? (
              <p className="mt-6 rounded-xl border border-dashed border-line-strong px-5 py-3 text-sm text-muted">
                {dict.blog.sample}
              </p>
            ) : null}
          </header>
          {post.body.map((block, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: blocks are static and never reorder
            <Block key={i} block={block} lang={lang} />
          ))}
        </article>
      </main>
      <SiteFooter dict={dict} />
    </div>
  );
}
