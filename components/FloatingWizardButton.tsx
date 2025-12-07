"use client";

import { useRouter } from "next/navigation";

export function FloatingWizardButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/co-founder")}
      className="fixed bottom-8 right-8 z-20 flex animate-subtle-pulse cursor-pointer items-center gap-3 rounded-full bg-[#8D7B68] dark:bg-primary px-3 py-3 sm:px-4 text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-[#8D7B68] dark:focus:ring-primary"
      aria-label="Open Cofounder Wizard"
    >
      <span className="material-symbols-outlined !text-2xl">lightbulb</span>
      <span className="hidden text-sm font-bold sm:inline">Have an idea?</span>
    </button>
  );
}
