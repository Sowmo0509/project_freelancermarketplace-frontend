"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar } from "lucide-react";
import { ProfileSection } from "./profile-section";

export function ProfileAvailability() {
  return (
    <ProfileSection title="Availability" onAdd={() => {}}>
      <div className="space-y-4">
        {/* Weekly Hours */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-semibold">Weekly Availability</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 border rounded-lg">
              <div className="text-2xl font-bold text-primary">40+</div>
              <div className="text-sm text-muted-foreground">Hours per week</div>
            </div>
            <div className="p-3 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">Available</div>
              <div className="text-sm text-muted-foreground">Status</div>
            </div>
          </div>
        </div>

        {/* Schedule Preferences */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-semibold">Schedule Preferences</h3>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <span className="text-sm">Monday - Friday</span>
              <Badge variant="secondary">9:00 - 18:00</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <span className="text-sm">Saturday</span>
              <Badge variant="secondary">10:00 - 16:00</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <span className="text-sm">Sunday</span>
              <Badge variant="outline">Unavailable</Badge>
            </div>
          </div>
        </div>

        {/* Time Zone */}
        <div className="p-3 bg-muted/50 rounded-lg">
          <div className="text-sm text-muted-foreground">Time Zone</div>
          <div className="font-medium">Pacific Time (PT)</div>
        </div>
      </div>
    </ProfileSection>
  );
}
