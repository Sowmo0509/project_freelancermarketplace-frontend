"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

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

export default function SignUpPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [role, setRole] = useState<"freelancer" | "client">("freelancer");
  const activeSlide = carouselSlides[activeIndex];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselSlides.length);
    }, 5500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-10 sm:px-6 sm:py-12 lg:py-20">
        <div className="grid flex-1 gap-8 lg:grid-cols-2">
          <div className="relative h-full overflow-hidden rounded-3xl border border-border">
            <AnimatePresence mode="wait">
              <motion.div key={activeSlide.src} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.35, ease: "easeOut" }} className="absolute inset-0">
                <Image src={activeSlide.src} alt={activeSlide.title} width={1200} height={800} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white sm:p-8 lg:p-10">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">FreelanceFlow</p>
                <p className="text-lg font-semibold sm:text-xl">{activeSlide.title}</p>
                <p className="text-sm text-white/80">{activeSlide.description}</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm font-medium text-white/90">{role === "freelancer" ? "Create your freelancer profile and start getting matched." : "Create your client account and start hiring faster."}</p>
                <div className="flex items-center gap-2">
                  {carouselSlides.map((slide, index) => (
                    <button key={slide.src} type="button" aria-label={`Go to slide ${index + 1}`} onClick={() => setActiveIndex(index)} className={cn("h-2.5 w-2.5 rounded-full border border-white/60 transition-colors", index === activeIndex ? "bg-white" : "bg-white/30")} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col gap-6 rounded-3xl border border-border bg-card/70 p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">Sign up</p>
              <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">Join FreelanceFlow</h1>
              <p className="text-sm text-muted-foreground sm:text-base">Create your account in a few steps.</p>
            </div>

            <div className="flex items-center rounded-full border border-border bg-background p-1">
              <Button type="button" variant={role === "freelancer" ? "default" : "ghost"} className="flex-1 rounded-full" onClick={() => setRole("freelancer")}>
                Apply as freelancer
              </Button>
              <Button type="button" variant={role === "client" ? "default" : "ghost"} className="flex-1 rounded-full" onClick={() => setRole("client")}>
                Apply as client
              </Button>
            </div>

            <form className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" placeholder="Ava" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" placeholder="Johnson" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@email.com" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Create a password" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="confirmPassword">Retype password</Label>
                <Input id="confirmPassword" type="password" placeholder="Retype your password" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="country">Country</Label>
                <Input id="country" placeholder="United States" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm leading-snug text-muted-foreground">
                    I agree to the Terms & Conditions and acknowledge the Privacy Policy.
                  </Label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="newsletter" />
                  <Label htmlFor="newsletter" className="text-sm leading-snug text-muted-foreground">
                    Subscribe to product updates and the FreelanceFlow newsletter.
                  </Label>
                </div>
              </div>
              <Button className="h-11 w-full">Create account</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
