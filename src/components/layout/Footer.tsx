import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { Sparkles, Phone, Mail, MapPin, Facebook } from "lucide-react";
import { Logo } from "./Logo";

export function Footer({ locale }: { locale: string }) {
  const t = useTranslations("common");
  const tn = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-borderLight bg-surface-mutedLight transition-colors dark:border-borderDark dark:bg-surface-mutedDark">
      {/* Smart Tool Teaser Banner */}
      <div className="border-b border-borderLight bg-surface-light py-5 dark:border-borderDark dark:bg-surface-dark">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-accent dark:text-accent-dark">
              <Sparkles className="h-4 w-4" />
            </span>
            <p className="text-xs sm:text-sm font-medium text-ink-light dark:text-ink-dark">
              {t("comingSoonTeaser")}
            </p>
          </div>
          <span className="hidden sm:inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-bold text-accent dark:text-accent-dark">
            Beta
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <Logo locale={locale} />
            <p className="max-w-md text-sm leading-relaxed text-ink-mutedLight dark:text-ink-mutedDark">
              {t("tagline")}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-borderLight bg-surface-light text-ink-mutedLight transition-colors hover:border-accent hover:text-accent dark:border-borderDark dark:bg-surface-dark dark:text-ink-mutedDark dark:hover:border-accent-dark dark:hover:text-accent-dark"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-ink-light dark:text-ink-dark">
              {tn("services")}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-mutedLight dark:text-ink-mutedDark">
              <li>
                <Link href="/services#villas" className="hover:text-accent dark:hover:text-accent-dark transition-colors">
                  {t("villas")}
                </Link>
              </li>
              <li>
                <Link href="/services#apartments" className="hover:text-accent dark:hover:text-accent-dark transition-colors">
                  {t("apartments")}
                </Link>
              </li>
              <li>
                <Link href="/services#offices" className="hover:text-accent dark:hover:text-accent-dark transition-colors">
                  {t("offices")}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-accent dark:hover:text-accent-dark transition-colors">
                  {tn("projects")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-ink-light dark:text-ink-dark">
              {t("contactUs")}
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-mutedLight dark:text-ink-mutedDark">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span dir="ltr">{t("phone")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>{t("email")}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>{t("address")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-borderLight pt-8 text-xs text-ink-mutedLight dark:border-borderDark dark:text-ink-mutedDark sm:flex-row">
          <p>© {year} Double Fingers. {t("allRightsReserved")}.</p>
          <p className="font-medium tracking-wide text-ink-light dark:text-ink-dark">
            {t("developedBy")}
          </p>
        </div>
      </div>
    </footer>
  );
}
