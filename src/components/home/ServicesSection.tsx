import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { servicesData } from "@/data/services";
import { defaultBlurDataUrl } from "@/utils/imageBlur";

export function ServicesSection() {
  const t = useTranslations("services");

  return (
    <section className="border-b border-borderLight py-16 sm:py-24 dark:border-borderDark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {servicesData.map((item) => (
            <article
              key={item.id}
              className="arch-card group flex flex-col justify-between overflow-hidden rounded-lg p-6"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-black text-accent dark:text-accent-dark">
                    {item.number}
                  </span>
                  <Link
                    href={`/services#${item.slug}`}
                    aria-label={t(item.titleKey)}
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-borderLight text-ink-light transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-surface-dark dark:border-borderDark dark:text-ink-dark"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="relative mt-5 aspect-[16/9] overflow-hidden rounded-md">
                  <Image
                    src={item.coverImage}
                    alt={t(item.titleKey)}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={defaultBlurDataUrl}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-5 text-xl font-bold text-ink-light transition-colors group-hover:text-accent dark:text-ink-dark dark:group-hover:text-accent-dark">
                  {t(item.titleKey)}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-ink-mutedLight dark:text-ink-mutedDark">
                  {t(item.descKey)}
                </p>

                <ul className="mt-4 space-y-2 border-t border-borderLight pt-4 dark:border-borderDark">
                  {item.featuresKeys.map((fk) => (
                    <li
                      key={fk}
                      className="flex items-center gap-2 text-xs text-ink-light dark:text-ink-dark"
                    >
                      <Check className="h-3.5 w-3.5 flex-shrink-0 text-accent" />
                      <span>{t(fk)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4">
                <Link
                  href={`/services#${item.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent transition-colors hover:text-accent-hover"
                >
                  <span>{t("title")}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
