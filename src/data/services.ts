import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "service-villa",
    number: "01",
    slug: "villas",
    titleKey: "s1Title",
    descKey: "s1Desc",
    featuresKeys: ["s1Feature1", "s1Feature2", "s1Feature3"],
    coverImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "service-apartment",
    number: "02",
    slug: "apartments",
    titleKey: "s2Title",
    descKey: "s2Desc",
    featuresKeys: ["s2Feature1", "s2Feature2", "s2Feature3"],
    coverImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "service-office",
    number: "03",
    slug: "offices",
    titleKey: "s3Title",
    descKey: "s3Desc",
    featuresKeys: ["s3Feature1", "s3Feature2", "s3Feature3"],
    coverImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
];
