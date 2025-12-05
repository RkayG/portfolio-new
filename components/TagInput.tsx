"use client";

import { useState, KeyboardEvent } from "react";

interface TagInputProps {
  tags: string[];
  onTagsChange: (tags: string[]) => void;
}

export function TagInput({ tags, onTagsChange }: TagInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        onTagsChange([...tags, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    onTagsChange(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full">
        <input
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#6D4C41]/50 border border-slate-300 dark:border-[#654834] bg-white dark:bg-[#32241a] focus:border-[#6D4C41] dark:focus:border-[#654834] h-11 placeholder:text-slate-400 dark:placeholder:text-[#c8a993] px-3 text-sm font-normal leading-normal"
          placeholder="Add tags..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-lg">
            add_circle
          </span>
        </div>
      </div>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1.5 bg-[#6D4C41]/10 dark:bg-amber-100/10 text-[#6D4C41] dark:text-amber-100 text-xs font-medium px-2 py-1 rounded-full"
            >
              {tag}
              <button
                onClick={() => removeTag(tag)}
                className="text-[#6D4C41]/60 dark:text-amber-100/60 hover:text-[#6D4C41] dark:hover:text-amber-100"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "14px" }}
                >
                  close
                </span>
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

