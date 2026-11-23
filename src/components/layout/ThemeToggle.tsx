"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-md border border-borderLight dark:border-borderDark" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative flex h-9 w-9 items-center justify-center rounded-md border border-borderLight bg-surface-light text-ink-light transition-colors hover:border-accent hover:text-accent dark:border-borderDark dark:bg-surface-dark dark:text-ink-dark dark:hover:border-accent-dark"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.7, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.7, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? (
          <Sun className="h-4 w-4 text-accent-dark" />
        ) : (
          <Moon className="h-4 w-4 text-ink-mutedLight" />
        )}
      </motion.div>
    </button>
  );
}
