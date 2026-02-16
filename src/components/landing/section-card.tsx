"use client";

import type { ComponentProps } from "react";

type SectionCardProps = ComponentProps<"section">;

/**
 * A styled wrapper around a native `section` element.
 *
 * Merges a fixed set of layout and visual utility classes with any additional
 * `className` provided and forwards all other props to the underlying section.
 *
 * @param className - Additional CSS class names appended to the component's default classes (default: `""`).
 * @param props - Other attributes and event handlers for the native `section` element; these are spread onto the rendered element.
 * @returns The rendered `section` element with default styling and any provided props applied.
 */
export function SectionCard({ className = "", ...props }: SectionCardProps) {
  return (
    <section
      className={`rounded-3xl border border-border bg-card/60 px-5 py-7 sm:px-6 sm:py-9 ${className}`}
      {...props}
    />
  );
}
