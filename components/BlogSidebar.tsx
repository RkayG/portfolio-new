"use client";

import { useState } from "react";
import { BlogCategory } from "@/types/blog";

interface BlogSidebarProps {
  activeCategory: BlogCategory;
  onCategoryChange: (category: BlogCategory) => void;
  onSearchChange: (query: string) => void;
  searchQuery: string;
}

const categories: BlogCategory[] = [
  "All Posts",
  "Blockchain",
  "Smart Contracts",
  "Web Development",
  "Career",
  "Tutorials",
];

export function BlogSidebar({
  activeCategory,
  onCategoryChange,
  onSearchChange,
  searchQuery,
}: BlogSidebarProps) {
  return (
    <aside className="flex-shrink-0 lg:w-1/3 space-y-8">
      {/* SearchBar */}
      <div>
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-gray-400 dark:text-[#c8a993] flex border-none bg-gray-100 dark:bg-[#473324] items-center justify-center pl-4 rounded-l-lg border-r-0">
              <span className="material-symbols-outlined text-2xl">search</span>
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-gray-100 dark:bg-[#473324] h-full placeholder:text-gray-400 dark:placeholder:text-[#c8a993] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </label>
      </div>
      {/* Filters */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4 text-gray-900 dark:text-white">
          Filter by Topic
        </h3>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pl-4 pr-4 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 dark:bg-[#473324] text-gray-700 dark:text-white hover:bg-primary/20 dark:hover:bg-primary/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

