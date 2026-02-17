"use client";

import { Button } from "@/components/ui/button";
import { Edit, Plus } from "lucide-react";
import { ReactNode } from "react";

interface ProfileSectionProps {
  title: string;
  children: ReactNode;
  onEdit?: () => void;
  onAdd?: () => void;
}

export function ProfileSection({ title, children, onEdit, onAdd }: ProfileSectionProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex items-center gap-2">
          <Button 
            size="sm" 
            variant="ghost" 
            onClick={onEdit}
            className="h-8 w-8 rounded-full p-0"
          >
            <Edit className="h-4 w-4" />
          </Button>
          {onAdd && (
            <Button 
              size="sm" 
              variant="outline" 
              onClick={onAdd}
              className="h-8 w-8 rounded-full p-0"
            >
              <Plus className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}
