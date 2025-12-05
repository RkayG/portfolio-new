interface Skill {
  name: string;
  iconUrl: string;
  iconAlt: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="mt-16">
      <h2 className="font-handwriting text-3xl font-bold text-[#4A2E2A] dark:text-[#c8a993]">
        Skills & Technologies
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center gap-2 rounded-lg border border-[#4A2E2A]/10 dark:border-[#473324] bg-white dark:bg-[#2a1f17] p-4 transition-transform hover:-translate-y-1"
          >
            <img
              alt={skill.iconAlt}
              className="h-10 w-10"
              src={skill.iconUrl}
            />
            <p className="text-sm font-medium text-[#333333] dark:text-white">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

