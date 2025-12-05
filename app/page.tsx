import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <div className="flex-grow">
        <div className="mx-auto flex w-full max-w-[960px] flex-col px-4 sm:px-8 lg:px-0">
          <Header />
          <main className="flex-1 flex items-center justify-center py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-semibold text-text-light dark:text-text-dark font-handwriting">
                Portfolio - Rufus Gladness
              </h1>
              <p className="mt-4 text-subtle-light dark:text-subtle-dark mb-6 text-lg">
                Welcome to my portfolio
              </p>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg h-12 px-6 bg-[#8D7B68] dark:bg-[#cf6417] text-white text-base font-bold hover:opacity-90 transition-opacity"
              >
                View About Me
              </Link>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
