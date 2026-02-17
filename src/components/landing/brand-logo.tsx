"use client";

import { Sparkles } from "lucide-react";

interface BrandLogoProps {
  size?: "sm" | "md";
  showText?: boolean;
}

export function BrandLogo({ size = "md", showText = true }: BrandLogoProps) {
  const containerClasses = size === "sm" 
    ? "h-8 w-8" 
    : "h-9 w-9";
  
  const iconClasses = size === "sm" 
    ? "h-4 w-4" 
    : "h-4 w-4";

  const borderClasses = size === "sm"
    ? "border border-border"
    : "";

  return (
    <div className="flex items-center gap-2 text-base font-semibold text-foreground">
      <div className={`flex items-center justify-center rounded-full bg-background ${containerClasses} ${borderClasses}`}>
        <Sparkles className={`${iconClasses} text-foreground`} />
      </div>
      {showText && <span>FreelanceFlow</span>}
    </div>
  );
}
