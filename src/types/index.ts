export type ProjectCategory = "villas" | "apartments" | "offices";

export interface ProjectItem {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  category: ProjectCategory;
  categoryAr: string;
  categoryEn: string;
  locationAr: string;
  locationEn: string;
  area: string;
  year: string;
  featured: boolean;
  coverImage: string;
  gallery: string[];
  descriptionAr: string;
  descriptionEn: string;
  featuresAr: string[];
  featuresEn: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  slug: string;
  titleKey: string;
  descKey: string;
  featuresKeys: string[];
  coverImage: string;
}

export interface SiteVisitFormData {
  fullName: string;
  phone: string;
  spaceType: string;
  location: string;
  notes?: string;
}
