import { Metadata } from "next";
import { Header } from "@/components/Header";
import { SkillsCategory } from "@/components/SkillsCategory";

const programmingLanguages = [
  { name: "JavaScript", icon: "javascript" },
  { name: "Python", icon: "data_object" },
  { name: "Solidity", icon: "hexagon" },
  { name: "TypeScript", icon: "integration_instructions" },
  { name: "C", icon: "code" },
  { name: "Rust", icon: "code" },
  { name: "Bash", icon: "code" },
];

const frameworksLibraries = [
  { name: "React", icon: "javascript" },
  { name: "Next.js", icon: "web" },
  { name: "Node.js", icon: "developer_mode" },
  { name: "React Native", icon: "code" },
  { name: "Electron", icon: "code" },
  { name: "Tailwind CSS", icon: "air" },
  { name: "Expo", icon: "code" },
  { name: "Ethers.js", icon: "link" },
  { name: "Express", icon: "code" },
  { name: "Django", icon: "code" },
  { name: "Flask", icon: "code" },
  { name: "FastAPI", icon: "code" },
  { name: "Vite", icon: "code" },
  { name: "Prisma", icon: "code" },
];

const blockchainDevelopment = [
  { name: "Ethereum", icon: "currency_bitcoin" },
  { name: "Solana", icon: "code" },
  { name: "Binance Smart Chain", icon: "code" },
  { name: "Polygon", icon: "code" },
  { name: "IPFS", icon: "hub" },
  { name: "Hardhat", icon: "code" },
  { name: "Truffle", icon: "code" },
  { name: "OpenZeppelin", icon: "code" },
  { name: "Foundry", icon: "code" },
  { name: "Anchor", icon: "code" },
];

const databases = [
  { name: "PostgreSQL", icon: "code" },
  { name: "MySQL", icon: "code" },
  { name: "MongoDB", icon: "code" },
  { name: "Redis", icon: "code" },
  { name: "Supabase", icon: "code" },
];

const cloudPlatforms = [
  { name: "AWS", icon: "cloud" },
  { name: "Hetzner", icon: "code" },
  { name: "Railway", icon: "code" },
  { name: "DigitalOcean", icon: "code" },
  { name: "OVH Cloud", icon: "code" },
  { name: "Vercel", icon: "code" },
  { name: "Render", icon: "code" },
];

const devOpsDeployment = [
  { name: "Docker", icon: "deployed_code" },
  { name: "Kubernetes", icon: "code" },
  { name: "Helm", icon: "code" },
  { name: "Jenkins", icon: "code" },
  { name: "GitLab CI/CD", icon: "code" },
  { name: "GitHub Actions", icon: "code" },
  { name: "Git", icon: "share" },
];

const testing = [
  { name: "Jest", icon: "code" },
  { name: "React Testing Library", icon: "code" },
  { name: "Cypress", icon: "code" },
  { name: "Playwright", icon: "code" },
  { name: "Puppeteer", icon: "code" },
  { name: "TestCafe", icon: "code" },
  { name: "Selenium", icon: "code" },
  { name: "Mocha", icon: "code" },
];

const monitoringReporting = [
  { name: "Metabase", icon: "code" },
  { name: "Prometheus", icon: "code" },
  { name: "Grafana", icon: "code" },
  { name: "Datadog", icon: "code" },
  { name: "Sentry", icon: "code" },
];

const architectureSystems = [
  { name: "Microservices", icon: "code" },
  { name: "Monolith", icon: "code" },
  { name: "Event-Driven Architecture", icon: "code" },
  { name: "Multi-Tenant Architecture", icon: "code" },
  { name: "Serverless Architecture", icon: "code" },
  { name: "API Gateway", icon: "code" },
  { name: "Domain-Driven Design", icon: "code" },
  { name: "Sharding", icon: "code" },
];

const developmentTools = [
  { name: "Postman", icon: "code" },
  { name: "Insomnia", icon: "code" },
  { name: "cURL", icon: "code" },
  { name: "Remix", icon: "code" },
];

const securityAccessControl = [
  { name: "Role-Based Access Control", icon: "code" },
  { name: "Data Encryption", icon: "code" },
  { name: "Two-Factor Authentication", icon: "code" },
  { name: "XSS Protection", icon: "code" },
  { name: "CSRF Protection", icon: "code" },
  { name: "SQL Injection Prevention", icon: "code" },
  { name: "Rate Limiting", icon: "code" },
  { name: "Content Security Policy", icon: "code" },
  { name: "Bot Protection & Abuse Prevention", icon: "code" },
];


export const metadata: Metadata = {
  title: "Skills & Technologies",
  description: "A comprehensive overview of my technical expertise, including JavaScript, Python, Solidity, Next.js, Docker, and AWS.",
  alternates: {
    canonical: "/skills",
  },
};

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
                <h1 className="text-primary text-4xl md:text-5xl font-handwriting font-bold leading-tight tracking-[-0.033em]">
                  Skills & Technologies
                </h1>
                <p className="text-[#333333]/80 dark:text-[#c8a993] max-w-2xl text-base font-normal leading-normal">
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
                title="Blockchain Development"
                skills={blockchainDevelopment}
              />
              <SkillsCategory
                title="Databases"
                skills={databases}
              />
              <SkillsCategory
                title="Cloud Platforms"
                skills={cloudPlatforms}
              />
              <SkillsCategory
                title="DevOps & Deployment"
                skills={devOpsDeployment}
              />
              <SkillsCategory
                title="Testing"
                skills={testing}
              />
              <SkillsCategory
                title="Monitoring & Reporting"
                skills={monitoringReporting}
              />
              <SkillsCategory
                title="Architecture & Systems"
                skills={architectureSystems}
              />
              <SkillsCategory
                title="Security & Access Control"
                skills={securityAccessControl}
              />
              <SkillsCategory
                title="Development Tools"
                skills={developmentTools}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

