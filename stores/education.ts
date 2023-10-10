import studies from "@/content/studies.json";

export const useStudiesStore = defineStore("StudiesStore", () => {
  const studiesList = computed(() => studies);

  return { studiesList };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStudiesStore, import.meta.hot));
}
