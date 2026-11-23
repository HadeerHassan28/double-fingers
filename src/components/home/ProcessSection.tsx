import { useTranslations } from "next-intl";
import { Eye, ShieldCheck, Clock, Award } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProcessSection() {
  const t = useTranslations("process");

  const pillars = [
    {
      number: "01",
      icon: Eye,
      title: t("p1Title"),
      desc: t("p1Desc"),
    },
    {
      number: "02",
      icon: ShieldCheck,
      title: t("p2Title"),
      desc: t("p2Desc"),
    },
    {
      number: "03",
      icon: Clock,
      title: t("p3Title"),
      desc: t("p3Desc"),
    },
    {
      number: "04",
      icon: Award,
      title: t("p4Title"),
      desc: t("p4Desc"),
    },
  ];

  return (
    <section className="border-b border-borderLight py-16 sm:py-24 dark:border-borderDark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="arch-card group relative flex flex-col justify-between rounded-lg p-6"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-md border border-borderLight bg-surface-mutedLight text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-surface-dark dark:border-borderDark dark:bg-surface-mutedDark">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-2xl font-black text-ink-mutedLight/40 dark:text-ink-mutedDark/30">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-base font-bold text-ink-light dark:text-ink-dark">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs leading-relaxed text-ink-mutedLight dark:text-ink-mutedDark">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 h-1 w-8 rounded-full bg-borderLight transition-all duration-300 group-hover:w-full group-hover:bg-accent dark:bg-borderDark" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
