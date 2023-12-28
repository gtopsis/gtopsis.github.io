<script setup lang="ts">
import { useMeetupsStore } from "../stores/meetups";
import type { Meetup } from "~/models";

const title = "Participation on several Meetups";

const { meetupsList } = storeToRefs(useMeetupsStore());
const meetups = meetupsList.value as Meetup[];

function navigateToMeetup(url: string) {
  window.open(url, "_blank");
}
</script>

<template>
  <v-container class="pa-0" fluid full-width>
    <v-row align="center" class="justify-md-center justify-sm-left">
      <v-col cols="auto" class="mb-8">
        <h1>{{ title }}</h1>
      </v-col>
    </v-row>

    <v-row dense justify="center">
      <v-col v-for="(meetup, index) in meetups" :key="index" cols="12" md="4">
        <v-card
          class="meetup-card mx-auto mb-3"
          max-width="400"
          @click="navigateToMeetup(meetup.link)"
        >
          <nuxt-picture
            :img-attrs="{ style: 'display:block; width:100%' }"
            :src="meetup.src"
            :alt="meetup.description"
            placeholder
            fit="cover"
            loading="lazy"
            sizes="xs:400px sm:450px md:350px lg:350px xl:400px"
          >
          </nuxt-picture>
          <v-card-title>
            <strong :title="meetup.title">{{ meetup.title }}</strong>
          </v-card-title>
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
