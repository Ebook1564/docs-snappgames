"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // next-themes requires waiting for mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const themes = [
    { id: "dark", label: "Dark", icon: <MoonIcon /> },
    { id: "system", label: "System", icon: <SystemIcon /> },
    { id: "light", label: "Light", icon: <SunIcon /> },
  ] as const;

  // Don't render until mounted to prevent hydration errors,
  // but keep the space reserved to prevent layout shift
  if (!mounted) {
    return (
      <div 
        style={{ zIndex: 99999 }}
        className="fixed bottom-8 right-8 flex items-center gap-1 p-1 bg-zinc-950/95 rounded-full border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] opacity-0"
      >
        <div className="w-[280px] h-10" />
      </div>
    );
  }

  return (
    <div 
      style={{ zIndex: 99999 }}
      className="fixed bottom-8 right-8 flex items-center gap-1 p-1 bg-zinc-950/95 rounded-full border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] pointer-events-auto"
    >
      {themes.map((t) => {
        // Use the exact current setting for the UI active state
        const isActive = theme === t.id;
        
        return (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            type="button"
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 relative select-none cursor-pointer ${
              isActive
                ? "bg-white text-zinc-950 shadow-lg scale-105"
                : "text-zinc-500 hover:text-white"
            }`}
            aria-label={`Switch to ${t.id} theme`}
          >
            <span className="relative z-10 pointer-events-none">{t.icon}</span>
            <span className="relative z-10 pointer-events-none text-[10px] font-black uppercase tracking-[0.15em] leading-none">
              {t.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function SunIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );
}

function SystemIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
