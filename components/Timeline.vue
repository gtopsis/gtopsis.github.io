<template>
  <v-container fluid>
    <v-row align="center" class="justify-md-center justify-sm-left">
      <v-col cols="auto" class="mb-3">
        <h1>{{ timelineTitle }}</h1>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="12" class="px-0">
        <v-timeline dense>
          <v-timeline-item v-for="(item, i) in timelineItems" :key="i">
            <template #icon>
              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-avatar
                    :size="avatarSize"
                    :color="item.avatar.bgColor"
                    align-center
                    justify-center
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-img
                      contain
                      :src="item.avatar.img"
                      :alt="item.avatar.alt"
                      class="firm-logo"
                      width="26"
                      height="26"
                    >
                    </v-img>
                  </v-avatar>
                </template>
                <span>{{ item.avatar.label.text }}</span>
              </v-tooltip>
            </template>

            <v-card class="elevation-2 timeline-item">
              <v-card-title>
                <strong class="timeline-item-title">
                  {{ item.card.title }}
                </strong>
              </v-card-title>
              <v-card-subtitle>
                {{ item.card.period.start }} -
                {{ item.card.period.end }}
              </v-card-subtitle>
              <v-card-text>
                <!-- v-if="hasTimelineItemDetails(item.card)" -->
                <p class="mb-0">
                  <a
                    v-if="item.avatar.label.link"
                    :href="item.avatar.label.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="firm-link"
                    >{{ item.avatar.label.text }}</a
                  >
                  <span v-else>{{ item.avatar.label.text }}</span>
                </p>
                <!-- <ul v-if="item.card.roles.length > 1" class="ma-0 pl-0">
                  <li
                    v-for="(role, k) in item.card.roles"
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
                  {{ item.card.description }}
                </p>
                <ul class="ma-0">
                  <li v-for="(tool, j) in item.card.tools" :key="j"></li>
                </ul>
              </v-card-text>
              <v-card-actions v-if="item.card.readMore != ''">
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
  props: {
    content: {
      type: String,
      default: "experience",
      validator: (v) => ["experience", "education"].includes(v),
    },
  },
  data() {
    return {
      avatarSize: 40,
    };
  },
  computed: {
    isMobileDevice() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    timelineTitle() {
      if (this.content == "experience") {
        return "Experience";
      } else if (this.content == "education") {
        return "Education";
      }
      return "My Story";
    },
    timelineItems() {
      if (this.content == "experience") {
        let experience = this.$store.state.experience;
        return experience.jobs;
      } else if (this.content == "education") {
        let education = this.$store.state.education;
        return education.studies || [];
      }
      return [];
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

.timeline-item-title {
  font-size: 1.1rem;
}
</style>
