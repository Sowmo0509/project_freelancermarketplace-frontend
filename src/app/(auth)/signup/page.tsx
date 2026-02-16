"use client";

import { useMemo, useState } from "react";
import { countries } from "countries-list";
import { AuthLayout } from "@/app/(auth)/_components/auth-layout";
import { SignUpHeader } from "@/app/(auth)/signup/_components/signup-header";
import { SignUpRoleToggle } from "@/app/(auth)/signup/_components/signup-role-toggle";
import { SignUpForm } from "@/app/(auth)/signup/_components/signup-form";

type Role = "freelancer" | "client";

export default function SignUpPage() {
  const [role, setRole] = useState<Role>("client");
  const [country, setCountry] = useState("");
  const countryOptions = useMemo(() => {
    return Object.values(countries)
      .map((countryData) => countryData.name)
      .sort((a, b) => a.localeCompare(b));
  }, []);

  const subtitle = role === "freelancer" ? "Create your freelancer profile and start getting matched." : "Create your client account and start hiring faster.";

  return (
    <AuthLayout subtitle={subtitle}>
      <SignUpHeader />
      <SignUpRoleToggle role={role} onChange={setRole} />
      <SignUpForm country={country} onCountryChange={setCountry} countryOptions={countryOptions} />
    </AuthLayout>
  );
}
