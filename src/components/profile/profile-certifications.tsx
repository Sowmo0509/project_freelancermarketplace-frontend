"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, ExternalLink } from "lucide-react";
import { ProfileSection } from "./profile-section";

export function ProfileCertifications() {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SAA-C012345",
      link: "https://aws.amazon.com/verify"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google",
      date: "2022",
      credentialId: "GCP-DEV-67890",
      link: "https://cloud.google.com/credentials"
    },
    {
      name: "Meta React Developer",
      issuer: "Meta",
      date: "2021",
      credentialId: "META-REACT-2021",
      link: "https://www.coursera.org/account/accomplishments/verify"
    }
  ];

  return (
    <ProfileSection title="Certifications / Licenses" onAdd={() => {}}>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-1 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="font-semibold text-sm">{cert.name}</h3>
                <Badge variant="outline">{cert.date}</Badge>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <div className="font-medium">{cert.issuer}</div>
                <div className="font-mono text-xs mt-1">ID: {cert.credentialId}</div>
              </div>
              
              {cert.link && (
                <Button size="sm" variant="outline" asChild className="mt-2">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Verify Certificate
                  </a>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </ProfileSection>
  );
}
