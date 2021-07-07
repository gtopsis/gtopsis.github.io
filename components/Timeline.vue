<template>
  <v-container fluid>
    <v-row align="center" class="justify-md-center justify-sm-left">
      <v-col cols="auto">
        <h2>Experience</h2>
      </v-col>
    </v-row>

    <v-row align="center" class="justify-center">
      <v-col cols="12" md="8" lg="7" class="px-0">
        <v-timeline :dense="isMobileDevice">
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
              <v-card-title class="text-h6">
                {{ item.card.title }}
              </v-card-title>
              <v-card-subtitle>
                {{ item.card.period.start }} -
                {{ item.card.period.end }}
                <div v-if="isMobileDevice" style="display: inline">
                  <span class="px-1">|</span>
                  <a
                    :href="item.avatar.label.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{ item.avatar.label.text }}</a
                  >
                </div>
              </v-card-subtitle>
              <v-card-text v-if="hasTimelineItemDetails(item.card)">
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
      avatarSize: 32,
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
    loadImage(src) {
      console.log("🚀 ~ file: Timeline.vue ~ line 111 ~ loadImage ~ src", src);
      return import(src);
    },
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
