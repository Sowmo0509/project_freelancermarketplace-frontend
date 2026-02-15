"use client";

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
import { ExploreCategoriesSection } from "@/components/landing/explore-categories-section";
import { StatsSection } from "@/components/landing/stats-section";
import { clientData, footerColumns, freelancerData, heroStatements, navLinks, type ViewKey } from "@/components/landing/landing-data";

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
            <BrandMarquee />
            <StatsSection />
            <ValuePropsSection content={content} />
            <PipelineSection content={content} />
            <FeaturedFreelancersSection content={content} />
            <ExploreCategoriesSection />
            <FaqSection content={content} />
            <ValueBannerSection content={content} />
          </motion.section>
        </AnimatePresence>

        <LandingFooter columns={footerColumns} />
      </div>
    </div>
  );
}
