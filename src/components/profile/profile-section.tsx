"use client";

import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { ReactNode } from "react";

interface ProfileSectionProps {
  title: string;
  children: ReactNode;
  onEdit?: () => void;
}

export function ProfileSection({ title, children, onEdit }: ProfileSectionProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">{title}</h2>
        <Button size="sm" variant="ghost" onClick={onEdit}>
          <Edit className="h-4 w-4" />
        </Button>
      </div>
      {children}
    </div>
  );
}
