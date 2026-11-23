import { Link } from "@/navigation";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { ProjectItem } from "@/types";

interface ProjectInfoSidebarProps {
  project: ProjectItem;
  locale: string;
}

export function ProjectInfoSidebar({
  project,
  locale,
}: ProjectInfoSidebarProps) {
  const isArabic = locale === "ar";
  const title = isArabic ? project.titleAr : project.titleEn;
  const description = isArabic ? project.descriptionAr : project.descriptionEn;
  const category = isArabic ? project.categoryAr : project.categoryEn;
  const location = isArabic ? project.locationAr : project.locationEn;
  const features = isArabic ? project.featuresAr : project.featuresEn;

  return (
    <div className="arch-card rounded-xl p-6 sm:p-8">
      <span className="rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-bold text-accent">
        {category}
      </span>
      <h1 className="mt-4 text-2xl font-extrabold text-ink-light dark:text-ink-dark">
        {title}
      </h1>

      <div className="mt-6 space-y-3 border-y border-borderLight py-4 text-xs dark:border-borderDark">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-ink-mutedLight dark:text-ink-mutedDark">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            {isArabic ? "الموقع" : "Location"}
          </span>
          <span className="font-semibold text-ink-light dark:text-ink-dark">
            {location}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-ink-mutedLight dark:text-ink-mutedDark">
            {isArabic ? "المساحة الإجمالية" : "Total Area"}
          </span>
          <span className="font-mono font-semibold text-ink-light dark:text-ink-dark">
            {project.area}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-ink-mutedLight dark:text-ink-mutedDark">
            <Calendar className="h-3.5 w-3.5 text-accent" />
            {isArabic ? "سنة التسليم" : "Handover"}
          </span>
          <span className="font-semibold text-ink-light dark:text-ink-dark">
            {project.year}
          </span>
        </div>
      </div>

      <p className="mt-6 text-xs sm:text-sm leading-relaxed text-ink-mutedLight dark:text-ink-mutedDark">
        {description}
      </p>

      <div className="mt-6">
        <h4 className="text-xs font-bold uppercase tracking-wider text-ink-light dark:text-ink-dark">
          {isArabic ? "أبرز مميزات التنفيذ" : "Execution Highlights"}
        </h4>
        <ul className="mt-3 space-y-2">
          {features.map((feat, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-xs text-ink-light dark:text-ink-dark"
            >
              <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-accent mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/contact"
        className="mt-8 flex w-full items-center justify-center rounded-md bg-accent px-4 py-3 text-xs sm:text-sm font-bold text-surface-dark transition-all hover:bg-accent-hover"
      >
        {isArabic ? "طلب معاينة لوحدتك بنفس المستوى" : "Book Site Visit For Your Space"}
      </Link>
    </div>
  );
}
