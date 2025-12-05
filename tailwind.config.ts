import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        handwriting: ["var(--font-handwriting)", "Kalam", "cursive"],
        caveat: ["var(--font-caveat)", "Caveat", "cursive"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      colors: {
        "admin-primary": "var(--color-admin-primary)",
        "admin-primary-light": "var(--color-admin-primary-light)",
        "admin-primary-medium": "var(--color-admin-primary-medium)",
        "admin-background-light": "var(--color-admin-background-light)",
        "admin-background-dark": "var(--color-admin-background-dark)",
        "admin-text-light": "var(--color-admin-text-light)",
        "admin-text-dark": "var(--color-admin-text-dark)",
        "admin-border-light": "var(--color-admin-border-light)",
        "admin-border-dark": "var(--color-admin-border-dark)",
        "admin-success": "var(--color-admin-success)",
        "admin-neutral": "var(--color-admin-neutral)",
        "admin-danger": "var(--color-admin-danger)",
        "brand-brown": "var(--color-brand-brown)",
      },
    },
  },
};

export default config;

