import Image from "next/image";

interface ProfileHeaderProps {
  name: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export function ProfileHeader({
  name,
  title,
  description,
  imageUrl,
}: ProfileHeaderProps) {
  return (
    <section className="flex flex-col gap-8 @container md:flex-row md:items-center">
      <div className="flex-shrink-0">
        <div
          className="mx-auto bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 md:h-40 md:w-40 ring-4 ring-offset-4 ring-[#8D7B68]/30 dark:ring-[#473324] dark:ring-offset-[#211811]"
          style={
            imageUrl
              ? { backgroundImage: `url(${imageUrl})` }
              : { backgroundColor: "#8D7B68" }
          }
        />
      </div>
      <div className="flex flex-col justify-center text-center md:text-left">
        <h1 className="font-handwriting text-4xl font-bold leading-tight text-[#4A2E2A] dark:text-[#c8a993]">
          Hi, I&apos;m {name}.
        </h1>
        <p className="mt-2 text-xl font-bold text-[#333333] dark:text-white leading-tight tracking-[-0.015em]">
          {title}
        </p>
        <p className="mt-3 max-w-xl text-base font-normal leading-relaxed text-[#333333]/80 dark:text-[#c8a993]">
          {description}
        </p>
      </div>
    </section>
  );
}

