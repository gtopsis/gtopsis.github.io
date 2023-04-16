import { Meetup } from "~~/models";

export const useMeetupsStore = defineStore("MeetupsStore", () => {
  const meetups: Meetup[] = reactive([
    {
      src: "/images/devstaff-meetup.webp",
      title: "DevStaff: A developer community in Crete",
      link: "https://www.meetup.com/devstaff/",
      description:
        "A meetup which is called DevStaff and it is a developer community in Crete.",
    },
    {
      src: "/images/opencoffe-meetup.webp",
      title: "Open Coffee Heraklion",
      link: "https://www.meetup.com/opencoffeeher/",
      description:
        "A meetup which is called Open Coffee Heraklion and it gathers motivated youngsters & professionals from Crete, who have as common ground the urge of sharing business ideas",
    },
    {
      src: "/images/vuejs-athens-meetups.webp",
      title: "VueJS Athens",
      link: "https://www.meetup.com/vuejsathens/",
      description:
        "A meetup which is called VueJS Athens and it is a community of people that is eager to learn more about Vue.js",
    },
  ]);

  const meetupsList: ComputedRef<Meetup[]> = computed(() => meetups);

  return { meetupsList };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMeetupsStore, import.meta.hot));
}
