import type { ComponentType } from "react";
import { Briefcase, CheckCircle2, Globe, Rocket, Search, ShieldCheck, Sparkles, Target, Timer, TrendingUp, Users } from "lucide-react";

export type ViewKey = "client" | "freelancer";

type IconType = ComponentType<{ className?: string }>;

type Highlight = { label: string; Icon: IconType };
type Stat = { label: string; value: string; Icon: IconType };
type ValueProp = { title: string; description: string; Icon: IconType };
type PipelineStep = { title: string; description: string; Icon: IconType };
type Service = { label: string; Icon: IconType };
type FaqItem = { question: string; answer: string };

export type LandingContent = {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  heroImage: string;
  sideImage: string;
  gallery: string[];
  highlights: Highlight[];
  stats: Stat[];
  valuePropsTitle: string;
  valueProps: ValueProp[];
  pipelineTitle: string;
  pipeline: PipelineStep[];
  servicesTitle: string;
  services: Service[];
  faqTitle: string;
  faq: FaqItem[];
  valueBanner: string;
};

export const navLinks = ["How it works", "Talent", "Projects", "Pricing", "Insights"];
export const brandLogoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1280px-Adidas_Logo.svg.png";
export const heroStatements: Record<ViewKey, string[]> = {
  client: ["Zero platform fees — no 20% cuts.", "Manual verification keeps quality high and hiring fast.", "We do not charge extra when disputes arise.", "Responsive support on every ticket.", "No monopoly systems blocking fresh talent.", "Faster shortlists without waiting weeks."],
  freelancer: ["Keep 100% of earnings — no 20% cuts.", "Equal access for new freelancers from day one.", "No monopoly systems blocking fresh talent.", "Manual verification builds trust and better matches.", "Disputes never trigger extra charges.", "Responsive support on every ticket."],
};
export const footerColumns = [
  { title: "Product", links: ["Client view", "Freelancer view", "Escrow", "Teams"] },
  { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
  { title: "Resources", links: ["Guides", "Success stories", "Support", "Status"] },
  { title: "Legal", links: ["Terms", "Privacy", "Security", "Compliance"] },
];

export const clientData: LandingContent = {
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

export const freelancerData: LandingContent = {
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
