"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Edit, MapPin } from "lucide-react";

interface ProfileHeaderProps {
  user: {
    id: string;
    email: string;
    name?: string;
  };
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  const initials = user.name
    ? user.name.split(' ').map(n => n[0]).join('').toUpperCase()
    : user.email.charAt(0).toUpperCase();

  return (
    <Card className="border-2">
      <CardContent className="pt-8">
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          {/* Profile Photo */}
          <div className="relative">
            <Avatar className="h-24 w-24 border-4 border-background">
              <AvatarImage src="" alt={user.name || user.email} />
              <AvatarFallback className="text-xl font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>
            <Button
              size="sm"
              variant="outline"
              className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
            >
              <Edit className="h-3 w-3" />
            </Button>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
              <h1 className="text-2xl font-bold">
                {user.name || 'Freelancer'}
              </h1>
              <Badge variant="secondary" className="w-fit">
                Available now
              </Badge>
            </div>
            
            <div className="flex items-center gap-1 text-muted-foreground mb-3 justify-center sm:justify-start">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">San Francisco, CA</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
              <div>
                <span className="font-medium text-foreground">$75/hr</span>
                <span className="ml-1">Hourly Rate</span>
              </div>
              <div>
                <span className="font-medium text-foreground">100%</span>
                <span className="ml-1">Job Success</span>
              </div>
              <div>
                <span className="font-medium text-foreground">$50K+</span>
                <span className="ml-1">Total Earned</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4 justify-center sm:justify-start">
              <Button size="sm">Edit Profile</Button>
              <Button size="sm" variant="outline">View Public Profile</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
