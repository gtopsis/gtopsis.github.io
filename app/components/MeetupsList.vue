<script setup lang="ts">
import meetups from "~~/content/meetups.json";

const title = "Join Me Here";
</script>

<template>
  <v-container class="pa-0" fluid full-width>
    <SectionHeading :title="title" justify="justify-center" class="mb-8" />

    <SocialsAndMeetups :meetups="meetups" />
  </v-container>
</template>
