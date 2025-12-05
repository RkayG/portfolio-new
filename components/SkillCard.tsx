interface SkillCardProps {
  name: string;
  icon: string;
}

export function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <div className="flex flex-1 items-center gap-3 rounded-lg border border-[#654834] dark:border-[#654834] bg-white/5 dark:bg-[#32241a] p-4">
      <div className="text-primary" data-icon={name}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <h2 className="text-[#333333] dark:text-white text-base font-bold leading-tight">
        {name}
      </h2>
    </div>
  );
}

