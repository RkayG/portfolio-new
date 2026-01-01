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
  /*  {
     period: "2025 - Present",
     title: "Tech Consultant",
     company: "Talarge Ltd., United Kingdom",
     description:
       "Leading architecture and development of comprehensive SaaS platform including Smart POS, inventory, payroll, compliance for retailers in UK market, HMRC integration and culturally-tailored features.",
   }, */
  {
    period: "2025 - Present",
    title: "Software Developer (Consulting)",
    company: "Kentry Limited, UK",
    points: [
      "Developed the OnRoute dispatch system, automating real-time GPS tracking and job bidding workflows.",
      "Delivered a mobile app and an admin oversight system streamlining logistics for private transport services, and improving business efficiency by 50%.",

    ]
  },

  {
    period: "2025 - Present",
    title: "CTO/Lead Developer",
    company: "J-Vortex Inc.",
    points: [
      "Leading the technical vision and architecture for a suite of software products, including Wigree - a next-generation escrow-backed P2P social marketplace designed to build trust in decentralised transactions.",
      "Defined coding standards and technical strategy, ensuring 100% alignment with business goals."
    ]
  },

  {
    period: "2025 - Present",
    title: "Technical Co-founder/Lead Developer",
    company: "Cxperia, France",
    points: [
      "Architected and developed a B2B2C loyalty platform for cosmetic brands, focusing on high-fidelity UX and personalized engagement.",
      "Engineered a modular architecture that enabled 40% faster feature deployment and seamless API integrations.",

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
    title: "Business Manager",
    company: "Medaville Group, Nigeria",
    points: [
      "Managed overall business operations for construction firm with 10+ direct employees and 40+ indirect employees.",
      "Oversaw annual revenue of over 300 million."
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
              title="Lead Software Developer | Architecting Scalable Systems from Zero to One"
              description="I transform ambitious ideas into production-ready platforms. Equal parts technical architect and product strategist, I build systems that don't just work—they create business value and withstand scale."
            />
            <section className="mt-16">
              <h2 className="font-handwriting text-3xl font-bold text-[#6b4a49] dark:text-[#c8a993]">
                From First Principles to First Customers
              </h2>
              <p className="mt-4 text-base font-normal leading-relaxed text-[#333333]/80 dark:text-[#c8a993]">
                I don't just write code—I architect companies. My journey sits at the intersection of
                <span className="font-semibold text-[#6b4a49] dark:text-[#d4a574]"> technical depth</span> and
                <span className="font-semibold text-[#6b4a49] dark:text-[#d4a574]"> entrepreneurial execution</span>.
                I've launched multiple ventures from fun projects to revenue-generating platforms,
                navigating the full stack of startup challenges: product-market fit, team building,
                technical scalability, and user acquisition.
              </p>

              <p className="mt-4 text-base font-normal leading-relaxed text-[#333333]/80 dark:text-[#c8a993]">
                What distinguishes my approach? <span className="font-semibold">Architectural foresight</span>.
                I build systems that anticipate scale from day one while remaining agile enough to pivot.
                Whether it's designing a secure P2P social marketplace or architecting a B2B SaaS
                platform, I focus on creating <span className="italic">foundational infrastructure</span>
                that enables future possibilities, not just immediate features.
              </p>

              <div className="mt-6 p-6 border-l-4 border-[#6b4a49] dark:border-[#d4a574] bg-[#f9f5f1] dark:bg-[#1a1a1a]/50">
                <p className="text-[#6b4a49] dark:text-[#d4a574] font-semibold italic">
                  "The most elegant code solves problems users don't even know they have yet.
                  My job is to build the bridge between technical possibility and business necessity."
                </p>
              </div>

              <p className="mt-6 text-base font-normal leading-relaxed text-[#333333]/80 dark:text-[#c8a993]">
                My technical philosophy is simple: <span className="font-semibold">complexity behind the scenes,
                  simplicity in the experience</span>. I obsess over clean abstractions, type-safe systems,
                and security by design—because in production, elegance isn't a luxury, it's a requirement
                for maintainability and trust.
              </p>
            </section>
            <section className="mt-16">
              <h2 className="font-handwriting text-3xl font-bold text-[#6b4a49] dark:text-[#c8a993] mb-2">
                Strategic Toolbox
              </h2>
              <p className="text-base text-[#333333]/80 dark:text-[#c8a993] mb-6">
                Technologies I leverage not as ends in themselves, but as strategic tools to solve
                specific business challenges—from blockchain trust mechanisms to real-time SaaS architectures.
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

