import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuthorBio } from "@/components/AuthorBio";
import { CommentsSection } from "@/components/CommentsSection";
import { allBlogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await params in Next.js 16+
  const { slug } = await params;
  const post = allBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <div className="flex-grow">
        <div className="mx-auto flex w-full max-w-[960px] flex-col px-4 sm:px-8 lg:px-0">
          <Header />
          <main className="px-4 md:px-10 py-8">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-[#5D4037] tracking-normal text-4xl sm:text-5xl md:text-6xl font-bold leading-tight pt-6 pb-4 font-handwriting">
                {post.title}
              </h1>
              <p className="text-[#A1887F] dark:text-[#8d7a71] text-sm font-normal leading-normal pb-4 pt-1">
                By {post.author?.name || "Rufus Gladness"} • Published on{" "}
                {post.date} • {post.readTime || "5 min read"}
              </p>
              <div className="flex gap-3 py-3 flex-wrap justify-center">
                {post.categories.map((category) => (
                  <div
                    key={category}
                    className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7e2d9] dark:bg-[#2c2622] px-4"
                  >
                    <p className="text-[#333333] dark:text-[#e0ddd9] text-sm font-medium leading-normal">
                      {category}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {post.featuredImage && (
              <div className="@container pt-8 pb-4">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-80"
                  style={{ backgroundImage: `url(${post.featuredImage})` }}
                  role="img"
                  aria-label={post.featuredImageAlt || post.title}
                />
              </div>
            )}

            {post.content && (
              <article
                className="prose prose-lg dark:prose-invert max-w-none text-[#333333] dark:text-[#e0ddd9] text-base leading-relaxed space-y-6 pt-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            )}

            {post.author && <AuthorBio author={post.author} />}

            {post.comments && post.comments.length > 0 && (
              <CommentsSection comments={post.comments} postSlug={post.slug} />
            )}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

