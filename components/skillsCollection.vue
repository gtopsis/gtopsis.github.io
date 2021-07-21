<template>
  <v-container fluid>
    <v-row class="columns-container justify-md-space-between">
      <v-col
        v-for="(skill, index) in skills"
        :key="index"
        class="column mb-sm-3 mb-md-0"
        :cols="$vuetify.breakpoint.smAndDown ? 12 : undefined"
        :class="{ 'mx-md-5': index == 1 }"
      >
        <!-- Column -->
        <div class="column__content pa-2">
          <v-row>
            <v-col cols="12" class="text-center column__header">
              <fa class="content__icon mb-2" :icon="['fas', skill.icon]" />
              <h3 class="">{{ skill.title }}</h3>
            </v-col>
            <v-col cols="12" class="column__main text-center">
              {{ skill.desc }}
            </v-col>
            <v-col cols="12" class="column__footer">
              <h4 class="text-center secondary-text mb-2">
                {{ skill.heading }}
              </h4>
              <ul class="ma-0 pa-0 tech-list text-center">
                <li v-for="(tech, j) in skill.technologies" :key="j">
                  <span> {{ tech }} </span>
                </li>
              </ul>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // skills: [
      //   {
      //     icon: "laptop-code",
      //     title: "Front End Developer",
      //     desc: "Following the OpenAPI specification and tools I design and document robust web services.",
      //     heading: "Languages and frameworks",
      //     technologies: [
      //       "Vue.js, Vuex",
      //       "Vuetify",
      //       "Bootstrap",
      //       "Foundation for sites",
      //       "JavaScript",
      //       "HTML",
      //       "CSS",
      //       "AngularJS (v1.6)",
      //     ],
      //   },
      //   {
      //     icon: "server",
      //     title: "Back End Developer",
      //     desc: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
      //     heading: "Languages and frameworks",
      //     technologies: [
      //       "Node.js",
      //       "Express",
      //       "MongoDB",
      //       "OpenAPI specification and Swagger tools",
      //       "SocketIO",
      //       "Jest, SuperTest",
      //     ],
      //   },
      //   {
      //     icon: "pencil-ruler",
      //     title: "UX Designer",
      //     desc: "I value consistent content structure, clean design patterns, and intuitive graphical interfaces.",
      //     heading: "Methods and Tools",
      //     technologies: [
      //       "User-Centred design",
      //       "Heuristic Evaluation",
      //       "Pen and Paper",
      //       "Invision",
      //       "Presentator.io",
      //       "Gravit Designer",
      //       "Balsamiq Mockups",
      //     ],
      //   },
      // ],
    };
  },
  computed: {
    skills() {
      let skillsList = this.$store.state.skills;
      console.log(
        "🚀 ~ file: skillsCollection.vue ~ line 94 ~ skills ~ this.$store.state",
        this.$store.state
      );
      return skillsList.skills;
    },
  },
};
</script>

<style scoped>
.columns-container {
  width: 100%;
  height: 100%;
}

.column {
  border: 1px solid var(--v-accent-darken2);
  border-radius: 4px;
  box-shadow: 0px 3px 1px -2px var(--v-accent-darken2);
}

.content__icon {
  font-size: 2.5rem;
  color: var(--v-secondary-base);
}

.tech-list {
  list-style-type: none;
}

.column__header {
  height: 100px;
}

.column__main {
  height: 100px;
}
@media only screen and (max-width: 600px) {
  .column__main {
    height: 90px;
  }
}

.column__footer {
  height: auto;
}
</style>
