<script setup lang="ts">
import { useProjectsStore } from "../stores/projects";
import { Project } from "~/models";

const title = "Personal Projects";
const { projectsList } = storeToRefs(useProjectsStore());
const projects = projectsList.value as Project[];

function navigateToProjectAsset(url: string) {
  window.open(url, "_blank");
}
</script>

<template>
  <v-container fluid full-width>
    <v-row align="center" class="justify-md-center justify-sm-left">
      <v-col cols="auto" class="mb-8">
        <h1>{{ title }}</h1>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col v-for="project in projects" :key="project.title" cols="12" md="4">
        <v-card class="mx-auto" max-width="400">
          <nuxt-picture
            :img-attrs="{ class: 'align-end text-white' }"
            :src="project.src"
            :alt="project.imageDescription"
            placeholder
            loading="lazy"
            fill="cover"
            sizes="sm:400px md:400px lg:350px"
          >
          </nuxt-picture>
          <v-card-title v-text="project.title"></v-card-title>

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
