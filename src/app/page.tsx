"use client";

import { useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, BadgeCheck, Briefcase, CheckCircle2, Menu, ShieldCheck, Sparkles, Star, Users, Zap } from "lucide-react";
import Image from "next/image";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

type ViewType = "client" | "freelancer";

const logoCloud = ["Atlas Labs", "Northwind", "Skyframe", "Pioneer", "Mosaic", "Bluepine"];

const stats = [
  { label: "Platform fee", value: "0%" },
  { label: "Median response", value: "30s" },
  { label: "Manual verification", value: "100%" },
];

const marqueeLogos = [...logoCloud, ...logoCloud];

const viewContent: Record<
  ViewType,
  {
    title: string;
    subtitle: string;
    highlights: { title: string; description: string; icon: ReactNode }[];
    bullets: string[];
    cta: string;
  }
> = {
  client: {
    title: "Built for clients who want fast, fair, verified talent.",
    subtitle: "Zero platform fee, manual verification, and quality assurance on every project. Get matched in seconds and launch work without paying a 20% tax.",
    highlights: [
      {
        title: "Zero fee, better margins",
        description: "Pay talent directly. Keep budget for real outcomes.",
        icon: <Zap className="size-5 text-emerald-500" />,
      },
      {
        title: "Manual verification",
        description: "Every freelancer is screened by a real reviewer.",
        icon: <BadgeCheck className="size-5 text-indigo-500" />,
      },
      {
        title: "30s response time",
        description: "Get options fast without bidding wars.",
        icon: <Sparkles className="size-5 text-pink-500" />,
      },
      {
        title: "Work quality assurance",
        description: "Milestone reviews keep delivery on track.",
        icon: <ShieldCheck className="size-5 text-cyan-500" />,
      },
    ],
    bullets: ["Escrow protection on every milestone", "Dedicated success manager on larger projects", "Transparent pricing without hidden boosts", "Global talent, localized compliance support"],
    cta: "Start a project",
  },
  freelancer: {
    title: "A marketplace without monopoly or pay-to-win.",
    subtitle: "New freelancers get real visibility, equal opportunities, and protection on every contract. Your work quality drives results, not paid boosts.",
    highlights: [
      {
        title: "Equal chance exposure",
        description: "No monopoly ranking, no shadow bans.",
        icon: <Users className="size-5 text-emerald-500" />,
      },
      {
        title: "Escrow protection",
        description: "Funds are secured before you deliver.",
        icon: <ShieldCheck className="size-5 text-indigo-500" />,
      },
      {
        title: "No pay-to-win",
        description: "No bids, no boosts, no platform tax.",
        icon: <Star className="size-5 text-pink-500" />,
      },
      {
        title: "Verified projects only",
        description: "Every client is vetted before you engage.",
        icon: <BadgeCheck className="size-5 text-cyan-500" />,
      },
    ],
    bullets: ["Fast payouts after approval", "Portfolio-first discovery", "Fair dispute resolution", "Talent advocacy and career growth support"],
    cta: "Join as freelancer",
  },
};

const howItWorks = [
  {
    title: "Share your goals",
    description: "Tell us budget, scope, and timeline in under 3 minutes.",
    icon: <Briefcase className="size-5 text-indigo-500" />,
  },
  {
    title: "Get curated matches",
    description: "We manually verify and shortlist the best fit.",
    icon: <BadgeCheck className="size-5 text-emerald-500" />,
  },
  {
    title: "Launch with assurance",
    description: "Escrow, milestone reviews, and rapid support.",
    icon: <ShieldCheck className="size-5 text-pink-500" />,
  },
];

const testimonials = [
  {
    quote: "The zero-fee structure gave us 20% more budget. The talent quality is unreal.",
    name: "Priya Desai",
    role: "Founder, Nova Commerce",
  },
  {
    quote: "Finally a platform where new freelancers get real visibility. No pay-to-win.",
    name: "Marco Silva",
    role: "Product Designer",
  },
  {
    quote: "Manual verification saved us weeks. We hired in under 48 hours.",
    name: "Alana Brooks",
    role: "VP Operations, Atlas Labs",
  },
];

const faqItems = [
  {
    question: "How do you keep the platform fee at zero?",
    answer: "We operate on a lean infrastructure model and premium client services, not percentage take rates.",
  },
  {
    question: "What does manual verification include?",
    answer: "Portfolio review, identity checks, live skill interviews, and work history validation.",
  },
  {
    question: "How fast can I hire?",
    answer: "Most clients receive verified matches within 30 seconds and hire within 48 hours.",
  },
];

export default function Home() {
  const [view, setView] = useState<ViewType>("client");

  const content = useMemo(() => viewContent[view], [view]);

  return (
    <div className="min-h-screen bg-[#f6f7fb] text-slate-900">
      <div className="relative overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-300/40 via-sky-300/40 to-purple-300/40 blur-3xl" />
        <div className="absolute right-0 top-44 h-60 w-60 rounded-full bg-gradient-to-br from-pink-300/40 to-orange-300/40 blur-3xl" />
        <div className="absolute left-12 top-72 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-300/40 to-cyan-300/40 blur-3xl" />

        <header className="relative z-10">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-indigo-500 text-white shadow-lg">
                <Sparkles className="size-5" />
              </div>
              <div>
                <p className="text-lg font-semibold">Talentflow</p>
                <p className="text-xs text-slate-500">Fair, verified, fee-free</p>
              </div>
            </div>

            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
              <a className="transition hover:text-slate-900" href="#how-it-works">
                How it works
              </a>
              <a className="transition hover:text-slate-900" href="#views">
                Clients & freelancers
              </a>
              <a className="transition hover:text-slate-900" href="#trust">
                Trust
              </a>
              <a className="transition hover:text-slate-900" href="#faq">
                FAQ
              </a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Button variant="outline" className="rounded-full">
                Sign in
              </Button>
              <Button className="rounded-full">
                Get started
                <ArrowRight className="size-4" />
              </Button>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full lg:hidden">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="rounded-l-3xl">
                <SheetHeader>
                  <SheetTitle>Navigate</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 px-4 text-sm font-medium text-slate-700">
                  <a href="#how-it-works">How it works</a>
                  <a href="#views">Clients & freelancers</a>
                  <a href="#trust">Trust</a>
                  <a href="#faq">FAQ</a>
                  <Button className="mt-2 rounded-full">Get started</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </header>

        <section className="relative z-10 pb-16">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-12 pt-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                <span className="size-2 rounded-full bg-emerald-500" />
                Zero fee marketplace for verified talent
              </div>

              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">Hire or get hired without platform taxes or monopoly mechanics.</h1>

              <p className="max-w-xl text-base text-slate-600 sm:text-lg">We do not charge any fee like 20% platforms. No monopoly systems that block new freelancers. Manual verification keeps work quality high and hiring fast.</p>

              <div className="flex flex-wrap gap-3">
                <Button className="rounded-full">
                  Start a project
                  <ArrowRight className="size-4" />
                </Button>
                <Button variant="outline" className="rounded-full">
                  Explore talent
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-left shadow-sm">
                    <p className="text-lg font-semibold text-slate-900">{stat.value}</p>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative mt-6 lg:mt-0 lg:self-center">
              <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/80 p-6 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20" />
                <div className="relative flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-slate-500">Verified match</p>
                      <p className="text-lg font-semibold">Product Designer</p>
                    </div>
                    <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-600">Ready in 30s</div>
                  </div>
                  <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-700 p-6 text-white shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="size-12 rounded-2xl bg-white/10" />
                      <div>
                        <p className="text-sm font-semibold">Ava Chen</p>
                        <p className="text-xs text-white/70">Fintech, 8 yrs</p>
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-3 text-xs">
                      <div className="rounded-2xl bg-white/10 px-3 py-2">UI Systems</div>
                      <div className="rounded-2xl bg-white/10 px-3 py-2">Mobile</div>
                      <div className="rounded-2xl bg-white/10 px-3 py-2">Research</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                      <p className="text-xs text-slate-500">Escrow protected</p>
                      <p className="text-base font-semibold text-slate-900">$12,500</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                      <p className="text-xs text-slate-500">Manual QA review</p>
                      <p className="text-base font-semibold text-slate-900">Active</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Trusted by modern teams</p>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 py-4 shadow-sm [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="marquee-track flex w-max items-center gap-4 px-4 text-sm font-semibold text-slate-500">
                {marqueeLogos.map((logo, index) => (
                  <span key={`${logo}-${index}`} className="rounded-full border border-white/70 bg-white/80 px-5 py-2">
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="how-it-works" className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">How it works</p>
          <h2 className="text-3xl font-semibold text-slate-900">A curated marketplace designed for speed and fairness.</h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {howItWorks.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="rounded-3xl border border-white/80 bg-white/90 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-slate-50">{item.icon}</div>
                <p className="text-lg font-semibold">{item.title}</p>
              </div>
              <p className="mt-4 text-sm text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="views" className="bg-white/70 py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Built for both sides</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Switch views to see what matters most.</h2>
            </div>
            <div className="flex rounded-full bg-slate-100 p-1 shadow-inner">
              {(["client", "freelancer"] as ViewType[]).map((item) => (
                <button key={item} onClick={() => setView(item)} className={`rounded-full px-6 py-2 text-sm font-semibold transition ${view === item ? "bg-white text-slate-900 shadow" : "text-slate-500 hover:text-slate-700"}`}>
                  {item === "client" ? "Client view" : "Freelancer view"}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <AnimatePresence mode="wait">
              <motion.div key={view} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 24 }} transition={{ duration: 0.4 }} className="flex flex-col gap-6">
                <div className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{view === "client" ? "Client benefits" : "Freelancer perks"}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-900">{content.title}</h3>
                  <p className="mt-4 text-sm text-slate-600">{content.subtitle}</p>
                  <div className="mt-6 grid gap-4">
                    {content.highlights.map((highlight) => (
                      <div key={highlight.title} className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white px-4 py-4">
                        <div className="flex size-10 items-center justify-center rounded-2xl bg-slate-50">{highlight.icon}</div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{highlight.title}</p>
                          <p className="text-xs text-slate-500">{highlight.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button className="rounded-full">
                      {content.cta}
                      <ArrowRight className="size-4" />
                    </Button>
                    <Button variant="outline" className="rounded-full">
                      Book a demo
                    </Button>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">Why teams move here</p>
                  <div className="mt-4 grid gap-3 text-sm text-slate-600">
                    {content.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center gap-3">
                        <CheckCircle2 className="size-4 text-emerald-500" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col gap-6">
              <div className="rounded-[2rem] border border-white/80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white shadow-xl">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">{view === "client" ? "Quality assurance" : "Escrow tracker"}</p>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Live</span>
                </div>
                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-xs text-white/70">Milestone progress</p>
                    <div className="mt-3 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-3/4 rounded-full bg-emerald-400" />
                    </div>
                    <p className="mt-2 text-xs text-white/70">75% complete</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-xs text-white/70">Response time</p>
                      <p className="mt-2 text-lg font-semibold">29s</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-xs text-white/70">Verified talent</p>
                      <p className="mt-2 text-lg font-semibold">1,420+</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">{view === "client" ? "Top matches" : "Recent projects"}</p>
                  <span className="text-xs text-slate-500">Updated now</span>
                </div>
                <div className="mt-4 space-y-4">
                  {["Growth Marketing", "Product Design", "Webflow Build"].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white px-4 py-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item}</p>
                        <p className="text-xs text-slate-500">{view === "client" ? "3 verified experts ready" : "Escrow secured · 5 days"}</p>
                      </div>
                      <ArrowRight className="size-4 text-slate-400" />
                    </div>
                  ))}
                </div>
              </div>

              <Image src={view === "client" ? "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80" : "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"} alt={view === "client" ? "Client review meeting" : "Freelancer workspace"} width={1200} height={800} className="h-64 w-full rounded-[2.2rem] object-cover shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="trust" className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.5rem] border border-white/80 bg-white/90 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Trust stack</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Human verification with automated safeguards.</h2>
            <p className="mt-4 text-sm text-slate-600">We verify every profile, every client, and every milestone. That means fair exposure for freelancers and reliable delivery for clients.</p>
            <div className="mt-6 grid gap-4">
              {["Identity & portfolio checks", "Client funding verification", "Milestone-based quality review", "Neutral dispute resolution"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="size-4 text-emerald-500" />
                  <span className="text-sm text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-sm">
                <p className="text-sm text-slate-600">“{testimonial.quote}”</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                  <div className="flex gap-1 text-amber-400">
                    <Star className="size-4 fill-amber-400" />
                    <Star className="size-4 fill-amber-400" />
                    <Star className="size-4 fill-amber-400" />
                    <Star className="size-4 fill-amber-400" />
                    <Star className="size-4 fill-amber-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white/70 py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">FAQs</p>
            <h2 className="text-3xl font-semibold text-slate-900">Answers to the most common questions.</h2>
          </div>
          <Accordion type="single" collapsible className="mt-10 w-full max-w-3xl">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`} className="border-b border-slate-200/70">
                <AccordionTrigger className="text-base font-semibold text-slate-900 hover:no-underline">{item.question}</AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="rounded-[2.8rem] bg-gradient-to-br from-emerald-500 via-sky-500 to-indigo-500 p-10 text-white shadow-xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Ready to move?</p>
              <h2 className="mt-3 text-3xl font-semibold">Launch projects without platform fees or monopoly ranking.</h2>
              <p className="mt-4 text-sm text-white/80">Find vetted talent or showcase your work on a marketplace that treats everyone fairly.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="rounded-full bg-white text-slate-900 hover:bg-white/90">Create a project</Button>
                <Button variant="outline" className="rounded-full border-white/40 text-white hover:bg-white/10">
                  Join as freelancer
                </Button>
              </div>
            </div>
            <div className="rounded-[2rem] bg-white/15 p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Market fairness index</p>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs">98%</span>
              </div>
              <div className="mt-4 space-y-4">
                {["No pay-to-win boosts", "Manual talent verification", "Escrow protection"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="size-4 text-white" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-white/20 p-4 text-sm">Responding in under 30 seconds on average, with 24/7 human support.</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/70 bg-white/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold">Talentflow</p>
            <p className="text-xs text-slate-500">Fee-free, verified freelance marketplace</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <a href="#how-it-works">How it works</a>
            <a href="#views">Client & freelancer</a>
            <a href="#trust">Trust</a>
            <a href="#faq">FAQ</a>
          </div>
          <p className="text-xs text-slate-400">© 2026 Talentflow. All rights reserved.</p>
        </div>
      </footer>
      <style jsx global>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          animation: marquee-scroll 18s linear infinite;
        }
      `}</style>
    </div>
  );
}
