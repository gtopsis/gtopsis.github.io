<script setup lang="ts">
import dayjs from "dayjs";
import jobs from "~~/content/jobs.json";

const sectionTitle = "Experience";

const groups = computed(() => {
  const sorted = [...jobs].sort((a, b) =>
    a.period.start < b.period.start ? 1 : -1,
  );

  const byDomain = new Map<string, typeof sorted>();
  for (const job of sorted) {
    const domain = job.domain ?? "Other";
    byDomain.set(domain, [...(byDomain.get(domain) ?? []), job]);
  }

  return [...byDomain.entries()].map(([domain, jobsInDomain]) => ({
    domain,
    jobs: jobsInDomain,
  }));
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
    <SectionHeading
      :title="sectionTitle"
      justify="justify-start"
      class="mb-8"
    />

    <div
      v-for="group in groups"
      :key="group.domain"
      class="experience-row py-6"
    >
      <h3 class="domain text-h6 text-secondary mb-4">{{ group.domain }}</h3>

      <div
        v-for="(item, i) in group.jobs"
        :key="i"
        class="job"
        :class="{ 'mb-5': i < group.jobs.length - 1 }"
      >
        <div class="d-flex flex-wrap align-baseline justify-space-between ga-2">
          <h4 class="text-subtitle-1 font-weight-bold">{{ item.title }}</h4>
          <span class="period text-body-2 text-medium-emphasis">
            {{ getDatePeriod(item.period) }}
          </span>
        </div>

        <div class="employer d-flex align-center mt-1 mb-2">
          <nuxt-img
            v-if="item.avatar.img"
            :src="item.avatar.img"
            :alt="item.avatar.alt"
            width="20"
            height="20"
            loading="lazy"
            class="employer-logo mr-2"
          />
          <a
            v-if="item.avatar.label.link"
            :href="item.avatar.label.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-secondary"
            >{{ item.avatar.label.text }}</a
          >
          <span v-else class="text-secondary">{{
            item.avatar.label.text
          }}</span>
        </div>

        <p v-if="item.description" class="text-body-1 mb-2">
          {{ item.description }}
        </p>

        <ul v-if="item.tools.length" class="tools ma-0 pa-0">
          <li
            v-for="(tool, j) in item.tools"
            :key="j"
            class="text-body-2 text-medium-emphasis"
          >
            {{ tool }}
          </li>
        </ul>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
.experience-row:not(:last-child) {
  border-bottom: 1px solid var(--v-accent-darken2);
}

.employer-logo {
  border-radius: 4px;
}

ul.tools {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 1rem;
}
</style>
