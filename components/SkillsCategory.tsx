import { SkillCard } from "./SkillCard";

interface Skill {
  name: string;
  icon: string;
}

interface SkillsCategoryProps {
  title: string;
  skills: Skill[];
}

export function SkillsCategory({ title, skills }: SkillsCategoryProps) {
  return (
    <div>
      <h2 className="text-[#333333] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        {title}
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}

