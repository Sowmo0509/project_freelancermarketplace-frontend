"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AuthButtons() {
  return (
    <>
      <Button asChild variant="outline" className="h-9 px-4 text-xs sm:text-sm">
        <Link href="/login">Log in</Link>
      </Button>
      <Button asChild className="h-9 px-4 text-xs sm:text-sm">
        <Link href="/signup">Get started</Link>
      </Button>
    </>
  );
}
