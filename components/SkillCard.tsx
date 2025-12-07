"use client";

import { useState } from "react";

interface SkillCardProps {
  name: string;
  icon: string;
}

export function SkillCard({ name, icon }: SkillCardProps) {
  const [imageError, setImageError] = useState(false);
  
  // Check if icon is a URL (image)
  const isImageIcon = icon.startsWith("http://") || icon.startsWith("https://");
  
  // Map tech names to Simple Icons slugs (for DuckDuckGo/Simple Icons)
  const getSimpleIconSlug = (techName: string): string | null => {
    const iconMap: Record<string, string> = {
      // Programming Languages
      "JavaScript": "javascript",
      "TypeScript": "typescript",
      "Python": "python",
      "C": "c",
      "Rust": "rust",
      "Bash": "gnubash",
      "Solidity": "solidity",
      
      // Frameworks & Libraries
      "React": "react",
      "React Native": "react",
      "Next.js": "nextdotjs",
      "Node.js": "nodedotjs",
      "Express": "express",
      "Tailwind CSS": "tailwindcss",
      "Expo": "expo",
      "Ethers.js": "ethereum",
      "Django": "django",
      "Flask": "flask",
      "FastAPI": "fastapi",
      "Vite": "vite",
      "Prisma": "prisma",
      
      // Blockchain
      "Ethereum": "ethereum",
      "Solana": "solana",
      "Binance Smart Chain": "binance",
      "Polygon": "polygon",
      "IPFS": "ipfs",
      "Hardhat": "hardhat",
      "Truffle": "truffle",
      "OpenZeppelin": "openzeppelin",
      "Foundry": "foundry",
      "Anchor": "anchor",
      
      // Databases
      "PostgreSQL": "postgresql",
      "MySQL": "mysql",
      "MongoDB": "mongodb",
      "Redis": "redis",
      "Supabase": "supabase",
      
      // Cloud Platforms
      "AWS": "amazonaws",
      "Hetzner": "hetzner",
      "Railway": "railway",
      "DigitalOcean": "digitalocean",
      "OVH Cloud": "ovh",
      "Vercel": "vercel",
      "Render": "render",
      
      // DevOps & Deployment
      "Docker": "docker",
      "Kubernetes": "kubernetes",
      "Helm": "helm",
      "Jenkins": "jenkins",
      "GitLab CI/CD": "gitlab",
      "GitHub Actions": "githubactions",
      "Git": "git",
      
      // Testing
      "Jest": "jest",
      "React Testing Library": "testinglibrary",
      "Cypress": "cypress",
      "Playwright": "playwright",
      "Puppeteer": "puppeteer",
      "TestCafe": "testcafe",
      "Selenium": "selenium",
      "Mocha": "mocha",
      
      // Monitoring & Reporting
      "Metabase": "metabase",
      "Prometheus": "prometheus",
      "Grafana": "grafana",
      "Datadog": "datadog",
      "Sentry": "sentry",
      
      // Development Tools
      "Postman": "postman",
      "Insomnia": "insomnia",
      "cURL": "curl",
      "Remix": "remix",
    };
    
    return iconMap[techName] || null;
  };

  const simpleIconSlug = getSimpleIconSlug(name);
  const useSimpleIcon = simpleIconSlug && !isImageIcon && icon === "code" && !imageError;

  return (
    <div className="flex flex-1 items-center gap-3 rounded-lg border border-[#654834] dark:border-[#654834] bg-white/5 dark:bg-[#32241a] p-4">
      <div className="text-primary flex items-center justify-center w-6 h-6 shrink-0" data-icon={name}>
        {isImageIcon ? (
          <img 
            src={icon} 
            alt={`${name} icon`}
            className="w-6 h-6 object-contain"
            onError={() => setImageError(true)}
          />
        ) : useSimpleIcon ? (
          <img 
            src={`https://cdn.simpleicons.org/${simpleIconSlug}/8D6E63`}
            alt={`${name} icon`}
            className="w-6 h-6 object-contain dark:brightness-0 dark:invert dark:opacity-80"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="material-symbols-outlined">{icon}</span>
        )}
        {imageError && useSimpleIcon && (
          <span className="material-symbols-outlined">{icon}</span>
        )}
      </div>
      <h2 className="text-[#333333] dark:text-white text-base font-bold leading-tight">
        {name}
      </h2>
    </div>
  );
}

