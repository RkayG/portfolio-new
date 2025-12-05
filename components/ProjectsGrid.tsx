import { ProjectCard } from "./ProjectCard";
import { Project } from "@/types/project";

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[#333333]/80 dark:text-[#c8a993]">
          No projects found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          imageAlt={project.imageAlt}
          technologies={project.technologies}
          liveDemoUrl={project.liveDemoUrl}
          githubUrl={project.githubUrl}
        />
      ))}
    </div>
  );
}

