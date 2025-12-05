"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  icon: string;
  label: string;
  active?: boolean;
}

export function AdminSidebar() {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { href: "/admin", icon: "dashboard", label: "Dashboard" },
    { href: "/admin/blog", icon: "article", label: "Blog Posts" },
    { href: "/admin/projects", icon: "code_blocks", label: "Projects" },
    { href: "/admin/analytics", icon: "monitoring", label: "Analytics" },
    { href: "/admin/settings", icon: "settings", label: "Settings" },
  ];

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-[#D7CCC8] dark:border-[#333333] bg-[#FAFAFA] dark:bg-[#1a1a1a] sticky top-0">
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 px-2">
            <span className="material-symbols-outlined text-[#4E342E] text-3xl">
              terminal
            </span>
            <h1 className="text-xl font-bold text-[#4E342E]">Admin Panel</h1>
          </div>
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    isActive
                      ? "bg-[#D7CCC8] dark:bg-[#4E342E]/30 text-[#4E342E] dark:text-[#D7CCC8]"
                      : "text-[#1f1f1f] dark:text-[#e0e0e0] hover:bg-[#D7CCC8]/50 dark:hover:bg-[#4E342E]/20"
                  }`}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <p
                    className={`text-sm ${
                      isActive ? "font-bold" : "font-medium"
                    }`}
                  >
                    {item.label}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="border-t border-[#D7CCC8] dark:border-[#333333] pt-4">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDfJ988K1nuYbiOJ-MV2T-DcVBNwhThEK1w6WFUICPaqQmowOo9sD3JFxdq7FtVQANQxdntLYvnidcXwwWiLOwbjv7fAMD1ydxb6vDV0UbVOoI23KZvXRehH23ssCDsJFvS5zeHeYkDxAlIWglgPR6gDkHOks8ggGgLeYdWlJceq3ixM3GK54g02nVbRpI-Ffg0JXllsvxImecUhm6K21i3mcRh-BecBrDfsLPuVwiWWSSWqIH4_FmM354nu6gTaACygSdiZmVIHr0")',
                }}
              />
              <div className="flex flex-col">
                <h1 className="text-[#1f1f1f] dark:text-[#e0e0e0] text-base font-medium">
                  Rufus Gladness
                </h1>
                <p className="text-[#795548] dark:text-[#D7CCC8]/70 text-sm font-normal">
                  Administrator
                </p>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#1f1f1f] dark:text-[#e0e0e0] hover:bg-[#D7CCC8]/50 dark:hover:bg-[#4E342E]/20">
            <span className="material-symbols-outlined">logout</span>
            <p className="text-sm font-medium">Logout</p>
          </button>
        </div>
      </div>
    </aside>
  );
}

