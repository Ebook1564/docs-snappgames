"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Rocket,
  BookOpen,
  Globe,
  Smartphone,
  Box,
  LayoutGrid,
  Sparkles
} from "lucide-react";

interface NavLink {
  name: string;
  href: string;
  icon: any;
}

interface NavGroup {
  title: string;
  links: NavLink[];
}

const navigation: NavGroup[] = [
  {
    title: "Getting Started",
    links: [
      { name: "Introduction", href: "/", icon: Home },
      { name: "Quick Start", href: "/quick-start", icon: Rocket },
      { name: "Core Concepts", href: "/concepts", icon: BookOpen },
    ],
  },
  {
    title: "Integration Guide",
    links: [
      // { name: "Web Integration", href: "/web", icon: Globe },
      { name: "Android Integration", href: "/android-cct", icon: Smartphone },
      { name: "Unity Plugin", href: "/unity", icon: Box },
    ],
  },
  {
    title: "Explore",
    links: [
      { name: "Games Showcase", href: "/showcase", icon: LayoutGrid },
    ],
  },
];

export default function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <div className={`hidden lg:block lg:w-72 lg:flex-none ${className || ""}`}>
      <nav className="sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto px-8 pb-8 scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800">
        <ul className="space-y-10">
          {navigation.map((group) => (
            <li key={group.title}>
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6 ml-1">
                {group.title}
              </h2>
              <ul className="space-y-3">
                {group.links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`group flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-300 ${isActive
                          ? "bg-blue-600/10 text-blue-600 dark:text-blue-400 font-bold shadow-sm"
                          : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-zinc-100"
                          }`}
                      >
                        <link.icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`} />
                        <span className="text-sm tracking-tight">{link.name}</span>
                        {isActive && (
                          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
