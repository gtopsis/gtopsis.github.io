<template>
  <v-row class="page-container" no-gutters justify="center">
    <!-- hero section -->
    <v-col cols="12" class="section pa-0 mx-0">
      <hero></hero>
    </v-col>

    <!-- projects section -->
    <v-col cols="12" class="section py-5 mx-0">
      <projects></projects>
    </v-col>

    <!-- meetups section -->
    <v-col cols="12" class="section py-5 mx-0">
      <meetups class=""></meetups>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
useHead({
  title: "Home",
  meta: [
    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
    {
      hid: "description",
      name: "description",
      content:
        "Home page of personal website. It contains details about my work experience and my education background.",
    },
  ],
});
</script>

<style scoped>
.section {
}
.page-container {
  max-width: 1100px !important;
  margin: 0 auto;
}
</style>
