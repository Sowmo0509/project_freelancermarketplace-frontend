"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ProfileSection } from "./profile-section";

export function ProfileOverview() {
  return (
    <ProfileSection title="Overview / Bio">
      <Textarea
        placeholder="Tell clients about your skills, experience, and what makes you valuable to their projects..."
        className="min-h-[120px] resize-none"
        defaultValue="I'm a passionate full-stack developer with 5+ years of experience building scalable web applications. I specialize in React, Node.js, and cloud technologies, helping businesses bring their ideas to life with clean, efficient code.

My approach focuses on understanding client needs deeply and delivering solutions that not only work well but are also maintainable and scalable. I've worked with startups and established companies, always prioritizing user experience and business goals.

Let's discuss how I can contribute to your next project!"
      />
      <div className="flex justify-between items-center text-sm text-muted-foreground mt-3">
        <span>0 / 500 characters</span>
        <Button size="sm">Save</Button>
      </div>
    </ProfileSection>
  );
}
