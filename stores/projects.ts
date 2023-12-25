import type { Project } from "~~/models";
import projects from "@/content/projects.json";

export const useProjectsStore = defineStore("ProjectsStore", () => {
  const projectsList: ComputedRef<Project[]> = computed(
    (): Project[] => projects,
  );

  return { projectsList };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProjectsStore, import.meta.hot));
}
