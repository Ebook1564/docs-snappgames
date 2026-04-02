import DocsLayout from "@/components/DocsLayout";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function QuickStart() {
  return (
    <DocsLayout>
      <div className="space-y-12 animate-fade-in text-zinc-950 dark:text-zinc-400">
        {/* Header */}
        <section id="quickstart-intro" className="scroll-mt-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6">
            🚀 Getting Started
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-5xl mb-6">
            Quick <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00cc] to-[#3333ff]">Start Guide</span>
          </h1>
          <p className="text-xl text-zinc-950 dark:text-zinc-400 leading-9 max-w-4xl">
            Integrating SnappGames is a matter of clicks, not code. Our <strong>Unique Link</strong> architecture
            allows you to launch premium HTML5 games directly in your app.
          </p>
        </section>

        {/* The Unique Link */}
        <section id="unique-link" className="scroll-mt-24">
          <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-6 flex items-center gap-3 tracking-tighter">
            <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-blue-500/20">1</span>
            Obtain Your Unique Link
          </h2>
          <p className="mb-6 text-lg font-medium leading-relaxed">
            Every product in the SnappGames catalog comes with a <strong>Unique Link</strong>. This link
            handles authentication, session management, and game delivery automatically.
          </p>
          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h3 className="font-black text-zinc-900 dark:text-white mb-4 tracking-tighter">Sample Link Format</h3>
            <CodeBlock
              code="https://snappgames.com/?id=44"
              language="bash"
              filename="Unique Link"
            />
          </div>
        </section>

        {/* Integration Methods */}
        <section id="integration-methods" className="scroll-mt-24">
          <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-6 flex items-center gap-3 tracking-tighter">
            <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-blue-500/20">2</span>
            Integration Methods
          </h2>
          <p className="mb-6 text-lg font-medium leading-relaxed">
            Choose the method that best fits your platform. We recommend using native components for the best performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
              <h4 className="font-black text-zinc-900 dark:text-white mb-2 uppercase tracking-tighter">Android Integration</h4>
              <p className="text-sm leading-relaxed mb-4">Integrate using Chrome Custom Tabs (Recommended) or WebView for direct in-app play.</p>
              <Link href="/android-cct" className="text-blue-600 text-sm font-bold hover:underline font-bold">View Android Guide &rarr;</Link>
            </div>
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
              <h4 className="font-black text-zinc-900 dark:text-white mb-2 uppercase tracking-tighter">Unity Plugin</h4>
              <p className="text-sm leading-relaxed mb-4">Use our specialized WebView package to bring HTML5 games to your Unity projects.</p>
              <Link href="/unity" className="text-blue-600 text-sm font-bold hover:underline font-bold">View Unity Guide &rarr;</Link>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="scroll-mt-24 p-8 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-500/20">
          <h2 className="text-2xl font-black mb-6 tracking-tighter">Why No-SDK?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl mb-2 font-bold opacity-50">01</div>
              <h4 className="font-black mb-2 tracking-tighter">Zero Maintenance</h4>
              <p className="text-sm text-blue-50 leading-relaxed font-medium">Updates are delivered directly via the cloud. No need to update your app when we add features.</p>
            </div>
            <div>
              <div className="text-3xl mb-2 font-bold opacity-50">02</div>
              <h4 className="font-black mb-2 tracking-tighter">Maximum Stability</h4>
              <p className="text-sm text-blue-50 leading-relaxed font-medium">No external libraries means no version conflicts or build errors in your project.</p>
            </div>
            <div>
              <div className="text-3xl mb-2 font-bold opacity-50">03</div>
              <h4 className="font-black mb-2 tracking-tighter">Instant Scale</h4>
              <p className="text-sm text-blue-50 leading-relaxed font-medium">Deploy to any platform that supports a browser component with a single link.</p>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center pt-12 border-t border-zinc-200 dark:border-zinc-800 mb-12">
          <Link href="/" className="flex items-center gap-2 text-zinc-800 dark:text-zinc-400 hover:text-blue-600 transition-colors font-bold">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Introduction
          </Link>
          <Link href="/concepts" className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 transition-colors font-bold text-right">
            Core Concepts
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
