export const state = () => ( {
skills: [
        {
          icon: "laptop-code",
          title: "Front End Developer",
          desc: "Following the OpenAPI specification and tools I design and document robust web services.",
          heading: "Languages and frameworks",
          technologies: [
            "Vue.js, Vuex",
            "Vuetify",
            "Bootstrap",
            "Foundation for sites",
            "JavaScript",
            "HTML",
            "CSS",
            "AngularJS (v1.6)",
          ],
        },
        {
          icon: "server",
          title: "Back End Developer",
          desc: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
          heading: "Languages and frameworks",
          technologies: [
            "Node.js",
            "Express",
            "MongoDB",
            "OpenAPI specification and Swagger tools",
            "SocketIO",
            "Jest, SuperTest",
          ],
        },
        {
          icon: "pencil-ruler",
          title: "UX Designer",
          desc: "I value consistent content structure, clean design patterns, and intuitive graphical interfaces.",
          heading: "Methods and Tools",
          technologies: [
            "User-Centred design",
            "Heuristic Evaluation",
            "Pen and Paper",
            "Invision",
            "Presentator.io",
            "Gravit Designer",
            "Balsamiq Mockups",
          ],
        },
      ]} );

export const getters = {
    skills: (state) => {
        return state.skills;
    }
}

export const mutations = {};