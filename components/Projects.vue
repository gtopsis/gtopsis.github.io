<script setup lang="ts">
const title = "Personal Projects";
const projects = [
  {
    src: "/images/portfolio.png",
    title: "Personal website",
    link: "https://gtopsis.github.io/",
    code: "https://github.com/gtopsis/gtopsis.github.io",
  },
  {
    src: "/images/uoc-radio.png",
    title: "Uoc radio",
    link: "https://gtopsis.github.io/Uoc-radio-website/index.html",
    code: "https://github.com/gtopsis/Uoc-radio-website",
  },
  {
    src: "/images/cs-352.png",
    title: "Website for course cs-352",
    link: "https://gtopsis.github.io/Course-cs352-website/",
    code: "https://github.com/gtopsis/Course-cs352-website",
  },
];

function navigateToProjectDemo(project) {
  window.open(project.link);
}

function navigateToProjectCode(project) {
  window.open(project.code);
}
</script>

<template>
  <v-container fluid full-width>
    <v-row align="center" class="justify-md-center justify-sm-left">
      <v-col cols="auto" class="mb-6">
        <h1>{{ title }}</h1>
      </v-col>
    </v-row>

    <v-row dense justify="center">
      <v-col
        v-for="project in projects"
        :key="project.title"
        cols="12"
        md="3"
        lg="4"
      >
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="align-end text-white"
            height="200"
            :src="project.src"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            cover
          >
            <v-card-title v-text="project.title"></v-card-title>
          </v-img>

          <!-- <v-card-subtitle class="pt-4"> Number 10 </v-card-subtitle>

          <v-card-text>
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text> -->

          <v-card-actions>
            <v-btn color="primary" @click="navigateToProjectDemo(project)">
              Demo
            </v-btn>

            <v-btn color="primary" @click="navigateToProjectCode(project)">
              Code
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
