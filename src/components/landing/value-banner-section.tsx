"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import type { LandingContent } from "@/components/landing/landing-data";

type ValueBannerSectionProps = {
  content: LandingContent;
};

/**
 * Renders an animated value banner section with a heading and primary/secondary CTAs.
 *
 * @param content - LandingContent providing `valueBanner` (heading text), `ctaPrimary` (primary button text), and `ctaSecondary` (secondary button text).
 * @returns A JSX element: a section containing the banner heading and two call-to-action buttons.
 */
export function ValueBannerSection({ content }: ValueBannerSectionProps) {
  return (
    <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: "easeOut" }} className="flex flex-col gap-4 rounded-3xl border border-border bg-card/60 px-5 py-7 text-center sm:px-6 sm:py-8">
      <h3 className="text-xl font-semibold text-foreground sm:text-2xl lg:text-3xl">{content.valueBanner}</h3>
      <div className="flex flex-wrap justify-center gap-4">
        <Button className="h-10 px-6 text-sm sm:h-11 sm:px-7 sm:text-base">{content.ctaPrimary}</Button>
        <Button variant="outline" className="h-10 px-6 text-sm sm:h-11 sm:px-7 sm:text-base">
          {content.ctaSecondary}
        </Button>
      </div>
    </motion.section>
  );
}