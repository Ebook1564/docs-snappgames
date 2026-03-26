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

export default function Sidebar({
  className,
  isOpen,
  onClose
}: {
  className?: string,
  isOpen?: boolean,
  onClose?: () => void
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[105] bg-zinc-950/20 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <div className={`
        fixed inset-y-0 left-0 z-[110] w-72 bg-white dark:bg-zinc-950 lg:bg-transparent lg:dark:bg-transparent
        transform transition-transform duration-300 ease-in-out border-r border-zinc-200/50 dark:border-zinc-800/50 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:static lg:translate-x-0 lg:flex-none
        ${className || ""}
      `}>
        <nav className="sticky top-0 lg:top-16 h-full lg:h-[calc(100vh-4rem)] overflow-y-auto pt-20 lg:pt-8 pb-8 scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800">
          <ul className="space-y-10 px-6">
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
                          onClick={onClose}
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
    </>
  );
}
