"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { z } from "zod";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { PasswordInput, PasswordInputStrengthChecker } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type Role = "freelancer" | "client";

type SignUpFormProps = {
  country: string;
  onCountryChange: (value: string) => void;
  countryOptions: string[];
  role: Role;
};

const signUpSchema = z
  .object({
    firstName: z.string().min(1, "First name is required."),
    lastName: z.string().min(1, "Last name is required."),
    email: z.string().email("Enter a valid email."),
    password: z.string().min(8, "Password must be at least 8 characters."),
    confirmPassword: z.string().min(1, "Retype your password."),
    country: z.string().min(1, "Select your country."),
    role: z.enum(["client", "freelancer"]),
    termsAccepted: z.boolean().refine((value) => value, {
      message: "You must accept the terms to continue.",
    }),
    marketingOptIn: z.boolean(),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

type SignUpValues = z.infer<typeof signUpSchema>;

export function SignUpForm({ country, onCountryChange, countryOptions, role }: SignUpFormProps) {
  const [values, setValues] = useState<Omit<SignUpValues, "country" | "role" | "termsAccepted" | "marketingOptIn">>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateValue = (key: keyof typeof values) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");
    setFormSuccess("");

    const payload: SignUpValues = {
      ...values,
      country,
      role,
      termsAccepted,
      marketingOptIn,
    };

    const parsed = signUpSchema.safeParse(payload);
    if (!parsed.success) {
      const nextErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0];
        if (typeof key === "string" && !nextErrors[key]) {
          nextErrors[key] = issue.message;
        }
      });
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";
      const response = await fetch(`${apiBase}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          firstName: parsed.data.firstName,
          lastName: parsed.data.lastName,
          email: parsed.data.email,
          password: parsed.data.password,
          country: parsed.data.country,
          role: parsed.data.role,
          marketingOptIn: parsed.data.marketingOptIn,
        }),
      });

      const responseBody = await response.json().catch(() => null);

      if (!response.ok) {
        setFormError(responseBody?.message ?? "Unable to create account.");
        return;
      }

      setFormSuccess("Account created successfully.");
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Unable to create account.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" placeholder="Ava" value={values.firstName} onChange={updateValue("firstName")} aria-invalid={Boolean(errors.firstName)} />
          {errors.firstName ? <p className="text-xs text-destructive">{errors.firstName}</p> : null}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" placeholder="Johnson" value={values.lastName} onChange={updateValue("lastName")} aria-invalid={Boolean(errors.lastName)} />
          {errors.lastName ? <p className="text-xs text-destructive">{errors.lastName}</p> : null}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@email.com" value={values.email} onChange={updateValue("email")} aria-invalid={Boolean(errors.email)} />
        {errors.email ? <p className="text-xs text-destructive">{errors.email}</p> : null}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <PasswordInput id="password" placeholder="Create a password" value={values.password} onChange={updateValue("password")} aria-invalid={Boolean(errors.password)}>
          <PasswordInputStrengthChecker />
        </PasswordInput>
        {errors.password ? <p className="text-xs text-destructive">{errors.password}</p> : null}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="confirmPassword">Retype password</Label>
        <PasswordInput id="confirmPassword" placeholder="Retype your password" value={values.confirmPassword} onChange={updateValue("confirmPassword")} aria-invalid={Boolean(errors.confirmPassword)} />
        {errors.confirmPassword ? <p className="text-xs text-destructive">{errors.confirmPassword}</p> : null}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="country">Country</Label>
        <Combobox items={countryOptions} value={country} onValueChange={(value) => onCountryChange(value ?? "")}>
          <ComboboxInput id="country" className="w-full" placeholder="Select a country" showClear />
          <ComboboxContent>
            <ComboboxEmpty>No countries found.</ComboboxEmpty>
            <ComboboxList>
              {(countryName) => (
                <ComboboxItem key={countryName} value={countryName}>
                  {countryName}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        {errors.country ? <p className="text-xs text-destructive">{errors.country}</p> : null}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <Checkbox id="terms" checked={termsAccepted} onCheckedChange={(value) => setTermsAccepted(value === true)} aria-invalid={Boolean(errors.termsAccepted)} />
          <Label htmlFor="terms" className="text-sm leading-snug text-muted-foreground">
            I agree to the Terms & Conditions and acknowledge the Privacy Policy.
          </Label>
        </div>
        {errors.termsAccepted ? <p className="text-xs text-destructive">{errors.termsAccepted}</p> : null}
        <div className="flex items-start gap-3">
          <Checkbox id="newsletter" checked={marketingOptIn} onCheckedChange={(value) => setMarketingOptIn(value === true)} />
          <Label htmlFor="newsletter" className="text-sm leading-snug text-muted-foreground">
            Subscribe to product updates and the FreelanceFlow newsletter.
          </Label>
        </div>
      </div>
      {formError ? <p className="text-sm text-destructive">{formError}</p> : null}
      {formSuccess ? <p className="text-sm text-primary">{formSuccess}</p> : null}
      <Button className="h-11 w-full" disabled={isSubmitting}>
        {isSubmitting ? "Creating account..." : "Create account"}
      </Button>
      <div className="flex items-center justify-center text-sm text-muted-foreground">
        <span>Already have an account?</span>
        <Link href="/login" className="ml-1 font-medium text-primary underline-offset-4 hover:underline">
          Log in
        </Link>
      </div>
    </form>
  );
}
