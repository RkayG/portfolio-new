"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { FilterChips } from "@/components/FilterChips";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Project } from "@/types/project";
import Link from "next/link";

const allProjects: Project[] = [
  {
    id: "1",
    title: "DeFi Trading Platform",
    description:
      "A decentralized finance platform for trading digital assets with real-time data.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNRyX4RMuo6NZb023axJ_9QdCXm3nbJ4YIl7tnh3jeFnwZNWbpdSLOXwViIn0dTfaRr13z-mJ8V5O8aiqsrXpPbcoxhSVIWV7N7E_jAwKF1_-ptUdajYI4Fcy9Yod9GanyQB6uHTcauyYsRM0aGegLB1GYrkWES3ZM9M2jW2cgMMcA8uGhAj0XuwrYnjZh4eO7kp2whWGZ3AmGQzHe1juuLFUUU8KElDMW0S_a8DohtaaMk0LAR8rrdg0tA2TpV1EGbfXQJmMTVYw",
    imageAlt: "Screenshot of a DeFi Trading Platform dashboard",
    technologies: ["React", "Solidity", "Web3.js"],
    category: "Blockchain",
    liveDemoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "2",
    title: "NFT Marketplace",
    description:
      "A full-stack marketplace for creating, buying, and selling unique NFTs on the Ethereum blockchain.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZRj2kfl4Kqf9MgOEiQnPCCTsifk7GFMfR-LH6rQG01g_CGCOrQ61l7o3oNJS2MA8_q6U85bymKVQ1L90YhzIJ1B_Is-85TVuaFa8kubi549O8ydtF4avD0ubf3byIFC_U5z8nn56Eu_8yTPLHywf8IlJ48Z_ByFRNnxwGXVdXnh9ZRQiViGmlwVlIdPNCdupU-m_DAzjhNF2c_wDxeSjeWsRfTHSPJBobnIUkmRMlMBXtDYEeycVwjfi_enzu41mhD3Z6SmyQwJ0",
    imageAlt: "Screenshot of an NFT Marketplace with various digital art",
    technologies: ["Next.js", "TailwindCSS", "Ethers.js"],
    category: "Blockchain",
    liveDemoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "3",
    title: "E-commerce Website",
    description:
      "A modern, responsive e-commerce solution with a custom backend and payment integration.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpau77knzT06L2Xl0r0QhEw6zEUmh41R3nzDJbEyOdvlzvmHgY4uxBAJMRHtCr-bQnAZx89Rf_yg8C6I-HRgrvsdZ1HdXLmk7VUo_ES4M_bnWUfTsaIcILfytwxTwRfHHoqGvrbco4BJhxqMHwAk1aEifp5vJ5k1EgS_d3TkyqkIjN2uAAFBLJGjwT_qrOwVv9MR1l-dqFZMHpfiXHQuS-e7XazQRajAzFMbiFOd-Wel6Dw6jp2eOOLWGtTDfETtrCPEp66Sz0bYg",
    imageAlt: "Screenshot of an e-commerce website showing product listings",
    technologies: ["Vue.js", "Node.js", "Stripe API"],
    category: "Web App",
    liveDemoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "4",
    title: "Task Management App",
    description:
      "A collaborative tool to help teams organize, track, and manage their work efficiently.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCs2AGa5SwqATBpB6bZWgRe5gPilcqSx1ry-rIzRjETtErKzMrjMJKBEmQ3pFduo4UE8V_7R8FF6E1vTD_3fHGHzic_1opKffWG2MiQlV0BMpHRtHskqVOO_jUnhKZAjySHCnkBL4sSI5X0NgW3NlaiAdKEgamF5RkrnfRU8vz-vyplZKS3gQGyDsLQwsDjFceQO_aw70dxjXj5VjMGlVNecDmxeuPnzuqHljeMq_FJ3UTVa8NdAyPbkiuev17PiywIG4htc-r-hNo",
    imageAlt: "Screenshot of a Task Management App with boards and cards",
    technologies: ["React Native", "Firebase", "GraphQL"],
    category: "Mobile App",
    liveDemoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "5",
    title: "Personal Blog Engine",
    description:
      "A lightweight and fast blog built with a static site generator and headless CMS.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCd8FKx4j0jlS2PxHJg_8Abb4WoUj4Kk691bLgOiO5eXkH3WUn5wTcxz0myGzUKqxMIqQsGnnAu6fdp-aqo7gn_xAjlLyHKG2x-7Y7ES50-AwBqllSsvH_DObvMH9-SasAwLidtHZ0cZIG09L_bxKzRkg-Sv4Wdoglg5y0zpKygxvIbqQgtpWBbmnBXxskKH4u2yZDUalk3eV98Q9PQhlW9zK9v2jtjW4IEV57_nsRJsj8mmtpnfWBNA9RTmL6LMl7we8w4RcBPhs0",
    imageAlt: "Screenshot of a clean, minimalist blog website",
    technologies: ["Gatsby", "Contentful", "Markdown"],
    category: "Web App",
    liveDemoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "6",
    title: "Supply Chain dApp",
    description:
      "A blockchain application to track goods from origin to consumer with full transparency.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuArk0XRxMTVOv9Uu52bFfPhyaH7jmvLlFH2A1E1eJeyjAxc7MedZRGS8X6d0Mk3ZomwMt79IjXZkVYIJsSaxCxdaIFaLOy5bsQ88O8x5pCDbXICKdLYZr0qCStI6DJbJeQQWmPIcxFrNeBV0ZfH4KHzooTM5-hCccmxDDGmY7pS8h_eJ-4m6V7SuMuGOpgi7BzgDh7_gfy2njRI4r5xUFC6aUYO2fH0E3H0honcyUDX3h45x1r4_CJsA7kmEDKzwCtZ91vUmIjCUp8",
    imageAlt: "Abstract graphic representing a supply chain dApp",
    technologies: ["Hyperledger", "Docker", "Go"],
    category: "Blockchain",
    liveDemoUrl: "#",
    githubUrl: "#",
  },
];

const categories = ["All", "Web App", "Blockchain", "Mobile App"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <div className="flex-grow">
        <div className="mx-auto flex w-full max-w-[960px] flex-col px-4 sm:px-8 lg:px-0">
          <Header />
          <main className="flex flex-col gap-8 py-10">
            {/* PageHeading */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex w-full flex-col gap-3">
                <p className="text-primary font-handwriting text-5xl font-bold leading-tight">
                  My Projects
                </p>
                <p className="text-[#333333]/80 dark:text-[#c8a993] text-base font-normal leading-normal max-w-2xl">
                  A showcase of my key software development and blockchain
                  projects. Here you&apos;ll find a curated selection of work
                  that highlights my skills and passion for building innovative
                  solutions.
                </p>
              </div>
            </div>
            {/* Filter Chips */}
            <FilterChips
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            {/* Projects Grid */}
            <ProjectsGrid projects={filteredProjects} />
            {/* CTA Section */}
            <div className="@container">
              <div className="flex flex-col items-center justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-[#333333] dark:text-white tracking-tight text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                    Interested in working together?
                  </h1>
                  <p className="text-[#333333]/80 dark:text-[#c8a993] text-base font-normal leading-normal max-w-[720px]">
                    Let&apos;s connect and build something amazing. I&apos;m
                    always open to new opportunities and collaborations.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Link
                    href="/contact"
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-primary/90 transition-colors"
                  >
                    <span className="truncate">Contact Me</span>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

