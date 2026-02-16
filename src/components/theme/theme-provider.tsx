"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Wraps and forwards props to NextThemesProvider to provide theme context to descendants.
 *
 * @param children - React nodes rendered inside the theme provider
 * @param props - All remaining props are forwarded to NextThemesProvider
 * @returns A NextThemesProvider element with the provided props and children
 */
export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}