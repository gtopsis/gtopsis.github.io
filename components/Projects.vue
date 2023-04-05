<template>
  <v-container fluid full-width>
    <v-row align="center" class="justify-md-center justify-sm-left">
      <v-col cols="auto" class="mb-3">
        <h1>{{ title }}</h1>
      </v-col>
    </v-row>

    <v-row dense justify="center">
      <v-col
        v-for="(project, index) in projects"
        :key="index"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card class="project-card" @click="navigateToProject(project)">
          <v-img
            :src="project.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="project.title"></v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const title = "Personal Projects";
const projects = [
  {
    src: "/images/portfolio.png",
    title: "Personal website",
    link: "https://gtopsis.github.io/",
  },
  {
    src: "/images/uoc-radio.png",
    title: "Uoc radio",
    link: "https://gtopsis.github.io/Uoc-radio-website/index.html",
  },
  {
    src: "/images/cs-352.png",
    title: "Website for course cs-352",
    link: "https://gtopsis.github.io/Course-cs352-website/",
  },
];

function navigateToProject(project) {
  window.open(project.link);
}
</script>

<style scoped>
.project-card:hover {
  cursor: pointer;
}
</style>
