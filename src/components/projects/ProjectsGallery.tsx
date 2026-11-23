"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FilterTabs, FilterTabOption } from "@/components/ui/FilterTabs";
import { ArchitecturalCard } from "@/components/ui/ArchitecturalCard";
import { Lightbox } from "@/components/ui/Lightbox";
import { projectsData } from "@/data/projects";

export function ProjectsGallery({ locale }: { locale: string }) {
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

  const filtered =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  const handleOpenLightbox = (images: string[], index: number) => {
    setLightboxState({ isOpen: true, images, index });
  };

  return (
    <>
      <div className="mt-8">
        <FilterTabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={(key) => setActiveTab(key)}
        />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <ArchitecturalCard
            key={item.id}
            project={item}
            locale={locale}
            onOpenLightbox={handleOpenLightbox}
          />
        ))}
      </div>

      <Lightbox
        images={lightboxState.images}
        currentIndex={lightboxState.index}
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState((prev) => ({ ...prev, isOpen: false }))}
        onNavigate={(index) => setLightboxState((prev) => ({ ...prev, index }))}
      />
    </>
  );
}
