<script setup lang="ts">
import { useDisplay } from "vuetify";
import dayjs from "dayjs";
import { useStudiesStore } from "~~/stores/education.js";
import { useJobsStore } from "~~/stores/experience.js";

const { mobile } = useDisplay();
const timelineDirection = computed(() =>
  mobile.value ? "vertical" : "horizontal"
);

const avatarSize = 44;
const props = defineProps({
  content: {
    type: String,
    default: "experience",
    validator: (v: string) => ["experience", "education"].includes(v),
  },
});

const truncateLines = props.content === "education" ? "start" : "both";
const timelineTitle = computed(() => {
  if (props.content === "experience") {
    return "Experience";
  } else if (props.content === "education") {
    return "Education";
  }

  return "My Story";
});

const timelineItems = computed(() => {
  if (props.content === "experience") {
    const { jobsList } = storeToRefs(useJobsStore());
    return jobsList.value;
  } else if (props.content === "education") {
    const { studiesList } = storeToRefs(useStudiesStore());
    return studiesList.value;
  }

  return [];
});

function getDatePeriod({ start, end }: { start: string; end: string }) {
  const startDate = dayjs(start).format("MMM YYYY");
  const endDate = dayjs(end).format("MMM YYYY");
  const monthsDiff = Math.round(dayjs(end).diff(dayjs(start), "month", true));

  const numYears = Math.floor(monthsDiff / 12);
  const numMonths = monthsDiff % 12;

  const monthsDurationText =
    numMonths === 0 ? "" : numMonths === 1 ? "mo" : "mos";
  const yearsDurationText =
    numYears === 0 ? "" : numMonths === 1 ? "yr" : "yrs";

  let datePeriodDuration = "";
  if (monthsDurationText && yearsDurationText) {
    datePeriodDuration = `${numYears}${yearsDurationText} ${numMonths}${monthsDurationText}`;
  } else if (monthsDurationText) {
    datePeriodDuration = `${numMonths}${monthsDurationText}`;
  } else if (yearsDurationText) {
    datePeriodDuration = `${numYears}${yearsDurationText}`;
  }

  return `${startDate} - ${endDate}   (${datePeriodDuration})`;
}
</script>

<template>
  <v-container class="pa-0">
    <v-row align="center" class="justify-md-center justify-sm-left mb-8">
      <v-col cols="auto" class="">
        <h1>{{ timelineTitle }}</h1>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12" class="px-0">
        <v-timeline
          align="center"
          :direction="timelineDirection"
          side="end"
          :truncate-line="truncateLines"
        >
          <v-timeline-item
            v-for="(item, i) in timelineItems"
            :key="i"
            fill-dot
            :dot-color="item.avatar.bgColor"
            elevation="2"
            style="align-self: flex-start"
          >
            <template #icon>
              <v-tooltip
                location="bottom"
                aria-labelledby="timelineItemTooltipText"
              >
                <template #activator="{ props: tooltipProps }">
                  <v-avatar
                    :size="avatarSize"
                    class="timeline-avatar"
                    v-bind="tooltipProps"
                  >
                    <nuxt-img
                      :src="item.avatar.img"
                      :alt="item.avatar.alt"
                      fit="fill"
                      width="31"
                      height="31"
                    >
                    </nuxt-img>
                  </v-avatar>
                </template>

                <span id="timelineItemTooltipText">{{ item.avatar.alt }}</span>
              </v-tooltip>
            </template>

            <v-card class="timeline-item-card">
              <v-card-title>
                <span
                  class="timeline-item-title text-left text-body-1 text-md-subtitle text-bold text-wrap font-weight-bold"
                >
                  {{ item.title }}
                </span>
              </v-card-title>
              <v-card-subtitle>
                <span> {{ getDatePeriod(item.period) }} </span>

                <p class="mb-0">
                  <a
                    v-if="item.avatar.label.link"
                    class="text-secondary font-weight-bold"
                    :href="item.avatar.label.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{ item.avatar.label.text }}</a
                  >
                  <span v-else class="text-secondary font-weight-bold">{{
                    item.avatar.label.text
                  }}</span>
                </p>
              </v-card-subtitle>
              <v-card-text>
                <p class="ma-0">
                  {{ item.description }}
                </p>
                <ul class="ma-2">
                  <li
                    v-for="(tool, j) in item.tools"
                    :key="j"
                    class="text-left"
                  >
                    <span>{{ tool }}</span>
                  </li>
                </ul>
              </v-card-text>
              <v-card-actions v-if="item.readMore != ''">
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
.timeline-item-card {
  max-width: 300px;
}

/* cheat to override vuetify style for timeline item */
.v-timeline--horizontal.v-timeline .v-timeline-item .v-timeline-item__body {
  align-self: flex-start !important;
}

.v-timeline-item > div {
  align-self: flex-start !important;
}

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
