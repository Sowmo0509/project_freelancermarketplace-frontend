"use client";

import type { LandingContent } from "@/components/landing/landing-data";
import { SectionHeading } from "@/components/landing/section-heading";
import { SectionCard } from "@/components/landing/section-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FaqSectionProps = {
  content: LandingContent;
};

/**
 * Render a two-column FAQ section with a heading on the left and an accordion of FAQs on the right.
 *
 * @param content - Landing content providing `faqTitle` for the heading and an array of `{ question, answer }` entries to populate the accordion
 * @returns A JSX element: a SectionCard containing the heading/description column and a single-select, collapsible Accordion with one item per FAQ entry
 */
export function FaqSection({ content }: FaqSectionProps) {
  return (
    <SectionCard className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="flex flex-col gap-2.5">
        <SectionHeading eyebrow={content.faqTitle} title="Answers that keep expectations aligned" />
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
    </SectionCard>
  );
}