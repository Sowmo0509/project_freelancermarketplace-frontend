"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { LandingContent } from "@/components/landing/landing-data";

type FaqSectionProps = {
  content: LandingContent;
};

export function FaqSection({ content }: FaqSectionProps) {
  return (
    <section className="grid gap-7 rounded-3xl border border-border bg-card/60 px-5 py-7 sm:px-6 sm:py-9 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="flex flex-col gap-2.5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground sm:text-sm">{content.faqTitle}</p>
        <h3 className="text-xl font-semibold text-foreground sm:text-2xl lg:text-3xl">Answers that keep expectations aligned</h3>
        <p className="text-xs text-muted-foreground sm:text-sm">Clear answers, clear workflows, and everything tracked from day one.</p>
      </div>
      <Accordion type="single" collapsible className="flex flex-col gap-1.5">
        {content.faq.map((item, index) => (
          <AccordionItem key={item.question} value={`faq-${index}`} className="border-border">
            <AccordionTrigger className="px-3 text-sm font-semibold text-foreground sm:text-base">{item.question}</AccordionTrigger>
            <AccordionContent className="px-3 text-xs text-muted-foreground sm:text-sm">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
