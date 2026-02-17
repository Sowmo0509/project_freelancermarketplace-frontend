"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";
import { apiClient } from "@/lib/api-client";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email."),
  password: z.string().min(1, "Password is required."),
});

type LoginValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/app";
  const [values, setValues] = useState<LoginValues>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateValue = (key: keyof LoginValues) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");

    const parsed = loginSchema.safeParse(values);
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
      const response = await apiClient.post("/api/auth/sign-in/email", {
        email: parsed.data.email,
        password: parsed.data.password,
        callbackURL: redirectTo,
      });

      const responseBody = response.data as { message?: string } | null;

      if (response.status >= 400) {
        const message = responseBody?.message ?? "Invalid email or password. Please try again.";
        setFormError(message);
        return;
      }

      toast.success("Logged in successfully.");
      router.push(redirectTo);
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Unable to log in right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="flex flex-col flex-1 justify-between" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@email.com" value={values.email} onChange={updateValue("email")} aria-invalid={Boolean(errors.email)} />
          {errors.email ? <p className="text-xs text-destructive">{errors.email}</p> : null}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <PasswordInput id="password" placeholder="Enter your password" value={values.password} onChange={updateValue("password")} aria-invalid={Boolean(errors.password)} />
          {errors.password ? <p className="text-xs text-destructive">{errors.password}</p> : null}
        </div>
        <div className="flex items-center justify-end">
          <Link href="/forgot-password" className="text-sm text-muted-foreground underline underline-offset-4">
            Forgot password?
          </Link>
        </div>
        {formError ? <p className="text-sm text-destructive">{formError}</p> : null}
      </div>
      <div className="flex flex-col gap-4">
        <Button className="h-11 w-full" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Log in"}
        </Button>
        <div className="flex items-center justify-center text-sm text-muted-foreground">
          <span>Don&apos;t have an account?</span>
          <Link href="/signup" className="ml-1 font-medium text-primary underline-offset-4 hover:underline">
            Create an account
          </Link>
        </div>
      </div>
    </form>
  );
}
