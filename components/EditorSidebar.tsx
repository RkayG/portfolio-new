"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function EditorSidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/admin", icon: "dashboard", label: "Dashboard" },
    { href: "/admin/blog", icon: "edit_document", label: "Posts", filled: true },
    { href: "/admin/categories", icon: "sell", label: "Categories" },
    { href: "/admin/media", icon: "perm_media", label: "Media" },
  ];

  const bottomNavItems = [
    { href: "/admin/settings", icon: "settings", label: "Settings" },
    { href: "/admin/logout", icon: "logout", label: "Logout" },
  ];

  return (
    <aside className="flex h-screen min-h-[700px] w-64 flex-col justify-between bg-[#f4f1ee] dark:bg-[#221811] p-4 border-r border-black/5 dark:border-white/5 sticky top-0">
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 items-center">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAcU6SER8gkW7d3oNXea2_zzna7jPAS4fgaHAR5bKdKh9Y3tsd9u9hL2AWXVfiEnl9V-RQBj5ZdUz9wikezHspae4NJtTdvDoDk4RAmD6KeLW2bXN3sen4n-ulcb_i3BIUBnAeM7U28BQgbEeloOysgLU3dM_d1j8rbWWyEheaOKC-6asA1ikQjdRkQAaK6XcgPO94ZxghZEnDA_Po9wz4lXgcT15Wc0dmakAjqZEUhwXuTrZTyfA1rR2SQTXjjo-9ViIeqFfrkMzY")',
            }}
          />
          <div className="flex flex-col">
            <h1 className="text-slate-800 dark:text-white text-base font-medium leading-normal">
              Admin Panel
            </h1>
            <p className="text-slate-500 dark:text-[#c8a993] text-sm font-normal leading-normal">
              Blog Management
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
                className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                  isActive
                    ? "bg-[#6D4C41]/10 dark:bg-[#473324]"
                    : "text-slate-700 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                <span
                  className={`material-symbols-outlined ${
                    isActive
                      ? "text-[#6D4C41] dark:text-white"
                      : "text-slate-600 dark:text-white"
                  }`}
                  style={
                    isActive && item.filled
                      ? { fontVariationSettings: "'FILL' 1" }
                      : undefined
                  }
                >
                  {item.icon}
                </span>
                <p
                  className={`text-sm font-medium leading-normal ${
                    isActive
                      ? "text-[#6D4C41] dark:text-white"
                      : ""
                  }`}
                >
                  {item.label}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {bottomNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg"
          >
            <span className="material-symbols-outlined text-slate-600 dark:text-white">
              {item.icon}
            </span>
            <p className="text-sm font-medium leading-normal">{item.label}</p>
          </Link>
        ))}
      </div>
    </aside>
  );
}

