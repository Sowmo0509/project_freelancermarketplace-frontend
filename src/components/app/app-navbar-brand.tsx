"use client";

import Link from "next/link";

export function AppNavbarBrand() {
  return (
    <Link href="/app" className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
        FF
      </div>
      <span className="font-semibold text-lg">FreelanceFlow</span>
    </Link>
  );
}
