export type ThemeMode = "light" | "dark";

export interface ThemeColors {
  primary: string;
  "background-light": string;
  "background-dark": string;
  "text-light": string;
  "text-dark": string;
  "accent-light": string;
  "accent-dark": string;
  "subtle-light": string;
  "subtle-dark": string;
}

export const themeColors: ThemeColors = {
  primary: "#5D4037",
  "background-light": "#F7F5F2",
  "background-dark": "#1a1614",
  "text-light": "#333333",
  "text-dark": "#e0ddd9",
  "accent-light": "#e7e2d9",
  "accent-dark": "#2c2622",
  "subtle-light": "#A1887F",
  "subtle-dark": "#8d7a71",
};

