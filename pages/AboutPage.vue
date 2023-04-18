<script setup lang="ts">
import { useAboutMeStore } from "../stores/aboutMe";
useHead({
  title: "About",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "About me page contains details about my personal hobbies, projects and goals.",
    },
  ],
});

const head = {
  title: "About - Giorgos Topsis",
  description: "Learn more about me!",
  image: "./images/Twitter-card.png",
};

const { aboutMe } = storeToRefs(useAboutMeStore());
</script>

<template>
  <v-container class="d-flex pa-0" fluid full-width fill-height align="center">
    <SocialHead
      :title="head.title"
      :description="head.description"
      :image="head.image"
    />

    <v-row class="page-container" no-gutters justify="center">
      <!-- hero section -->
      <v-col cols="12" class="section pa-0 mx-0">
        <v-container class="hero-container ma-0 pa-0" fill-height>
          <v-row no-gutters justify="center" align="center">
            <v-col cols="auto" align-self="center">
              <p class="text-center text-h5 text-sm-h5 text-md-h4">
                What You <span class="text-primary">Read</span> is What you Get
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <!-- about me section -->
      <v-col cols="12" class="section px-0 mb-16 mx-0">
        <v-container class="about-me-container" fluid full-width>
          <v-row full-width justify="center" align="center">
            <v-col cols="12" md="10" lg="9" class="px-4">
              <p
                v-for="(paragraph, i) in aboutMe"
                :key="i"
                class="text-left text-body-1 mb-6"
                white
              >
                {{ paragraph }}
              </p>
            </v-col>
            <v-col cols="12"> </v-col>
          </v-row>
        </v-container>
      </v-col>

      <!-- timeline section -->
      <v-col cols="12" class="section px-0 mb-16 mx-0">
        <TimelineSection content="experience" />
      </v-col>

      <!-- timeline section -->
      <v-col cols="12" class="section px-0 mb-16 mx-0">
        <TimelineSection content="education" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.hero-container {
  height: 70vh;
}

.hero-container .v-row {
  height: 100%;
}
</style>
