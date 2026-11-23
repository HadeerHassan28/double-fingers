import { setRequestLocale, getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectsGallery } from "@/components/projects/ProjectsGallery";

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "portfolio" });

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <ProjectsGallery locale={locale} />
      </div>
    </div>
  );
}
