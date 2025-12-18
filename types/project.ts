export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  technologies: string[];
  category: "All" | "Web App" | "Blockchain" | "Mobile App" | "Backend Framework / Developer Tooling";
  liveDemoUrl?: string;
  githubUrl?: string;
  slug: string;
  // Detailed fields for project detail page
  galleryImages?: string[];
  videoUrl?: string;
  overview?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string | string[];
  role?: string;
  roleDescription?: string;
  // Enhanced fields for detailed project pages
  keyFeatures?: Array<{
    title: string;
    description: string;
  }>;
  technicalHighlights?: string[];
  architecture?: {
    designPatterns?: string[];
    keyComponents?: string[];
    scalabilityFeatures?: string[];
  };
  codeSamples?: Array<{
    title: string;
    description: string;
    code: string;
  }>;
}

