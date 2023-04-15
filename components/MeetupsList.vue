<script setup lang="ts">
import { useMeetupsStore } from "../stores/meetups";
import { Meetup } from "~/models";

const title = "Participation on several Meetups";

const { meetupsList } = storeToRefs(useMeetupsStore());
const meetups = meetupsList.value as Meetup[];

function navigateToMeetup(url: string) {
  window.open(url, "_blank");
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
        <v-card class="meetup-card" @click="navigateToMeetup(meetup.link)">
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
