"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { countries } from "countries-list";
import { AuthLayout } from "@/app/(auth)/_components/auth-layout";
import { SignUpHeader } from "@/app/(auth)/signup/_components/signup-header";
import { SignUpRoleToggle } from "@/app/(auth)/signup/_components/signup-role-toggle";
import { SignUpForm } from "@/app/(auth)/signup/_components/signup-form";
import { VerificationSentSection } from "@/app/(auth)/signup/_components/verification-sent-section";

type Role = "freelancer" | "client";

export default function SignUpPage() {
  const [role, setRole] = useState<Role>("client");
  const [country, setCountry] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [resendCount, setResendCount] = useState(0);

  useEffect(() => {
    if (!verificationSent || timeLeft <= 0) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [verificationSent, timeLeft]);

  const countryOptions = useMemo(() => {
    return Object.values(countries)
      .map((countryData) => countryData.name)
      .sort((a, b) => a.localeCompare(b));
  }, []);

  const subtitle = verificationSent ? "Verify your email to activate your account." : role === "freelancer" ? "Create your freelancer profile and start getting matched." : "Create your client account and start hiring faster.";

  const handleResend = async () => {
    if (!verificationEmail || timeLeft > 0) {
      return;
    }

    const nextCooldown = resendCount === 0 ? 30 : 120;

    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";
      const response = await fetch(`${apiBase}/auth/resend-verification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email: verificationEmail }),
      });

      if (!response.ok) {
        toast.error("Unable to resend verification email.");
        return;
      }

      toast.success("Verification email resent.");
      setResendCount((prev) => prev + 1);
      setTimeLeft(nextCooldown);
    } catch {
      toast.error("Unable to resend verification email.");
    }
  };

  return (
    <AuthLayout subtitle={subtitle}>
      {verificationSent ? (
        <VerificationSentSection timeLeft={timeLeft} onResend={handleResend} />
      ) : (
        <>
          <SignUpHeader />
          <SignUpRoleToggle role={role} onChange={setRole} />
          <SignUpForm
            country={country}
            onCountryChange={setCountry}
            countryOptions={countryOptions}
            role={role}
            onSuccess={(email) => {
              setVerificationEmail(email);
              setVerificationSent(true);
              setResendCount(0);
              setTimeLeft(30);
            }}
          />
        </>
      )}
    </AuthLayout>
  );
}
