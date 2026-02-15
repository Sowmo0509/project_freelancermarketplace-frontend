"use client";

import type { ComponentProps } from "react";

type SectionCardProps = ComponentProps<"section">;

export function SectionCard({ className = "", ...props }: SectionCardProps) {
  return (
    <section
      className={`rounded-3xl border border-border bg-card/60 px-5 py-7 sm:px-6 sm:py-9 ${className}`}
      {...props}
    />
  );
}

