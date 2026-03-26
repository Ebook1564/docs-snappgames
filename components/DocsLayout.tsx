"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen} 
        onToggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
      />
      <div className="flex-1 w-full max-w-[1600px] mx-auto mt-16">
        <div className="flex flex-row">
          <Sidebar 
            isOpen={isMobileMenuOpen} 
            onClose={() => setIsMobileMenuOpen(false)} 
          />
          <main className="flex-1 min-w-0 py-12 px-8 lg:px-12">
            <div className="mx-auto xl:mx-0">
              {children}
            </div>
          </main>
          <aside className="hidden xl:block w-64 flex-none py-12">
            <nav className="sticky top-24">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-4 uppercase tracking-wider">
                On this page
              </h3>
              <ul className="space-y-4 text-sm text-zinc-800 dark:text-zinc-400 font-medium">
                <li><a href="#overview" className="hover:text-blue-600 transition-colors">Overview</a></li>
                <li><a href="#key-features" className="hover:text-blue-600 transition-colors">Key Features</a></li>
                <li><a href="#quick-start" className="hover:text-blue-600 transition-colors">Quick Start</a></li>
                <li><a href="#next-steps" className="hover:text-blue-600 transition-colors">Next Steps</a></li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    </div>
  );
}
