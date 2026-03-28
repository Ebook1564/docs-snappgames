import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";
import DocsLayout from "@/components/DocsLayout";

export default function Home() {
  return (
    <DocsLayout>
      <div className="space-y-12">
        {/* Hero Section */}
        <section id="overview" className="scroll-mt-24 text-zinc-950 dark:text-zinc-400">
          
          <h1 className="text-3xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-5xl mb-6">
            Introduction to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00cc] to-[#3333ff]">SnappGames</span>
          </h1>
          <p className="text-xl text-zinc-900 dark:text-zinc-400 leading-9 max-w-5xl">
            Welcome to the SnappGames Integration Guide. We&apos;re excited to help you bring
            high-quality, instant-play games to your platform. Our integration is built
            to be lightweight, fast, and remarkably simple to implement via <strong>Unique Links</strong>.
          </p>
        </section>

        {/* Feature Grid */}
        <section id="key-features" className="scroll-mt-24">
          <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-8 flex items-center gap-3 tracking-tighter">
            <span className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center text-sm font-bold">01</span>
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 blur-3xl -z-10"></div>
            {[
              {
                title: "Instant Loading",
                desc: "Games load in sub-seconds with our edge-cached delivery network.",
                icon: "⚡",
              },
              {
                title: "No-SDK Integration",
                desc: "Launch games directly using Unique Links via CCT or WebView.",
                icon: "🔗",
              },
              {
                title: "Rich Analytics",
                desc: "Track every session and engagement with our built-in cloud telemetry.",
                icon: "📊",
              },
              {
                title: "Monetization",
                desc: "Seamless ad integration and revenue sharing out of the box.",
                icon: "💰",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-black text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors uppercase tracking-tighter">{feature.title}</h3>
                <p className="text-zinc-900 dark:text-zinc-400 text-sm leading-relaxed font-semibold">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Start Preview */}
        <section id="quick-start" className="scroll-mt-24">
          <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-8 flex items-center gap-3 tracking-tighter">
            <span className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-sm">02</span>
            Direct Integration
          </h2>
          <div className="max-w-none space-y-6">
            <p className="text-zinc-900 dark:text-zinc-400 text-lg font-medium leading-relaxed">
              Integrating SnappGames is as simple as launching a URL. No SDK installation or library maintenance
              required. We provide you with a <strong>Unique Link</strong> for each product.
            </p>
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h3 className="font-black text-zinc-900 dark:text-white mb-4 tracking-tighter">Sample Unique Link</h3>
              <CodeBlock
                code="https://www.snappgames.com/?id=44"
                language="bash"
                filename="Unique Link"
              />
            </div>
            <p className="text-zinc-950 dark:text-zinc-400 text-lg font-medium leading-relaxed">
              You can launch this link in an Android Chrome Custom Tab (CCT), iOS Safari, or a Unity WebView.
            </p>
          </div>
        </section>

        {/* CCT Info Section */}
        <div className="mt-16 p-10 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white overflow-hidden relative group shadow-2xl shadow-blue-500/20">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-500"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-3xl font-black mb-4 tracking-tighter">Native Launch?</h3>
              <p className="text-blue-100 text-lg mb-0 font-medium opacity-90 leading-relaxed">
                Check out our guides for launching links via native components
                to ensure the best gaming experience on mobile devices.
              </p>
            </div>
            <Link
              href="/android-cct"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg shadow-black/10 hover:scale-105 active:scale-95 flex-none"
            >
              View Native Guides
            </Link>
          </div>
        </div>

        {/* Next Steps */}
        <section id="next-steps" className="scroll-mt-24 pb-20">
          <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-8 flex items-center gap-3 tracking-tighter">
            <span className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-sm">03</span>
            Explore Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Quick Start", href: "/quick-start", color: "bg-orange-500" },
              { title: "Android (CCT)", href: "/android-cct", color: "bg-emerald-500" },
              { title: "Unity Plugin", href: "/unity", color: "bg-purple-500" },
            ].map((step) => (
              <Link
                key={step.title}
                href={step.href}
                className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all group shadow-sm bg-white dark:bg-zinc-900/50"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${step.color}`}></div>
                  <span className="font-bold text-zinc-900 dark:text-white uppercase text-xs tracking-wider">{step.title}</span>
                </div>
                <svg className="w-4 h-4 text-zinc-400 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
