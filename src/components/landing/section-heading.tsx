"use client";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground sm:text-sm">{eyebrow}</p>
      <h3 className="text-xl font-semibold text-foreground sm:text-2xl lg:text-3xl">{title}</h3>
    </>
  );
}

