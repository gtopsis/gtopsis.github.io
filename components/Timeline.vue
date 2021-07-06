<template>
  <v-container fluid>
    <v-row align="center" class="justify-center justify-sm-left">
      <v-col cols="auto">
        <h2>Experience</h2>
      </v-col>
    </v-row>

    <v-row align="center" class="justify-center">
      <v-col cols="12" md="8" lg="6" class="px-0">
        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item
            v-for="(element, index) in timelineItems"
            :key="index"
          >
            <template #icon>
              <v-avatar
                size="32"
                :color="element.avatar.bgColor"
                align-center
                justify-center
              >
                <v-img
                  contain
                  :src="element.avatar.img"
                  :alt="element.avatar.alt"
                  class="firm-logo"
                  width="24"
                  height="24"
                  @click="navigateToCompany(element.avatar.label.link)"
                >
                </v-img>
              </v-avatar>
            </template>
            <template #opposite>
              <a
                :href="element.avatar.label.link"
                class="firm-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{{ element.avatar.label.text }}</span>
              </a>
            </template>
            <v-card class="elevation-2 timeline-item">
              <v-card-title class="text-h6">
                {{ element.card.role }}
              </v-card-title>
              <v-card-subtitle>
                {{ element.card.period.start }} -
                {{ element.card.period.end }}
              </v-card-subtitle>
              <v-card-text
                v-if="
                  element.card.description || element.card.tools.length != 0
                "
              >
                <p class="ma-0">
                  {{ element.card.description }}
                </p>
                <ul class="ma-0">
                  <li v-for="(tool, j) in element.card.tools" :key="j"></li>
                </ul>
              </v-card-text>
              <v-card-actions>
                <!-- <nuxt-link :to="element.card.action">Read more</nuxt-link> -->
                Read more
              </v-card-actions>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      timelineItems: [
        {
          id: 1,
          avatar: {
            img: "conveos_logo.png",
            alt: "Logo of software agency Conveos",
            bgColor: "#000",
            label: { text: "Conveos", link: "https://conveos.com" },
          },
          card: {
            role: "Back End Web Developer",
            period: { start: "Jan 2015", end: "March 2021" },
            description: "lorem ipsum",
            tools: [],
          },
        },
        {
          id: 2,
          avatar: {
            img: "army_logo.png",
            bgColor: "blue",
            label: { text: "Greek Army", link: "" },
          },
          card: {
            role: "IT Technician",
            period: { start: "Jan 2015", end: "March 2021" },
            description: "",
            tools: [],
          },
        },
        {
          id: 3,

          avatar: {
            img: "conveos_logo.png",
            bgColor: "#000",
            label: { text: "Conveos", link: "https://conveos.com" },
          },
          card: {
            role: "Back End Web Developer",
            period: { start: "Jan 2015", end: "March 2021" },
            description: "lorem ipsum",
            tools: [],

            action: "/job",
          },
        },
        {
          id: 4,
          avatar: {
            img: "conveos_logo.png",
            bgColor: "#000",
            label: { text: "Conveos", link: "https://conveos.com" },
          },
          card: {
            role: "Front End Web Developer",
            period: { start: "Jan 2015", end: "March 2021" },
            description: "lorem ipsum",
            action: "/job",
          },
        },
      ],
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  methods: {
    navigateToCompany(cUrl) {
      if (!cUrl || cUrl == "") return;
      let url = cUrl;
      window.open(url, "_blank");
    },
  },
};
</script>
<style scoped>
.firm-link {
  text-decoration: none;
}

.firm-logo {
  width: 45px;
  height: 45px;
  cursor: pointer;
}

.timeline-item {
}
</style>
