"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import type { LandingContent } from "@/components/landing/landing-data";

type ValueBannerSectionProps = {
  content: LandingContent;
};

export function ValueBannerSection({ content }: ValueBannerSectionProps) {
  return (
    <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: "easeOut" }} className="flex flex-col gap-3 rounded-3xl border border-border bg-card/60 px-5 py-6 text-center sm:px-6 sm:py-7">
      <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{content.valueBanner}</h3>
      <div className="flex flex-wrap justify-center gap-3">
        <Button className="h-10 px-5 text-sm">{content.ctaPrimary}</Button>
        <Button variant="outline" className="h-10 px-5 text-sm">
          {content.ctaSecondary}
        </Button>
      </div>
    </motion.section>
  );
}
