"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
}

export default function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 overflow-hidden rounded-xl bg-[#0d1117] border border-zinc-800 shadow-2xl group">
      {filename && (
        <div className="flex items-center justify-between border-b border-zinc-800 bg-[#161b22] px-4 py-2">
          <span className="text-xs font-mono text-zinc-300">{filename}</span>
          <span className="text-xs uppercase text-zinc-400 font-bold">{language}</span>
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-700">
          <code className="text-sm font-mono text-zinc-200 leading-relaxed tabular-nums">
            {code}
          </code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? (
            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2-2 0 01-2-2V6a2-2 0 012-2h8a2-2 0 012 2v2m-6 12h8a2-2 0 002-2v-8a2-2 0 00-2-2h-8a2-2 0 00-2 2v8a2-2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
