"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    title: "Getting Started",
    links: [
      { name: "Introduction", href: "/" },
      { name: "Quick Start", href: "/quick-start" },
      { name: "Core Concepts", href: "/concepts" },
    ],
  },
  {
    title: "Integration Guide",
    links: [
      // { name: "Web Integration", href: "/web" },
      { name: "Android Integration", href: "/android-cct" },
      // { name: "iOS (SFSafari)", href: "/ios-safari" },
      { name: "Unity Plugin", href: "/unity" },
    ],
  },
  // {
  //   title: "API Reference",
  //   links: [
  //     { name: "Authentication", href: "/api/auth" },
  //     { name: "User Profile", href: "/api/user" },
  //     { name: "Leaderboards", href: "/api/leaderboards" },
  //   ],
  // },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block lg:w-72 lg:flex-none">
      <nav className="sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto px-8 pb-8 scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800">
        <ul className="space-y-8">
          {navigation.map((group) => (
            <li key={group.title}>
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-950 dark:text-white">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-2 border-l border-zinc-200 dark:border-zinc-800">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block border-l pl-4 -ml-px transition-colors ${pathname === link.href
                        ? "border-blue-600 text-blue-600 font-bold"
                        : "border-transparent text-zinc-800 hover:border-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
