export const useJobsStore = defineStore('JobsStore', {
  state: () => ({
    jobs: [
      {
        id: 1,
        avatar: {
          img: `/images/fairlo_logo.png`,
          alt: 'Logo of software agency Fairlo',
          bgColor: '#000',
          label: {
            text: 'Fairlo',
            link: 'https://fairlo.se',
          },
        },
        card: {
          title: 'Back End Web Developer',
          roles: [
            {
              jobTitle: 'Back End Web Developer',
              period: {
                start: 'September 2021',
                end: 'Present',
              },
            },
          ],
          period: {
            start: 'September 2021',
            end: 'Present',
          },
          description: '',
          tools: [],
          readMore: '',
        },
      },
      {
        id: 2,
        avatar: {
          // img: "/conveos_logo.png",

          img: `/images/conveos_logo.png`,
          alt: 'Logo of software agency Conveos',
          bgColor: '#000',
          label: {
            text: 'Conveos',
            link: 'https://conveos.com',
          },
        },
        card: {
          title: 'Back End Web Developer',
          roles: [
            {
              jobTitle: 'Back End Web Developer',
              period: {
                start: 'January 2021',
                end: 'June 2021',
              },
            },
          ],
          period: {
            start: 'January 2021',
            end: 'June 2021',
          },
          description: '',
          tools: [],
          readMore: '',
        },
      },
      {
        id: 3,
        avatar: {
          // img: "/conveos_logo.png",
          img: `/images/conveos_logo.png`,

          alt: 'Logo of software agency Conveos',
          bgColor: '#000',
          label: {
            text: 'Conveos',
            link: 'https://conveos.com',
          },
        },
        card: {
          title: 'Full Stack Web Developer',
          roles: [
            {
              jobTitle: 'Back End Web Developer',
              period: {
                start: 'July 2019',
                end: 'July 2020',
              },
            },
            {
              jobTitle: 'Front End Web Developer',
              period: {
                start: 'July 2019',
                end: 'July 2020',
              },
            },
          ],
          period: {
            start: 'July 2019',
            end: 'July 2020',
          },
          description: '',
          tools: [],
          readMore: '',
        },
      },
      {
        id: 4,
        avatar: {
          // img: "/forth_logo.png",
          img: `/images/forth_logo.png`,

          alt: 'Logo of FORTH in Greece',
          bgColor: '#fff',
          label: {
            text: 'Laboratory HCI of ICS-FORTH',
            link: 'https://www.ics.forth.gr/',
          },
        },
        card: {
          title:
            'Graduate R&D assistant at Human-Computer Interaction Lab (HCI)',
          roles: [
            {
              jobTitle: 'Back End Web Developer',
              period: {
                start: 'Jun 2016',
                end: 'Jun 2019',
              },
            },
          ],
          period: {
            start: 'Jun 2016',
            end: 'Jun 2019',
          },
          description: '',
          tools: [],
          readMore: '',
        },
      },
    ],
  }),
  getters: {
    jobsList: state => state.jobs,
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useJobsStore, import.meta.hot));
}
