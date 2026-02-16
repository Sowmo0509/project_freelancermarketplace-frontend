"use client";

import { Button } from "@/components/ui/button";

type Role = "freelancer" | "client";

type RoleToggleProps = {
  role: Role;
  onChange: (role: Role) => void;
};

/**
 * Render a two-option toggle for selecting either the "freelancer" or "client" role.
 *
 * @param role - The currently selected role, either `"freelancer"` or `"client"`.
 * @param onChange - Callback invoked with the newly selected role when a button is clicked.
 * @returns The rendered toggle element.
 */
export function SignUpRoleToggle({ role, onChange }: RoleToggleProps) {
  return (
    <div className="flex items-center rounded-full border border-border bg-background p-1">
      <Button
        type="button"
        variant={role === "freelancer" ? "default" : "ghost"}
        className="flex-1 rounded-full"
        onClick={() => onChange("freelancer")}
      >
        Apply as freelancer
      </Button>
      <Button
        type="button"
        variant={role === "client" ? "default" : "ghost"}
        className="flex-1 rounded-full"
        onClick={() => onChange("client")}
      >
        Apply as client
      </Button>
    </div>
  );
}
