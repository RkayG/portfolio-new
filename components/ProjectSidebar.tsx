interface ProjectSidebarProps {
  role?: string;
  roleDescription?: string;
  technologies: string[];
}

export function ProjectSidebar({
  role,
  roleDescription,
  technologies,
}: ProjectSidebarProps) {
  return (
    <aside className="lg:col-span-1">
      <div className="sticky top-24 flex flex-col gap-8">
        {role && (
          <div className="bg-white dark:bg-[#2C231A] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="font-handwriting text-2xl  text-[#5D4037] dark:text-[#8D6E63] mb-3">
              My Role
            </h3>
            <p className="text-sm leading-6 text-[#333333]/80 dark:text-[#E0E0E0]/80">
              {role}
            </p>
            {roleDescription && (
              <p className="text-sm leading-6 text-[#333333]/80 dark:text-[#E0E0E0]/80 mt-2">
                {roleDescription}
              </p>
            )}
          </div>
        )}
        <div className="bg-white dark:bg-[#2C231A] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h3 className="font-handwriting text-2xl  text-[#5D4037] dark:text-[#8D6E63] mb-4">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="inline-block rounded-full bg-[#8D6E63]/10 px-3 py-1 text-xs font-medium text-[#8D6E63] dark:text-[#8D6E63]/90"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

