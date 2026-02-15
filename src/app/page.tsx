"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { ArrowRight, BadgeCheck, Briefcase, Check, Globe, Menu, ShieldCheck, Sparkles, Star, TrendingUp, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

const navLinks = ["Why us", "For clients", "For talent", "Pricing", "FAQ"];

const stats = [
  { label: "Talent verified", value: "12,400+" },
  { label: "Avg. hire time", value: "48 hrs" },
  { label: "Median client fee", value: "0%" },
];

const features = [
  {
    title: "Zero platform fees",
    description: "We do not take 20% from your earnings. You keep what you bill, clients pay exactly what they approve.",
    icon: ShieldCheck,
  },
  {
    title: "No pay-to-win ranking",
    description: "Your skills and proof of work matter more than spend. New talent surfaces alongside top performers.",
    icon: TrendingUp,
  },
  {
    title: "Manual work verification",
    description: "Every portfolio piece is reviewed by industry peers before it goes live for clients to browse.",
    icon: BadgeCheck,
  },
  {
    title: "True project matching",
    description: "Smart briefs and scoped asks mean better conversations and fewer ghosted proposals.",
    icon: Sparkles,
  },
];

const categories = ["Product design", "Full-stack build", "Motion graphics", "Brand identity", "AI integration", "Webflow delivery", "iOS & Android", "Data engineering"];

const steps = [
  {
    title: "Tell us what you need",
    description: "Answer a 2-minute brief and we translate it into a curated scope.",
    icon: Briefcase,
  },
  {
    title: "Meet verified specialists",
    description: "Get a shortlist of talent with real project proof, not just résumés.",
    icon: Users,
  },
  {
    title: "Ship with confidence",
    description: "Milestones, manual reviews, and clear approvals keep everyone aligned.",
    icon: Zap,
  },
];

const testimonials = [
  {
    quote: "We hired a lead designer in 36 hours. The verification notes were more helpful than any résumé.",
    name: "Ava Martinez",
    role: "Product Lead, Dune Systems",
    rating: 5,
  },
  {
    quote: "No platform fee means I can price fairly and still invest in better tooling for clients.",
    name: "Riley Chen",
    role: "Freelance Engineer",
    rating: 5,
  },
  {
    quote: "The talent mix feels balanced. Our junior creatives finally get chances next to senior names.",
    name: "Kiran Patel",
    role: "Creative Director, Lume",
    rating: 5,
  },
];

const faqs = [
  {
    question: "How do you verify work?",
    answer: "Every portfolio item is reviewed by a specialist panel. We check scope, contribution, and measurable outcomes before approving.",
  },
  {
    question: "Is there any hidden fee at all?",
    answer: "No. Clients pay the agreed project amount, and freelancers receive it in full. Optional premium support is transparent.",
  },
  {
    question: "Do new freelancers really get visibility?",
    answer: "Yes. Discovery ranks by skill relevance, verified proof, and fit quality—never by ad spend.",
  },
  {
    question: "What if a project goes off track?",
    answer: "We provide structured milestones, review gates, and human mediation for scope changes.",
  },
];

const brandPills = [
  { name: "Nimbus", accent: "from-indigo-500 to-violet-500" },
  { name: "Orbit", accent: "from-emerald-500 to-teal-400" },
  { name: "Sable", accent: "from-rose-500 to-orange-400" },
  { name: "Verta", accent: "from-sky-500 to-cyan-400" },
  { name: "Lumen", accent: "from-amber-500 to-yellow-400" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6f7ff] via-white to-[#f7fcff] text-slate-950">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_70%)] blur-2xl" />
        <div className="pointer-events-none absolute -right-24 top-40 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_70%)] blur-2xl" />
        <div className="pointer-events-none absolute left-10 top-[520px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.16),transparent_70%)] blur-2xl" />

        <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-10 pt-8 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-900/20">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <p className="text-lg font-semibold leading-none">Fairlance</p>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">verified talent</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
            {navLinks.map((link) => (
              <a key={link} className="transition hover:text-slate-950" href={`#${link.toLowerCase().replace(/\s/g, "")}`}>
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="ghost" className="rounded-full px-5">
              Log in
            </Button>
            <Button className="rounded-full px-6">
              Post a project
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <button className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/70">
                <Menu className="h-5 w-5 text-slate-700" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="rounded-l-3xl border-slate-200">
              <div className="flex flex-col gap-6 pt-10">
                {navLinks.map((link) => (
                  <a key={link} className="text-base font-medium text-slate-700" href={`#${link.toLowerCase().replace(/\s/g, "")}`}>
                    {link}
                  </a>
                ))}
                <div className="flex flex-col gap-3 pt-4">
                  <Button variant="outline" className="rounded-full">
                    Log in
                  </Button>
                  <Button className="rounded-full">
                    Post a project
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </header>

        <section className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
              Zero platform fee. Verified work only.
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Hire elite freelancers without the 20% tax or pay-to-win rankings.</h1>
              <p className="text-lg text-slate-600 sm:text-xl">Fairlance is a premium freelancer marketplace that puts verified work first. We never charge platform fees, never bury new talent, and manually review every portfolio before it appears.</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button className="h-12 rounded-full px-8 text-base">
                Start hiring
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="h-12 rounded-full border-slate-300 px-8 text-base">
                Create freelancer profile
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-lg shadow-slate-200/60 backdrop-blur">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold text-slate-950">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} className="relative">
            <div className="relative z-10 grid gap-6">
              <motion.div whileHover={{ y: -6 }} className="overflow-hidden rounded-[32px] border border-white/80 bg-white shadow-xl shadow-slate-200/70">
                <div className="relative h-64 w-full">
                  <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80" alt="Creative team collaborating" fill sizes="(max-width: 1024px) 100vw, 520px" className="object-cover" priority />
                </div>
                <div className="space-y-3 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Verified proof</p>
                  <p className="text-lg font-semibold text-slate-900">Only real project outcomes, reviewed by peers.</p>
                  <div className="flex flex-wrap gap-2">
                    {["Launch-ready", "Case study", "Peer-reviewed"].map((pill) => (
                      <span key={pill} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ y: -6 }} className="rounded-[28px] border border-white/80 bg-gradient-to-br from-indigo-500/90 via-indigo-400 to-sky-400 p-6 text-white shadow-lg">
                  <p className="text-sm font-medium">Median client fee</p>
                  <p className="text-3xl font-semibold">0%</p>
                  <p className="text-sm text-white/80">Keep every dollar you bill.</p>
                </motion.div>
                <motion.div whileHover={{ y: -6 }} className="rounded-[28px] border border-white/80 bg-white p-6 shadow-lg">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    Verified teams
                  </div>
                  <p className="mt-3 text-2xl font-semibold text-slate-900">4.9/5 trust score</p>
                  <p className="text-sm text-slate-500">Based on delivery outcomes.</p>
                </motion.div>
              </div>
            </div>
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-6 top-24 hidden rounded-[24px] border border-white/80 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-lg backdrop-blur lg:block">
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-indigo-500" />
                Manual verification on every portfolio
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20 lg:px-10">
        <div className="flex flex-col items-start gap-10 rounded-[36px] border border-slate-200/60 bg-white/80 px-8 py-10 shadow-xl shadow-slate-100/70 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Trusted by product teams</p>
            <h2 className="text-2xl font-semibold text-slate-900">High-performing teams choose Fairlance for a better marketplace.</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {brandPills.map((brand) => (
              <div key={brand.name} className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
                <span className={`h-3 w-3 rounded-full bg-gradient-to-br ${brand.accent}`} />
                {brand.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="whyus" className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1fr]">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">The Fairlance difference</p>
            <h2 className="text-3xl font-semibold text-slate-900">Built for a fair, premium freelancer economy.</h2>
            <p className="text-slate-600">We designed the marketplace around human verification, true matching, and a zero-fee model that respects creators.</p>
            <div className="flex items-center gap-4 rounded-3xl border border-slate-200/80 bg-white/70 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10">
                <Globe className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Global verification council</p>
                <p className="text-sm text-slate-500">Senior specialists across 28 disciplines.</p>
              </div>
            </div>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-100/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="forclients" className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-10">
        <div className="grid gap-10 rounded-[36px] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-900 px-8 py-12 text-white shadow-2xl shadow-slate-300/30 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">For clients</p>
            <h2 className="text-3xl font-semibold">Premium talent without premium platform taxes.</h2>
            <p className="text-white/80">Get vetted specialists, structured scoping, and transparent milestones. Your budget goes to delivery, not a marketplace cut.</p>
            <div className="flex flex-wrap gap-3">
              {["Transparent scopes", "Human verified", "Fast shortlist"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
                  <Check className="h-4 w-4 text-emerald-300" />
                  {item}
                </div>
              ))}
            </div>
            <Button className="h-12 rounded-full bg-white text-slate-950 hover:bg-white/90">
              Post a project
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">
            <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">Client concierge</p>
              <p className="mt-3 text-lg font-semibold">Two-day hire guarantee</p>
              <p className="text-sm text-white/70">We surface a shortlist or refund your first month of concierge access.</p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">Delivery control</p>
              <div className="mt-4 space-y-3 text-sm text-white/80">
                <div className="flex items-center justify-between">
                  <span>Milestone approval</span>
                  <span>100%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[92%] rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center justify-between">
                  <span>On-time delivery</span>
                  <span>97%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[88%] rounded-full bg-indigo-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="fortalent" className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">For talent</p>
            <h2 className="text-3xl font-semibold text-slate-900">Keep 100% of your rate and get real visibility.</h2>
            <p className="text-slate-600">We never hide new freelancers or prioritize spend. Your verified proof of work and client feedback drive discovery.</p>
            <div className="space-y-4">
              {["No platform commission", "Portfolio reviewed by peers", "Clear, structured project briefs"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-3xl border border-slate-200/80 bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/10">
                    <Check className="h-5 w-5 text-indigo-500" />
                  </div>
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <Button className="h-12 rounded-full px-8">
              Apply as freelancer
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid gap-4 sm:grid-cols-2">
            {categories.map((category) => (
              <div key={category} className="group rounded-[26px] border border-slate-200/80 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                <p className="text-sm font-semibold text-slate-900">{category}</p>
                <p className="mt-2 text-xs text-slate-500">Verified specialists available now.</p>
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-indigo-500">
                  Explore
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-3">
          {steps.map((step) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-100/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.55fr_1fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Verified outcomes</p>
            <h2 className="text-3xl font-semibold text-slate-900">Real work proof, not vanity metrics.</h2>
            <p className="text-slate-600">Every portfolio entry is tagged with scope, timelines, and outcome notes. Clients can instantly see the impact.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Launch-ready in 4 weeks",
                detail: "Rebrand + product marketing site",
                accent: "from-indigo-500/20 to-violet-500/20",
              },
              {
                title: "93% retention uplift",
                detail: "Mobile onboarding redesign",
                accent: "from-emerald-500/20 to-cyan-500/20",
              },
              {
                title: "12x faster analytics",
                detail: "Data engineering sprint",
                accent: "from-amber-500/20 to-orange-500/20",
              },
              {
                title: "Global expansion ready",
                detail: "Multilingual experience build",
                accent: "from-rose-500/20 to-pink-500/20",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[26px] border border-slate-200/80 bg-white p-5 shadow-md">
                <div className={`mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br ${item.accent}`} />
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-xs text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} whileHover={{ y: -6 }} className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-100/60">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-700">“{testimonial.quote}”</p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-xs text-slate-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Pricing</p>
            <h2 className="text-3xl font-semibold text-slate-900">Keep every dollar you earn.</h2>
            <p className="text-slate-600">We refuse to tax your work. No commissions, no hidden deductions, no pay-to-win boosts.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Clients",
                price: "0%",
                detail: "Platform fee",
                bullets: ["Transparent milestone escrow", "Dedicated concierge support", "Verified talent only"],
                accent: "from-indigo-500 to-violet-500",
              },
              {
                title: "Freelancers",
                price: "0%",
                detail: "Commission cut",
                bullets: ["Full payout on approved work", "Visibility for new profiles", "Manual portfolio review"],
                accent: "from-emerald-500 to-cyan-500",
              },
            ].map((plan) => (
              <div key={plan.title} className="rounded-[30px] border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-100/60">
                <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${plan.accent}`} />
                <p className="mt-4 text-sm font-semibold text-slate-900">{plan.title}</p>
                <div className="mt-3 flex items-end gap-2">
                  <p className="text-4xl font-semibold text-slate-950">{plan.price}</p>
                  <p className="text-sm text-slate-500">{plan.detail}</p>
                </div>
                <div className="mt-5 space-y-2 text-sm text-slate-600">
                  {plan.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500" />
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.5fr_1fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">FAQ</p>
            <h2 className="text-3xl font-semibold text-slate-900">Everything you need to know.</h2>
            <p className="text-slate-600">We keep the marketplace simple, fair, and human-first.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-[26px] border border-slate-200/80 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">{faq.question}</p>
                <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-28 lg:px-10">
        <div className="grid gap-10 rounded-[40px] bg-gradient-to-br from-indigo-500 via-violet-500 to-rose-500 px-10 py-14 text-white shadow-2xl shadow-indigo-200/60 lg:grid-cols-[1.1fr_0.9fr] lg:px-14">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Ready to build?</p>
            <h2 className="text-3xl font-semibold">Launch your next project with verified talent today.</h2>
            <p className="text-white/80">Join the marketplace that rewards craft, not spend. Zero fees, zero noise, all outcomes.</p>
          </div>
          <div className="flex flex-col gap-4 rounded-[30px] bg-white/15 p-6 backdrop-blur">
            <div className="flex items-center gap-3 text-sm font-medium">
              <Check className="h-4 w-4 text-white" />
              Dedicated onboarding concierge
            </div>
            <div className="flex items-center gap-3 text-sm font-medium">
              <Check className="h-4 w-4 text-white" />
              Manual verification with feedback
            </div>
            <div className="flex items-center gap-3 text-sm font-medium">
              <Check className="h-4 w-4 text-white" />
              Fair discovery for new talent
            </div>
            <Button className="mt-4 h-12 rounded-full bg-white text-slate-950 hover:bg-white/90">
              Get started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200/70 bg-white/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-center gap-3 text-slate-900">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">Fairlance</p>
              <p className="text-xs text-slate-500">The zero-fee, verified talent marketplace.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {["Security", "Support", "Terms", "Privacy", "Contact"].map((item) => (
              <a key={item} className="text-sm font-medium text-slate-600 hover:text-slate-950" href="#">
                {item}
              </a>
            ))}
          </div>
          <p>© 2026 Fairlance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
