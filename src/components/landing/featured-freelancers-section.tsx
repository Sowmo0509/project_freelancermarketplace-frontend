"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { LandingContent } from "@/components/landing/landing-data";
import { SectionHeading } from "@/components/landing/section-heading";
import { SectionCard } from "@/components/landing/section-card";

type FeaturedFreelancersSectionProps = {
  content: LandingContent;
};

/**
 * Renders a featured freelancers section populated from the provided landing content.
 *
 * The header text and the progress label switch between a "client" and "client-facing" view depending on whether `content.title` contains the substring "Hire". Up to three entries from `content.featuredFreelancers` are shown; each card displays avatar, name, location, bio, role badge, hourly rate, total earned, and a progress bar derived from `freelancer.jobSuccess` (falls back to 0 when not a valid integer).
 *
 * @param content - Landing content used to populate headings and the list of featured freelancers (expects `featuredFreelancers` with fields: `name`, `image`, `location`, `bio`, `role`, `hourlyRate`, `totalEarned`, `jobSuccess`).
 * @returns The JSX element for the featured freelancers section.
 */
export function FeaturedFreelancersSection({ content }: FeaturedFreelancersSectionProps) {
  const isClientView = content.title.includes("Hire");

  return (
    <SectionCard>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2">
          <SectionHeading eyebrow={content.featuredFreelancersTitle} title={isClientView ? "Proven freelancers ready to join your projects" : "Premium clients investing in long-term work"} />
        </div>
        <p className="max-w-sm text-xs text-muted-foreground sm:text-sm">{isClientView ? "Each profile shows real earnings, reviews, and job success so you know who you are hiring." : "See real budgets, repeat collaboration rates, and satisfaction scores from freelancers who’ve worked with them."}</p>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:mt-7 lg:grid-cols-3">
        {content.featuredFreelancers.slice(0, 3).map((freelancer) => {
          const successPercent = parseInt(freelancer.jobSuccess, 10) || 0;

          return (
            <article key={freelancer.name} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-background/70">
              <div className="flex flex-col gap-2 p-3.5 sm:p-4">
                <div className="flex items-start gap-0">
                  <div className="flex items-start gap-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                      <Image src={freelancer.image} alt={freelancer.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col gap-0">
                      <div className="flex items-center gap-1">
                        <span className="truncate whitespace-nowrap text-base font-semibold text-foreground sm:text-lg">{freelancer.name}</span>
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10">
                          <CheckCircle2 className="h-3.5 w-3.5 text-sky-500" />
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground sm:text-sm">{freelancer.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-xs text-muted-foreground sm:text-sm line-clamp-2">{freelancer.bio}</p>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    <span className="inline-flex items-center rounded-sm bg-muted px-2 py-0.5 text-[11px] font-medium text-foreground sm:text-xs">{freelancer.role}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-semibold text-foreground">{freelancer.hourlyRate}</span>
                  <span className="text-sm font-semibold text-foreground sm:text-base">{freelancer.totalEarned}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
                  <div className="flex-1 flex items-center gap-2">
                    <p className="whitespace-nowrap">{isClientView ? "Success Rate" : "Hiring Rate"}</p>
                    <div className="relative h-1.5 w-full rounded-full bg-muted">
                      <div className="absolute inset-y-0 left-0 rounded-full bg-emerald-500" style={{ width: `${successPercent}%` }} />
                    </div>
                    <span className="text-xs font-semibold text-foreground sm:text-sm">{successPercent}%</span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </SectionCard>
  );
}