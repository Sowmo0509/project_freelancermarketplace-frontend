"use client";

import Link from "next/link";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { PasswordInput, PasswordInputStrengthChecker } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type SignUpFormProps = {
  country: string;
  onCountryChange: (value: string) => void;
  countryOptions: string[];
};

export function SignUpForm({ country, onCountryChange, countryOptions }: SignUpFormProps) {
  return (
    <form className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" placeholder="Ava" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" placeholder="Johnson" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@email.com" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <PasswordInput id="password" placeholder="Create a password">
          <PasswordInputStrengthChecker />
        </PasswordInput>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="confirmPassword">Retype password</Label>
        <PasswordInput id="confirmPassword" placeholder="Retype your password" />
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
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="text-sm leading-snug text-muted-foreground">
            I agree to the Terms & Conditions and acknowledge the Privacy Policy.
          </Label>
        </div>
        <div className="flex items-start gap-3">
          <Checkbox id="newsletter" />
          <Label htmlFor="newsletter" className="text-sm leading-snug text-muted-foreground">
            Subscribe to product updates and the FreelanceFlow newsletter.
          </Label>
        </div>
      </div>
      <Button className="h-11 w-full">Create account</Button>
      <div className="flex items-center justify-center text-sm text-muted-foreground">
        <span>Already have an account?</span>
        <Link href="/login" className="ml-1 font-medium text-primary underline-offset-4 hover:underline">
          Log in
        </Link>
      </div>
    </form>
  );
}
