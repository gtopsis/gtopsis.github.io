import jobs from "@/content/jobs.json";

export const useJobsStore = defineStore("JobsStore", () => {
  const jobsList = computed(() => jobs);

  return { jobsList };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useJobsStore, import.meta.hot));
}
