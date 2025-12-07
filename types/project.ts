export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  technologies: string[];
  category: "All" | "Web App" | "Blockchain" | "Mobile App";
  liveDemoUrl?: string;
  githubUrl?: string;
  slug: string;
  // Detailed fields for project detail page
  galleryImages?: string[];
  videoUrl?: string;
  overview?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string;
  role?: string;
  roleDescription?: string;
}

