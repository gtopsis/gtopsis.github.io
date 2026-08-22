<script setup lang="ts">
import dayjs from "dayjs";
import { useStudiesStore } from "~~/stores/education.js";
import { useJobsStore } from "~~/stores/experience.js";
import { useDisplay } from "vuetify";

interface AvatarDetails {
  img: string;
  alt: string;
  bgColor: string;
  label: {
    text: string;
    link: string;
  };
}

const { mobile } = useDisplay();

const props = defineProps({
  content: {
    type: String,
    default: "experience",
    validator: (v: string) => ["experience", "education"].includes(v),
  },
});

const avatarSize = mobile.value ? 38 : 44;

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

// TODO: improve intelligence of the retrieval by passing the whole item
const getTooltipIdOfAvatar = (avatar: AvatarDetails) =>
  `tooltip${avatar.label.text.split(" ").join()}`;

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
    <v-row align="center" class="justify-md-center justify-sm-left mb-8">
      <v-col cols="auto" class="">
        <h1>{{ timelineTitle }}</h1>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12" class="px-0 overflow-x-auto">
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
              <v-tooltip :text="item.avatar.alt" location="bottom">
                <template #activator="{ props: tooltipProps }">
                  <v-avatar
                    :size="avatarSize"
                    class="timeline-avatar"
                    v-bind="tooltipProps"
                    :aria-describedby="getTooltipIdOfAvatar(item.avatar)"
                  >
                    <v-img
                      :src="item.avatar.img"
                      :alt="item.avatar.alt"
                      fit="fill"
                      width="30"
                      height="30"
                    />
                    <!-- <nuxt-img
                      :src="item.avatar.img"
                      :alt="item.avatar.alt"
                      fit="fill"
                      width="30"
                      height="30"
                    /> -->
                  </v-avatar>
                </template>
              </v-tooltip>

              <!-- The following dummy span is used for accessibility reasons -->
              <span :id="getTooltipIdOfAvatar(item.avatar)" class="d-none">
                {{ item.avatar.alt }}
              </span>
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

.timeline-avatar {
  border: 1px solid grey;
}

@media only screen and (max-width: 600px) {
  .timeline-item-card {
    max-width: 320px;
  }
}
</style>
