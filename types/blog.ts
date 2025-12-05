export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  categories: string[];
  slug: string;
}

export type BlogCategory = "All Posts" | "Blockchain" | "Smart Contracts" | "Web Development" | "Career" | "Tutorials";

