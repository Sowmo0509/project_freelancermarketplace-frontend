"use client";

import Image from "next/image";
import { motion } from "motion/react";

type BrandMarqueeProps = {
  brandLogoUrl: string;
};

export function BrandMarquee({ brandLogoUrl }: BrandMarqueeProps) {
  return (
    <section className="flex flex-col gap-4 sm:gap-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground sm:text-sm">Trusted by leading brands</p>
        <span className="text-xs text-muted-foreground sm:text-sm">Always on</span>
      </div>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 py-3 sm:py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background/90 to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background/90 to-transparent sm:w-16" />
        <motion.div className="flex w-max items-center gap-8 pr-8 sm:gap-12 sm:pr-12" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 22, ease: "linear", repeat: Infinity }}>
          {Array.from({ length: 2 }, (_, groupIndex) => (
            <div key={groupIndex} className="flex items-center gap-8 sm:gap-12">
              {Array.from({ length: 8 }, (_, logoIndex) => (
                <div key={`${groupIndex}-${logoIndex}`} className="flex h-10 w-24 items-center justify-center sm:h-12 sm:w-28">
                  <Image src={brandLogoUrl} alt="Adidas logo" width={110} height={40} className="h-6 w-auto object-contain opacity-80 dark:invert sm:h-8" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
