"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  onPrevious,
  onNext,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-between pt-8">
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-white/80 hover:text-primary dark:hover:text-primary disabled:opacity-50"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Previous
      </button>
      <div className="hidden md:flex items-center gap-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex items-center justify-center size-8 rounded-lg text-sm ${
              currentPage === page
                ? "bg-primary text-white font-bold"
                : "text-gray-600 dark:text-white/80 hover:bg-primary/20 dark:hover:bg-[#473324]"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-white/80 hover:text-primary dark:hover:text-primary disabled:opacity-50"
      >
        Next
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </nav>
  );
}

