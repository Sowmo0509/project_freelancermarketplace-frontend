"use client";

import type { LandingContent } from "@/components/landing/landing-data";
import { SectionHeading } from "@/components/landing/section-heading";

type ServicesSectionProps = {
  content: LandingContent;
};

/**
 * Renders a services section with a heading and a responsive list of service chips.
 *
 * The heading's eyebrow text is taken from `content.servicesTitle`. Each entry in
 * `content.services` is rendered as a rounded chip showing the service `Icon` and `label`.
 *
 * @param content - Landing content object containing `servicesTitle` and a `services` array of items with `label` and `Icon`
 * @returns A JSX element containing the section with heading and service chips
 */
export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <SectionHeading eyebrow={content.servicesTitle} title="Focused expertise, not a noisy marketplace" />
      </div>
      <div className="flex flex-wrap gap-2.5 text-xs text-muted-foreground sm:gap-3">
        {content.services.map((item) => (
          <div key={item.label} className="flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-2 sm:px-4">
            <item.Icon className="h-4 w-4 text-foreground" />
            <span className="text-foreground text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}