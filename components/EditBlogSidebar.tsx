"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function EditBlogSidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/admin", icon: "dashboard", label: "Dashboard" },
    { href: "/admin/blog", icon: "article", label: "Blog Posts", filled: true },
    { href: "/admin/projects", icon: "folder", label: "Projects" },
    { href: "/admin/settings", icon: "settings", label: "Settings" },
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-[#fcfaf8] dark:bg-[#211811] border-r border-[#e7d9d0] dark:border-[#3a2e25]">
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkHcRQyCahXizaL4F37D5ddOjYP6x1VL6vtPOjsFFWwmAvOxnjfoJFIvE8Cuj3w6VzTC6bG43ST_WFc3dKH2qDGezX6J75nPcdo5e4jEIXlWsbMKQWkvQSfxDdfi19xWEGloPxyMvrYzHJF84Gm_ryKYlYGD7Rr8F465mz7tj1iJHR6MS3dox3K2CgT2KSAW_Ou5PDcXIZK3UY8jFKFHvuTddGi0lT-BvhyflWrLBJAXhpHa3eXzl7bZXjrJJsHSryqhV-DTu3_EE")',
              }}
            />
            <div className="flex flex-col">
              <h1 className="text-[#1b130e] dark:text-[#f3ece7] text-base font-medium leading-normal">
                Admin Panel
              </h1>
              <p className="text-[#976d4e] dark:text-[#a1887f] text-sm font-normal leading-normal">
                Portfolio CMS
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            {navItems.map((item) => {
              const isActive = pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-[#6D4C41]/10"
                      : "hover:bg-[#6D4C41]/10"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[#1b130e] dark:text-[#f3ece7]`}
                    style={
                      isActive && item.filled
                        ? { fontVariationSettings: "'FILL' 1" }
                        : undefined
                    }
                  >
                    {item.icon}
                  </span>
                  <p
                    className={`text-sm leading-normal ${
                      isActive
                        ? "text-[#6D4C41] font-bold"
                        : "text-[#1b130e] dark:text-[#f3ece7] font-medium"
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
          <Link
            href="/admin/blog/new"
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#6D4C41] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#6D4C41]/90 transition-colors"
          >
            <span className="truncate">New Post</span>
          </Link>
          <div className="flex flex-col gap-1">
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#6D4C41]/10 transition-colors">
              <span className="material-symbols-outlined text-[#1b130e] dark:text-[#f3ece7]">
                logout
              </span>
              <p className="text-[#1b130e] dark:text-[#f3ece7] text-sm font-medium leading-normal">
                Logout
              </p>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

