"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function MobileNav({ locale }: { locale: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("nav");
  const tc = useTranslations("common");

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/services", label: t("services") },
    { href: "/projects", label: t("projects") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        className="flex h-10 w-10 items-center justify-center rounded-md border border-borderLight text-ink-light transition-colors hover:border-accent dark:border-borderDark dark:text-ink-dark"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full border-b border-borderLight bg-surface-light px-6 py-6 shadow-xl dark:border-borderDark dark:bg-surface-dark"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-semibold transition-colors ${
                      isActive
                        ? "text-accent"
                        : "text-ink-light hover:text-accent dark:text-ink-dark dark:hover:text-accent-dark"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="my-2 border-t border-borderLight dark:border-borderDark" />

              <div className="flex items-center justify-between">
                <LanguageSwitcher currentLocale={locale} />
                <ThemeToggle />
              </div>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-bold text-surface-dark transition-all hover:bg-accent-hover"
              >
                <span>{tc("bookVisit")}</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
