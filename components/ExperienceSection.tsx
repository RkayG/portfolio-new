interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section className="mt-16">
      <h2 className="font-handwriting text-3xl font-bold text-[#6b4a49] dark:text-[#c8a993]">
        Professional Experience
      </h2>
      <div className="relative mt-6 pl-6 border-l-2 border-[#8D7B68]/30 dark:border-[#473324]">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={index < experiences.length - 1 ? "relative mb-8" : "relative"}
          >
            <div className="absolute -left-[35px] top-1.5 h-4 w-4 rounded-full bg-[#8D7B68] dark:bg-[#cf6417]"></div>
            <p className="text-sm font-medium text-[#8D7B68] dark:text-[#c8a993]">
              {exp.period}
            </p>
            <h3 className="mt-1 text-lg font-bold text-[#333333] dark:text-white">
              {exp.title}
            </h3>
            <p className="text-md font-medium text-[#333333]/80 dark:text-[#c8a993]">
              {exp.company}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#333333]/70 dark:text-[#c8a993]/80">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

