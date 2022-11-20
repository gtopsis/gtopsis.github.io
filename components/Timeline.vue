<template>
  <v-container>
    <v-row align="center" class="justify-md-center justify-sm-left">
      <v-col cols="auto" class="mb-3">
        <h1>{{ timelineTitle }}</h1>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="12" class="px-0">
        <v-timeline
          align="start"
          direction="horizontal"
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
                Read more
              </v-card-actions>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useDisplay } from 'vuetify';
const { mobile } = useDisplay();

const avatarSize = 40;
const props = defineProps({
  content: {
    type: String,
    default: 'experience',
    validator: v => ['experience', 'education'].includes(v),
  },
});

const truncateLines = props.content == 'education' ? 'start' : 'both';
const timelineTitle = computed({
  get() {
    if (props.content == 'experience') {
      return 'Experience';
    } else if (props.content == 'education') {
      return 'Education';
    }
    return 'My Story';
  },
});

const timelineItems = computed({
  get() {
    if (props.content === 'experience') {
      const { jobs } = useJobsStore();
      return jobs;
    } else if (props.content === 'education') {
      const { studies } = useStudiesStore();
      return studies;
    }
    return [];
  },
});

function hasTimelineItemDetails(timelineItemData) {
  return timelineItemData.description && timelineItemData != '';
}

function navigateToCompany(cUrl) {
  if (!cUrl || cUrl == '') return;
  let url = cUrl;
  window.open(url, '_blank');
}
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
  max-width: 300px;
}
.timeline-item-title {
  font-size: 1.1rem;
}

.timeline-avatar {
  border: 1px solid grey;
}
</style>
