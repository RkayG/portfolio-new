"use client";

import { AdminSidebar } from "@/components/AdminSidebar";
import { BlogPostsTable } from "@/components/BlogPostsTable";

export default function AdminBlogPage() {
  return (
    <div className="relative flex min-h-screen w-full bg-[#FAFAFA] dark:bg-[#1a1a1a] font-body">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
          {/* Page Heading */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-[#4E342E] dark:text-[#D7CCC8] handwriting-font text-5xl font-bold tracking-wide">
              Blog Posts Management
            </h1>
            <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#4E342E] px-5 text-sm font-bold text-white shadow-md hover:bg-[#4E342E]/90 transition-colors">
              <span className="material-symbols-outlined text-base">
                add_circle
              </span>
              <span className="truncate">Create New Post</span>
            </button>
          </div>

          {/* Table */}
          <BlogPostsTable />
        </div>
      </main>
    </div>
  );
}

