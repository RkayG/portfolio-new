"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function FloatingWizardButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLargeDevice, setIsLargeDevice] = useState(false);

  useEffect(() => {
    // Check if device is large (lg breakpoint: 1024px)
    const checkDeviceSize = () => {
      setIsLargeDevice(window.innerWidth >= 1024);
    };

    checkDeviceSize();
    window.addEventListener("resize", checkDeviceSize);

    // Auto-expand/collapse on large devices only
    if (isLargeDevice) {
      // Start collapsed on large devices
      setIsExpanded(false);

      // Auto-expand every 15 seconds, show for 5 seconds, then collapse
      const expandInterval = setInterval(() => {
        setIsExpanded(true);
        setTimeout(() => {
          setIsExpanded(false);
        }, 5000);
      }, 15000);

      return () => {
        clearInterval(expandInterval);
        window.removeEventListener("resize", checkDeviceSize);
      };
    }

    return () => {
      window.removeEventListener("resize", checkDeviceSize);
    };
  }, [isLargeDevice]);

  return (
    <Link
      href="/co-founder"
      className={`fixed bottom-16 right-8 z-30 flex animate-subtle-pulse cursor-pointer items-center gap-3 rounded-full bg-[#8D7B68] dark:bg-primary px-3 py-3 sm:px-4 text-white shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-[#8D7B68] dark:focus:ring-primary touch-manipulation ${
        isLargeDevice && !isExpanded ? "lg:px-3" : ""
      }`}
      aria-label="Open Cofounder Wizard"
      onMouseEnter={() => isLargeDevice && setIsExpanded(true)}
      onMouseLeave={() => {
        // On large devices, collapse on mouse leave (auto-expand will handle periodic expansion)
        if (isLargeDevice) {
          setIsExpanded(false);
        }
      }}
    >
      <span className="material-symbols-outlined !text-2xl">lightbulb</span>
      <span
        className={`text-sm font-bold transition-all duration-300 ${
          isLargeDevice
            ? isExpanded
              ? "opacity-100 max-w-[200px]"
              : "opacity-0 max-w-0 overflow-hidden"
            : "hidden sm:inline"
        }`}
      >
        Want a technical cofounder?
      </span>
    </Link>
  );
}
