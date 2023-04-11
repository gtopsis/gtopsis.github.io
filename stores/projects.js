export const useProjectsStore = defineStore("ProjectsStore", {
  state: () => ({
    projects: [
      {
        src: "/images/website-cs352-showcase.png",
        title: "Website for course cs-352",
        description:
          "Static website for the course cs352 (year 2017-2018) in Computer Science department at UOC. It was serving the content (lectures, tutorials, assignments and course project) of the course.",
        demo: "https://gtopsis.github.io/Course-cs352-website/",
        code: "https://github.com/gtopsis/Course-cs352-website",
      },
      {
        src: "/images/loan-calculator-showcase.png",
        title: "Simple loan calculator",
        description: "A simple calculator for the monthly payment for a loan.",
        demo: "https://gtopsis.github.io/loan-calculator/",
        code: "https://github.com/gtopsis/loan-calculator",
      },
      {
        src: "/images/music-app-api-showcase.png",
        title: "Simple music app API",
        description:
          "The backend side of a music app in which albums, artists and tracks are associated properly.",
        demo: "#",
        code: "https://github.com/gtopsis/music-app",
      },
      {
        src: "/images/website-uoc-radio-showcase.png",
        title: "Website for the UoC radio station",
        description:
          "A responsive and usable website for the FM radio station of university of Crete.",
        demo: "https://gtopsis.github.io/Uoc-radio-website/index.html",
        code: "https://github.com/gtopsis/Uoc-radio-website",
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
