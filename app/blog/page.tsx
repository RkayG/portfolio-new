"use client";

import { useState, useMemo, useEffect } from "react";
import { Header } from "@/components/Header";
import { BlogPostCard } from "@/components/BlogPostCard";
import { BlogSidebar } from "@/components/BlogSidebar";
import { Pagination } from "@/components/Pagination";
import { BlogPost, BlogCategory } from "@/types/blog";

const allPosts: BlogPost[] = [
  {
    id: "1",
    title: "Demystifying Layer 2 Scaling Solutions",
    excerpt:
      "An in-depth look at the various Layer 2 solutions aiming to solve Ethereum's scalability problem, from Rollups to Sidechains. We explore the trade-offs and what they mean for the future of decentralized applications.",
    date: "October 26, 2023",
    categories: ["Blockchain", "Tutorials"],
    slug: "demystifying-layer-2-scaling-solutions",
  },
  {
    id: "2",
    title: "A Developer's Guide to Smart Contract Security",
    excerpt:
      "Security is paramount in the blockchain space. This guide covers common vulnerabilities in smart contracts, such as reentrancy and integer overflows, and provides best practices to write more secure and robust code.",
    date: "September 15, 2023",
    categories: ["Smart Contracts"],
    slug: "developers-guide-smart-contract-security",
  },
  {
    id: "3",
    title: "Building a Modern DApp with Next.js and Ethers.js",
    excerpt:
      "A step-by-step tutorial on creating a decentralized application from scratch. We'll set up a Next.js frontend, connect to the Ethereum blockchain with Ethers.js, and interact with a simple smart contract.",
    date: "August 02, 2023",
    categories: ["Web Development", "Tutorials"],
    slug: "building-modern-dapp-nextjs-ethers",
  },
];

const POSTS_PER_PAGE = 5;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All Posts");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    let filtered = allPosts;

    // Filter by category
    if (activeCategory !== "All Posts") {
      filtered = filtered.filter((post) =>
        post.categories.includes(activeCategory)
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <div className="flex-grow">
        <div className="mx-auto flex w-full max-w-[960px] flex-col px-4 sm:px-8 lg:px-0">
          <Header />
          <main className="flex-1 mt-8 md:mt-12">
            {/* PageHeading */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] min-w-72 font-handwriting text-gray-900 dark:text-white">
                Thoughts & Articles
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 mt-6 p-4">
              {/* Main Content: Blog Posts */}
              <div className="flex-1 lg:w-2/3">
                {paginatedPosts.length > 0 ? (
                  <>
                    {paginatedPosts.map((post) => (
                      <BlogPostCard
                        key={post.id}
                        title={post.title}
                        excerpt={post.excerpt}
                        date={post.date}
                        categories={post.categories}
                        slug={post.slug}
                      />
                    ))}
                    {totalPages > 1 && (
                      <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        onPrevious={handlePrevious}
                        onNext={handleNext}
                      />
                    )}
                  </>
                ) : (
                  <div className="py-12 text-center">
                    <p className="text-gray-600 dark:text-gray-300">
                      No posts found. Try adjusting your filters or search
                      query.
                    </p>
                  </div>
                )}
              </div>
              {/* Sidebar */}
              <BlogSidebar
                activeCategory={activeCategory}
                onCategoryChange={(category) => {
                  setActiveCategory(category);
                  setCurrentPage(1);
                }}
                onSearchChange={(query) => {
                  setSearchQuery(query);
                  setCurrentPage(1);
                }}
                searchQuery={searchQuery}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

