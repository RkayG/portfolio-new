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
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-[#6D4C41]/20 dark:bg-[#6D4C41]/30 px-3 py-1 text-sm font-medium text-[#6D4C41] dark:text-[#1b130e] dark:text-[#f3ece7]"
            >
              {tag}
              <button
                onClick={() => removeTag(tag)}
                className="ml-1.5 text-[#6D4C41]/60 dark:text-[#f3ece7]/60 hover:text-[#6D4C41] dark:hover:text-[#f3ece7]"
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
      <input
        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b130e] dark:text-[#f3ece7] focus:outline-0 focus:ring-2 focus:ring-[#6D4C41]/50 border border-[#e7d9d0] dark:border-[#3a2e25] bg-[#fcfaf8] dark:bg-[#211811] h-14 placeholder:text-[#976d4e] dark:placeholder:text-[#a1887f] p-[15px] text-base font-normal leading-normal"
        placeholder="Add a new tag..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

