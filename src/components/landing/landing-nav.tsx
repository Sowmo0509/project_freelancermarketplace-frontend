"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Moon, Sparkles, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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

type LandingNavProps = {
  navLinks: string[];
};

export function LandingNav({ navLinks }: LandingNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useSyncExternalStore(subscribeToTheme, getPreferredTheme, () => "light");
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const handleThemeToggle = () => {
    const nextTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    window.dispatchEvent(new Event("theme-change"));
  };

  return (
    <nav className="flex flex-col gap-3 rounded-3xl border border-border bg-card/60 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">
      <div className="flex items-center justify-between sm:hidden">
        <div className="flex items-center gap-2 text-base font-semibold text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background">
            <Sparkles className="h-4 w-4 text-foreground" />
          </div>
          <span>FreelanceFlow</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="h-9 w-9 rounded-full p-0" aria-pressed={isDark} aria-label="Toggle dark mode" onClick={handleThemeToggle}>
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" className="h-9 w-9 rounded-full p-0" aria-expanded={mobileMenuOpen} aria-label="Toggle menu" onClick={() => setMobileMenuOpen((open) => !open)}>
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      <div className="hidden items-center gap-2 text-base font-semibold text-foreground sm:flex">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background">
          <Sparkles className="h-4 w-4 text-foreground" />
        </div>
        <span>FreelanceFlow</span>
      </div>
      <div className="hidden flex-1 items-center justify-center gap-5 text-sm text-muted-foreground sm:flex">
        {navLinks.map((item) => (
          <a key={item} className="transition-colors hover:text-foreground" href="#">
            {item}
          </a>
        ))}
      </div>
      <div className="hidden items-center gap-2 sm:flex">
        <Button variant="ghost" className="h-9 w-9 rounded-full p-0" aria-pressed={isDark} aria-label="Toggle dark mode" onClick={handleThemeToggle}>
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
        <Button variant="outline" className="h-9 px-4 text-xs sm:text-sm">
          Sign in
        </Button>
        <Button className="h-9 px-4 text-xs sm:text-sm">Get started</Button>
      </div>
      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div key="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2, ease: "easeOut" }} className="overflow-hidden sm:hidden">
            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-background/80 p-4">
              <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                {navLinks.map((item) => (
                  <a key={item} className="transition-colors hover:text-foreground" href="#">
                    {item}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="outline" className="h-10 text-sm">
                  Sign in
                </Button>
                <Button className="h-10 text-sm">Get started</Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
