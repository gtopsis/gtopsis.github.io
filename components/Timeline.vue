<template>
  <v-container fluid>
    <v-row align="center" class="justify-center justify-sm-left">
      <v-col cols="auto">
        <h2>Experience</h2>
      </v-col>
    </v-row>

    <v-row align="center" class="justify-center">
      <v-col cols="12" md="8" lg="7" class="px-0">
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
                {{ element.card.title }}
              </v-card-title>
              <v-card-subtitle>
                {{ element.card.period.start }} -
                {{ element.card.period.end }}
                <span v-if="$vuetify.breakpoint.smAndDown" class="pl-1">
                  | {{ element.avatar.label.text }}</span
                >
              </v-card-subtitle>
              <v-card-text v-if="hasTimelineItemDetails(element.card)">
                <!-- <ul v-if="element.card.roles.length > 1" class="ma-0 pl-0">
                  <li
                    v-for="(role, k) in element.card.roles"
                    :key="k"
                    class="ml-0"
                  >
                    <strong>{{ role.jobTitle }}</strong
                    ><br />
                    <span class="">
                      {{ role.period.start }} -
                      {{ role.period.end }}
                    </span>
                  </li>
                </ul> -->

                <p class="ma-0">
                  {{ element.card.description }}
                </p>
                <ul class="ma-0">
                  <li v-for="(tool, j) in element.card.tools" :key="j"></li>
                </ul>
              </v-card-text>
              <v-card-actions v-if="element.card.readMore != ''">
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
            title: "Back End Web Developer",
            roles: [
              {
                jobTitle: "Back End Web Developer",
                period: { start: "Jan 2015", end: "March 2021" },
              },
            ],
            period: { start: "Jan 2015", end: "March 2021" },
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
            label: { text: "Greek Army", link: "" },
          },
          card: {
            title: "IT Technician",
            roles: [
              {
                jobTitle: "IT Technician",
                period: { start: "Jan 2015", end: "March 2021" },
              },
            ],
            period: { start: "Jan 2015", end: "March 2021" },
            description: "",
            tools: [],
            readMore: "",
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
            title: "Full Stack Web Developer",
            roles: [
              {
                jobTitle: "Back End Web Developer",
                period: { start: "Jan 2015", end: "March 2021" },
              },
              {
                jobTitle: "Front End Web Developer",
                period: { start: "Jan 2015", end: "March 2021" },
              },
            ],
            period: { start: "Jan 2015", end: "March 2021" },
            description: "",
            tools: [],
            readMore: "",
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
    hasTimelineItemDetails(timelineItemData) {
      return timelineItemData.description && timelineItemData != "";
    },
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
</style>
