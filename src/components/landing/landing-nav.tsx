"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../theme/theme-toggle";
import { useAuth } from "@/hooks/use-auth";
import { signOut } from "@/lib/auth-client";
import { BrandLogo } from "./brand-logo";
import { UserMenu } from "./user-menu";
import { AuthButtons } from "./auth-buttons";
import { MobileMenu } from "./mobile-menu";

type LandingNavProps = {
  navLinks: string[];
};

export function LandingNav({ navLinks }: LandingNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, refreshAuth } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      // Force refresh auth state and redirect
      await refreshAuth();
      window.location.href = "/";
    } catch (error) {
      console.error("Sign out failed:", error);
      // Fallback: force reload to clear auth state
      window.location.href = "/";
    }
  };

  return (
    <nav className="flex flex-col gap-3 rounded-3xl border border-border bg-card/60 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">
      {/* Mobile Header */}
      <div className="flex items-center justify-between sm:hidden">
        <BrandLogo size="sm" />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {isAuthenticated ? (
            <UserMenu user={user} onSignOut={handleSignOut} />
          ) : (
            <Button 
              variant="ghost" 
              className="h-9 w-9 rounded-full p-0" 
              aria-expanded={mobileMenuOpen} 
              aria-label="Toggle menu" 
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          )}
        </div>
      </div>

      {/* Desktop Brand */}
      <div className="hidden items-center gap-2 text-base font-semibold text-foreground sm:flex">
        <BrandLogo size="md" />
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden flex-1 items-center justify-center gap-5 text-sm text-muted-foreground sm:flex">
        {navLinks.map((item) => (
          <a key={item} className="transition-colors hover:text-foreground" href="#">
            {item}
          </a>
        ))}
      </div>

      {/* Desktop Auth Section */}
      <div className="hidden items-center gap-2 sm:flex">
        <ThemeToggle />
        {isAuthenticated ? (
          <UserMenu user={user} onSignOut={handleSignOut} />
        ) : (
          <AuthButtons />
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu 
            navLinks={navLinks}
            isAuthenticated={isAuthenticated}
            user={user}
            onSignOut={handleSignOut}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}
