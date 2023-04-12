export const useStudiesStore = defineStore("StudiesStore", () => {
  const studies = reactive([
    {
      id: 1,
      avatar: {
        img: `/images/uoc_logo.png`,

        alt: "Logo of University of Crete",
        bgColor: "#000",
        label: {
          text: "University of Crete",
          link: "https://www.uoc.gr/",
        },
      },
      card: {
        title:
          "MSc in Computer Science - Human Computer Interaction, Information Systems",
        roles: [
          {
            jobTitle: "Back End Web Developer",
            period: {
              start: "September 2016",
              end: "November 2019",
            },
          },
        ],
        period: {
          start: "September 2016",
          end: "November 2019",
        },
        description: "",
        tools: [],
        readMore: "",
      },
    },

    {
      id: 2,
      avatar: {
        img: `/images/chalmers_logo.png`,

        alt: "Logo of Chalmers University of Technology",
        bgColor: "#fff",
        label: {
          text: "Chalmers University of Technology",
          link: "https://www.chalmers.se/",
        },
      },
      card: {
        title:
          "ERASMUS+ for Postgraduate studies - Interaction Design and Technologies",
        roles: [],
        period: {
          start: "August 2017",
          end: "January 2018",
        },
        description: "",
        tools: [],
        readMore: "",
      },
    },
    {
      id: 3,
      avatar: {
        img: `/images/uoc_logo.png`,

        alt: "Logo of University of Crete",
        bgColor: "#000",
        label: {
          text: "University of Crete",
          link: "https://www.uoc.gr/",
        },
      },
      card: {
        title: "BSc in Computer Science",
        roles: [],
        period: {
          start: "September 2011",
          end: "March 2015",
        },
        description: "",
        tools: [],
        readMore: "",
      },
    },
    {
      id: 4,
      avatar: {
        img: `/images/uoc_cyprus_logo.png`,

        alt: "Logo of University of Cyprus",
        bgColor: "#fff",
        label: {
          text: "University of Cyprus",
          link: "https://www.uoc.gr/",
        },
      },
      card: {
        title: "ERASMUS+ for Undergraduate studies",
        roles: [],
        period: {
          start: "September 2014",
          end: "January 2015",
        },
        description: "",
        tools: [],
        readMore: "",
      },
    },
  ]);
  const studiesList = computed(() => studies);

  return { studiesList };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStudiesStore, import.meta.hot));
}
