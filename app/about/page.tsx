import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProfileHeader } from "@/components/ProfileHeader";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import Link from "next/link";
import { allProjects } from "@/data/projects";
import { AnimatedButton } from "@/components/AnimatedButton";

const skills = [
  {
    name: "Python",
    iconUrl: "python",
    iconAlt: "Python logo",
  },
  {
    name: "Solidity",
    iconUrl: "solidity",
    iconAlt: "Solidity logo",
  },
  {
    name: "React",
    iconUrl: "react",
    iconAlt: "React logo",
  },
  {
    name: "JavaScript",
    iconUrl: "javascript",
    iconAlt: "JavaScript logo",
  },
  {
    name: "Docker",
    iconUrl: "docker",
    iconAlt: "Docker logo",
  },
  {
    name: "Node.js",
    iconUrl: "nodedotjs",
    iconAlt: "Node.js logo",
  },
  {
    name: "PostgreSQL",
    iconUrl: "postgresql",
    iconAlt: "PostgreSQL logo",
  },
  {
    name: "Tailwind",
    iconUrl: "tailwindcss",
    iconAlt: "Tailwind CSS logo",
  },
  {
    name: "Ethers.js",
    iconUrl: "ethereum",
    iconAlt: "Ethers.js logo",
  },
  {
    name: "AWS",
    iconUrl: "amazonaws",
    iconAlt: "AWS logo",
  },
  {
    name: "Heroku",
    iconUrl: "heroku",
    iconAlt: "Heroku logo",
  },
  {
    name: "Cloudinary",
    iconUrl: "cloudinary",
    iconAlt: "Cloudinary logo",
  },
  {
    name: "Rust",
    iconUrl: "rust",
    iconAlt: "Rust logo",
  },
  {
    name: "Bash",
    iconUrl: "gnubash",
    iconAlt: "Bash logo",
  },
  {
    name: "C",
    iconUrl: "c",
    iconAlt: "C logo",
  },
];

const experiences = [
  {
    period: "2025 - Present",
    title: "Founding CTO / Founding Lead Engineer",
    company: "J Vortex",
    description:
      "Led technical vision and architecture for a suite of software products, including Wigree, a next-generation escrow-backed P2P social marketplace designed to build trust in decentralised transactions. Built and mentored the core engineering team, establishing development processes, coding standards, and a culture of technical excellence. Architected scalable and secure systems from the ground up, making critical technology stack decisions to balance rapid development with long-term stability.",
  },
  {
    period: "2025 - Present",
    title: "Founding Lead Developer",
    company: "Cxperia",
    description:
      "Solely developed and launched the Cxperia platform - a B2B2C SaaS loyalty platform enabling cosmetic brands to create dynamic, personalised customer experiences. Designed and implemented the entire platform architecture, focusing on modularity and extensibility to support diverse client needs and rapid feature iteration. Drove product strategy alongside founders, translating business goals into a functional, engaging product that directly enhances customer retention for brands.",
  },
  {
    period: "2024 - 2025",
    title: "Remote Backend & Python Instructor",
    company: "FuturDevs",
    description:
      "Authored and delivered a comprehensive, project-based curriculum on Backend Development and Python, covering core concepts, API design, database architecture, and scalable application patterns. Mentored and coached a cohort of aspiring developers, providing code reviews and career guidance, with a focus on bridging theoretical knowledge to practical, industry-ready skills.",
  },
  {
    period: "Feb 2025 - May 2025",
    title: "Contract Backend Developer",
    company: "Primegrills",
    description:
      "Engineered a high-performance, event-driven microservices architecture to replace a monolithic system, significantly improving modularity and deployment agility. Developed a custom POS ordering system using Django, React, PostgreSQL, and Redis, with RabbitMQ for message queuing and WebSockets for real-time updates. Optimised system performance to handle massive, spiking traffic loads typical for event-based businesses, ensuring 99.9% uptime and sub-second response times during peak operations.",
  },

];

// Show first 3 projects as featured
const featuredProjects = allProjects.slice(0, 3);

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="flex-grow">
        <div className="mx-auto flex w-full max-w-[960px] flex-col px-4 sm:px-8 lg:px-0">
          <Header />
          <main className="flex-1 py-10 md:py-16">
            <ProfileHeader
              name="Rufus"
              title="Software & Blockchain Engineer"
              description="A passionate full-stack engineer with a focus on building software and blockchain solutions that are secure, scalable, and user-friendly. I enjoy solving problems that require creative solutions."
            />
            <section className="mt-16">
              <h2 className="font-handwriting text-3xl font-bold text-[#6b4a49] dark:text-[#c8a993]">
                My Path as a Builder
              </h2>
              <p className="mt-4 text-base font-normal leading-relaxed text-[#333333]/80 dark:text-[#c8a993]">
              My career has been defined by turning ideas into scalable products. As a founder, co-founder and technical lead, I've launched multiple SaaS platforms, navigating everything from initial concept validation to architecture decisions, team building, and go-to-market strategy.
              </p>
              <p className="mt-4 text-base font-normal leading-relaxed text-[#333333]/80 dark:text-[#c8a993]">
              I believe great software isn't just about code - it's about understanding users, proving concepts quickly, and building systems that adapt. That means writing clean, maintainable code while keeping a sharp eye on user needs, product-market fit, and sustainable growth. Whether building a customer loyalty platform, a peer-to-peer marketplace, or a custom POS system, I focus on creating technical foundations that enable business possibilities.
              </p>
                <p className="mt-4 text-base font-normal leading-relaxed text-[#333333]/80 dark:text-[#c8a993]">
                Today, I combine my entrepreneurial experience with deep technical expertise to create products that are not just functional, but strategically valuable and technically excellent.
                </p>
            </section>
            <SkillsSection skills={skills} />
            <ExperienceSection experiences={experiences} />
            <ProjectsSection projects={featuredProjects} />
            <section className="mt-20 text-center">
              <h2 className="font-handwriting text-3xl font-bold text-[#6b4a49] dark:text-[#c8a993]">
                Let&apos;s Build Something Great
              </h2>
              <p className="mt-3 mx-auto max-w-lg text-base text-[#333333]/80 dark:text-[#c8a993]">
                Interested in collaborating or have a project in mind? I&apos;m
                always open to new opportunities and challenges.
              </p>
              <div className="mt-6 flex justify-center">
                <AnimatedButton href="/projects">View My Work</AnimatedButton>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

