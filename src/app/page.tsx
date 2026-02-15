"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { Briefcase, CheckCircle2, Globe, Moon, Rocket, Search, ShieldCheck, Sparkles, Sun, Target, Timer, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

type ViewKey = "client" | "freelancer";

const navLinks = ["How it works", "Talent", "Projects", "Pricing", "Insights"];
const brandLogoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1280px-Adidas_Logo.svg.png";
const heroStatements = {
  client: ["Zero platform fees — no 20% cuts.", "Manual verification keeps quality high and hiring fast.", "We do not charge extra when disputes arise.", "Responsive support on every ticket.", "No monopoly systems blocking fresh talent.", "Faster shortlists without waiting weeks."],
  freelancer: ["Keep 100% of earnings — no 20% cuts.", "Equal access for new freelancers from day one.", "No monopoly systems blocking fresh talent.", "Manual verification builds trust and better matches.", "Disputes never trigger extra charges.", "Responsive support on every ticket."],
};
const footerColumns = [
  { title: "Product", links: ["Client view", "Freelancer view", "Escrow", "Teams"] },
  { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
  { title: "Resources", links: ["Guides", "Success stories", "Support", "Status"] },
  { title: "Legal", links: ["Terms", "Privacy", "Security", "Compliance"] },
];

const getPreferredTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const subscribeToTheme = (callback: () => void) => {
  if (typeof window === "undefined") {
    return () => {};
  }
  const handler = () => callback();
  window.addEventListener("storage", handler);
  window.addEventListener("theme-change", handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener("theme-change", handler);
  };
};

const clientData = {
  title: "Hire verified experts without platform fees",
  subtitle: "A curated marketplace built for quality. Every freelancer is manually reviewed so you get consistent results, faster.",
  ctaPrimary: "Post a project",
  ctaSecondary: "Browse verified talent",
  heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  sideImage: "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1200&q=80",
  gallery: ["https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80"],
  highlights: [
    { label: "No platform fee", Icon: ShieldCheck },
    { label: "Manual review on every profile", Icon: CheckCircle2 },
    { label: "Best-fit matching within 24 hours", Icon: Target },
    { label: "Escrow-backed milestones", Icon: Briefcase },
  ],
  stats: [
    { label: "Faster hiring", value: "3x", Icon: Timer },
    { label: "Repeat clients", value: "82%", Icon: TrendingUp },
    { label: "Avg. time to shortlist", value: "6 hours", Icon: Search },
  ],
  valuePropsTitle: "Everything you need to hire with confidence",
  valueProps: [
    {
      title: "Shortlist in minutes",
      description: "Tell us your goals and receive a pre-vetted shortlist.",
      Icon: Sparkles,
    },
    {
      title: "Results-first onboarding",
      description: "We recommend scopes, milestones, and success metrics.",
      Icon: Target,
    },
    {
      title: "Transparent pricing",
      description: "No hidden platform fees or bidding games.",
      Icon: ShieldCheck,
    },
    {
      title: "Specialist coverage",
      description: "Design, development, marketing, and operations.",
      Icon: Users,
    },
  ],
  pipelineTitle: "A hiring pipeline that removes uncertainty",
  pipeline: [
    { title: "Describe the project", description: "Share goals, budget, and timeline.", Icon: Target },
    { title: "Review vetted talent", description: "Only top candidates reach you.", Icon: CheckCircle2 },
    { title: "Kickoff in a day", description: "Start work quickly with clear milestones.", Icon: Rocket },
  ],
  servicesTitle: "Popular hiring lanes",
  services: [
    { label: "Product design", Icon: Sparkles },
    { label: "Full-stack development", Icon: Briefcase },
    { label: "Marketing & growth", Icon: TrendingUp },
    { label: "Content & SEO", Icon: Globe },
  ],
  faqTitle: "Client FAQs",
  faq: [
    {
      question: "How do you review freelancers?",
      answer: "We verify portfolios, run reference checks, and assess live project scenarios to confirm skill fit.",
    },
    {
      question: "Do I pay any platform fees?",
      answer: "No. You only pay the freelancer. We focus on matching and quality assurance.",
    },
    {
      question: "Can you help with scope and milestones?",
      answer: "Yes. We help you translate goals into deliverables so the work stays on track.",
    },
  ],
  valueBanner: "Launch faster with the confidence that every freelancer is hand-selected.",
};

const freelancerData = {
  title: "Work with premium clients that respect your craft",
  subtitle: "Skip noisy bidding. Get matched to serious projects and keep 100% of your earnings.",
  ctaPrimary: "Join as a freelancer",
  ctaSecondary: "View open projects",
  heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
  sideImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  gallery: ["https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"],
  highlights: [
    { label: "No platform fee", Icon: ShieldCheck },
    { label: "Higher-quality briefs", Icon: CheckCircle2 },
    { label: "SEO visibility boost", Icon: TrendingUp },
    { label: "Equal access for new freelancers", Icon: Users },
  ],
  stats: [
    { label: "Client response rate", value: "91%", Icon: Users },
    { label: "Average project size", value: "$4.8k", Icon: Briefcase },
    { label: "Repeat collaborations", value: "68%", Icon: TrendingUp },
  ],
  valuePropsTitle: "A platform built to help you grow",
  valueProps: [
    {
      title: "Premium client intake",
      description: "We screen every client for budget and clarity.",
      Icon: Search,
    },
    {
      title: "SEO visibility",
      description: "Get discovered with boosted profiles and ranking signals.",
      Icon: TrendingUp,
    },
    {
      title: "No freelancer monopoly",
      description: "Fair matching so new talent gets real opportunities.",
      Icon: ShieldCheck,
    },
    {
      title: "Showcase your best work",
      description: "Custom case-study pages for your portfolio.",
      Icon: Sparkles,
    },
  ],
  pipelineTitle: "How you win projects here",
  pipeline: [
    { title: "Apply once", description: "We review your profile and work samples.", Icon: CheckCircle2 },
    { title: "Get matched", description: "We connect you to clients that fit your skills.", Icon: Users },
    { title: "Deliver with clarity", description: "Projects come with clear goals and scope.", Icon: Rocket },
  ],
  servicesTitle: "Specialist growth lanes",
  services: [
    { label: "Design systems", Icon: Sparkles },
    { label: "Engineering squads", Icon: Briefcase },
    { label: "Growth marketing", Icon: TrendingUp },
    { label: "SEO & content", Icon: Globe },
  ],
  faqTitle: "Freelancer FAQs",
  faq: [
    {
      question: "Is there any commission or fee?",
      answer: "No. You keep 100% of what you earn. The platform focuses on quality matching.",
    },
    {
      question: "How do I get more visibility?",
      answer: "Complete your profile and publish case studies to unlock SEO boosts and ranking signals.",
    },
    {
      question: "Do new freelancers get opportunities?",
      answer: "Yes. We avoid monopolies by balancing opportunities based on skill fit, not tenure.",
    },
  ],
  valueBanner: "Build a sustainable freelance business with better clients and zero platform fees.",
};

export default function Home() {
  const [activeView, setActiveView] = useState<ViewKey>("client");
  const theme = useSyncExternalStore(subscribeToTheme, getPreferredTheme, () => "light");
  const isDark = theme === "dark";

  const content = useMemo(() => {
    return activeView === "client" ? clientData : freelancerData;
  }, [activeView]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const handleThemeToggle = () => {
    const nextTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    window.dispatchEvent(new Event("theme-change"));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 lg:py-14">
        <nav className="flex flex-col gap-4 rounded-3xl border border-border bg-card/60 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background">
              <Sparkles className="h-4 w-4 text-foreground" />
            </div>
            <span>FreelanceFlow</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            {navLinks.map((item) => (
              <a key={item} className="transition-colors hover:text-foreground" href="#">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="h-9 w-9 rounded-full p-0" aria-pressed={isDark} aria-label="Toggle dark mode" onClick={handleThemeToggle}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="outline" className="h-9 px-4 text-xs sm:text-sm">
              Sign in
            </Button>
            <Button className="h-9 px-4 text-xs sm:text-sm">Get started</Button>
          </div>
        </nav>

        <header className="flex flex-col gap-6 items-center">
          <div className="flex w-full max-w-sm rounded-full border border-border bg-card p-1" role="tablist" aria-label="Landing page view selector">
            <Button type="button" role="tab" id="client-tab" aria-selected={activeView === "client"} aria-controls="client-panel" variant={activeView === "client" ? "default" : "ghost"} className="h-9 flex-1 rounded-full text-sm" onClick={() => setActiveView("client")}>
              Client View
            </Button>
            <Button type="button" role="tab" id="freelancer-tab" aria-selected={activeView === "freelancer"} aria-controls="freelancer-panel" variant={activeView === "freelancer" ? "default" : "ghost"} className="h-9 flex-1 rounded-full text-sm" onClick={() => setActiveView("freelancer")}>
              Freelancer View
            </Button>
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.section key={activeView} id={activeView === "client" ? "client-panel" : "freelancer-panel"} role="tabpanel" aria-labelledby={activeView === "client" ? "client-tab" : "freelancer-tab"} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35, ease: "easeOut" }} className="flex flex-col gap-10">
            <section className="rounded-3xl border border-border bg-card/70 px-6 py-10 lg:px-12 lg:py-16">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-3">
                    <h2 className="text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">{content.title}</h2>
                    <p className="text-base text-muted-foreground sm:text-lg">{content.subtitle}</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {heroStatements[activeView].map((statement) => (
                      <h3 key={statement} className="text-sm font-semibold text-foreground sm:text-base">
                        {statement}
                      </h3>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button className="h-11 px-6 text-sm sm:text-base">{content.ctaPrimary}</Button>
                    <Button variant="outline" className="h-11 px-6 text-sm sm:text-base">
                      {content.ctaSecondary}
                    </Button>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {content.highlights.map((item) => (
                      <div key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <item.Icon className="h-4 w-4 text-foreground" />
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-5 text-xs text-muted-foreground">
                    {content.stats.map((stat) => (
                      <div key={stat.label} className="flex items-center gap-2">
                        <stat.Icon className="h-4 w-4 text-foreground" />
                        <span className="font-semibold text-foreground">{stat.value}</span>
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Image src={content.sideImage} alt="Marketplace preview" width={720} height={520} className="h-64 w-full rounded-2xl border border-border object-cover shadow-sm sm:h-72 lg:h-full" />
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Globe className="h-4 w-4 text-foreground" />
                    <span>Global talent, verified locally for quality.</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Trusted by leading brands</p>
                <span className="text-xs text-muted-foreground">Always on</span>
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 py-4">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background/90 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background/90 to-transparent" />
                <motion.div className="flex w-max items-center gap-12 pr-12" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 22, ease: "linear", repeat: Infinity }}>
                  {Array.from({ length: 2 }, (_, groupIndex) => (
                    <div key={groupIndex} className="flex items-center gap-12">
                      {Array.from({ length: 8 }, (_, logoIndex) => (
                        <div key={`${groupIndex}-${logoIndex}`} className="flex h-12 w-28 items-center justify-center">
                          <Image src={brandLogoUrl} alt="Adidas logo" width={110} height={40} className="h-8 w-auto object-contain opacity-80" />
                        </div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{content.valuePropsTitle}</p>
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">Built for clarity, speed, and trust</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {content.valueProps.map((feature) => (
                    <div key={feature.title} className="flex gap-3 rounded-2xl border border-border bg-card/60 p-4">
                      <feature.Icon className="mt-0.5 h-5 w-5 text-foreground" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{feature.title}</p>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Featured snapshots</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {content.gallery.map((image) => (
                    <Image key={image} src={image} alt="Team collaboration" width={520} height={360} className="h-32 w-full rounded-2xl border border-border object-cover sm:h-36" />
                  ))}
                </div>
              </div>
            </section>

            <section className="grid gap-6 rounded-3xl border border-border bg-card/60 px-6 py-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{content.pipelineTitle}</p>
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">A guided flow that keeps work moving</h3>
                <p className="text-xs text-muted-foreground">Each step is designed to remove uncertainty and keep momentum.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {content.pipeline.map((step) => (
                  <div key={step.title} className="flex flex-col gap-2 rounded-2xl border border-border bg-background/70 p-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <step.Icon className="h-4 w-4 text-foreground" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">{step.title}</p>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{content.servicesTitle}</p>
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">Focused expertise, not a noisy marketplace</h3>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                {content.services.map((item) => (
                  <div key={item.label} className="flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2">
                    <item.Icon className="h-4 w-4 text-foreground" />
                    <span className="text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-6 rounded-3xl border border-border bg-card/60 px-6 py-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{content.faqTitle}</p>
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">Answers that keep expectations aligned</h3>
                <p className="text-xs text-muted-foreground">Clear answers, clear workflows, and everything tracked from day one.</p>
              </div>
              <div className="flex flex-col gap-3">
                {content.faq.map((item) => (
                  <details key={item.question} className="group rounded-2xl border border-border bg-background/70 px-4 py-3">
                    <summary className="cursor-pointer list-none text-sm font-semibold text-foreground">{item.question}</summary>
                    <p className="mt-2 text-xs text-muted-foreground">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: "easeOut" }} className="flex flex-col gap-3 rounded-3xl border border-border bg-card/60 px-6 py-7 text-center">
              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{content.valueBanner}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Button className="h-10 px-5 text-sm">{content.ctaPrimary}</Button>
                <Button variant="outline" className="h-10 px-5 text-sm">
                  {content.ctaSecondary}
                </Button>
              </div>
            </motion.section>
          </motion.section>
        </AnimatePresence>

        <footer className="mt-2 rounded-3xl border border-border bg-card/60 px-6 py-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1.8fr]">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background">
                  <Sparkles className="h-4 w-4 text-foreground" />
                </div>
                <span>FreelanceFlow</span>
              </div>
              <p className="text-xs text-muted-foreground">Premium freelance marketplace for vetted talent and serious clients.</p>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span>hello@freelanceflow.com</span>
                <span>+1 (555) 019-2024</span>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {footerColumns.map((column) => (
                <div key={column.title} className="flex flex-col gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{column.title}</p>
                  <div className="flex flex-col gap-2 text-xs text-muted-foreground">
                    {column.links.map((link) => (
                      <a key={link} className="transition-colors hover:text-foreground" href="#">
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 border-t border-border pt-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 FreelanceFlow. All rights reserved.</span>
            <div className="flex flex-wrap gap-3">
              <span>Made for remote teams worldwide.</span>
              <span>Secure payments, zero platform fees.</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
