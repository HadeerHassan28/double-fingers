"use client";

import { usePathname, useRouter } from "@/navigation";
import { motion } from "framer-motion";

interface LanguageSwitcherProps {
  currentLocale: string;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const toggleLanguage = () => {
    const nextLocale = currentLocale === "ar" ? "en" : "ar";
    router.replace(pathname, { locale: nextLocale });
  };

  const isArabic = currentLocale === "ar";

  return (
    <button
      onClick={toggleLanguage}
      className="group relative flex items-center gap-1.5 rounded-md border border-borderLight px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-light transition-colors hover:border-accent dark:border-borderDark dark:text-ink-dark"
      aria-label="Switch Language"
    >
      <motion.span
        className={`transition-colors ${
          isArabic
            ? "text-accent font-bold"
            : "text-ink-mutedLight dark:text-ink-mutedDark group-hover:text-ink-dark"
        }`}
      >
        عربي
      </motion.span>
      <span className="text-borderLight dark:text-borderDark">|</span>
      <motion.span
        className={`transition-colors ${
          !isArabic
            ? "text-accent font-bold"
            : "text-ink-mutedLight dark:text-ink-mutedDark group-hover:text-ink-light"
        }`}
      >
        EN
      </motion.span>
    </button>
  );
}
