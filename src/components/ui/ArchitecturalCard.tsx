"use client";

import Image from "next/image";
import { Link } from "@/navigation";
import { MapPin, Maximize2, ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/types";
import { defaultBlurDataUrl } from "@/utils/imageBlur";

interface ArchitecturalCardProps {
  project: ProjectItem;
  locale: string;
  onOpenLightbox?: (images: string[], index: number) => void;
}

export function ArchitecturalCard({
  project,
  locale,
  onOpenLightbox,
}: ArchitecturalCardProps) {
  const isArabic = locale === "ar";
  const title = isArabic ? project.titleAr : project.titleEn;
  const category = isArabic ? project.categoryAr : project.categoryEn;
  const location = isArabic ? project.locationAr : project.locationEn;
  const description = isArabic ? project.descriptionAr : project.descriptionEn;

  return (
    <article className="arch-card group flex flex-col overflow-hidden rounded-lg">
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-mutedLight dark:bg-surface-mutedDark">
        <Image
          src={project.coverImage}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL={defaultBlurDataUrl}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Category Pill */}
        <div className="absolute top-3.5 start-3.5 z-10">
          <span className="rounded-md border border-white/20 bg-surface-dark/80 px-2.5 py-1 text-xs font-semibold text-ink-dark backdrop-blur-sm">
            {category}
          </span>
        </div>

        {/* Lightbox Trigger Button */}
        {onOpenLightbox && (
          <button
            onClick={() => onOpenLightbox(project.gallery, 0)}
            aria-label="Enlarge image"
            className="absolute bottom-3.5 end-3.5 z-10 flex h-8 w-8 items-center justify-center rounded-md bg-surface-dark/80 text-ink-dark opacity-0 transition-opacity duration-300 hover:bg-accent hover:text-surface-dark group-hover:opacity-100"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex items-center justify-between text-xs text-ink-mutedLight dark:text-ink-mutedDark">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3 text-accent" />
              {location}
            </span>
            <span className="font-mono">{project.area}</span>
          </div>

          <h3 className="mt-2.5 text-lg font-bold text-ink-light transition-colors group-hover:text-accent dark:text-ink-dark dark:group-hover:text-accent-dark">
            {title}
          </h3>

          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-ink-mutedLight dark:text-ink-mutedDark">
            {description}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-borderLight pt-4 dark:border-borderDark">
          <span className="text-xs font-medium text-ink-mutedLight dark:text-ink-mutedDark">
            {project.year}
          </span>

          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-accent transition-all hover:text-accent-hover group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
          >
            <span>{isArabic ? "استكشف المشروع" : "View Project"}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
