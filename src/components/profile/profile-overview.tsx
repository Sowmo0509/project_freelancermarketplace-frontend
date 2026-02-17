"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Edit } from "lucide-react";

export function ProfileOverview() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Overview / Bio</CardTitle>
        <Button size="sm" variant="ghost">
          <Edit className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Tell clients about your skills, experience, and what makes you valuable to their projects..."
          className="min-h-[120px] resize-none"
          defaultValue="I'm a passionate full-stack developer with 5+ years of experience building scalable web applications. I specialize in React, Node.js, and cloud technologies, helping businesses bring their ideas to life with clean, efficient code.

My approach focuses on understanding client needs deeply and delivering solutions that not only work well but are also maintainable and scalable. I've worked with startups and established companies, always prioritizing user experience and business goals.

Let's discuss how I can contribute to your next project!"
        />
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>0 / 500 characters</span>
          <Button size="sm">Save</Button>
        </div>
      </CardContent>
    </Card>
  );
}
