"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ForgotPasswordForm() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@email.com"
        />
      </div>
      <p className="text-xs text-muted-foreground">
        We&apos;ll send a secure link to reset your password. This link will
        expire after a short time for your security.
      </p>
      <Button className="h-11 w-full">
        Send reset link
      </Button>
      <div className="flex items-center justify-center text-sm text-muted-foreground">
        <span>Remember your password?</span>
        <Link
          href="/login"
          className="ml-1 font-medium text-primary underline-offset-4 hover:underline"
        >
          Log in
        </Link>
      </div>
    </form>
  );
}

