import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceDetailCard } from "@/components/services/ServiceDetailCard";

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "services" });
  const isArabic = locale === "ar";

  const packages = [
    {
      id: "villas",
      number: "01",
      title: t("s1Title"),
      description: t("s1Desc"),
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      features: [t("s1Feature1"), t("s1Feature2"), t("s1Feature3")],
      specs: [
        { label: isArabic ? "نطاق المساحة" : "Footprint", value: "400m² - 2500m²" },
        { label: isArabic ? "مدة التنفيذ" : "Timeline", value: "90 - 180 Days" },
        { label: isArabic ? "مستوى التشطيب" : "Grade", value: "Ultra Super Lux / Palace" },
        { label: isArabic ? "الإشراف" : "Supervision", value: "Resident Engineer" },
      ],
      isReversed: false,
    },
    {
      id: "apartments",
      number: "02",
      title: t("s2Title"),
      description: t("s2Desc"),
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      features: [t("s2Feature1"), t("s2Feature2"), t("s2Feature3")],
      specs: [
        { label: isArabic ? "نطاق المساحة" : "Footprint", value: "150m² - 500m²" },
        { label: isArabic ? "مدة التنفيذ" : "Timeline", value: "60 - 90 Days" },
        { label: isArabic ? "مستوى التشطيب" : "Grade", value: "Modern Hotel Standard" },
        { label: isArabic ? "الضمان" : "Warranty", value: "Comprehensive 5 Years" },
      ],
      isReversed: true,
    },
    {
      id: "offices",
      number: "03",
      title: t("s3Title"),
      description: t("s3Desc"),
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      features: [t("s3Feature1"), t("s3Feature2"), t("s3Feature3")],
      specs: [
        { label: isArabic ? "نطاق المساحة" : "Footprint", value: "200m² - 3000m²" },
        { label: isArabic ? "مدة التنفيذ" : "Timeline", value: "45 - 90 Days" },
        { label: isArabic ? "أنظمة الشبكات" : "Infrastructure", value: "Cat6A / Acoustic / VRF" },
        { label: isArabic ? "التسليم" : "Handover", value: "Plug & Play Corporate" },
      ],
      isReversed: false,
    },
  ];

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-16 space-y-12">
          {packages.map((pkg) => (
            <ServiceDetailCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </div>
    </div>
  );
}
