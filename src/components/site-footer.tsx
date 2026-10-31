import type { Dictionary } from "@/i18n/dictionaries";
import { ArrowUpIcon } from "./icons";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-300 items-center justify-between px-5 py-8 text-sm text-muted sm:px-[5%]">
        <span>
          <span className="font-display font-extrabold text-ink">
            RO<span className="text-signal">.</span>
          </span>{" "}
          · Roberto
        </span>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 font-medium hover:text-ink"
        >
          {dict.footer.top}
          <ArrowUpIcon />
        </a>
      </div>
    </footer>
  );
}
