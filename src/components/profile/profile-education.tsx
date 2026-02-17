"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ProfileSection } from "./profile-section";

export function ProfileEducation() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2014 - 2018",
      gpa: "3.8/4.0"
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Coding Academy",
      location: "San Francisco, CA",
      period: "2019",
      certificate: "With Honors"
    }
  ];

  return (
    <ProfileSection title="Education" onAdd={() => {}}>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-1 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <h3 className="font-semibold">{edu.degree}</h3>
                <Badge variant="outline">{edu.period}</Badge>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <div className="font-medium">{edu.institution}</div>
                <div>{edu.location}</div>
                {edu.gpa && <div className="mt-1">GPA: {edu.gpa}</div>}
                {edu.certificate && (
                  <div className="mt-1">
                    <Badge variant="secondary" className="text-xs">
                      {edu.certificate}
                    </Badge>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ProfileSection>
  );
}
