import DocsLayout from "@/components/DocsLayout";
import Link from "next/link";

export default function CoreConcepts() {
  return (
    <DocsLayout>
      <div className="space-y-12 animate-fade-in text-zinc-950 dark:text-zinc-400">
        {/* Header */}
        <section id="concepts-intro" className="scroll-mt-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6">
            🧠 Architecture
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl mb-6">
            Core <span className="text-blue-600">Concepts</span>
          </h1>
          <p className="text-xl text-zinc-950 dark:text-zinc-400 leading-9 max-w-4xl">
            Understand how SnappGames works under the hood. Our platform is built on a 
            <strong>No-SDK</strong> architecture for maximum compatibility and performance.
          </p>
        </section>

        {/* Global Architecture */}
        <section id="architecture" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Global Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
              <div className="text-2xl mb-4 font-bold text-blue-600 uppercase tracking-tight text-xs">Unique Link</div>
              <p className="text-sm leading-relaxed">The unified entry point that carries authentication, configuration, and secure session tokens directly via the URL.</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
              <div className="text-2xl mb-4 font-bold text-blue-600 uppercase tracking-tight text-xs">Cloud Engine</div>
              <p className="text-sm leading-relaxed">A specialized high-performance HTML5 engine that runs within the browser context, eliminating the need for client-side libraries.</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
              <div className="text-2xl mb-4 font-bold text-blue-600 uppercase tracking-tight text-xs">Edge Network</div>
              <p className="text-sm leading-relaxed">Our infrastructure delivers game assets from the nearest node, ensuring low latency and smooth gameplay everywhere.</p>
            </div>
          </div>
        </section>

        {/* Communication Flow */}
        <section id="flow" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Communication Flow</h2>
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
                  <h4 className="font-bold text-zinc-900 dark:text-white uppercase text-xs tracking-wider mb-1">{step.t}</h4>
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
