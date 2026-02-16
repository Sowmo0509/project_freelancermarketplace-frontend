"use client";

import { Button } from "@/components/ui/button";
import type { ViewKey } from "@/components/landing/landing-data";

type ViewToggleProps = {
  activeView: ViewKey;
  onChange: (view: ViewKey) => void;
};

export function ViewToggle({ activeView, onChange }: ViewToggleProps) {
  return (
    <header className="flex flex-col items-center gap-5 sm:gap-7">
      <div className="flex w-full max-w-full rounded-full border border-border bg-card p-1 sm:max-w-md" role="tablist" aria-label="Landing page view selector">
        <Button type="button" role="tab" id="client-tab" aria-selected={activeView === "client"} aria-controls="client-panel" variant={activeView === "client" ? "default" : "ghost"} className="h-10 flex-1 rounded-full text-sm sm:text-sm" onClick={() => onChange("client")}>
          Client View
        </Button>
        <Button type="button" role="tab" id="freelancer-tab" aria-selected={activeView === "freelancer"} aria-controls="freelancer-panel" variant={activeView === "freelancer" ? "default" : "ghost"} className="h-10 flex-1 rounded-full text-sm sm:text-sm" onClick={() => onChange("freelancer")}>
          Freelancer View
        </Button>
      </div>
    </header>
  );
}
