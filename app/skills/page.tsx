import { Header } from "@/components/Header";
import { SkillsCategory } from "@/components/SkillsCategory";

const programmingLanguages = [
  { name: "JavaScript", icon: "javascript" },
  { name: "Python", icon: "data_object" },
  { name: "Solidity", icon: "hexagon" },
  { name: "Go", icon: "code" },
  { name: "TypeScript", icon: "integration_instructions" },
];

const frameworksLibraries = [
  { name: "React", icon: "javascript" },
  { name: "Next.js", icon: "web" },
  { name: "Node.js", icon: "developer_mode" },
  { name: "Tailwind CSS", icon: "air" },
  { name: "Ethers.js", icon: "link" },
];

const blockchainDevOps = [
  { name: "Ethereum", icon: "currency_bitcoin" },
  { name: "Docker", icon: "deployed_code" },
  { name: "AWS", icon: "cloud" },
  { name: "Git", icon: "share" },
  { name: "IPFS", icon: "hub" },
];

export default function SkillsPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <div className="flex-grow">
        <div className="mx-auto flex w-full max-w-[960px] flex-col px-4 sm:px-8 lg:px-0">
          <Header />
          <main className="flex-1 flex flex-col gap-10 py-10 md:py-16">
              {/* PageHeading */}
              <div className="flex flex-wrap justify-between gap-4 p-4">
                <div className="flex flex-col gap-3">
                  <p className="text-[#333333] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                    Skills & Technologies
                  </p>
                  <p className="text-[#c8a993] max-w-2xl text-base font-normal leading-normal">
                    A comprehensive overview of my technical expertise, from
                    programming languages and frameworks to blockchain and
                    DevOps.
                  </p>
                </div>
              </div>
              {/* Skills Section */}
              <div className="flex flex-col gap-8">
                <SkillsCategory
                  title="Programming Languages"
                  skills={programmingLanguages}
                />
                <SkillsCategory
                  title="Frameworks & Libraries"
                  skills={frameworksLibraries}
                />
                <SkillsCategory
                  title="Blockchain & DevOps"
                  skills={blockchainDevOps}
                />
              </div>
          </main>
        </div>
      </div>
    </div>
  );
}

