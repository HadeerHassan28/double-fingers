"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FilterTabs, FilterTabOption } from "@/components/ui/FilterTabs";
import { ArchitecturalCard } from "@/components/ui/ArchitecturalCard";
import { Lightbox } from "@/components/ui/Lightbox";
import { projectsData } from "@/data/projects";

export function PortfolioSection({ locale }: { locale: string }) {
  const t = useTranslations("portfolio");
  const tc = useTranslations("common");
  const [activeTab, setActiveTab] = useState("all");
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    images: string[];
    index: number;
  }>({
    isOpen: false,
    images: [],
    index: 0,
  });

  const tabs: FilterTabOption[] = [
    { key: "all", label: tc("all") },
    { key: "villas", label: tc("villas") },
    { key: "apartments", label: tc("apartments") },
    { key: "offices", label: tc("offices") },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  const handleOpenLightbox = (images: string[], index: number) => {
    setLightboxState({ isOpen: true, images, index });
  };

  return (
    <section className="border-b border-borderLight py-16 sm:py-24 dark:border-borderDark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-8">
          <FilterTabs
            tabs={tabs}
            activeTab={activeTab}
            onChange={(key) => setActiveTab(key)}
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ArchitecturalCard
              key={project.id}
              project={project}
              locale={locale}
              onOpenLightbox={handleOpenLightbox}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md border border-borderLight bg-surface-light px-6 py-3 text-sm font-bold text-ink-light transition-colors hover:border-accent hover:text-accent dark:border-borderDark dark:bg-surface-dark dark:text-ink-dark dark:hover:border-accent-dark dark:hover:text-accent-dark"
          >
            <span>{tc("viewAllProjects")}</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <Lightbox
        images={lightboxState.images}
        currentIndex={lightboxState.index}
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState((prev) => ({ ...prev, isOpen: false }))}
        onNavigate={(index) => setLightboxState((prev) => ({ ...prev, index }))}
      />
    </section>
  );
}
