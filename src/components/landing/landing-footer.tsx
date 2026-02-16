"use client";

import { Sparkles } from "lucide-react";

type FooterColumn = {
  title: string;
  links: string[];
};

type LandingFooterProps = {
  columns: FooterColumn[];
};

export function LandingFooter({ columns }: LandingFooterProps) {
  return (
    <footer className="mt-4 rounded-3xl border border-border bg-card/60 px-5 py-8 sm:px-6 sm:py-9">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1.8fr]">
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground sm:text-base">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background sm:h-9 sm:w-9">
              <Sparkles className="h-4 w-4 text-foreground" />
            </div>
            <span>FreelanceFlow</span>
          </div>
          <p className="text-xs text-muted-foreground sm:text-sm">Premium freelance marketplace for vetted talent and serious clients.</p>
          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground sm:text-sm">
            <span>hello@freelanceflow.com</span>
            <span>+1 (555) 019-2024</span>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">{column.title}</p>
              <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:text-sm">
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
      <div className="mt-8 flex flex-col gap-3 border-t border-border pt-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-sm">
        <span>© 2026 FreelanceFlow. All rights reserved.</span>
        <div className="flex flex-wrap gap-3">
          <span>Made for remote teams worldwide.</span>
          <span>Secure payments, zero platform fees.</span>
        </div>
      </div>
    </footer>
  );
}
