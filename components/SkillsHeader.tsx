import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function SkillsHeader() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 dark:border-white/10 px-4 py-4 md:px-10">
      <div className="flex items-center gap-4 text-[#333333] dark:text-white">
        <div className="size-6 text-primary">
          <span className="material-symbols-outlined !text-3xl">terminal</span>
        </div>
        <h2 className="hidden text-[#333333] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] sm:block">
          Developer Portfolio
        </h2>
      </div>
      <div className="flex flex-1 items-center justify-end gap-4 md:gap-8">
        <nav className="hidden items-center gap-9 md:flex">
          <Link
            className="text-[#333333]/80 dark:text-white/80 hover:text-[#333333] dark:hover:text-white text-sm font-medium leading-normal transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-primary text-sm font-bold leading-normal"
            href="/skills"
          >
            Skills
          </Link>
          <Link
            className="text-[#333333]/80 dark:text-white/80 hover:text-[#333333] dark:hover:text-white text-sm font-medium leading-normal transition-colors"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="text-[#333333]/80 dark:text-white/80 hover:text-[#333333] dark:hover:text-white text-sm font-medium leading-normal transition-colors"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
          <span className="truncate">Get In Touch</span>
        </button>
        <ThemeToggle />
      </div>
    </header>
  );
}

