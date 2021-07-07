export const state = () => ( {
    jobs: [ {
            id: 1,
            avatar: {
                img: "conveos_logo.png",
                alt: "Logo of software agency Conveos",
                bgColor: "#000",
                label: {
                    text: "Conveos",
                    link: "https://conveos.com"
                },
            },
            card: {
                title: "Back End Web Developer",
                roles: [ {
                    jobTitle: "Back End Web Developer",
                    period: {
                        start: "January 2021",
                        end: "June 2021"
                    },
                }, ],
                period: {
                    start: "January 2021",
                    end: "June 2021"
                },
                description: "",
                tools: [],
                readMore: "",
            },
        },
        {
            id: 2,
            avatar: {
                img: "army_logo.png",
                alt: "Logo of greek army",
                bgColor: "blue",
                label: {
                    text: "Greek Army",
                    link: ""
                },
            },
            card: {
                title: "IT Technician",
                roles: [ {
                    jobTitle: "IT Technician",
                    period: {
                        start: "July 2020",
                        end: "January 2021"
                    },
                }, ],
                period: {
                    start: "July 2020",
                    end: "January 2021"
                },
                description: "",
                tools: [],
                readMore: "",
            },
        },
        {
            id: 3,
            avatar: {
                img: "conveos_logo.png",
                alt: "Logo of software agency Conveos",
                bgColor: "#000",
                label: {
                    text: "Conveos",
                    link: "https://conveos.com"
                },
            },
            card: {
                title: "Full Stack Web Developer",
                roles: [ {
                        jobTitle: "Back End Web Developer",
                        period: {
                            start: "July 2019",
                            end: "July 2020"
                        },
                    },
                    {
                        jobTitle: "Front End Web Developer",
                        period: {
                            start: "July 2019",
                            end: "July 2020"
                        },
                    },
                ],
                period: {
                    start: "July 2019",
                    end: "July 2020"
                },
                description: "",
                tools: [],
                readMore: "",
            },
        },
        {
            id: 4,
            avatar: {
                img: "forth_logo.png",
                alt: "Logo of FORTH in Greece",
                bgColor: "#fff",
                label: {
                    text: "Laboratory HCI of ICS-FORTH",
                    link: "https://www.ics.forth.gr/"
                },
            },
            card: {
                title: "Graduate R&D assistant at Human-Computer Interaction Lab (HCI)",
                roles: [ {
                    jobTitle: "Back End Web Developer",
                    period: {
                        start: "Jan 2015",
                        end: "March 2021"
                    },
                }, ],
                period: {
                    start: "Jan 2015",
                    end: "March 2021"
                },
                description: "",
                tools: [],
                readMore: "",
            },
        },
    ],
    education: [ {
            id: 1,
            avatar: {
                img: "uoc_logo.png",
                alt: "Logo of University of Crete",
                bgColor: "#000",
                label: {
                    text: "University of Crete",
                    link: "https://www.uoc.gr/"
                },
            },
            card: {
                title: "MSc in Computer Science Field Of Study Human Computer Interaction, Information Systems",
                roles: [ {
                    jobTitle: "Back End Web Developer",
                    period: {
                        start: "2016",
                        end: "2019"
                    },
                }, ],
                period: {
                    start: "2016",
                    end: "2019"
                },
                description: "",
                tools: [],
                readMore: "",
            },
        },

    ]
} );

export const getters = {
    timelineItems: state => {
        console.log( "🚀 ~ file: timelineItems.js ~ line 105 ~ state", state )
        return [ ...state.jobs, ...state.education ];
    }
}

export const mutations = {};