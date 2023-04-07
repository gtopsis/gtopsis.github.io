<script setup lang="ts">
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();
const timelineDirection = computed(() => {
  switch (mobile.value) {
    case true:
      return "vertical";
    case false:
      return "horizontal";
  }
});

const avatarSize = 40;
const props = defineProps({
  content: {
    type: String,
    default: "experience",
    validator: (v) => ["experience", "education"].includes(v),
  },
});

const truncateLines = props.content == "education" ? "start" : "both";
const timelineTitle = computed(() => {
  if (props.content == "experience") {
    return "Experience";
  } else if (props.content == "education") {
    return "Education";
  }
  return "My Story";
});

const timelineItems = computed(() => {
  if (props.content === "experience") {
    const { jobs } = useJobsStore();
    return jobs;
  } else if (props.content === "education") {
    const { studies } = useStudiesStore();
    return studies;
  }
  return [];
});
</script>

<template>
  <v-container class="pa-0">
    <v-row align="center" class="justify-md-center justify-sm-left">
      <v-col cols="auto" class="mb-3">
        <h1>{{ timelineTitle }}</h1>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="12" class="px-0">
        <v-timeline
          align="start"
          :direction="timelineDirection"
          side="end"
          :truncate-line="truncateLines"
        >
          <v-timeline-item v-for="(item, i) in timelineItems" :key="i">
            <template #icon style="border: 1px solid grey">
              <v-tooltip activator="parent" location="bottom">
                <template #activator="{ on, attrs }">
                  <v-avatar
                    :size="avatarSize"
                    :color="item.avatar.bgColor"
                    class="timeline-avatar"
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

            <v-card class="elevation-2 timeline-item-card">
              <v-card-title>
                <h4
                  class="timeline-item-title text-left text-subtitle text-md-body-1 text-bold text-wrap font-weight-bold"
                >
                  {{ item.card.title }}
                </h4>
              </v-card-title>
              <v-card-subtitle>
                {{ item.card.period.start }} -
                {{ item.card.period.end }}
              </v-card-subtitle>
              <v-card-text>
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

                <p class="ma-0">
                  {{ item.card.description }}
                </p>
                <ul class="ma-2">
                  <li
                    v-for="(tool, j) in item.card.tools"
                    :key="j"
                    class="text-left"
                  >
                    <span>{{ tool }}</span>
                  </li>
                </ul>
              </v-card-text>
              <v-card-actions v-if="item.card.readMore != ''">
                Read more
              </v-card-actions>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.firm-link {
  text-decoration: none;
}

.firm-logo {
  width: 45px;
  height: 45px;
  cursor: pointer;
}

.timeline-item-card {
  max-width: 300px;
}

/* cheat to override vuetify style for timeline item */
.v-timeline--horizontal.v-timeline
  .v-timeline-item:nth-child(2n + 1)
  .v-timeline-item__body {
  align-self: flex-start !important;
}

.timeline-avatar {
  border: 1px solid grey;
}

@media only screen and (max-width: 600px) {
  .timeline-item-card {
    max-width: 320px;
  }
}
</style>
