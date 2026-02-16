"use client";

import Image from "next/image";
import type { LandingContent } from "@/components/landing/landing-data";
import { SectionHeading } from "@/components/landing/section-heading";

type ValuePropsSectionProps = {
  content: LandingContent;
};

/**
 * Render the landing page "value props" section with a gallery and feature cards.
 *
 * Renders a SectionHeading using `content.valuePropsTitle`, a responsive image gallery from `content.gallery`
 * where the first image is labeled "Live project snapshot" and subsequent images are labeled "Real collaboration in motion",
 * and a grid of feature cards from `content.valueProps` that display an icon, title, and description.
 *
 * @param content - Landing content object containing:
 *   - `valuePropsTitle`: eyebrow text for the section heading
 *   - `gallery`: array of image source strings for the gallery
 *   - `valueProps`: array of feature objects with `title`, `description`, and `Icon` component
 * @returns A section element containing the image gallery and feature cards
 */
export function ValuePropsSection({ content }: ValuePropsSectionProps) {
  return (
    <section className="flex flex-col gap-6 lg:gap-8">
      <div className="flex flex-col gap-4">
        <SectionHeading eyebrow={content.valuePropsTitle} title="Built for clarity, speed, and trust" />

        <div className="grid gap-3 sm:grid-cols-2">
          {content.gallery.map((image, index) => (
            <div key={image} className="relative overflow-hidden rounded-2xl border border-border bg-background/40">
              <Image src={image} alt="Team collaboration" width={520} height={360} className="h-24 w-full object-cover sm:h-28" />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-[11px] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>{index === 0 ? "Live project snapshot" : "Real collaboration in motion"}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {content.valueProps.map((feature) => (
            <div key={feature.title} className="group flex gap-3 rounded-2xl border border-border bg-card/60 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-card/80 hover:shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80">
                <feature.Icon className="h-4 w-4 text-foreground" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-foreground sm:text-base">{feature.title}</p>
                <p className="text-xs text-muted-foreground sm:text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}