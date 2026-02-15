"use client";

import { useEffect, useMemo, useState } from "react";
import { countries } from "countries-list";
import { AuthCarouselPanel } from "@/app/(auth)/_components/auth-carousel-panel";
import { SignUpHeader } from "@/app/(auth)/signup/_components/signup-header";
import { SignUpRoleToggle } from "@/app/(auth)/signup/_components/signup-role-toggle";
import { SignUpForm } from "@/app/(auth)/signup/_components/signup-form";

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

type Role = "freelancer" | "client";

export default function SignUpPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [role, setRole] = useState<Role>("freelancer");
  const [country, setCountry] = useState("");
  const countryOptions = useMemo(() => {
    return Object.values(countries)
      .map((countryData) => countryData.name)
      .sort((a, b) => a.localeCompare(b));
  }, []);

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
          <AuthCarouselPanel slides={carouselSlides} activeIndex={activeIndex} onSelectIndex={setActiveIndex} subtitle={role === "freelancer" ? "Create your freelancer profile and start getting matched." : "Create your client account and start hiring faster."} />

          <div className="flex h-full flex-col gap-6 rounded-3xl border border-border bg-card/70 p-6 sm:p-8 lg:p-10">
            <SignUpHeader />
            <SignUpRoleToggle role={role} onChange={setRole} />
            <SignUpForm country={country} onCountryChange={setCountry} countryOptions={countryOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
