"use client";

import Image from "next/image";
import type { LandingContent } from "@/components/landing/landing-data";
import { SectionHeading } from "@/components/landing/section-heading";

type PipelineSectionProps = {
  content: LandingContent;
};

export function PipelineSection({ content }: PipelineSectionProps) {
  return (
    <section className="flex flex-col gap-5 rounded-3xl border border-border bg-card/60 px-5 py-7 sm:px-6 sm:py-9">
      <div className="flex flex-col gap-2.5">
        <SectionHeading eyebrow={content.pipelineTitle} title="3 Easy Steps to Get Started" />
        <p className="text-xs text-muted-foreground sm:text-sm">Three clear steps tailored to {content.title.includes("Hire") ? "clients" : "freelancers"} so you always know what happens next.</p>
      </div>
      <div className="grid gap-3.5 sm:grid-cols-3">
        {content.pipeline.map((step) => (
          <div key={step.title} className="flex flex-col gap-2.5 overflow-hidden rounded-2xl border border-border bg-background/70">
            <div className="relative h-28 w-full sm:h-32">
              <Image src={step.image} alt={step.title} fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-2 p-3.5 sm:p-4">
              <p className="text-sm font-semibold text-foreground sm:text-base">{step.title}</p>
              <p className="text-xs text-muted-foreground sm:text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
