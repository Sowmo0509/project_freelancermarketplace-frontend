"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AppNavbarAuthButtons() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="sm" asChild>
        <Link href="/login">Log in</Link>
      </Button>
      <Button size="sm" asChild>
        <Link href="/signup">Sign up</Link>
      </Button>
    </div>
  );
}
