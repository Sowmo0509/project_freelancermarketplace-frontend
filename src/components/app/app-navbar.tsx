"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { 
  Search, 
  Briefcase, 
  Users, 
  Bell, 
  Settings, 
  User, 
  LogOut 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export function AppNavbar() {
  const { user, isAuthenticated } = useAuth();
  const [searchType, setSearchType] = useState<"jobs" | "talent">("jobs");

  const handleSignOut = async () => {
    try {
      const { signOut } = await import("@/lib/auth-client");
      await signOut();
      window.location.href = "/";
    } catch (error) {
      console.error("Sign out failed:", error);
      window.location.href = "/";
    }
  };

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left side - Logo and Nav */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/app" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
              FF
            </div>
            <span className="font-semibold text-lg">FreelanceFlow</span>
          </Link>

          {/* Main Navigation */}
          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link 
              href="/app" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Dashboard
            </Link>
            <Link 
              href="/app/profile" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Profile
            </Link>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              Find Work
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              My Jobs
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              Reports
            </button>
          </div>
        </div>

        {/* Right side - Search, Notifications, User */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden sm:flex">
            <div className="relative">
              {/* Search Type Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="absolute left-0 top-1/2 h-8 w-8 p-0 z-10">
                    {searchType === "jobs" ? <Briefcase className="h-4 w-4" /> : <Users className="h-4 w-4" />}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-40">
                  <DropdownMenuItem onClick={() => setSearchType("jobs")}>
                    <Briefcase className="h-4 w-4 mr-2" />
                    Find Jobs
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSearchType("talent")}>
                    <Users className="h-4 w-4 mr-2" />
                    Find Talent
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Search Input */}
              <Search className="absolute left-10 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder={searchType === "jobs" ? "Search jobs..." : "Search freelancers..."}
                className="w-64 pl-10 bg-muted/50"
              />
            </div>
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
              3
            </Badge>
          </Button>

          {/* User Menu */}
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full p-0">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs font-semibold">
                      {user?.email?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-2 py-1.5 text-sm">
                  <div className="font-medium">{user?.email}</div>
                  <div className="text-xs text-muted-foreground">Client Account</div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/app/profile" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Profile Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/app/settings" className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    Account Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="flex items-center gap-2 text-red-600">
                  <LogOut className="h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/login">Log in</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/signup">Sign up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
