"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "solidity" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1.5 bg-[#2c2622] text-[#e0ddd9] rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 z-10"
      >
        <span className="material-symbols-outlined !text-base">content_copy</span>
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className={`language-${language} bg-[#2c2622] !text-[#e0ddd9] p-4 rounded-lg overflow-x-auto`}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}

