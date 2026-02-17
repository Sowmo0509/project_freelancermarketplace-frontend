"use client";

import { useEffect, useState } from "react";
import { getSession } from "@/lib/auth-client";

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const session = await getSession();
        setAuthState({
          user: session.data?.user || null,
          isLoading: false,
          isAuthenticated: !!session.data?.user,
        });
      } catch (error) {
        console.error("Auth check failed:", error);
        setAuthState({
          user: null,
          isLoading: false,
          isAuthenticated: false,
        });
      }
    };

    checkAuth();
  }, []);

  return authState;
}
