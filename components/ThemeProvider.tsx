"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Use next-themes to handle all hydration, storage, and synchronization logic automatically
  // It injects a script tag that prevents flashing and perfectly syncs across origins
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem 
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
