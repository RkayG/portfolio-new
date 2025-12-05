"use client";

import { useState } from "react";
import { EditorSidebar } from "@/components/EditorSidebar";
import { EditorToolbar } from "@/components/EditorToolbar";
import { TagInput } from "@/components/TagInput";

export default function NewBlogPostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("Rufus Gladness");
  const [publicationDate, setPublicationDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [tags, setTags] = useState<string[]>([]);
  const [status, setStatus] = useState<"Draft" | "Published">("Draft");

  const handleFormat = (format: string) => {
    // In a real implementation, this would format the textarea content
    console.log("Format:", format);
  };

  const handleSaveDraft = () => {
    // Save as draft logic
    console.log("Saving as draft...");
  };

  const handlePublish = () => {
    // Publish logic
    setStatus("Published");
    console.log("Publishing...");
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#f8f7f6] dark:bg-[#211811] font-body">
      <div className="layout-container flex h-full grow flex-row">
        <EditorSidebar />
        <main className="flex-1 p-6 lg:p-10">
          <div className="max-w-7xl mx-auto">
            {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-4 items-center mb-8">
              <div className="flex flex-col">
                <p className="text-[#6D4C41] dark:text-[#c8a993] text-4xl lg:text-5xl font-handwriting leading-tight">
                  Create New Post
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal mt-2">
                  Fill in the details below to create a new blog entry.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                {/* Post Title */}
                <label className="flex flex-col w-full">
                  <p className="text-slate-800 dark:text-white text-base font-medium leading-normal pb-2">
                    Post Title
                  </p>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#6D4C41]/50 border border-slate-300 dark:border-[#654834] bg-white dark:bg-[#32241a] focus:border-[#6D4C41] dark:focus:border-[#654834] h-14 placeholder:text-slate-400 dark:placeholder:text-[#c8a993] p-[15px] text-base font-normal leading-normal"
                    placeholder="Enter your blog post title here..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>

                {/* Content Editor */}
                <label className="flex flex-col w-full h-full flex-1">
                  <p className="text-slate-800 dark:text-white text-base font-medium leading-normal pb-2">
                    Content
                  </p>
                  <div className="flex w-full flex-1 items-stretch rounded-lg flex-col border border-slate-300 dark:border-[#654834] bg-white dark:bg-[#32241a]">
                    <textarea
                      className="form-input flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-t-lg text-slate-800 dark:text-white focus:outline-0 focus:ring-0 border-0 bg-transparent min-h-96 placeholder:text-slate-400 dark:placeholder:text-[#8a6347] p-[15px] text-base font-normal leading-normal"
                      placeholder="Start writing your blog content here..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                    <EditorToolbar onFormat={handleFormat} />
                  </div>
                </label>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-1 flex flex-col gap-6">
                {/* Publishing Section */}
                <div className="bg-white dark:bg-[#2c1f17] p-6 rounded-xl border border-slate-200 dark:border-[#473324]">
                  <h2 className="text-[#6D4C41] dark:text-amber-100 text-2xl font-handwriting leading-tight tracking-[-0.015em]">
                    Publishing
                  </h2>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Status:{" "}
                      <span className="font-semibold text-slate-800 dark:text-white">
                        {status}
                      </span>
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Autosaved
                    </p>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={handleSaveDraft}
                      className="flex-1 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent border border-[#6D4C41] text-[#6D4C41] dark:text-amber-100 dark:border-amber-100 hover:bg-[#6D4C41]/10 dark:hover:bg-amber-100/10 text-sm font-medium leading-normal transition-colors"
                    >
                      <span className="truncate">Save as Draft</span>
                    </button>
                    <button
                      onClick={handlePublish}
                      className="flex-1 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#6D4C41] text-white hover:bg-[#6D4C41]/90 text-sm font-medium leading-normal transition-colors"
                    >
                      <span className="truncate">Publish</span>
                    </button>
                  </div>
                </div>

                {/* Details Section */}
                <div className="bg-white dark:bg-[#2c1f17] p-6 rounded-xl border border-slate-200 dark:border-[#473324]">
                  <h2 className="text-[#6D4C41] dark:text-amber-100 text-2xl font-handwriting leading-tight tracking-[-0.015em]">
                    Details
                  </h2>
                  <div className="flex flex-col gap-4 mt-4">
                    <label className="flex flex-col w-full">
                      <p className="text-slate-800 dark:text-white text-sm font-medium leading-normal pb-1.5">
                        Author
                      </p>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#6D4C41]/50 border border-slate-300 dark:border-[#654834] bg-white dark:bg-[#32241a] focus:border-[#6D4C41] dark:focus:border-[#654834] h-11 placeholder:text-slate-400 dark:placeholder:text-[#c8a993] px-3 text-sm font-normal leading-normal"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                      />
                    </label>

                    <label className="flex flex-col w-full">
                      <p className="text-slate-800 dark:text-white text-sm font-medium leading-normal pb-1.5">
                        Publication Date
                      </p>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#6D4C41]/50 border border-slate-300 dark:border-[#654834] bg-white dark:bg-[#32241a] focus:border-[#6D4C41] dark:focus:border-[#654834] h-11 placeholder:text-slate-400 dark:placeholder:text-[#c8a993] px-3 text-sm font-normal leading-normal"
                        type="date"
                        value={publicationDate}
                        onChange={(e) => setPublicationDate(e.target.value)}
                      />
                    </label>

                    <label className="flex flex-col w-full">
                      <p className="text-slate-800 dark:text-white text-sm font-medium leading-normal pb-1.5">
                        Tags / Categories
                      </p>
                      <TagInput tags={tags} onTagsChange={setTags} />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

