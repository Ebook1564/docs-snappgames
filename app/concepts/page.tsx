import DocsLayout from "@/components/DocsLayout";
import Link from "next/link";
import { Link2, CloudLightning, Globe2 } from "lucide-react";

export default function CoreConcepts() {
  return (
    <DocsLayout>
      <div className="space-y-12 animate-fade-in text-zinc-950 dark:text-zinc-400">
        {/* Header */}
        <section id="concepts-intro" className="scroll-mt-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6">
            🧠 Architecture
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-5xl mb-6">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00cc] to-[#3333ff]">Concepts</span>
          </h1>
          <p className="text-xl text-zinc-950 dark:text-zinc-400 leading-9 max-w-4xl">
            Understand how SnappGames works under the hood. Our platform is built on a
            <strong>No-SDK</strong> architecture for maximum compatibility and performance.
          </p>
        </section>

        {/* Global Architecture */}
        <section id="architecture" className="scroll-mt-24">
          <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-6 tracking-tighter">Global Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 relative">
            {/* Ambient Background Glow for the Grid */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 blur-3xl -z-10 rounded-[3rem" />
            
            <div className="group relative p-8 md:p-10 rounded-[2rem] bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 overflow-hidden flex flex-col h-full z-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-500" />
              <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-500">
                <Link2 className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-4 uppercase tracking-tighter group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                Unique Link
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed text-[15px]">
                The unified entry point that carries authentication, configuration, and secure session tokens directly via the URL. No SDK required.
              </p>
            </div>

            <div className="group relative p-8 md:p-10 rounded-[2rem] bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 overflow-hidden flex flex-col h-full z-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-500" />
              <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-500">
                <CloudLightning className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-4 uppercase tracking-tighter group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                Cloud Engine
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed text-[15px]">
                A specialized high-performance HTML5 engine that runs seamlessly within the browser context, eliminating client-side complexity.
              </p>
            </div>

            <div className="group relative p-8 md:p-10 rounded-[2rem] bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 overflow-hidden flex flex-col h-full z-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-500" />
              <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-500">
                <Globe2 className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-4 uppercase tracking-tighter group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                Edge Network
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed text-[15px]">
                Our global infrastructure delivers game assets instantly from the nearest node, ensuring ultra-low latency and smooth gameplay worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Communication Flow */}
        <section id="flow" className="scroll-mt-24">
          <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-6 tracking-tighter">Communication Flow</h2>
          <div className="space-y-6">
            {[
              { t: "URL Activation", d: "Your app launches the Unique Link via a native component (CCT/WebView)." },
              { t: "Cloud Resolution", d: "SnappGames servers verify the link and prepare the specific game assets." },
              { t: "Browser Injection", d: "The HTML5 engine is loaded directly into the browser context to run the game." },
              { t: "Analytics Sync", d: "The cloud engine handles all tracking and session persistence automatically." }
            ].map((step, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all group">
                <div className="flex-none w-1 h-12 bg-blue-600 rounded-full group-hover:h-16 transition-all duration-300"></div>
                <div>
                  <h4 className="font-black text-zinc-900 dark:text-white uppercase text-xs tracking-wider mb-1">{step.t}</h4>
                  <p className="text-sm leading-relaxed font-medium">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center pt-12 border-t border-zinc-200 dark:border-zinc-800 mb-12">
          <Link href="/quick-start" className="flex items-center gap-2 text-zinc-800 dark:text-zinc-400 hover:text-blue-600 transition-colors font-bold">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Quick Start
          </Link>
          <Link href="/android-cct" className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 transition-colors font-bold text-right">
            Android (CCT)
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
