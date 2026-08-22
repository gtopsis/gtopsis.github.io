<script setup lang="ts">
import { useMeetupsStore } from "~~/stores/meetups";

const title = "Join Me Here";

const { meetupsList } = storeToRefs(useMeetupsStore());
</script>

<template>
  <v-container class="pa-0" fluid full-width>
    <SectionHeading :title="title" justify="justify-center" class="mb-8" />

    <SocialsAndMeetups :meetups="meetupsList" />
  </v-container>
</template>

<style scoped>
.meetup-card:hover {
  cursor: pointer;
}
</style>
