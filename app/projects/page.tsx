"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { FilterChips } from "@/components/FilterChips";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import Link from "next/link";
import { allProjects } from "@/data/projects";
import { AnimatedButton } from "@/components/AnimatedButton";

const categories = ["All", "Web App", "Blockchain", "Mobile App", "Backend Framework / Developer Tooling"];

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
                <h1 className="text-primary font-handwriting text-5xl font-bold leading-tight">
                  My Projects
                </h1>
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
                  <h2 className="text-[#333333] dark:text-white tracking-tight text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                    Interested in working together?
                  </h2>
                  <p className="text-[#333333]/80 dark:text-[#c8a993] text-base font-normal leading-normal max-w-[720px]">
                    Let&apos;s connect and build something amazing. I&apos;m
                    always open to new opportunities and collaborations.
                  </p>
                </div>
                <div className="flex justify-center">
                  <AnimatedButton href="/contact">Contact Me</AnimatedButton>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

