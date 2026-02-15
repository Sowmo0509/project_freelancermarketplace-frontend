"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { LandingContent } from "@/components/landing/landing-data";

type FeaturedFreelancersSectionProps = {
  content: LandingContent;
};

export function FeaturedFreelancersSection({ content }: FeaturedFreelancersSectionProps) {
  const isClientView = content.title.includes("Hire");

  return (
    <section className="rounded-3xl border border-border bg-card/60 px-5 py-7 sm:px-6 sm:py-9">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground sm:text-sm">{content.featuredFreelancersTitle}</p>
          <h3 className="text-xl font-semibold text-foreground sm:text-2xl lg:text-3xl">{isClientView ? "Proven freelancers ready to join your projects" : "Premium clients investing in long-term work"}</h3>
        </div>
        <p className="max-w-sm text-xs text-muted-foreground sm:text-sm">{isClientView ? "Each profile shows real earnings, reviews, and job success so you know who you are hiring." : "See real budgets, repeat collaboration rates, and satisfaction scores from freelancers who’ve worked with them."}</p>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-7 lg:grid-cols-4">
        {content.featuredFreelancers.map((freelancer) => {
          const successPercent = parseInt(freelancer.jobSuccess, 10) || 0;

          return (
            <article key={freelancer.name} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-background/70">
              <div className="flex flex-col gap-2 p-3.5 sm:p-4">
                {/* Row 1: image, name, location, verification */}
                <div className="flex items-start gap-2">
                  <div className="flex items-start gap-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                      <Image src={freelancer.image} alt={freelancer.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col gap-0">
                      <span className="text-sm font-semibold text-foreground sm:text-base whitespace-nowrap truncate max-w-full">{freelancer.name}</span>
                      <span className="text-[11px] text-muted-foreground sm:text-xs">Category</span>
                      <span className="text-[11px] text-muted-foreground sm:text-xs">{freelancer.location}</span>
                    </div>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10">
                    <CheckCircle2 className="h-3.5 w-3.5 text-sky-500" />
                  </div>
                </div>

                {/* Row 2: bio */}
                <p className="text-[11px] text-muted-foreground sm:text-xs line-clamp-2">{freelancer.bio}</p>

                {/* Row 3: hourly rate and total earned */}
                <div className="flex items-center justify-between text-[11px] sm:text-xs">
                  <span className="font-medium text-foreground">{freelancer.hourlyRate}</span>
                  <span className="text-[12px] font-semibold text-foreground sm:text-[13px]">{freelancer.totalEarned}</span>
                </div>

                {/* Row 4: job success slider */}
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground sm:text-xs">
                  <div className="flex-1 flex items-center gap-2">
                    <p className="whitespace-nowrap">{isClientView ? "Success Rate" : "Hiring Rate"}</p>
                    <div className="relative h-1.5 w-full rounded-full bg-muted">
                      <div className="absolute inset-y-0 left-0 rounded-full bg-emerald-500" style={{ width: `${successPercent}%` }} />
                    </div>
                    <span className="text-[11px] font-semibold text-foreground">{successPercent}%</span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
