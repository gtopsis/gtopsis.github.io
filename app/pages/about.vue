<script setup lang="ts">
import aboutMeDescription from "~~/content/about.json";

useHead({
  title: "About",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Contains details about my personal hobbies, projects and goals.",
    },
  ],
});

const head = {
  title: "About - Giorgos Topsis",
  description: "Learn more about me!",
  image: "./images/Twitter-card.png",
};

const {
  studies: intro,
  workExperience,
  values: personal1,
  hobbies: personal2,
} = aboutMeDescription;

const aboutMe = [
  { order: 1, text: intro },
  { order: 2, text: workExperience },
  { order: 3, text: personal1 },
  { order: 4, text: personal2 },
];
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
      <v-col
        cols="12"
        class="section hero-container pa-0 mx-0 d-flex align-center justify-center"
      >
        <h1 class="text-center text-h5 text-md-h4 text-wrap">
          What You will
          <mark class="text-white bg-primary">Read</mark>
          is What You Get
        </h1>
      </v-col>

      <!-- about me section -->
      <v-col
        cols="12"
        md="10"
        lg="9"
        class="section about-me-container px-0 mb-16 mx-0"
      >
        <p
          v-for="paragraph in aboutMe"
          :key="paragraph.order"
          class="text-left text-body-1 mb-6"
          white
        >
          {{ paragraph.text }}
        </p>

        <span class="mt-8 text-left">
          A look at my tech stack:
          <a
            href="https://stackshare.io/gforerasmus/my-stack#stack"
            target="_blank"
            rel="noopener noreferrer"
            class="text-secondary"
            >My page on StackShare</a
          >
        </span>
      </v-col>

      <!-- experience section -->
      <v-col cols="12" md="10" lg="9" class="section px-0 mb-16 mx-0">
        <ExperienceList />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.hero-container {
  height: 70vh;
}
</style>
