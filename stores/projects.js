export const useProjectsStore = defineStore("ProjectsStore", {
  state: () => ({
    projects: [
      {
        src: "",
        title: "Simple music app",
        link: "#",
        code: "https://github.com/gtopsis/music-app",
      },
      {
        src: "/images/loan-calc-2.png",
        title: "Simple loan calculator",
        link: "https://gtopsis.github.io/loan-calculator/",
        code: "https://github.com/gtopsis/loan-calculator",
      },
      {
        src: "/images/uoc-radio.png",
        title: "Website for the UoC radio station",
        link: "https://gtopsis.github.io/Uoc-radio-website/index.html",
        code: "https://github.com/gtopsis/Uoc-radio-website",
      },
      {
        src: "/images/cs-352.png",
        title: "Website for course cs-352",
        link: "https://gtopsis.github.io/Course-cs352-website/",
        code: "https://github.com/gtopsis/Course-cs352-website",
      },
    ],
  }),
  getters: {
    projectsList: (state) => state.projects,
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProjectsStore, import.meta.hot));
}
