"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  navLinks: string[];
  isAuthenticated: boolean;
  user: {
    email?: string;
  } | null;
  onSignOut: () => void;
}

export function MobileMenu({ navLinks, isAuthenticated, user, onSignOut }: MobileMenuProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, height: 0 }} 
      animate={{ opacity: 1, height: "auto" }} 
      exit={{ opacity: 0, height: 0 }} 
      transition={{ duration: 0.2, ease: "easeOut" }} 
      className="overflow-hidden sm:hidden"
    >
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-background/80 p-4">
        <div className="flex flex-col gap-3 text-sm text-muted-foreground">
          {navLinks.map((item) => (
            <a key={item} className="transition-colors hover:text-foreground" href="#">
              {item}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {isAuthenticated ? (
            <>
              <div className="px-2 py-1.5 text-sm">
                <div className="font-medium">{user?.email}</div>
              </div>
              <Button asChild className="h-10 text-sm">
                <Link href="/app">Dashboard</Link>
              </Button>
              <Button variant="outline" className="h-10 text-sm" onClick={onSignOut}>
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" className="h-10 text-sm" asChild>
                <Link href="/login">Sign in</Link>
              </Button>
              <Button asChild className="h-10 text-sm">
                <Link href="/signup">Get started</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
