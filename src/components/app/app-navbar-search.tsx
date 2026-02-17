"use client";

import { useState } from "react";
import { Search, Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

export function AppNavbarSearch() {
  const [searchType, setSearchType] = useState<"jobs" | "talent">("jobs");

  return (
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
  );
}
