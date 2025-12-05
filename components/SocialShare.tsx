"use client";

import { useState, useEffect } from "react";

interface SocialShareProps {
  title: string;
  url: string;
}

export function SocialShare({ title, url }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [fullUrl, setFullUrl] = useState("");

  useEffect(() => {
    // Get the full URL on the client side
    setFullUrl(`${window.location.origin}${url}`);
  }, [url]);

  const handleCopyLink = async () => {
    if (!fullUrl) return;
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const shareUrl = fullUrl ? encodeURIComponent(fullUrl) : "";
  const shareTitle = encodeURIComponent(title);

  return (
    <div className="border-y border-[#e7e2d9] dark:border-[#2c2622]/50 my-8 py-4 flex justify-center items-center gap-4">
      <span className="text-sm font-medium text-[#A1887F] dark:text-[#8d7a71]">
        Share this post:
      </span>
      <div className="flex gap-2">
        <a
          className="w-9 h-9 flex items-center justify-center rounded-full bg-[#e7e2d9] dark:bg-[#2c2622] text-[#A1887F] dark:text-[#8d7a71] hover:bg-[#5D4037]/10 hover:text-[#5D4037] dark:hover:bg-[#5D4037]/20 dark:hover:text-[#5D4037] transition-colors"
          href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on Twitter"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
        </a>
        <a
          className="w-9 h-9 flex items-center justify-center rounded-full bg-[#e7e2d9] dark:bg-[#2c2622] text-[#A1887F] dark:text-[#8d7a71] hover:bg-[#5D4037]/10 hover:text-[#5D4037] dark:hover:bg-[#5D4037]/20 dark:hover:text-[#5D4037] transition-colors"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on LinkedIn"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
          </svg>
        </a>
        <a
          className="w-9 h-9 flex items-center justify-center rounded-full bg-[#e7e2d9] dark:bg-[#2c2622] text-[#A1887F] dark:text-[#8d7a71] hover:bg-[#5D4037]/10 hover:text-[#5D4037] dark:hover:bg-[#5D4037]/20 dark:hover:text-[#5D4037] transition-colors"
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on Facebook"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"></path>
          </svg>
        </a>
        <button
          onClick={handleCopyLink}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-[#e7e2d9] dark:bg-[#2c2622] text-[#A1887F] dark:text-[#8d7a71] hover:bg-[#5D4037]/10 hover:text-[#5D4037] dark:hover:bg-[#5D4037]/20 dark:hover:text-[#5D4037] transition-colors"
          title="Copy link"
        >
          {copied ? (
            <span className="material-symbols-outlined !text-xl">check</span>
          ) : (
            <span className="material-symbols-outlined !text-xl">link</span>
          )}
        </button>
      </div>
    </div>
  );
}

