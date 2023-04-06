<script setup lang="ts">
interface Meetup {
  src: string;
  title: string;
  link: string;
}

const title = "Proud member of Meetups";
const meetups: Meetup[] = [
  {
    src: "/images/devstaff-meetup.jpg",
    title: "DevStaff: A developer community in Crete",
    link: "https://www.meetup.com/devstaff/",
  },
  {
    src: "/images/opencoffe-meetup.jpg",
    title: "Open Coffee Heraklion",
    link: "https://www.meetup.com/opencoffeeher/",
  },
  {
    src: "/images/gdg-meetup.jpg",
    title: "Google Developers Group Heraklion",
    link: "https://www.meetup.com/GDG-Heraklion/",
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
            :src="meetup.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="meetup.title"></v-card-title>
          </v-img>

          <!-- <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions> -->
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
