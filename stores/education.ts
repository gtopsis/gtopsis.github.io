export const useStudiesStore = defineStore("StudiesStore", () => {
  const studies = reactive([
    {
      id: 1,
      avatar: {
        img: "/images/uoc_logo.webp",

        alt: "Logo of University of Crete",
        bgColor: "#000",
        label: {
          text: "University of Crete",
          link: "https://www.uoc.gr/",
        },
      },

      title:
        "MSc in Computer Science - Human Computer Interaction, Information Systems",
      roles: [
        {
          jobTitle: "Back End Web Developer",
          period: {
            start: "2016-09-01",
            end: "2019-11-30",
          },
        },
      ],
      period: {
        start: "2016-09-01",
        end: "2019-11-30",
      },
      description: "",
      tools: [],
      readMore: "",
    },
    {
      id: 2,
      avatar: {
        img: "/images/chalmers_logo.webp",

        alt: "Logo of Chalmers University of Technology",
        bgColor: "#fff",
        label: {
          text: "Chalmers University of Technology",
          link: "https://www.chalmers.se/",
        },
      },

      title:
        "ERASMUS+ for Postgraduate studies - Interaction Design and Technologies",
      roles: [],
      period: {
        start: "2017-08-01",
        end: "2018-01-31",
      },
      description: "",
      tools: [],
      readMore: "",
    },
    {
      id: 3,
      avatar: {
        img: "/images/uoc_logo.webp",

        alt: "Logo of University of Crete",
        bgColor: "#000",
        label: {
          text: "University of Crete",
          link: "https://www.uoc.gr/",
        },
      },

      title: "BSc in Computer Science",
      roles: [],
      period: {
        start: "2011-09-01",
        end: "2015-03-31",
      },
      description: "",
      tools: [],
      readMore: "",
    },
    {
      id: 4,
      avatar: {
        img: "/images/uoc_cyprus_logo.webp",

        alt: "Logo of University of Cyprus",
        bgColor: "#fff",
        label: {
          text: "University of Cyprus",
          link: "https://www.uoc.gr/",
        },
      },

      title: "ERASMUS+ for Undergraduate studies",
      roles: [],
      period: {
        start: "2014-09-01",
        end: "2015-01-31",
      },
      description: "",
      tools: [],
      readMore: "",
    },
  ]);
  const studiesList = computed(() => studies);

  return { studiesList };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStudiesStore, import.meta.hot));
}
