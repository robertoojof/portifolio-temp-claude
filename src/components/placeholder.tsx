export function PlaceholderMark({ label }: { label: string }) {
  return (
    <span className="ml-2 inline-block shrink-0 whitespace-nowrap translate-y-[-0.1em] rounded-full border border-dashed border-muted/60 px-2 py-px align-middle text-[0.6875rem] font-medium tracking-wide text-muted">
      {label}
    </span>
  );
}
