"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Edit, Plus, Image as ImageIcon } from "lucide-react";

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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Portfolio</CardTitle>
        <Button size="sm" variant="ghost">
          <Edit className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        
        <Button variant="outline" className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add Portfolio Item
        </Button>
      </CardContent>
    </Card>
  );
}
