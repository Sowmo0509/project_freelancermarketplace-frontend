"use client";

import { AuthLayout } from "@/app/(auth)/_components/auth-layout";
import { LoginHeader } from "@/app/(auth)/login/_components/login-header";
import { LoginForm } from "@/app/(auth)/login/_components/login-form";

/**
 * Renders the login page layout containing the authentication header and form.
 *
 * @returns A React element that composes `AuthLayout` (with a subtitle), `LoginHeader`, and `LoginForm`.
 */
export default function LoginPage() {
  return (
    <AuthLayout subtitle="Log in to manage projects, payouts, and your team.">
      <LoginHeader />
      <LoginForm />
    </AuthLayout>
  );
}