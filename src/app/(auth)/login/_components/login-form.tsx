"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@email.com" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <PasswordInput id="password" placeholder="Enter your password" />
      </div>
      <div className="flex items-center justify-end">
        <Link href="/forgot-password" className="text-sm text-muted-foreground underline underline-offset-4">
          Forgot password?
        </Link>
      </div>
      <Button className="h-11 w-full">Log in</Button>
      <div className="flex items-center justify-center text-sm text-muted-foreground">
        <span>Don&apos;t have an account?</span>
        <Link href="/signup" className="ml-1 font-medium text-primary underline-offset-4 hover:underline">
          Create an account
        </Link>
      </div>
    </form>
  );
}
