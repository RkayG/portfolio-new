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
}

