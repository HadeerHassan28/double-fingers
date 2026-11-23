"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import { ArrowLeft, ArrowRight, Maximize } from "lucide-react";
import { ProjectItem } from "@/types";
import { Lightbox } from "@/components/ui/Lightbox";
import { ProjectInfoSidebar } from "./ProjectInfoSidebar";
import { defaultBlurDataUrl } from "@/utils/imageBlur";

interface ProjectDetailViewProps {
  project: ProjectItem;
  locale: string;
}

export function ProjectDetailView({ project, locale }: ProjectDetailViewProps) {
  const isArabic = locale === "ar";
  const [selectedImg, setSelectedImg] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const title = isArabic ? project.titleAr : project.titleEn;

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-accent hover:text-accent-hover mb-8"
        >
          {isArabic ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
          <span>{isArabic ? "العودة لكافة المشاريع" : "Back to Projects"}</span>
        </Link>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Main Gallery */}
          <div className="lg:col-span-8">
            <div
              onClick={() => setLightboxOpen(true)}
              className="group relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-xl border border-borderLight bg-surface-mutedLight dark:border-borderDark dark:bg-surface-mutedDark"
            >
              <Image
                src={project.gallery[selectedImg] || project.coverImage}
                alt={title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                placeholder="blur"
                blurDataURL={defaultBlurDataUrl}
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute bottom-4 end-4 flex items-center gap-1.5 rounded-md bg-black/70 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
                <Maximize className="h-3.5 w-3.5" />
                <span>{isArabic ? "تكبير الصورة" : "Enlarge"}</span>
              </div>
            </div>

            {/* Thumbnails */}
            {project.gallery.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(idx)}
                    className={`relative aspect-[16/10] w-24 flex-shrink-0 overflow-hidden rounded-md border-2 transition-all ${
                      selectedImg === idx ? "border-accent" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      sizes="96px"
                      loading="lazy"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Sidebar */}
          <div className="space-y-6 lg:col-span-4">
            <ProjectInfoSidebar project={project} locale={locale} />
          </div>
        </div>
      </div>

      <Lightbox
        images={project.gallery}
        currentIndex={selectedImg}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setSelectedImg(idx)}
      />
    </div>
  );
}
