<script lang="ts" setup>
useHead({
  title: "Projects",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Contains details about my participation on activities and several personal projects.",
    },
  ],
});
</script>

<template>
  <v-row class="page-container" no-gutters justify="center">
    <v-col cols="12" class="section pa-0 mx-0">
      <HeroSection />
    </v-col>

    <v-col cols="12" class="section mb-16 mx-0">
      <ProjectsList />
    </v-col>

    <v-col cols="12" class="section mb-16 mx-0">
      <MeetupsList />
    </v-col>
  </v-row>
</template>

<style scoped>
.section {
  overflow: hidden;
}
</style>
