import Link from "next/link";
import { AnimatedButton } from "./AnimatedButton";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  technologies: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  slug?: string;
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  imageAlt,
  technologies,
  liveDemoUrl,
  githubUrl,
  slug,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-4 pb-3 rounded-lg bg-white dark:bg-[#2a1f16] p-4 border border-[#4A2E2A]/10 dark:border-[#473324]">
      {slug ? (
        <Link href={`/projects/${slug}`}>
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            style={{ backgroundImage: `url(${imageUrl})` }}
            role="img"
            aria-label={imageAlt}
          />
        </Link>
      ) : (
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-lg"
          style={{ backgroundImage: `url(${imageUrl})` }}
          role="img"
          aria-label={imageAlt}
        />
      )}
      <div>
        {slug ? (
          <Link
            href={`/projects/${slug}`}
            className="text-primary font-handwriting text-2xl font-bold leading-normal hover:underline block"
          >
            {title}
          </Link>
        ) : (
          <h3 className="text-primary font-handwriting text-2xl font-bold leading-normal">
            {title}
          </h3>
        )}
        <p className="text-[#333333]/80 dark:text-[#c8a993] text-sm font-normal leading-normal mt-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-white bg-[#6b4a49]/30 dark:bg-[#473324] px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 mt-auto pt-2 flex-wrap">
        {liveDemoUrl && liveDemoUrl !== "#" && liveDemoUrl.trim() !== "" && (
          <Link
            className="flex items-center gap-2 text-[#333333] dark:text-white hover:text-primary transition-colors text-sm font-semibold"
            href={liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-base">link</span>
            Live Demo
          </Link>
        )}
        {githubUrl && githubUrl !== "#" && githubUrl.trim() !== "" && (
          <Link
            className="flex items-center gap-2 text-[#333333] dark:text-white hover:text-primary transition-colors text-sm font-semibold"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-base">code</span>
            GitHub
          </Link>
        )}
        {slug && (
          <AnimatedButton href={`/projects/${slug}`}>
            View {title}
          </AnimatedButton>
        )}
      </div>
    </div>
  );
}

