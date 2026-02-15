"use client";

import type { LandingContent } from "@/components/landing/landing-data";

type ServicesSectionProps = {
  content: LandingContent;
};

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{content.servicesTitle}</p>
        <h3 className="text-xl font-semibold text-foreground sm:text-2xl">Focused expertise, not a noisy marketplace</h3>
      </div>
      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground sm:gap-3">
        {content.services.map((item) => (
          <div key={item.label} className="flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-2 sm:px-4">
            <item.Icon className="h-4 w-4 text-foreground" />
            <span className="text-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
