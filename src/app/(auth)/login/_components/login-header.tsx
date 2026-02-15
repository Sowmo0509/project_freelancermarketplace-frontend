"use client";

export function LoginHeader() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">Log in</p>
      <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">Welcome back</h1>
      <p className="text-sm text-muted-foreground sm:text-base">Enter your details to continue.</p>
    </div>
  );
}

