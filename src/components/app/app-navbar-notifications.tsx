"use client";

import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function AppNavbarNotifications() {
  return (
    <Button variant="ghost" size="sm" className="relative">
      <Bell className="h-4 w-4" />
      <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
        3
      </Badge>
    </Button>
  );
}
