import { ProjectItem } from "@/types";
import { residentialProjects } from "./residentialProjects";
import { commercialProjects } from "./commercialProjects";

export { residentialProjects, commercialProjects };

export const projectsData: ProjectItem[] = [
  ...residentialProjects,
  ...commercialProjects,
];
