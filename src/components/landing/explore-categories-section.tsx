"use client";

import Image from "next/image";
import { exploreCategories } from "@/components/landing/landing-data";
import { SectionHeading } from "@/components/landing/section-heading";
import { SectionCard } from "@/components/landing/section-card";

export function ExploreCategoriesSection() {
  return (
    <SectionCard>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2">
          <SectionHeading eyebrow="Browse categories" title="Explore millions of pros" />
        </div>
        <p className="max-w-sm text-xs text-muted-foreground sm:text-sm">From niche specialists to cross-functional teams, explore the lanes where top freelancers thrive.</p>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-7 lg:grid-cols-5">
        {exploreCategories.map((category) => (
          <button key={category.label} type="button" className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-border bg-transparent px-3.5 py-3 text-left transition-colors hover:border-foreground/40">
            <Image src={category.image} alt={category.label} fill className="object-cover opacity-70 transition-opacity duration-200 group-hover:opacity-90" />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-background/90 via-background/75 to-background/40" />
            <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/80">
              <category.Icon className="h-4 w-4 text-foreground" />
            </span>
            <span className="relative z-10 text-xs font-medium text-foreground sm:text-sm">{category.label}</span>
          </button>
        ))}
      </div>
    </SectionCard>
  );
}
