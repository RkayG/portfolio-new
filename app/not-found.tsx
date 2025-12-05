import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <div className="flex-grow">
        <div className="mx-auto flex w-full max-w-[960px] flex-col px-4 sm:px-8 lg:px-0">
          <Header />
          <main className="flex-grow flex flex-col items-center justify-center text-center py-20 px-4">
            {/* PageHeading Component */}
            <div className="flex flex-col items-center gap-4">
              <p className="font-handwriting text-[#6b4a49] dark:text-[#fdfaf5] text-8xl sm:text-9xl font-bold">
                404
              </p>
              <p className="text-[#333333] dark:text-[#d4d4d4] text-2xl sm:text-3xl font-semibold tracking-tight">
                Oops! Page Not Found.
              </p>
            </div>

            {/* BodyText Component */}
            <p className="text-[#333333] dark:text-[#d4d4d4] text-base font-normal leading-normal max-w-md mx-auto pt-6 pb-8">
              It seems the page you were looking for has been moved, deleted, or never existed. Let&apos;s get you back on track.
            </p>

            {/* ButtonGroup Component */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 w-full max-w-sm">
              <Link
                href="/"
                className="flex min-w-[84px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#4a2c2a] text-[#fdfaf5] text-base font-bold leading-normal tracking-[0.015em] grow hover:bg-[#4a2c2a]/90 transition-colors"
              >
                <span className="truncate">Return to Homepage</span>
              </Link>
              <Link
                href="/projects"
                className="flex min-w-[84px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-transparent text-[#4a2c2a] dark:text-[#4a2c2a] border-2 border-[#4a2c2a] text-base font-bold leading-normal tracking-[0.015em] grow hover:bg-[#4a2c2a]/10 dark:hover:bg-[#4a2c2a]/20 transition-colors"
              >
                <span className="truncate">Explore My Projects</span>
              </Link>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

