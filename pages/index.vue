<template>
  <v-row no-gutters justify-center class="page-container">
    <!-- hero section -->
    <v-col cols="12" class="section px-4 py-0 mx-0">
      <hero></hero>
    </v-col>

    <!-- skills section -->
    <v-col cols="12" class="section px-4 py-0 mx-0">
      <skills-collection></skills-collection>
    </v-col>

    <!-- meetups section -->
    <v-col cols="12" class="section px-4 py-0 mx-0">
      <projects></projects>
    </v-col>

    <!-- timeline section -->
    <v-col cols="12" class="section px-4 py-0 mx-0">
      <v-row class="justify-space-between no-gutters">
        <v-col cols="12" mb="2">
          <timeline content="experience"></timeline>
        </v-col>

        <v-col cols="12" mb="2">
          <timeline content="education"></timeline>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
useHead({
  title: 'Home',
  meta: [
    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
    {
      hid: 'description',
      name: 'description',
      content:
        'Home page of personal website. It contains details about my work experience and my education background.',
    },
  ],
});
</script>

<style scoped>
.section {
  margin: 100px 0;
}
.page-container {
  max-width: 1100px !important;
  margin: 0 auto;
}
</style>
