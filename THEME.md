# Theme Configuration

This portfolio uses a custom theme system with dark mode support and custom fonts.

## Theme Colors

### Light Mode
- **Primary**: `#5D4037` (brown)
- **Background**: `#F7F5F2` (light beige)
- **Text**: `#333333` (dark gray)
- **Accent**: `#e7e2d9` (light beige)
- **Subtle**: `#A1887F` (muted brown)

### Dark Mode
- **Primary**: `#5D4037` (brown)
- **Background**: `#1a1614` (dark brown)
- **Text**: `#e0ddd9` (light beige)
- **Accent**: `#2c2622` (dark brown)
- **Subtle**: `#8d7a71` (muted brown)

## Fonts

- **Display Font**: Space Grotesk (for headings and UI)
- **Handwriting Font**: Kalam (for special headings and accents)

## Usage

### Using Theme Colors

```tsx
// Background colors
<div className="bg-background-light dark:bg-background-dark">
  
// Text colors
<p className="text-text-light dark:text-text-dark">

// Primary color
<button className="bg-primary text-white">

// Subtle colors
<span className="text-subtle-light dark:text-subtle-dark">
```

### Using Fonts

```tsx
// Display font (default)
<h1 className="font-display">

// Handwriting font
<h1 className="font-handwriting">
```

### Theme Toggle

Use the `ThemeToggle` component:

```tsx
import { ThemeToggle } from "@/components/ThemeToggle";

<ThemeToggle />
```

Or use the `useTheme` hook directly:

```tsx
"use client";
import { useTheme } from "@/lib/theme";

function MyComponent() {
  const { theme, toggleTheme, setTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
```

## Files

- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Theme CSS variables
- `types/theme.ts` - TypeScript theme types
- `lib/theme.ts` - Theme utility hook
- `components/ThemeToggle.tsx` - Theme toggle component

