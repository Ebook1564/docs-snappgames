"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header({ 
  isMobileMenuOpen, 
  onToggleMenu 
}: { 
  isMobileMenuOpen?: boolean; 
  onToggleMenu?: () => void; 
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-[100] w-full glass border-b shadow-sm transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-12">
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
              <img
                src="https://snappgames.com/_next/image?url=%2Fs-logo.png&w=1920&q=75"
                alt="SnappGames Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Snapp<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00cc] to-[#3333ff]">Games</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-zinc-950 dark:text-zinc-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Docs</Link>
            {/* <Link href="/api/auth" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">API Reference</Link> */}
            <Link href="/showcase" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Showcase</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-64 bg-zinc-100 dark:bg-zinc-900 border-none rounded-full py-2 px-4 text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none"
            />
            <kbd className="absolute right-3 top-2.5 hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-1.5 font-mono text-[10px] font-bold text-zinc-700 opacity-100 uppercase">
              ⌘ K
            </kbd>
          </div>

          {/* Mobile Menu Button - Moved to Right */}
          <button 
            onClick={onToggleMenu}
            className="lg:hidden p-2 text-zinc-800 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
