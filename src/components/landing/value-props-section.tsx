"use client";

import Image from "next/image";
import type { LandingContent } from "@/components/landing/landing-data";

type ValuePropsSectionProps = {
  content: LandingContent;
};

export function ValuePropsSection({ content }: ValuePropsSectionProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{content.valuePropsTitle}</p>
        <h3 className="text-xl font-semibold text-foreground sm:text-2xl">Built for clarity, speed, and trust</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {content.valueProps.map((feature) => (
            <div key={feature.title} className="flex gap-3 rounded-2xl border border-border bg-card/60 p-4">
              <feature.Icon className="mt-0.5 h-5 w-5 text-foreground" />
              <div>
                <p className="text-sm font-semibold text-foreground">{feature.title}</p>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Featured snapshots</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {content.gallery.map((image) => (
            <Image key={image} src={image} alt="Team collaboration" width={520} height={360} className="h-28 w-full rounded-2xl border border-border object-cover sm:h-36" />
          ))}
        </div>
      </div>
    </section>
  );
}
