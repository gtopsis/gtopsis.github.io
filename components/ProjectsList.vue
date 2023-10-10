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
            :img-attrs="{ style: 'display:block; width:100%' }"
            :src="project.src"
            :alt="project.imageDescription"
            placeholder
            loading="lazy"
            fit="cover"
            sizes="xs:400px sm:450px md:350px lg:350px xl:400px"
          >
          </nuxt-picture>
          <v-card-title v-text="project.title"></v-card-title>

          <v-card-text>
            <p class="project-description">{{ project.description }}</p>
            <ul class="project-building-tools">
              <li>test</li>
              <li>test</li>
            </ul>
          </v-card-text>

          <v-card-actions>
            <v-btn
              v-if="project.demo"
              color="secondary"
              @click="navigateToProjectAsset(project.demo)"
            >
              Demo
            </v-btn>

            <v-btn
              v-if="project.code"
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

.project-building-tools li{
    display: inline-block;
}
</style>
