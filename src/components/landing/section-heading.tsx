"use client";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

/**
 * Renders a section heading with an eyebrow label above a larger title.
 *
 * @param eyebrow - Small, uppercase label displayed above the title
 * @param title - Main heading text displayed prominently
 * @returns A JSX element containing the eyebrow and title elements
 */
export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] mb-2 text-muted-foreground sm:text-sm">{eyebrow}</p>
      <h3 className="text-xl font-semibold text-foreground sm:text-2xl lg:text-3xl mb-2">{title}</h3>
    </div>
  );
}