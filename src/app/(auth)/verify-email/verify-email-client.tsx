"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { AuthLayout } from "@/app/(auth)/_components/auth-layout";
import { Button } from "@/components/ui/button";

type Status = "idle" | "verifying" | "success" | "error";

export function VerifyEmailClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const verify = async () => {
      const token = searchParams.get("token");

      if (!token) {
        setStatus("error");
        return;
      }

      try {
        setStatus("verifying");

        const apiBase = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";
        const url = new URL("/api/auth/verify-email", apiBase);
        url.searchParams.set("token", token);
        url.searchParams.set("callbackURL", "/");

        const response = await fetch(url.toString(), {
          method: "GET",
          credentials: "include",
        });

        if (response.status >= 400 && response.status !== 401) {
          setStatus("error");
          toast.error("Email verification failed.");
          return;
        }

        setStatus("success");
        toast.success("Email verified successfully.");
      } catch {
        setStatus("error");
        toast.error("Email verification failed.");
      }
    };

    void verify();
  }, [searchParams]);

  const subtitle = status === "success" ? "Your email has been verified." : "We are verifying your email address.";

  return (
    <AuthLayout subtitle={subtitle}>
      <div className="flex flex-col gap-4 justify-between flex-1">
        {status === "verifying" || status === "idle" ? (
          <div>
            <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">Verifying your email</h1>
            <p className="text-sm text-muted-foreground sm:text-base">This will only take a moment. Please wait while we confirm your email address.</p>
          </div>
        ) : null}

        {status === "success" ? (
          <div className="flex flex-col justify-between flex-1">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">Email verified</h1>
              <p className="text-sm text-muted-foreground sm:text-base">Your email address has been successfully verified. You can now log in to your account.</p>
            </div>
            <Button type="button" className="mt-2 w-full sm:w-auto" onClick={() => router.push("/login")}>
              Go to login
            </Button>
          </div>
        ) : null}

        {status === "error" ? (
          <div className="flex flex-col justify-between flex-1">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">Verification failed</h1>
              <p className="text-sm text-muted-foreground sm:text-base">We could not verify your email address. The link may have expired or already been used.</p>
            </div>
            <Button type="button" className="mt-2 w-full sm:w-auto" onClick={() => router.push("/signup")}>
              Back to signup
            </Button>
          </div>
        ) : null}
      </div>
    </AuthLayout>
  );
}
