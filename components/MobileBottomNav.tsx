"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function MobileBottomNav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  const navItems = [
    { href: "/about", label: "About", icon: "person" },
    { href: "/skills", label: "Skills", icon: "psychology" },
    { href: "/projects", label: "Projects", icon: "folder" },
    { href: "/blog", label: "Blog", icon: "article" },
  ];

  // Check screen width on mount and resize
  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);

    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  // Scroll handler - hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);

      // Only trigger if scroll difference is significant enough
      if (scrollDifference < 5) return;

      const scrollDirection = currentScrollY > lastScrollY ? "down" : "up";

      // Show when scrolling up, hide when scrolling down
      // Also show if we're at the very top
      if (currentScrollY <= 10) {
        setIsVisible(true);
      } else if (scrollDirection === "up") {
        setIsVisible(true);
      } else if (scrollDirection === "down") {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Only show on mobile devices (screens < 768px)
  if (screenWidth >= 768 || screenWidth === 0) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 flex justify-center px-4 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mb-4 flex bg-background-light/95 dark:bg-background-dark/95 rounded-full shadow-lg border border-[#4A2E2A]/20 dark:border-[#473324] overflow-hidden backdrop-blur-md">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center px-3 py-2 text-xs font-medium transition-all duration-200 min-w-[60px] ${
                isActive
                  ? "text-white"
                  : "text-[#333333] dark:text-white/70 hover:text-[#4A2E2A] dark:hover:text-[#c8a993]"
              }`}
              style={{
                backgroundColor: isActive ? "#8D6E63" : "transparent",
              }}
            >
              <span className="material-symbols-outlined text-lg mb-1">
                {item.icon}
              </span>
              <span className="text-[10px] leading-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

