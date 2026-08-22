import projects from "~~/content/projects.json";
import type { IProject } from "~/types/interfaces";

export const useProjectsStore = defineStore("ProjectsStore", () => {
  const projectsList: ComputedRef<IProject[]> = computed(
    (): IProject[] => projects,
  );

  return { projectsList };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProjectsStore, import.meta.hot));
}
