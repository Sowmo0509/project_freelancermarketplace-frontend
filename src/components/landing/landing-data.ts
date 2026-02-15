import type { ComponentType } from "react";
import { Briefcase, CheckCircle2, Globe, Rocket, Search, ShieldCheck, Sparkles, Target, Timer, TrendingUp, Users } from "lucide-react";

export type ViewKey = "client" | "freelancer";

type IconType = ComponentType<{ className?: string }>;

type Highlight = { label: string; Icon: IconType };
type Stat = { label: string; value: string; Icon: IconType };
type ValueProp = { title: string; description: string; Icon: IconType };
type PipelineStep = { title: string; description: string; Icon: IconType; image: string };
type Service = { label: string; Icon: IconType };
type ExploreCategory = { label: string; Icon: IconType; image: string };
type FaqItem = { question: string; answer: string };
type FeaturedFreelancer = {
  name: string;
  role: string;
  image: string;
  reviewScore: string;
  totalEarned: string;
  jobSuccess: string;
  bio: string;
  location: string;
  hourlyRate: string;
};

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
  featuredFreelancersTitle: string;
  featuredFreelancers: FeaturedFreelancer[];
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

export const exploreCategories: ExploreCategory[] = [
  {
    label: "Product design",
    Icon: Sparkles,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Brand & identity",
    Icon: Target,
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Web development",
    Icon: Briefcase,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Mobile apps",
    Icon: Rocket,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Marketing & growth",
    Icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Content & copywriting",
    Icon: Search,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Data & analytics",
    Icon: Globe,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Operations & admin",
    Icon: Timer,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Customer success",
    Icon: Users,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Strategy & consulting",
    Icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=900&q=80",
  },
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
  featuredFreelancersTitle: "Featured freelancers",
  featuredFreelancers: [
    {
      name: "Amelia Park",
      role: "Product designer",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
      reviewScore: "4.9",
      totalEarned: "$180k+",
      jobSuccess: "98% job success",
      bio: "Leads product design for complex SaaS dashboards and mobile apps.",
      location: "San Francisco, CA",
      hourlyRate: "$140/hr",
    },
    {
      name: "Luis Romero",
      role: "Full-stack engineer",
      image: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=600&q=80",
      reviewScore: "5.0",
      totalEarned: "$240k+",
      jobSuccess: "100% job success",
      bio: "Builds scalable React, Node, and Next.js products for high-growth teams.",
      location: "Austin, TX",
      hourlyRate: "$160/hr",
    },
    {
      name: "Nia Patel",
      role: "Growth marketer",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
      reviewScore: "4.8",
      totalEarned: "$130k+",
      jobSuccess: "96% job success",
      bio: "Performance and lifecycle campaigns that compound across paid and email.",
      location: "London, UK",
      hourlyRate: "$120/hr",
    },
    {
      name: "Jonas Müller",
      role: "Brand strategist",
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
      reviewScore: "4.9",
      totalEarned: "$160k+",
      jobSuccess: "97% job success",
      bio: "Helps B2B brands clarify positioning and launch cohesive visual systems.",
      location: "Berlin, Germany",
      hourlyRate: "$135/hr",
    },
  ],
  pipelineTitle: "How it works",
  pipeline: [
    {
      title: "Describe the project",
      description: "Share goals, budget, and timeline.",
      Icon: Target,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Review vetted talent",
      description: "Only top candidates reach you.",
      Icon: CheckCircle2,
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Kickoff in a day",
      description: "Start work quickly with clear milestones.",
      Icon: Rocket,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=900&q=80",
    },
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
  featuredFreelancersTitle: "Featured clients",
  featuredFreelancers: [
    {
      name: "Northwind Studio",
      role: "B2B SaaS product team",
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
      reviewScore: "4.9",
      totalEarned: "$480k earned",
      jobSuccess: "98% hire satisfaction",
      bio: "Shipping complex analytics and workflow tools for mid-market teams.",
      location: "Seattle, WA",
      hourlyRate: "$140/hr",
    },
    {
      name: "Harborwave Labs",
      role: "Engineering-led startup",
      image: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=600&q=80",
      reviewScore: "5.0",
      totalEarned: "$320k earned",
      jobSuccess: "100% on-time milestones",
      bio: "Hiring small product squads to ship features in weeks, not quarters.",
      location: "Toronto, Canada",
      hourlyRate: "$130/hr",
    },
    {
      name: "Aurora Collective",
      role: "Brand & content team",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
      reviewScore: "4.8",
      totalEarned: "$190k earned",
      jobSuccess: "95% hire satisfaction",
      bio: "Long-term brand, content, and campaign partners for growth-stage companies.",
      location: "New York, NY",
      hourlyRate: "$120/hr",
    },
    {
      name: "Summit Ventures",
      role: "Growth-focused fund",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
      reviewScore: "4.9",
      totalEarned: "$260k earned",
      jobSuccess: "97% repeat collaborations",
      bio: "Brings in specialists across portfolio companies for focused growth sprints.",
      location: "Remote-first",
      hourlyRate: "$150/hr",
    },
  ],
  pipelineTitle: "How it works",
  pipeline: [
    {
      title: "Apply once",
      description: "We review your profile and work samples.",
      Icon: CheckCircle2,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Get matched",
      description: "We connect you to clients that fit your skills.",
      Icon: Users,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Deliver with clarity",
      description: "Projects come with clear goals and scope.",
      Icon: Rocket,
      image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&w=900&q=80",
    },
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
