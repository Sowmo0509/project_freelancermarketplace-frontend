"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

type Slide = {
  src: string;
  title: string;
  description: string;
};

type AuthCarouselPanelProps = {
  slides: Slide[];
  activeIndex: number;
  onSelectIndex: (index: number) => void;
  subtitle: string;
};

/**
 * Render a carousel panel that displays the currently active slide image with layered overlays, title, description, a subtitle, and clickable indicators to change slides.
 *
 * @param slides - Array of slide objects each containing `src`, `title`, and `description`
 * @param activeIndex - Index of the currently visible slide in `slides`
 * @param onSelectIndex - Callback invoked with the new slide index when an indicator is clicked
 * @param subtitle - Small text displayed above the slide indicators
 * @returns The carousel panel element showing the active slide, its caption, and interactive indicators
 */
export function AuthCarouselPanel({ slides, activeIndex, onSelectIndex, subtitle }: AuthCarouselPanelProps) {
  const activeSlide = slides[activeIndex];

  return (
    <div className="relative h-full overflow-hidden rounded-3xl border border-border">
      <AnimatePresence mode="wait">
        <motion.div key={activeSlide.src} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.35, ease: "easeOut" }} className="absolute inset-0">
          <Image src={activeSlide.src} alt={activeSlide.title} width={1200} height={800} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-black/10" />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white sm:p-8 lg:p-10">
        <div className="flex flex-col gap-0">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">FreelanceFlow</p>
          <p className="text-lg font-bold sm:text-2xl">{activeSlide.title}</p>
          <p className="text-base text-white/80">{activeSlide.description}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium text-white/90">{subtitle}</p>
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button key={slide.src} type="button" aria-label={`Go to slide ${index + 1}`} onClick={() => onSelectIndex(index)} className={cn("h-2.5 w-2.5 rounded-full border border-white/60 transition-colors", index === activeIndex ? "bg-white" : "bg-white/30")} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}