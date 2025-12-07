"use client";

import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error boundary caught:", error);
  }, [error]);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <div className="flex-grow">
        <div className="mx-auto flex w-full max-w-[960px] flex-col px-4 sm:px-8 lg:px-0">
          <Header />
          <main className="flex flex-col flex-grow justify-center items-center text-center py-16 px-4">
            {/* HeadlineText */}
            <h1 className="text-primary dark:text-secondary tracking-light text-5xl sm:text-6xl md:text-7xl font-handwriting font-bold leading-tight pb-4 pt-6">
              Oops! Something went wrong.
            </h1>

            {/* BodyText */}
            <p className="text-text-light dark:text-text-dark text-base font-normal leading-normal pb-6 pt-2 px-4 max-w-lg">
              An unexpected error occurred. Please refresh the page or <Link href="/contact" className="text-primary dark:text-secondary hover:text-primary/80 dark:hover:text-secondary/80 transition-colors">contact me</Link> if the problem persists.
            </p>

            {/* ButtonGroup */}
            <div className="flex justify-center w-full">
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 px-4 py-3 max-w-[480px] w-full">
                <Link
                  href="/"
                  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white dark:text-text-dark text-sm font-bold leading-normal tracking-[0.015em] flex-1 hover:bg-opacity-90 transition-colors"
                >
                  <span className="truncate">Go to Homepage</span>
                </Link>
                <button
                  onClick={reset}
                  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-transparent text-primary dark:text-secondary border-2 border-primary dark:border-secondary text-sm font-bold leading-normal tracking-[0.015em] flex-1 hover:bg-primary/10 dark:hover:bg-secondary/10 transition-colors"
                >
                  <span className="truncate">Refresh Page</span>
                </button>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
