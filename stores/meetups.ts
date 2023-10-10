import { Meetup } from "~~/models";
import meetups from "@/content/meetups.json";

export const useMeetupsStore = defineStore("MeetupsStore", () => {
  const meetupsList: ComputedRef<Meetup[]> = computed((): Meetup[] => meetups);

  return { meetupsList };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMeetupsStore, import.meta.hot));
}
