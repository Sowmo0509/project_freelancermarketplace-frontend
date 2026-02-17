"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Languages, Edit, Plus } from "lucide-react";
import { useState } from "react";

interface Language {
  name: string;
  proficiency: "Native" | "Fluent" | "Conversational" | "Basic";
}

export function ProfileLanguages() {
  const [languages, setLanguages] = useState<Language[]>([
    { name: "English", proficiency: "Native" },
    { name: "Spanish", proficiency: "Fluent" },
    { name: "French", proficiency: "Conversational" },
    { name: "Mandarin", proficiency: "Basic" }
  ]);

  const getProficiencyColor = (proficiency: Language['proficiency']) => {
    switch (proficiency) {
      case "Native": return "default";
      case "Fluent": return "secondary";
      case "Conversational": return "outline";
      case "Basic": return "outline";
      default: return "outline";
    }
  };

  const removeLanguage = (indexToRemove: number) => {
    setLanguages(languages.filter((_, index) => index !== indexToRemove));
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Languages</CardTitle>
        <Button size="sm" variant="ghost">
          <Edit className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {languages.map((lang, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Languages className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium">{lang.name}</div>
                  <Badge variant={getProficiencyColor(lang.proficiency)} className="text-xs mt-1">
                    {lang.proficiency}
                  </Badge>
                </div>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => removeLanguage(index)}
                className="h-8 w-8 p-0 opacity-0 hover:opacity-100 transition-opacity"
              >
                ×
              </Button>
            </div>
          ))}
        </div>
        
        <Button variant="outline" className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add Language
        </Button>
      </CardContent>
    </Card>
  );
}
