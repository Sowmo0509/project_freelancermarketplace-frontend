"use client";

import type { LandingContent } from "@/components/landing/landing-data";

type FaqSectionProps = {
  content: LandingContent;
};

export function FaqSection({ content }: FaqSectionProps) {
  return (
    <section className="grid gap-6 rounded-3xl border border-border bg-card/60 px-5 py-6 sm:px-6 sm:py-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{content.faqTitle}</p>
        <h3 className="text-xl font-semibold text-foreground sm:text-2xl">Answers that keep expectations aligned</h3>
        <p className="text-xs text-muted-foreground">Clear answers, clear workflows, and everything tracked from day one.</p>
      </div>
      <div className="flex flex-col gap-3">
        {content.faq.map((item) => (
          <details key={item.question} className="group rounded-2xl border border-border bg-background/70 px-4 py-3">
            <summary className="cursor-pointer list-none text-sm font-semibold text-foreground">{item.question}</summary>
            <p className="mt-2 text-xs text-muted-foreground">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
