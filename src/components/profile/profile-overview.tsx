"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ProfileSection } from "./profile-section";

export function ProfileOverview() {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState("I'm a passionate full-stack developer with 5+ years of experience building scalable web applications. I specialize in React, Node.js, and cloud technologies, helping businesses bring their ideas to life with clean, efficient code.\n\nMy approach focuses on understanding client needs deeply and delivering solutions that not only work well but are also maintainable and scalable. I've worked with startups and established companies, always prioritizing user experience and business goals.\n\nLet's discuss how I can contribute to your next project!");

  return (
    <ProfileSection 
      title="Overview / Bio" 
      onEdit={() => setIsEditing(true)}
    >
      {isEditing ? (
        <div>
          <Textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell clients about your skills, experience, and what makes you valuable to their projects..."
            className="min-h-[120px] resize-none"
          />
          <div className="flex justify-between items-center text-sm text-muted-foreground mt-3">
            <span>{bio.length} / 500 characters</span>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button size="sm" onClick={() => setIsEditing(false)}>
                Save
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="whitespace-pre-wrap text-sm leading-relaxed">
          {bio}
        </div>
      )}
    </ProfileSection>
  );
}
