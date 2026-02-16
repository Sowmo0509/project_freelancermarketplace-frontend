"use client";

export function ForgotPasswordHeader() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">Reset password</p>
      <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">Forgot your password?</h1>
      <p className="text-sm text-muted-foreground sm:text-base">Enter your email and we&apos;ll send you reset instructions.</p>
    </div>
  );
}
