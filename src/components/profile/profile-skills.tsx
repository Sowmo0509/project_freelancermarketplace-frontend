"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit, Plus, X } from "lucide-react";
import { useState } from "react";

const initialSkills = [
  "React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS",
  "PostgreSQL", "GraphQL", "AWS", "Docker", "Git",
  "REST APIs", "MongoDB", "Python", "Machine Learning", "UI/UX Design"
];

export function ProfileSkills() {
  const [skills, setSkills] = useState(initialSkills);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && skills.length < 15) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (indexToRemove: number) => {
    setSkills(skills.filter((_, index) => index !== indexToRemove));
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Skill Tags</CardTitle>
        <Button size="sm" variant="ghost">
          <Edit className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="flex items-center gap-1 pr-1 group"
            >
              {skill}
              <button
                onClick={() => removeSkill(index)}
                className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
        
        {skills.length < 15 && (
          <div className="flex gap-2">
            <div className="flex-1">
              <Label htmlFor="new-skill" className="sr-only">
                Add new skill
              </Label>
              <Input
                id="new-skill"
                placeholder="Add a skill..."
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addSkill()}
                className="h-8"
              />
            </div>
            <Button size="sm" onClick={addSkill} disabled={!newSkill.trim()}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        )}
        
        <div className="text-sm text-muted-foreground">
          {skills.length} / 15 skills
        </div>
      </CardContent>
    </Card>
  );
}
