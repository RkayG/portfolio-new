import { MetadataRoute } from "next";
import { allProjects } from "@/data/projects";
import { allBlogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://rufusgladness.com";

    const routes = [
        "",
        "/about",
        "/projects",
        "/skills",
        "/contact",
        "/blog",
        "/co-founder",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    const projectRoutes = allProjects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    const blogRoutes = allBlogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.5,
    }));

    return [...routes, ...projectRoutes, ...blogRoutes];
}
