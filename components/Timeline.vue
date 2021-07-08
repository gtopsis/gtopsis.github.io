<template>
  <v-container fluid>
    <v-row align="center" class="justify-md-center justify-sm-left">
      <v-col cols="auto" class="mb-2">
        <h2>{{ timelineTitle }}</h2>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="12" md="10" lg="9" class="px-0">
        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item v-for="(item, i) in timelineItems" :key="i">
            <template #icon>
              <v-avatar
                :size="avatarSize"
                :color="item.avatar.bgColor"
                align-center
                justify-center
              >
                <v-img
                  contain
                  :src="item.avatar.img"
                  :alt="item.avatar.alt"
                  class="firm-logo"
                  width="24"
                  height="24"
                >
                </v-img>
              </v-avatar>
            </template>
            <template #opposite>
              <a
                :href="item.avatar.label.link"
                class="firm-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{{ item.avatar.label.text }}</span>
              </a>
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
              <v-card-text v-if="$vuetify.breakpoint.smAndDown">
                <!-- v-if="hasTimelineItemDetails(item.card)" -->
                <p v-if="$vuetify.breakpoint.smAndDown" class="mb-0">
                  <a
                    :href="item.avatar.label.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="firm-link"
                    >{{ item.avatar.label.text }}</a
                  >
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
  data() {
    return {
      timelineTitle: "Experience and Studies",
      avatarSize: 34,
    };
  },
  computed: {
    isMobileDevice() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    timelineItems() {
      let timelineItems = this.$store.state.timelineItems;
      return [...timelineItems.jobs, ...timelineItems.education];
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
  font-size: 1.15rem;
}
</style>
