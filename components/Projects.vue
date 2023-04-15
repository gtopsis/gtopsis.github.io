<script setup lang="ts">
import { useProjectsStore } from "../stores/projects";

const { storeToRefs } = usePinia();
const title = "Personal Projects";
const { projectsList } = storeToRefs(useProjectsStore());
const projects = projectsList.value;

function navigateToProjectAsset(url: string) {
  window.open(url, "_blank");
}
</script>

<template>
  <v-container fluid full-width>
    <v-row align="center" class="justify-md-center justify-sm-left">
      <v-col cols="auto" class="mb-6">
        <h1>{{ title }}</h1>
      </v-col>
    </v-row>

    <v-row dense>
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
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            cover
            :src="project.src"
            :alt="project.imageDescription"
          >
            <v-card-title v-text="project.title"></v-card-title>
          </v-img>

          <v-card-text>
            <p class="project-description">{{ project.description }}</p>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="secondary"
              @click="navigateToProjectAsset(project.demo)"
            >
              Demo
            </v-btn>

            <v-btn
              color="secondary"
              @click="navigateToProjectAsset(project.code)"
            >
              Code
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.project-description {
  min-height: 105px;
}
</style>
