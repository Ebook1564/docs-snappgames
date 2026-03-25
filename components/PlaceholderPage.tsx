import DocsLayout from "@/components/DocsLayout";

export default function GenericDocsPage({ title }: { title: string }) {
  return (
    <DocsLayout>
      <div className="space-y-8 animate-fade-in">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          {title}
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          This section is currently under development. Please check back soon for the full integration steps.
        </p>
        <div className="p-12 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl flex flex-col items-center justify-center text-zinc-400">
          <svg className="w-12 h-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="font-medium text-lg">Coming Soon</span>
        </div>
      </div>
    </DocsLayout>
  );
}
