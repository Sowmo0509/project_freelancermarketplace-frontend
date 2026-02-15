"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AuthCarouselPanel } from "@/app/(auth)/_components/auth-carousel-panel";

const carouselSlides = [
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    title: "Build teams in days",
    description: "Match with specialized freelancers ready to start on day one.",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    title: "Stay aligned at every milestone",
    description: "Track progress, milestones, and payouts in one clear workspace.",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    title: "Freelancers grow with repeat work",
    description: "Earn long-term partnerships and recurring client requests.",
  },
  {
    src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    title: "Verified talent, global reach",
    description: "Work with verified professionals across time zones.",
  },
];

type AuthLayoutProps = {
  subtitle: string;
  children: ReactNode;
};

export function AuthLayout({ subtitle, children }: AuthLayoutProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselSlides.length);
    }, 5500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-10 sm:px-6 sm:py-12 lg:py-16">
        <div className="grid flex-1 gap-8 lg:grid-cols-2">
          <AuthCarouselPanel slides={carouselSlides} activeIndex={activeIndex} onSelectIndex={setActiveIndex} subtitle={subtitle} />

          <div className="flex h-full flex-col gap-6 rounded-3xl border border-border bg-card/70 p-6 sm:p-8 lg:p-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
