"use client";

import Image from "next/image";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LandingContent, ViewKey } from "@/components/landing/landing-data";

type HeroSectionProps = {
  activeView: ViewKey;
  content: LandingContent;
  statements: string[];
};

export function HeroSection({ activeView, content, statements }: HeroSectionProps) {
  return (
    <section className="rounded-3xl border border-border bg-card/70 px-5 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col gap-5 sm:gap-6">
          <div className="flex flex-col gap-3 sm:gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">{activeView === "client" ? "Client promise" : "Freelancer promise"}</p>
            <h2 className="text-3xl font-semibold text-foreground sm:text-5xl lg:text-6xl">{content.title}</h2>
            <p className="text-base text-muted-foreground sm:text-xl">{content.subtitle}</p>
          </div>
          <div className="flex flex-col gap-3">
            {statements.map((statement) => (
              <h3 key={statement} className="text-base font-semibold text-foreground sm:text-xl">
                {statement}
              </h3>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button className="h-11 px-6 text-sm sm:h-12 sm:px-7 sm:text-base">{content.ctaPrimary}</Button>
            <Button variant="outline" className="h-11 px-6 text-sm sm:h-12 sm:px-7 sm:text-base">
              {content.ctaSecondary}
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Image src={content.sideImage} alt="Marketplace preview" width={720} height={520} className="h-60 w-full rounded-3xl border border-border object-cover shadow-sm sm:h-80 lg:h-full" />
          <div className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
            <Globe className="h-4 w-4 text-foreground" />
            <span>Global talent, verified locally for quality.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
