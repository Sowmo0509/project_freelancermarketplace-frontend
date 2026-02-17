"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Languages, Plus } from "lucide-react";
import { useState } from "react";
import { ProfileSection } from "./profile-section";

interface Language {
  name: string;
  proficiency: "Native" | "Fluent" | "Conversational" | "Basic" | "Bilingual";
}

export function ProfileLanguages() {
  const [languages, setLanguages] = useState<Language[]>([
    { name: "English", proficiency: "Native" },
    { name: "Spanish", proficiency: "Fluent" },
    { name: "French", proficiency: "Conversational" },
    { name: "Bengali", proficiency: "Native" }
  ]);

  const getProficiencyColor = (proficiency: Language['proficiency']) => {
    switch (proficiency) {
      case "Native": return "default";
      case "Fluent": return "secondary";
      case "Conversational": return "outline";
      case "Basic": return "outline";
      case "Bilingual": return "secondary";
      default: return "outline";
    }
  };

  const removeLanguage = (indexToRemove: number) => {
    setLanguages(languages.filter((_, index) => index !== indexToRemove));
  };

  return (
    <ProfileSection title="Languages" onAdd={() => {}}>
      <div className="space-y-2 mb-3">
        {languages.map((lang, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">{lang.name}:
              <span className="text-muted-foreground ml-1">
                {lang.proficiency}
              </span>
              </div>
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => removeLanguage(index)}
              className="h-6 w-6 p-0 opacity-0 hover:opacity-100 transition-opacity"
            >
              ×
            </Button>
          </div>
        ))}
      </div>
    </ProfileSection>
  );
}
