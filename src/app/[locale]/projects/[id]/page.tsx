import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { projectsData } from "@/data/projects";
import { routing } from "@/i18n/routing";
import { ProjectDetailView } from "@/components/projects/ProjectDetailView";

interface ProjectPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export async function generateStaticParams() {
  const paths: { locale: string; id: string }[] = [];
  routing.locales.forEach((locale) => {
    projectsData.forEach((project) => {
      paths.push({ locale, id: project.id });
    });
  });
  return paths;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} locale={locale} />;
}
