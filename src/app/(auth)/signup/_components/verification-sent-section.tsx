"use client";

import { MailCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

type VerificationSentSectionProps = {
  timeLeft: number;
  onResend: () => void;
};

export function VerificationSentSection({ timeLeft, onResend }: VerificationSentSectionProps) {
  const formattedTimeLeft =
    timeLeft > 0
      ? `${Math.floor(timeLeft / 60)
          .toString()
          .padStart(2, "0")}:${(timeLeft % 60).toString().padStart(2, "0")}`
      : null;

  return (
    <div className="flex flex-col gap-4 justify-between flex-1">
      <div className="flex flex-col gap-3">
        <MailCheck className="h-12 w-12 text-primary" />
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">Verify email</p>
          <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">Check your email</h1>
          <p className="text-sm text-muted-foreground sm:text-base">We&apos;ve sent a verification link to your email address. Click the link in the email to verify your account and start using FreelanceFlow.</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {formattedTimeLeft ? (
          <p className="text-xs text-muted-foreground">
            You can resend in <span className="tabular-nums">{formattedTimeLeft}</span>.
          </p>
        ) : null}
        <Button type="button" className="w-full sm:w-auto" disabled={timeLeft > 0} onClick={onResend}>
          Resend verification email
        </Button>
      </div>
    </div>
  );
}
