"use client";

import Image from "next/image";
import { motion } from "motion/react";

const brandLogos = ["Logo=airbnb.svg", "Logo=apple.svg", "Logo=asus.svg", "Logo=atlassian.svg", "Logo=audi.svg", "Logo=coinbase.svg", "Logo=discord.svg", "Logo=dribbble.svg", "Logo=google.svg", "Logo=gumroad.svg", "Logo=inter.svg", "Logo=linear.svg", "Logo=nike.svg", "Logo=tinder.svg", "Logo=visa.svg", "Logo=webflow.svg"];

const brandLogoData = brandLogos.map((file) => {
  const name = file.replace("Logo=", "").replace(".svg", "");
  return {
    src: `/logo/${file}`,
    alt: `${name} logo`,
  };
});

export function BrandMarquee() {
  return (
    <section className="flex flex-col gap-4 sm:gap-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground sm:text-sm">Trusted by clients from leading brands</p>
        <span className="text-xs text-muted-foreground sm:text-sm">And more...</span>
      </div>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 py-4 sm:py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-background/90 to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-background/90 to-transparent sm:w-16" />
        <motion.div className="flex w-max items-center gap-4 pr-6 sm:gap-6 sm:pr-8" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 36, ease: "linear", repeat: Infinity }}>
          {Array.from({ length: 2 }, (_, groupIndex) => (
            <div key={groupIndex} className="flex items-center gap-8 sm:gap-12">
              {brandLogoData.map((logo) => (
                <div key={`${groupIndex}-${logo.src}`} className="flex h-12 w-28 items-center justify-center sm:h-14 sm:w-32">
                  <Image src={logo.src} alt={logo.alt} width={140} height={52} className="h-8 w-auto object-contain opacity-80 dark:invert sm:h-10" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
