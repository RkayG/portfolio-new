"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { EditBlogSidebar } from "@/components/EditBlogSidebar";
import { TagInput } from "@/components/TagInput";
import { allBlogPosts } from "@/data/blog";
import { notFound } from "next/navigation";

export default function EditBlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [status, setStatus] = useState<"Published" | "Draft">("Draft");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    // Find the blog post by slug
    const post = allBlogPosts.find((p) => p.slug === slug);

    if (!post) {
      setLoading(false);
      return;
    }

    // Populate form with existing data
    setTitle(post.title);
    setContent(post.content || "");
    setAuthor(post.author?.name || "Rufus Gladness");
    
    // Convert date from "October 26, 2023" to "2023-10-26"
    let dateValue = new Date().toISOString().split("T")[0];
    if (post.date) {
      try {
        const date = new Date(post.date);
        if (!isNaN(date.getTime())) {
          dateValue = date.toISOString().split("T")[0];
        }
      } catch (e) {
        // Keep default date if parsing fails
      }
    }
    setPublicationDate(dateValue);
    setTags(post.categories || []);
    setStatus("Published"); // You can add status to blog post type later
    setLoading(false);
  }, [slug]);

  const handleUpdate = () => {
    // Update post logic
    console.log("Updating post...", {
      title,
      content,
      author,
      publicationDate,
      tags,
      status,
    });
    // In a real app, this would call an API
    router.push("/admin/blog");
  };

  const handleUnpublish = () => {
    setStatus("Draft");
    console.log("Unpublishing post...");
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this post?")) {
      console.log("Deleting post...");
      // In a real app, this would call an API
      router.push("/admin/blog");
    }
  };

  if (loading) {
    return (
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#fcfaf8] dark:bg-[#211811] font-body">
        <div className="flex flex-row min-h-screen">
          <EditBlogSidebar />
          <main className="flex-1 p-8 flex items-center justify-center">
            <p className="text-[#1b130e] dark:text-[#f3ece7]">Loading...</p>
          </main>
        </div>
      </div>
    );
  }

  if (!title) {
    return (
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#fcfaf8] dark:bg-[#211811] font-body">
        <div className="flex flex-row min-h-screen">
          <EditBlogSidebar />
          <main className="flex-1 p-8 flex items-center justify-center">
            <p className="text-[#1b130e] dark:text-[#f3ece7]">Post not found</p>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#fcfaf8] dark:bg-[#211811] font-body">
      <div className="flex flex-row min-h-screen">
        <EditBlogSidebar />
        <main className="flex-1 p-8">
          <div className="layout-content-container flex flex-col w-full mx-auto max-w-4xl">
            {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-3 mb-8">
              <div className="flex min-w-72 flex-col gap-2">
                <p className="text-[#6D4C41] font-handwriting text-5xl font-bold leading-tight">
                  Edit Blog Post
                </p>
                <p className="text-[#976d4e] dark:text-[#a1887f] text-base font-normal leading-normal">
                  Now editing:{" "}
                  <span className="font-medium text-[#1b130e] dark:text-[#f3ece7]">
                    {title}
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                    status === "Published"
                      ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Editor */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <label className="flex flex-col w-full">
                  <p className="text-[#1b130e] dark:text-[#f3ece7] text-base font-medium leading-normal pb-2">
                    Post Title
                  </p>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b130e] dark:text-[#f3ece7] focus:outline-0 focus:ring-2 focus:ring-[#6D4C41]/50 border border-[#e7d9d0] dark:border-[#3a2e25] bg-[#fcfaf8] dark:bg-[#211811] h-14 placeholder:text-[#976d4e] dark:placeholder:text-[#a1887f] p-[15px] text-base font-normal leading-normal"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>

                <label className="flex flex-col w-full">
                  <p className="text-[#1b130e] dark:text-[#f3ece7] text-base font-medium leading-normal pb-2">
                    Content
                  </p>
                  <textarea
                    className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-[#1b130e] dark:text-[#f3ece7] focus:outline-0 focus:ring-2 focus:ring-[#6D4C41]/50 border border-[#e7d9d0] dark:border-[#3a2e25] bg-[#fcfaf8] dark:bg-[#211811] min-h-96 placeholder:text-[#976d4e] dark:placeholder:text-[#a1887f] p-[15px] text-base font-normal leading-normal"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </label>
              </div>

              {/* Right Column: Metadata & Actions */}
              <div className="lg:col-span-1 flex flex-col gap-6">
                <div className="bg-[#6D4C41]/5 dark:bg-[#6D4C41]/10 p-6 rounded-xl border border-[#e7d9d0] dark:border-[#3a2e25] flex flex-col gap-6">
                  <label className="flex flex-col w-full">
                    <p className="text-[#1b130e] dark:text-[#f3ece7] text-base font-medium leading-normal pb-2">
                      Author
                    </p>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b130e] dark:text-[#f3ece7] focus:outline-0 focus:ring-2 focus:ring-[#6D4C41]/50 border border-[#e7d9d0] dark:border-[#3a2e25] bg-[#fcfaf8] dark:bg-[#211811] h-14 placeholder:text-[#976d4e] dark:placeholder:text-[#a1887f] p-[15px] text-base font-normal leading-normal"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </label>

                  <label className="flex flex-col w-full">
                    <p className="text-[#1b130e] dark:text-[#f3ece7] text-base font-medium leading-normal pb-2">
                      Publication Date
                    </p>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b130e] dark:text-[#f3ece7] focus:outline-0 focus:ring-2 focus:ring-[#6D4C41]/50 border border-[#e7d9d0] dark:border-[#3a2e25] bg-[#fcfaf8] dark:bg-[#211811] h-14 placeholder:text-[#976d4e] dark:placeholder:text-[#a1887f] p-[15px] text-base font-normal leading-normal"
                      type="date"
                      value={publicationDate}
                      onChange={(e) => setPublicationDate(e.target.value)}
                    />
                  </label>

                  <div className="flex flex-col w-full">
                    <p className="text-[#1b130e] dark:text-[#f3ece7] text-base font-medium leading-normal pb-2">
                      Tags / Categories
                    </p>
                    <TagInput tags={tags} onTagsChange={setTags} />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleUpdate}
                    className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-[#6D4C41] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#6D4C41]/90 transition-colors"
                  >
                    <span className="truncate">Update Post</span>
                  </button>
                  <button
                    onClick={handleUnpublish}
                    className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-transparent border border-[#976d4e] dark:border-[#a1887f] text-[#976d4e] dark:text-[#a1887f] text-base font-bold leading-normal hover:bg-[#6D4C41]/5 dark:hover:bg-[#6D4C41]/10 transition-colors"
                  >
                    <span className="truncate">Unpublish</span>
                  </button>
                  <button
                    onClick={handleDelete}
                    className="text-red-600 dark:text-red-400 text-sm font-medium hover:underline text-center mt-4"
                  >
                    Delete Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

