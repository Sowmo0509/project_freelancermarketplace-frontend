"use client";

import type { LandingContent } from "@/components/landing/landing-data";

type PipelineSectionProps = {
  content: LandingContent;
};

export function PipelineSection({ content }: PipelineSectionProps) {
  return (
    <section className="grid gap-6 rounded-3xl border border-border bg-card/60 px-5 py-6 sm:px-6 sm:py-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{content.pipelineTitle}</p>
        <h3 className="text-xl font-semibold text-foreground sm:text-2xl">A guided flow that keeps work moving</h3>
        <p className="text-xs text-muted-foreground">Each step is designed to remove uncertainty and keep momentum.</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {content.pipeline.map((step) => (
          <div key={step.title} className="flex flex-col gap-2 rounded-2xl border border-border bg-background/70 p-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <step.Icon className="h-4 w-4 text-foreground" />
            </div>
            <p className="text-sm font-semibold text-foreground">{step.title}</p>
            <p className="text-xs text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
