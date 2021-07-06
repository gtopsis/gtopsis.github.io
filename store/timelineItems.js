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
                            start: "Jan 2015",
                            end: "March 2021"
                        },
                    },
                    {
                        jobTitle: "Front End Web Developer",
                        period: {
                            start: "Jan 2015",
                            end: "March 2021"
                        },
                    },
                ],
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
    education: []
} );

export const getters = {
    timelineItems: state => {
        console.log( "🚀 ~ file: timelineItems.js ~ line 105 ~ state", state )
        return [ ...state.jobs, ...state.education ];
    }
}

export const mutations = {};