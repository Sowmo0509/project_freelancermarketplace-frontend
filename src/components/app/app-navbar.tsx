"use client";

import { useAuth } from "@/hooks/use-auth";
import { AppNavbarBrand } from "./app-navbar-brand";
import { AppNavbarNav } from "./app-navbar-nav";
import { AppNavbarSearch } from "./app-navbar-search";
import { AppNavbarNotifications } from "./app-navbar-notifications";
import { AppNavbarUserMenu } from "./app-navbar-user-menu";
import { AppNavbarAuthButtons } from "./app-navbar-auth-buttons";

export function AppNavbar() {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <AppNavbarBrand />
          <AppNavbarNav />
        </div>

        <div className="flex items-center gap-4">
          <AppNavbarSearch />
          <AppNavbarNotifications />
          {isAuthenticated ? (
            <AppNavbarUserMenu />
          ) : (
            <AppNavbarAuthButtons />
          )}
        </div>
      </div>
    </nav>
  );
}
