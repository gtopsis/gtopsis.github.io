<script setup lang="ts">
interface Meetup {
  src: string;
  title: string;
  link: string;
  description: string;
}

const title = "Participation on several Meetups";
const meetups: Meetup[] = [
  {
    src: "/images/devstaff-meetup.jpg",
    title: "DevStaff: A developer community in Crete",
    link: "https://www.meetup.com/devstaff/",
    description:
      "A meetup which is called DevStaff and it is a developer community in Crete.",
  },
  {
    src: "/images/opencoffe-meetup.jpg",
    title: "Open Coffee Heraklion",
    link: "https://www.meetup.com/opencoffeeher/",
    description:
      "A meetup which is called Open Coffee Heraklion and it gathers motivated youngsters & professionals from Crete, who have as common ground the urge of sharing business ideas",
  },
  {
    src: "/images/vuejs-athens-meetups.jpeg",
    title: "VueJS Athens",
    link: "https://www.meetup.com/vuejsathens/",
    description:
      "A meetup which is called VueJS Athens and it is a community of people that is eager to learn more about Vue.js",
  },
];

function navigateToMeetup(meetup: Meetup) {
  window.open(meetup.link);
}
</script>

<template>
  <v-container fluid full-width>
    <v-row align="center" class="justify-md-center justify-sm-left">
      <v-col cols="auto" class="mb-6">
        <h1>{{ title }}</h1>
      </v-col>
    </v-row>

    <v-row dense justify="center">
      <v-col
        v-for="(meetup, index) in meetups"
        :key="index"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card class="meetup-card" @click="navigateToMeetup(meetup)">
          <v-img
            class="white--text align-end"
            :src="meetup.src"
            :alt="meetup.description"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="meetup.title"></v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.meetup-card:hover {
  cursor: pointer;
}
</style>
