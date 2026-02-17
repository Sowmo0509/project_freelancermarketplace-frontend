"use client";

import { useAuth } from "@/hooks/use-auth";
import { Loader2 } from "lucide-react";
import { ProfileHeader } from "@/components/profile/profile-header";
import { ProfileOverview } from "@/components/profile/profile-overview";
import { ProfileSkills } from "@/components/profile/profile-skills";
import { ProfileExperience } from "@/components/profile/profile-experience";
import { ProfilePortfolio } from "@/components/profile/profile-portfolio";
import { ProfileEducation } from "@/components/profile/profile-education";
import { ProfileCertifications } from "@/components/profile/profile-certifications";
import { ProfileLanguages } from "@/components/profile/profile-languages";
import { ProfileAvailability } from "@/components/profile/profile-availability";

export default function ProfilePage() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-2">Access Denied</h1>
          <p className="text-muted-foreground">Please log in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Profile Header Section */}
        <ProfileHeader user={user} />

        {/* Main Content Container */}
        <div className="bg-card rounded-2xl p-6 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Profile Info */}
            <div className="lg:col-span-2 space-y-24">
              <ProfileOverview />
              <ProfileSkills />
              <ProfileExperience />
              <ProfilePortfolio />
            </div>

            {/* Right Column - Supporting Info */}
            <div className="space-y-24">
              <ProfileEducation />
              <ProfileCertifications />
              <ProfileLanguages />
              <ProfileAvailability />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
