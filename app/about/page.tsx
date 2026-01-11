import { Metadata } from "next";
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
    title: "Software Developer (Consulting)",
    company: "Kentry Limited, UK",
    points: [
      "Architecting **OH PMR**, a multi-tenant healthcare platform designed to serve potential 15,000+ pharmacies.",
      "Engineered the **OnRoute** dispatch system a comprehensive logistics suite (mobile app & admin panel) for private transport, driving a 50% increase in operational efficiency through streamlined workflows.",
      "Optimized legacy SQL queries and implemented a materialized view strategy that improved dashboard reporting speeds by 10x."
    ]
  },
  {
    period: "2025 - Present",
    title: "CTO & Lead Developer",
    company: "J-Vortex Inc.",
    points: [
      "Defining the technical roadmap for **Wigree**, a decentralized P2P marketplace. Leading the implementation of smart contracts in Solidity and a hybrid off-chain indexer for performant user experiences.",
      "Established strict CI/CD pipelines and codified infrastructure (IaC), reducing deployment risks and ensuring consistent environments across dev and production."
    ]
  },
  {
    period: "2025 - Present",
    title: "Technical Co-founder",
    company: "Cxperia, France",
    points: [
      "Built the **Cxperia** digital experience platform from scratch, utilizing Next.js for a high-performance frontend and a serverless backend for infinite scalability.",
      "Designed a modular feature-flag system that allowed non-technical teams to rollout campaigns to specific regions without code deployments.",
      "Implemented a privacy-first analytics pipeline that processes user interactions on the edge, ensuring compliance with strict EU data laws."
    ]
  },
  {
    period: "2024",
    title: "Backend & Python Instructor",
    company: "FuturDevs",
    points: [
      "Delivered a comprehensive, project-based curriculum on Backend Development and Python, covering core concepts, API design, database architecture, and scalable application patterns.",
      "Mentored and coached a cohort of aspiring developers, providing code reviews and career guidance, with a focus on bridging theoretical knowledge to practical, industry-ready skills."
    ]
  },
  {
    period: "2020 - 2024",
    title: "Operations Manager",
    company: "Medaville Group, Nigeria",
    points: [
      "Managed business operations and logistics for a construction firm, overseeing a workforce of 50+ and optimising supply chain workflows.",
      "Translated complex operational bottlenecks into process improvements, a skill that now informs my approach to software system design."
    ]
  },
];

// Show first 3 projects as featured
const featuredProjects = allProjects.slice(0, 4);

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Rufus Gladness, a Lead Software Developer & Architect with expertise in Next.js, Python, and Blockchain. Discover my journey from first principles to first customers.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="flex-grow">
        <div className="mx-auto flex w-full max-w-[960px] flex-col px-4 sm:px-8 lg:px-0">
          <Header />
          <main className="flex-1 py-10 md:py-16">
            <ProfileHeader
              name="Rufus"
              title="Lead Software Engineer & Systems Architect"
              description="I build systems that survive success. My work focuses on creating backend architectures that handle scale, security, and complexity without becoming unmaintainable legacy code."
            />
            <section className="mt-16">
              <h2 className="font-handwriting text-3xl font-bold text-[#6b4a49] dark:text-[#c8a993]">
                Engineering Reliability
              </h2>
              <p className="mt-4 text-base font-normal leading-relaxed text-[#333333]/80 dark:text-[#c8a993]">
                Reliability is not an accident—it is an architecture. In an industry often obsessed with &quot;moving fast and breaking things,&quot;
                I take a different approach: <span className="font-semibold text-[#6b4a49] dark:text-[#d4a574]">move fast by building things that don&apos;t break</span>.
                I engineer systems that treat failure not as an anomaly to be feared, but as a constraint to be managed.
              </p>

              <p className="mt-4 text-base font-normal leading-relaxed text-[#333333]/80 dark:text-[#c8a993]">
                My role extends beyond writing code; I build the digital bedrock that businesses stand on.
                Whether it&apos;s a high-frequency trading bot or a multi-tenant healthcare platform, the goal is always
                <span className="italic"> boring software</span>. Software that is boring because it works, predictable because it is strongly typed,
                and secure because it is designed that way from the first line of code.
              </p>

              <div className="mt-6 p-6 border-l-4 border-[#6b4a49] dark:border-[#d4a574] bg-[#f9f5f1] dark:bg-[#1a1a1a]/50">
                <p className="text-[#6b4a49] dark:text-[#d4a574] font-semibold italic">
                  &quot;True seniority is knowing what not to build. I focus on removing complexity, not adding it.
                  The best system is one that solves the problem with the fewest moving parts and the strongest guarantees.&quot;
                </p>
              </div>

              <p className="mt-6 text-base font-normal leading-relaxed text-[#333333]/80 dark:text-[#c8a993]">
                I advocate for <span className="font-semibold">Radical Simplicity</span>. Complexity is the enemy of reliability.
                By leveraging strong static analysis, immutable infrastructure, and proven design patterns, I reduce the surface area for bugs to hide.
                I don&apos;t just deliver features; I deliver peace of mind.
              </p>
            </section>
            <section className="mt-16">
              <h2 className="font-handwriting text-3xl font-bold text-[#6b4a49] dark:text-[#c8a993] mb-2">
                Strategic Tooling
              </h2>
              <p className="text-base text-[#333333]/80 dark:text-[#c8a993] mb-6">
                My stack is selected for providing the best balance of developer experience, ecosystem maturity, and performance.
              </p>
              <SkillsSection skills={skills} />
            </section>
            <ExperienceSection experiences={experiences} />
            <ProjectsSection projects={featuredProjects} />
            <section className="mt-20 text-center">
              <h2 className="font-handwriting text-3xl font-bold text-[#6b4a49] dark:text-[#c8a993]">
                Let&apos;s Architect Your Next Venture
              </h2>
              <p className="mt-3 mx-auto max-w-lg text-base text-[#333333]/80 dark:text-[#c8a993]">
                Whether you're a founder needing a technical co-founder, a startup scaling their platform,
                or a team tackling a complex technical challenge—let's build something that matters.
              </p>
              <div className="mt-6 flex w-fit mx-auto flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton href="/projects">
                  Explore My Work
                </AnimatedButton>
                <AnimatedButton href="/contact" variant="ghost">
                  Start a Conversation
                </AnimatedButton>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

