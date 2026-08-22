import meetups from "~~/content/meetups.json";
import type { IContactItem } from "~/types/interfaces";

export const useMeetupsStore = defineStore("MeetupsStore", () => {
  const meetupsList: ComputedRef<IContactItem[]> = computed(
    (): IContactItem[] => meetups,
  );

  return { meetupsList };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMeetupsStore, import.meta.hot));
}
