import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProfileHeader } from "@/components/ProfileHeader";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import Link from "next/link";
import { allProjects } from "@/data/projects";

const skills = [
  {
    name: "Python",
    iconUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgg18wuXmd5FNOZhqI38kJI9H5LB-raVY_hW_mfeohooK7UNognIZ5p2tGg6_ncnOf1K5beoc7Plh8nSs0cOKXUTgnh9gioO11cQvqEhEjOjlzdXy6boZKUQ72K3EE6mog_s9srDeIwTbHAwAg3vL-ZTe50_FiNvwygsM2fRN_3B6pPy1mLUhJv69Oa64NSMeeU2-HY3xu5hJGL8K1tE4s3ch6R4VJwJQ_qPtipn7P9j5lGMg2pJX8VBgCHKVIvW6Jn7JfapG3ze8",
    iconAlt: "Python logo",
  },
  {
    name: "Solidity",
    iconUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKA6_8Y3fYoUiYLgP59y4yjOL0PtHi0WY6MWXUxNZOAQ5IN-_qVQ2Cnbq3dro6jFnAuqz0VkNvRq73IouzxTcFq_Zk3TcW7eObGAL7BG5hnLW2CZeLYG1_g8yzWikoDZ9XVtPKDuIu5iXZx3OoFcTmEff8VQrnI0wFZnpZN7ufmqJ-DFF-b9RB_E7JT4_6h1_uRaBmDSxUE1WH0Plw-ecx9jmnU9maBlDN5aNBmtxfAgk9b7AEwKCj3ptAMnujPCjPoojplRH2lTg",
    iconAlt: "Solidity logo",
  },
  {
    name: "React",
    iconUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuArhO8Y65-QMsbRZgXXZlMjOL9pdW4fTEuN1PTlkdHbPGr4Z61N_hE1H1glvXxx-rFrl6s89SF9_g6gecE1kumKUTqQL9hno4fc5n9cmlpYOwD5ebXzqD6oc_OMRjz8WIC8SXhvEbPVxgtH-QC9CfkdIHR7_ScQFSE6GF4CecvEAtL-fcDVNBs_G40m5DT_xVeXEuhFAwM8_F1Kfz30aiKGOK4fdXDihOXF8y9AdL4Ld-yYsoJ53rKDhNbyBYvLvq1yLKhkUGHlU_4",
    iconAlt: "React logo",
  },
  {
    name: "JavaScript",
    iconUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-qwURbilOFgBYhfR3Oue4zYCO6BknKAlVslCO8bYq2JA9kqPUUsOoZ4PUgKaw7mEYjJheLE7marKZtccNz_27PC53-lUJUkP45H5N10Qjr86MH0cPO9uXkRmtV6lQN3npYXucizeyogdmLYWWRvGPRL-_0OrMIMdFuZib-so1rvT39iQ9zChcWXFQhiIfZ9gqpAv8kAuyiD9rLgxe_zMPo4hAT66ARc9UIYnDUHTwGxLnyTyKN9hJ9Hjj_LD5G7dP8P0Vh_UDUg0",
    iconAlt: "JavaScript logo",
  },
  {
    name: "Docker",
    iconUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmHjgfLSm65-Z_eJZE4XpjpWLoZtbY4h_xwUyHD30dGig1wLy0PB6-0-ka73ZEFNstTUSb_sK-vmUuxS4Ec_X1PTQmsUfIpon_P9tyd49ly7IBTPIlqJLI7Imkfg8LE-wmH6j7rg2A0ktkkHmIf-4P40MMuQoIWgbbcQphfK5a7y5QbbBUL4ztiI0RwLlMS5W1-a14dHJbjIOD09LTpROnPrFLUj24hu_BrxzW1FVXTRUIfGhsG9z8zM8xAFrzYG_GR6rkOFq6Lwo",
    iconAlt: "Docker logo",
  },
  {
    name: "Node.js",
    iconUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKJYbEfI5iVmrINcdL93c6-28DTE1P5IyNXFS4uyDqK16ShHIXkqolDkqygBJ14B1mcKQyrtBikals4j_veKyGSgaTjcFpu7_gfJXVDEH1Kv9qrIhNOPrUayZxLOg_UCacxfShZ7d7N5U3kzLs1--AHCoKtPgTlFSS3t9QdONeak2LkHIg_JcSGJ7L4HYwb5Uf092MPxwumpnq06SGOdoNGfUF_2EGBog3s9v-fMPvx5AcHkeGWMo5Abe_2EW97UgxrUmgj2uI_7E",
    iconAlt: "Node.js logo",
  },
  {
    name: "PostgreSQL",
    iconUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB4nUgzlOqWqYvOwXzPyAamBtiAzb5x9KL85lt2GFfadu_HEME4JJrg_-tJJqWcYgDf7m9gsfiXRGRoJSlSxRAUDsXQcbIhNHNqLTI0H9e57h4qRjjl22kHMeknsPfDWKLNCdCWKfhmSQWSqAOly6eOLIFAMRqDRnzq1pSqNTWtCzDURC5UoZ69iINRyJyRgfA9cJkH_KO9f-tKOoAPgb7BMCuerO7QSXTMvVJ2U0MMAzCUXgCNbefkMg0hlmIJgvZHXfIuyw-h97Y",
    iconAlt: "PostgreSQL logo",
  },
  {
    name: "Tailwind",
    iconUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC533f-CEcEKCWAKwHkCOseg8KHRbkJrPF2yi5RZWovJLJ-pmGKrXzi3tr8IqR47w0ngkT2PHaA7WlIY14iqk2jJuozsIAPx5sMIzeCNW9UW7si0qhs2lDL-CXeInJuMb-WtVXb01jPtcbVPLXUWBjfvMzH69vLMaTnWYexC3Bhj4unfYoY3EdkOVXmuXreOAd3EOS3RX4WgyNpI_V6FtrPU8Viyf4eEuM9MG9SPlhnJP8CWOOHNxZxw2jVr0vexKqJsXW7pzgXLgM",
    iconAlt: "Tailwind CSS logo",
  },
  {
    name: "Ethers.js",
    iconUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6nQfR3-pSA6IgX46gA_OLwmQ05st0OagTsQf7tY_lyv7BcTe39CjsrMVok7FAtCMvwDxWWbayjRL0kLTnR0VBDNLIDN1rIvbpAwLR0CgeUTNubLFTpGIz8McjB5yQmmzM8pQE1wl7jG57EzUq5ydvhbq6uei93W9gtFyo--BSGUUVR_TUqLH2v3az2Gh6f1zCfxIJprvOGkEPVurPc3wG8Z9_MfWbOjDa23dDU8-StFJSMZzpIuWQDEpbfe6d5gOUnEnlYifrIEQ",
    iconAlt: "Ethers.js logo",
  },
  {
    name: "AWS",
    iconUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8sRn1P74Wr8fzRbmILqxuPi3RqLy606BnvHRsHmm-nACjWGJW-4iPdrrRKC05RynPZdA3SUEYdNkvh8DMVw1VZt5FmY_Wm-M-aLhSuhO06GVdvG3ehMvep812ogq_cEuYqZ-oTtmB27uq2Mnc6T_jfZWQVTP0kVKZSj4pba-hJV4IT2kzb6H2w3NGca_wSS90joSpner68hxmexYegkjnEr-DVbFU1o3GBS9mv3WN_fb2QxkrcfmRJNM2ihtcoerez9cu4hAF_W8",
    iconAlt: "AWS logo",
  },
  {
    name: "Heroku",
    iconUrl:
      "https://cdn.simpleicons.org/heroku/430098",
    iconAlt: "Heroku logo",
  },
  {
    name: "Cloudinary",
    iconUrl:
      "https://res.cloudinary.com/cloudinary/image/upload/c_scale,w_200/v1/logo/for_white_bg/cloudinary_icon_blue.png",
    iconAlt: "Cloudinary logo",
  },
];

const experiences = [
  {
    period: "2025 - Present",
    title: "CTO / Lead Engineer",
    company: "J Vortex",
    description:
      "Part-time role leading the development of the company's suite of software, including Wigree, a next-generation escrow-backed peer-to-peer social marketplace. Responsible for technical strategy, architecture decisions, and engineering team leadership.",
  },
  {
    period: "2025 - Present",
    title: "Lead Developer",
    company: "Cxperia",
    description:
      "Built the Cxperia platform, a customer loyalty platform for cosmetic brands to design and manage dynamic product experiences. Led the development of the entire platform architecture, focusing on creating engaging and personalized customer experiences.",
  },
  {
    period: "2024 - Nov 2024",
    title: "Head of IT",
    company: "BettyBet",
    description:
      "Managed IT operations and infrastructure for a virtual betting company. Responsible for overseeing technical systems, ensuring platform reliability, and leading the IT team to support business operations.",
  },
  {
    period: "2019 - 2021",
    title: "Full-Stack Developer",
    company: "Innovatech Solutions",
    description:
      "Developed and maintained web applications using React and Node.js, contributing to a 20% improvement in application performance.",
  },
  {
    period: "2018 - 2019",
    title: "Software Engineer Intern",
    company: "Tech Startup Co.",
    description:
      "Assisted in the development of a customer relationship management tool, focusing on frontend features and bug fixes.",
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
                My Story
              </h2>
              <p className="mt-4 text-base font-normal leading-relaxed text-[#333333]/80 dark:text-[#c8a993]">
                I started sofware engineering as a curious crypto trader. Watching markets move every day made me deeply curious about how blockchains and cryptocurrencies actually work under the hood, which pulled me into programming. Once I got into software development, I realized there&apos;s a big gap between casual scripts, regular web apps, and the kind of engineering needed to build real blockchain systems.
              </p>
              <p className="mt-4 text-base font-normal leading-relaxed text-[#333333]/80 dark:text-[#c8a993]">
                Instead of jumping straight into smart contracts, I first focused on mastering Web2 fundamentals: building APIs, architecting backends, working with databases, and shipping production systems end-to-end. With that foundation, I moved into the EVM and Solana ecosystems, exploring AMMs, MEV bots, trading algorithms, and full-stack dApps. Today I combine that trading background with solid engineering experience to design and build blockchain and fintech platforms that are not just clever, but reliable, secure, and scalable.
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
              <Link
                href="/projects"
                className="mt-6 inline-flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#8D6E63] dark:bg-[#cf6417] text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity mx-auto"
              >
                <span className="truncate">View My Work</span>
              </Link>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

