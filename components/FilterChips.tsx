"use client";

interface FilterChipsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function FilterChips({
  categories,
  activeCategory,
  onCategoryChange,
}: FilterChipsProps) {
  return (
    <div className="flex gap-3 p-3 flex-wrap pr-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`flex h-8 cursor-pointer shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-4 transition-colors ${
            activeCategory === category
              ? "bg-primary text-white"
              : "bg-[#4A2E2A]/10 dark:bg-[#473324] hover:bg-primary/50"
          }`}
        >
          <p className="text-[#333333] dark:text-white text-sm font-medium leading-normal">
            {category}
          </p>
        </button>
      ))}
    </div>
  );
}

