"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BrandMarquee } from "@/components/landing/brand-marquee";
import { FaqSection } from "@/components/landing/faq-section";
import { HeroSection } from "@/components/landing/hero-section";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingNav } from "@/components/landing/landing-nav";
import { PipelineSection } from "@/components/landing/pipeline-section";
import { FeaturedFreelancersSection } from "@/components/landing/featured-freelancers-section";
import { ValueBannerSection } from "@/components/landing/value-banner-section";
import { ValuePropsSection } from "@/components/landing/value-props-section";
import { ViewToggle } from "@/components/landing/view-toggle";
import { brandLogoUrl, clientData, exploreCategories, footerColumns, freelancerData, heroStatements, navLinks, type ViewKey } from "@/components/landing/landing-data";

export default function Home() {
  const [activeView, setActiveView] = useState<ViewKey>("client");

  const content = useMemo(() => {
    return activeView === "client" ? clientData : freelancerData;
  }, [activeView]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-10 sm:px-6 sm:py-12 lg:gap-12 lg:py-20">
        <LandingNav navLinks={navLinks} />
        <ViewToggle activeView={activeView} onChange={setActiveView} />

        <AnimatePresence mode="wait">
          <motion.section key={activeView} id={activeView === "client" ? "client-panel" : "freelancer-panel"} role="tabpanel" aria-labelledby={activeView === "client" ? "client-tab" : "freelancer-tab"} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35, ease: "easeOut" }} className="flex flex-col gap-10 sm:gap-12 lg:gap-16">
            <HeroSection activeView={activeView} content={content} statements={heroStatements[activeView].slice(0, 3)} />
            <BrandMarquee brandLogoUrl={brandLogoUrl} />
            <ValuePropsSection content={content} />
            <PipelineSection content={content} />
            <FeaturedFreelancersSection content={content} />
            <section className="rounded-3xl border border-border bg-card/60 px-5 py-7 sm:px-6 sm:py-9">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground sm:text-sm">Browse categories</p>
                  <h3 className="text-xl font-semibold text-foreground sm:text-2xl lg:text-3xl">Explore millions of pros</h3>
                </div>
                <p className="max-w-sm text-xs text-muted-foreground sm:text-sm">From niche specialists to cross-functional teams, explore the lanes where top freelancers thrive.</p>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-7 lg:grid-cols-5">
                {exploreCategories.map((category) => (
                  <button key={category.label} type="button" className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-border bg-transparent px-3.5 py-3 text-left transition-colors hover:border-foreground/40">
                    <Image src={category.image} alt={category.label} fill className="object-cover opacity-70 transition-opacity duration-200 group-hover:opacity-90" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/90 via-background/75 to-background/40" />
                    <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/80">
                      <category.Icon className="h-4 w-4 text-foreground" />
                    </span>
                    <span className="relative z-10 text-xs font-medium text-foreground sm:text-sm">{category.label}</span>
                  </button>
                ))}
              </div>
            </section>

            <FaqSection content={content} />
            <ValueBannerSection content={content} />
          </motion.section>
        </AnimatePresence>

        <LandingFooter columns={footerColumns} />
      </div>
    </div>
  );
}
