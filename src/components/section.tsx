import type { ReactNode } from "react";

export function Section({
  id,
  title,
  aside,
  children,
}: {
  id: string;
  title: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto max-w-300 scroll-mt-20 px-5 py-20 sm:px-[5%] sm:py-28"
    >
      <div className="mb-10 flex items-end justify-between gap-4 sm:mb-12">
        <h2
          id={`${id}-title`}
          className="sr-title font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] font-extrabold tracking-[-0.025em]"
        >
          {title}
        </h2>
        {aside}
      </div>
      {children}
    </section>
  );
}
