"use client";

import Link from "next/link";

export function AppNavbarNav() {
  return (
    <div className="hidden items-center gap-6 text-sm font-medium md:flex">
      <Link 
        href="/app" 
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        Dashboard
      </Link>
      <Link 
        href="/app/profile" 
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        Profile
      </Link>
      <button className="text-muted-foreground hover:text-foreground transition-colors">
        Find Work
      </button>
      <button className="text-muted-foreground hover:text-foreground transition-colors">
        My Jobs
      </button>
      <button className="text-muted-foreground hover:text-foreground transition-colors">
        Reports
      </button>
    </div>
  );
}
