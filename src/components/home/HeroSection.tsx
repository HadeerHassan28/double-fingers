"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { defaultBlurDataUrl } from "@/utils/imageBlur";

export function HeroSection({ locale }: { locale: string }) {
  const t = useTranslations("hero");
  const isArabic = locale === "ar";

  return (
    <section className="relative overflow-hidden border-b border-borderLight py-16 sm:py-24 lg:py-28 dark:border-borderDark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs font-bold text-accent dark:text-accent-dark">
              <ShieldCheck className="h-4 w-4" />
              <span>{t("badge")}</span>
            </div>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-ink-light sm:text-5xl lg:text-5xl leading-tight dark:text-ink-dark">
              {t("headline")}
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink-mutedLight dark:text-ink-mutedDark max-w-2xl">
              {t("subheadline")}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-bold text-surface-dark transition-all hover:bg-accent-hover shadow-sm active:scale-95"
              >
                <span>{t("ctaPrimary")}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </Link>

              <Link
                href="/projects"
                className="rounded-md border border-borderLight bg-surface-light px-6 py-3.5 text-sm font-bold text-ink-light transition-colors hover:border-accent dark:border-borderDark dark:bg-surface-dark dark:text-ink-dark"
              >
                {t("ctaSecondary")}
              </Link>
            </div>

            {/* Metrics */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-borderLight pt-8 dark:border-borderDark">
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-black text-accent dark:text-accent-dark">
                  {t("stat1Value")}
                </span>
                <p className="mt-1 text-xs text-ink-mutedLight dark:text-ink-mutedDark">
                  {t("stat1Label")}
                </p>
              </div>
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-black text-ink-light dark:text-ink-dark">
                  {t("stat2Value")}
                </span>
                <p className="mt-1 text-xs text-ink-mutedLight dark:text-ink-mutedDark">
                  {t("stat2Label")}
                </p>
              </div>
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-black text-accent dark:text-accent-dark">
                  {t("stat3Value")}
                </span>
                <p className="mt-1 text-xs text-ink-mutedLight dark:text-ink-mutedDark">
                  {t("stat3Label")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Architectural Hero Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-borderLight bg-surface-mutedLight shadow-2xl dark:border-borderDark dark:bg-surface-mutedDark">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                  alt="Double Fingers Architectural Finishing"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  placeholder="blur"
                  blurDataURL={defaultBlurDataUrl}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 inset-x-5 flex items-center justify-between text-white">
                  <div>
                    <p className="text-xs font-mono tracking-widest text-accent uppercase">Double Fingers</p>
                    <p className="text-sm font-bold">Turnkey Architectural Fit-Out</p>
                  </div>
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
