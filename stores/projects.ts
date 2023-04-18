import { Project } from "~~/models";

export const useProjectsStore = defineStore("ProjectsStore", () => {
  const projects: Project[] = reactive([
    {
      src: "/images/website-cs352-showcase.webp",
      imageDescription:
        "A browser window which contains a part of the website of the course cs352. This part is the the logo, navigation bar and some basic info of the course.",
      title: "Website for course cs-352",
      description:
        "Static website for the course cs352 (year 2017-2018) in Computer Science department at UOC. It was serving the content (lectures, tutorials, assignments and course project) of the course to the students.",
      demo: "https://gtopsis.github.io/Course-cs352-website/",
      code: "https://github.com/gtopsis/Course-cs352-website",
    },
    {
      src: "/images/loan-calculator-showcase.webp",
      title: "Simple loan calculator",
      imageDescription:
        "A browser window which contains a small modal window with a form. This form represents the calculator of the monthly payment based on a loan's duration and payment-in-advance amount.",
      description:
        "A simple calculator for the monthly payment of a loan, based on the payment-in-advance and its duration.",
      demo: "https://gtopsis.github.io/loan-calculator/",
      code: "https://github.com/gtopsis/loan-calculator",
    },
    {
      src: "/images/music-app-api-showcase.webp",
      title: "Simple music app API",
      imageDescription:
        "A browser window which contains a subset of the documented API endpoints about Artists, Recordings, etc. of the music app.",
      description:
        "The backend side of a music app in which albums, artists and tracks are associated properly.",
      demo: "#",
      code: "https://github.com/gtopsis/music-app",
    },
    {
      src: "/images/website-uoc-radio-showcase.webp",
      title: "Website for the UoC radio station",
      imageDescription:
        "A browser window which contains a part of the website for the FM radio of University of Crete. This part is the logo, the navigation menu, a background image and an one-line music player.",
      description:
        "A responsive and usable website (showcase - not the current one) of RASTAPANK, the team behind the FM radio station of university of Crete.",
      demo: "https://gtopsis.github.io/Uoc-radio-website/index.html",
      code: "https://github.com/gtopsis/Uoc-radio-website",
    },
  ]);

  const projectsList: ComputedRef<Project[]> = computed(() => projects);

  return { projectsList };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProjectsStore, import.meta.hot));
}
