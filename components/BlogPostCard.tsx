import Link from "next/link";

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  categories: string[];
  slug: string;
}

export function BlogPostCard({
  title,
  excerpt,
  date,
  categories,
  slug,
}: BlogPostCardProps) {
  return (
    <article className="flex flex-col gap-3 py-6 border-b border-gray-200 dark:border-b-[#473324]">
      <p className="text-sm text-gray-500 dark:text-[#c8a993]">{date}</p>
      <Link href={`/blog/${slug}`}>
        <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white font-handwriting hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">
          {title}
        </h2>
      </Link>
      <p className="text-base font-normal leading-relaxed text-gray-600 dark:text-gray-300">
        {excerpt}
      </p>
      <div className="flex items-center gap-4 mt-2">
        <div className="flex items-center gap-2">
          {categories.map((category) => (
            <div
              key={category}
              className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 dark:bg-[#473324] px-3"
            >
              <p className="text-primary dark:text-white text-xs font-medium leading-normal">
                {category}
              </p>
            </div>
          ))}
        </div>
        <Link
          href={`/blog/${slug}`}
          className="text-sm font-bold text-primary hover:underline"
          aria-label={`Read more about ${title}`}
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}

