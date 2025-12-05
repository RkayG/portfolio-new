"use client";

import { useState } from "react";
import { Comment } from "@/types/blog";

interface CommentsSectionProps {
  comments: Comment[];
  postSlug: string;
}

export function CommentsSection({ comments, postSlug }: CommentsSectionProps) {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    console.log("Comment submitted:", commentText);
    setCommentText("");
  };

  const displayComments = comments || [];

  return (
    <section className="mt-16 pt-8 border-t border-[#e7e2d9] dark:border-[#2c2622]/50">
      <h2 className="font-handwriting text-[#5D4037] text-4xl font-bold mb-8">
        Comments ({displayComments.length})
      </h2>

      <div className="mb-12">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="sr-only" htmlFor="comment-input">
              Leave a comment
            </label>
            <textarea
              className="w-full rounded-lg border-[#A1887F]/50 bg-[#e7e2d9] dark:bg-[#2c2622] dark:border-[#8d7a71]/50 focus:border-[#5D4037] focus:ring-[#5D4037] dark:focus:border-[#5D4037] dark:focus:ring-[#5D4037] transition text-[#333333] dark:text-[#e0ddd9] p-4"
              id="comment-input"
              placeholder="Join the discussion..."
              rows={4}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="flex items-center justify-center rounded-lg h-10 px-6 bg-[#5D4037] text-white text-sm font-bold hover:bg-[#5D4037]/90 transition-colors"
              type="submit"
            >
              Submit Comment
            </button>
          </div>
        </form>
      </div>

      <div className="space-y-8">
        {displayComments.length > 0 ? (
          displayComments.map((comment) => (
          <div key={comment.id} className="flex items-start gap-4">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={comment.avatar}
              alt={`Avatar of ${comment.author}`}
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-[#333333] dark:text-[#e0ddd9]">
                  {comment.author}
                </h4>
                <p className="text-xs text-[#A1887F] dark:text-[#8d7a71]">
                  {comment.date}
                </p>
              </div>
              <p className="mt-2 text-base text-[#333333] dark:text-[#e0ddd9]/90">
                {comment.content}
              </p>
            </div>
          </div>
          ))
        ) : null}
      </div>
    </section>
  );
}

