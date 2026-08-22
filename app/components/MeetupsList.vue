<script setup lang="ts">
import { useMeetupsStore } from "~~/stores/meetups";

const title = "Join Me Here";

const { meetupsList } = storeToRefs(useMeetupsStore());
</script>

<template>
  <v-container class="pa-0" fluid full-width>
    <v-row align="center" class="justify-center">
      <v-col cols="auto" class="mb-8">
        <h1>{{ title }}</h1>
      </v-col>
    </v-row>

    <v-row dense justify="center">
      <SocialsAndMeetups :meetups="meetupsList" />
    </v-row>
  </v-container>
</template>

<style scoped>
.meetup-card:hover {
  cursor: pointer;
}
</style>
