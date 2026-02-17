"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Plus, Image as ImageIcon } from "lucide-react";
import { ProfileSection } from "./profile-section";

export function ProfilePortfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React and Node.js",
      image: "",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://example.com/project1"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Real-time collaborative task management application",
      image: "",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      link: "https://example.com/project2"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric auth",
      image: "",
      tags: ["React Native", "TypeScript", "AWS", "Security"],
      link: "https://example.com/project3"
    }
  ];

  return (
    <ProfileSection title="Portfolio" onAdd={() => {}}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {portfolioItems.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-lg border">
            {/* Project Image */}
            <div className="aspect-video bg-muted flex items-center justify-center">
              <ImageIcon className="h-12 w-12 text-muted-foreground" />
            </div>
            
            {/* Project Info Overlay */}
            <div className="p-4 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-2">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {item.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ProfileSection>
  );
}
