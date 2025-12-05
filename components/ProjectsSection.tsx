import { ProjectsGrid } from "./ProjectsGrid";
import { Project } from "@/types/project";
import Link from "next/link";

interface ProjectsSectionProps {
  projects: Project[];
  showViewAll?: boolean;
}

export function ProjectsSection({
  projects,
  showViewAll = true,
}: ProjectsSectionProps) {
  // Show only first 3 projects for the about page
  const displayedProjects = showViewAll ? projects.slice(0, 3) : projects;

  return (
    <section className="mt-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-handwriting text-3xl font-bold text-[#6b4a49] dark:text-[#c8a993]">
          Featured Projects
        </h2>
        {showViewAll && projects.length > 3 && (
          <Link
            href="/projects"
            className="text-primary text-sm font-medium hover:underline"
          >
            View All →
          </Link>
        )}
      </div>
      <ProjectsGrid projects={displayedProjects} />
    </section>
  );
}

