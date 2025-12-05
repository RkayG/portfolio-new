"use client";

import { useTheme } from "@/lib/theme";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#8D7B68] dark:bg-[#cf6417] text-white text-sm font-bold hover:opacity-90 transition-opacity"
      aria-label={mounted ? `Switch to ${theme === "light" ? "dark" : "light"} mode` : "Toggle theme"}
    >
      {mounted ? (theme === "light" ? "🌙" : "☀️") : "🌙"}
    </button>
  );
}

