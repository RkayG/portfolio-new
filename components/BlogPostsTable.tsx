"use client";

import { useState, useMemo } from "react";
import { allBlogPosts } from "@/data/blog";
import Link from "next/link";

type PostStatus = "Published" | "Draft";

interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  status: PostStatus;
  slug: string;
}

export function BlogPostsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All Status");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Convert blog posts to table format
  const posts: BlogPost[] = useMemo(() => {
    return allBlogPosts.map((post) => ({
      id: post.id,
      title: post.title,
      author: post.author?.name || "Rufus Gladness",
      date: post.date,
      status: "Published" as PostStatus, // You can add status to blog post type later
      slug: post.slug,
    }));
  }, []);

  // Filter posts
  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((post) =>
        post.title.toLowerCase().includes(query)
      );
    }

    // Filter by status
    if (statusFilter !== "All Status") {
      filtered = filtered.filter((post) => post.status === statusFilter);
    }

    return filtered;
  }, [posts, searchQuery, statusFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getStatusBadge = (status: PostStatus) => {
    if (status === "Published") {
      return (
        <span className="inline-flex items-center rounded-full bg-[#4CAF50]/20 px-3 py-1 text-xs font-semibold text-[#4CAF50]">
          Published
        </span>
      );
    }
    return (
      <span className="inline-flex items-center rounded-full bg-[#9E9E9E]/20 px-3 py-1 text-xs font-semibold text-[#9E9E9E]">
        Draft
      </span>
    );
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="overflow-hidden rounded-xl border border-[#D7CCC8] dark:border-[#333333] bg-[#FAFAFA] dark:bg-[#1a1a1a]/50">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D7CCC8] dark:border-[#333333] px-4 py-3">
        <div className="relative w-full max-w-xs">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#795548] dark:text-[#D7CCC8]/70">
            search
          </span>
          <input
            className="w-full rounded-lg border-[#D7CCC8] dark:border-[#333333] bg-[#FAFAFA] dark:bg-[#1a1a1a]/30 py-2 pl-10 pr-4 text-sm focus:border-[#4E342E] focus:ring-[#4E342E] text-[#1f1f1f] dark:text-[#e0e0e0]"
            placeholder="Search by title..."
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <select
            className="rounded-lg border-[#D7CCC8] dark:border-[#333333] bg-[#FAFAFA] dark:bg-[#1a1a1a]/30 text-sm focus:border-[#4E342E] focus:ring-[#4E342E] text-[#1f1f1f] dark:text-[#e0e0e0] py-2 px-3"
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option>All Status</option>
            <option>Published</option>
            <option>Draft</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#FAFAFA] dark:bg-[#1a1a1a]/30">
              <th className="px-6 py-4 text-sm font-bold text-[#795548] dark:text-[#D7CCC8]/80 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-4 text-sm font-bold text-[#795548] dark:text-[#D7CCC8]/80 uppercase tracking-wider">
                Author
              </th>
              <th className="px-6 py-4 text-sm font-bold text-[#795548] dark:text-[#D7CCC8]/80 uppercase tracking-wider">
                Publication Date
              </th>
              <th className="px-6 py-4 text-sm font-bold text-[#795548] dark:text-[#D7CCC8]/80 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-center text-sm font-bold text-[#795548] dark:text-[#D7CCC8]/80 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#D7CCC8] dark:divide-[#333333]">
            {paginatedPosts.map((post) => (
              <tr
                key={post.id}
                className="hover:bg-[#D7CCC8]/30 dark:hover:bg-[#4E342E]/10"
              >
                <td className="px-6 py-4 text-sm font-medium text-[#1f1f1f] dark:text-[#e0e0e0] whitespace-nowrap">
                  {post.title}
                </td>
                <td className="px-6 py-4 text-sm text-[#795548] dark:text-[#D7CCC8]/70 whitespace-nowrap">
                  {post.author}
                </td>
                <td className="px-6 py-4 text-sm text-[#795548] dark:text-[#D7CCC8]/70 whitespace-nowrap">
                  {post.date}
                </td>
                <td className="px-6 py-4">{getStatusBadge(post.status)}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-4">
                    <button
                      className="text-[#795548] dark:text-[#D7CCC8]/70 hover:text-[#4E342E] dark:hover:text-[#D7CCC8]"
                      title="Edit"
                    >
                      <span className="material-symbols-outlined text-xl">
                        edit
                      </span>
                    </button>
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="text-[#795548] dark:text-[#D7CCC8]/70 hover:text-[#4E342E] dark:hover:text-[#D7CCC8]"
                      title="View"
                    >
                      <span className="material-symbols-outlined text-xl">
                        visibility
                      </span>
                    </Link>
                    <button
                      className="text-[#D32F2F]/70 hover:text-[#D32F2F]"
                      title="Delete"
                    >
                      <span className="material-symbols-outlined text-xl">
                        delete
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center border-t border-[#D7CCC8] dark:border-[#333333] p-4">
          <nav className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex size-9 items-center justify-center rounded-md hover:bg-[#D7CCC8]/50 dark:hover:bg-[#4E342E]/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-lg text-[#795548] dark:text-[#D7CCC8]/70">
                chevron_left
              </span>
            </button>
            {getPageNumbers().map((page, index) => {
              if (page === "...") {
                return (
                  <span
                    key={`ellipsis-${index}`}
                    className="flex size-9 items-center justify-center text-sm"
                  >
                    ...
                  </span>
                );
              }
              const pageNum = page as number;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`flex size-9 items-center justify-center rounded-md text-sm ${
                    currentPage === pageNum
                      ? "bg-[#D7CCC8] dark:bg-[#4E342E]/30 text-[#4E342E] dark:text-[#D7CCC8] font-bold"
                      : "hover:bg-[#D7CCC8]/50 dark:hover:bg-[#4E342E]/20"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex size-9 items-center justify-center rounded-md hover:bg-[#D7CCC8]/50 dark:hover:bg-[#4E342E]/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-lg text-[#795548] dark:text-[#D7CCC8]/70">
                chevron_right
              </span>
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}

