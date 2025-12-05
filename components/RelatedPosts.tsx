import Link from "next/link";
import { BlogPost } from "@/types/blog";

interface RelatedPostsProps {
  currentPostSlug: string;
  allPosts: BlogPost[];
}

export function RelatedPosts({ currentPostSlug, allPosts }: RelatedPostsProps) {
  // Get 3 random posts excluding the current one
  const relatedPosts = allPosts
    .filter((post) => post.slug !== currentPostSlug)
    .slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-8 border-t border-[#e7e2d9] dark:border-[#2c2622]/50">
      <h2 className="font-handwriting text-[#5D4037] text-4xl font-bold mb-8">
        Related Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {relatedPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group flex flex-col"
          >
            <div className="overflow-hidden rounded-lg mb-4">
              {post.featuredImage ? (
                <img
                  alt={`Thumbnail for '${post.title}'`}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  src={post.featuredImage}
                />
              ) : (
                <div className="w-full h-40 bg-[#e7e2d9] dark:bg-[#2c2622] flex items-center justify-center">
                  <span className="text-[#A1887F] dark:text-[#8d7a71] text-sm">
                    {post.title}
                  </span>
                </div>
              )}
            </div>
            <h3 className="text-lg font-bold text-[#333333] dark:text-[#e0ddd9] group-hover:text-[#5D4037] dark:group-hover:text-[#5D4037] transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-[#A1887F] dark:text-[#8d7a71] mt-1">
              {post.excerpt.length > 100
                ? `${post.excerpt.substring(0, 100)}...`
                : post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

