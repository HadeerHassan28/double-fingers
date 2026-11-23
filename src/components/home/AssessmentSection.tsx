import { useTranslations } from "next-intl";
import { CheckCircle2, PhoneCall, ShieldCheck, Ruler } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SiteVisitForm } from "@/components/forms/SiteVisitForm";

export function AssessmentSection() {
  const t = useTranslations("contact");
  const tc = useTranslations("common");

  const perks = [
    {
      icon: Ruler,
      title: "معاينة هندسية ورفع مساحي دقيق",
      titleEn: "Precise engineering survey and site dimensions",
    },
    {
      icon: ShieldCheck,
      title: "مقايسة تفصيلية لكافة البنود والمواد",
      titleEn: "Itemized BOQ detailing materials & craft specs",
    },
    {
      icon: PhoneCall,
      title: "استشارة وتوزيع معماري مجاني",
      titleEn: "Free initial spatial layout & styling consultation",
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Side Info */}
          <div className="space-y-6 lg:col-span-5">
            <div className="arch-card rounded-lg p-6 sm:p-8">
              <h3 className="text-xl font-bold text-ink-light dark:text-ink-dark">
                {tc("tagline")}
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-ink-mutedLight dark:text-ink-mutedDark">
                نرسل مهندساً معمارياً متخصصاً إلى موقعك لإجراء فحص شامل للمساحة، تقديم المشورة الفنية، ووضع تصور هندسي واضح لخطة التشطيب.
              </p>

              <div className="mt-6 space-y-4">
                {perks.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent dark:text-accent-dark">
                        <Icon className="h-4 w-4" />
                      </span>
                      <p className="text-xs sm:text-sm font-medium text-ink-light dark:text-ink-dark">
                        {p.title}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 border-t border-borderLight pt-6 dark:border-borderDark">
                <span className="text-xs text-ink-mutedLight dark:text-ink-mutedDark">
                  للاستفسارات الهاتفية العاجلة:
                </span>
                <p className="mt-1 font-mono text-base font-bold text-accent dark:text-accent-dark" dir="ltr">
                  +20 100 123 4567
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <SiteVisitForm />
          </div>
        </div>
      </div>
    </section>
  );
}
