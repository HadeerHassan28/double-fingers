"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/navigation";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";

interface NavbarProps {
  locale: string;
}

export function Navbar({ locale }: NavbarProps) {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/services", label: t("services") },
    { href: "/projects", label: t("projects") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-borderLight bg-surface-light/95 backdrop-blur-md transition-colors dark:border-borderDark dark:bg-surface-dark/95">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo locale={locale} />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-accent dark:text-accent-dark font-bold"
                    : "text-ink-mutedLight hover:text-ink-light dark:text-ink-mutedDark dark:hover:text-ink-dark"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-accent dark:bg-accent-dark" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher currentLocale={locale} />
          <ThemeToggle />
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-bold text-surface-dark transition-all hover:bg-accent-hover active:scale-95"
          >
            <span>{tc("bookVisit")}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Nav */}
        <MobileNav locale={locale} />
      </div>
    </header>
  );
}
