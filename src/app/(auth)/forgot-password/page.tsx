"use client";

import { AuthLayout } from "@/app/(auth)/_components/auth-layout";
import { ForgotPasswordHeader } from "@/app/(auth)/forgot-password/_components/forgot-password-header";
import { ForgotPasswordForm } from "@/app/(auth)/forgot-password/_components/forgot-password-form";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout subtitle="Reset your password securely and get back to your account.">
      <ForgotPasswordHeader />
      <ForgotPasswordForm />
    </AuthLayout>
  );
}

