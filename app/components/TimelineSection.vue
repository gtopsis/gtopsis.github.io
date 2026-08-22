<script setup lang="ts">
import dayjs from "dayjs";
import { useStudiesStore } from "~~/stores/education.js";
import { useJobsStore } from "~~/stores/experience.js";

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
  const s = dayjs(start);
  const e = dayjs(end === "" ? new Date() : end);

  const startFormattedDate = s.format("MMM YYYY");
  const endFormattedDate = e.format("MMM YYYY");
  const monthsDiff = Math.round(e.diff(s, "month", true));

  const numYears = Math.floor(monthsDiff / 12);
  const numMonths = monthsDiff % 12;

  const monthsDurationText =
    numMonths === 0 ? "" : numMonths === 1 ? " mo" : " mos";
  const yearsDurationText =
    numYears === 0 ? "" : numYears === 1 ? " yr" : " yrs";

  let datePeriodDuration = "";
  if (monthsDurationText && yearsDurationText) {
    datePeriodDuration = `${numYears}${yearsDurationText} ${numMonths}${monthsDurationText}`;
  } else if (monthsDurationText) {
    datePeriodDuration = `${numMonths}${monthsDurationText}`;
  } else if (yearsDurationText) {
    datePeriodDuration = `${numYears}${yearsDurationText}`;
  }

  return `${startFormattedDate} - ${endFormattedDate}   (${datePeriodDuration})`;
}
</script>

<template>
  <v-container class="pa-0">
    <SectionHeading :title="timelineTitle" class="mb-8" />

    <div class="px-0 overflow-x-auto">
      <v-timeline
        align="center"
        direction="vertical"
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
            <TimelineAvatar :avatar="item.avatar" />
          </template>

          <v-card class="timeline-item-card">
            <v-card-title>
              <span
                class="timeline-item-title text-left text-body-1 text-md-subtitle text-bold text-wrap font-weight-bold"
              >
                {{ item.title }}
              </span>
            </v-card-title>
            <v-card-subtitle class="pb-3">
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
            <v-card-text
              v-if="item.description && item.tools.length"
              class="pt-0"
            >
              <p class="ma-0">
                {{ item.description }}
              </p>
              <ul class="ma-2">
                <li v-for="(tool, j) in item.tools" :key="j" class="text-left">
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
    </div>
  </v-container>
</template>

<style scoped>
.timeline-item-card {
  max-width: 700px;
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

@media only screen and (max-width: 600px) {
  .timeline-item-card {
    max-width: 320px;
  }
}
</style>
