"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { ProfileSection } from "./profile-section";

export function ProfileExperience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "Jan 2022 - Present",
      description: "Lead development of enterprise web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented CI/CD pipelines."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Pro",
      location: "Remote",
      period: "Jun 2020 - Dec 2021",
      description: "Developed custom websites and web applications for various clients. Specialized in e-commerce solutions and API integrations."
    },
    {
      title: "Frontend Developer",
      company: "StartupHub",
      location: "Austin, TX",
      period: "Aug 2018 - May 2020",
      description: "Built responsive user interfaces and improved application performance. Collaborated with design team to implement pixel-perfect designs."
    }
  ];

  return (
    <ProfileSection title="Employment / Work History">
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-muted pl-4 relative">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-muted" />
            
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="font-semibold text-lg">{exp.title}</h3>
                <Badge variant="outline">{exp.period}</Badge>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="font-medium">{exp.company}</span>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <span className="text-sm">{exp.location}</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
        
        <Button variant="outline" className="w-full">
          Add Experience
        </Button>
      </div>
    </ProfileSection>
  );
}
