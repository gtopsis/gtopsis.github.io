<script setup lang="ts">
import { useProjectsStore } from "~~/stores/projects";
import TechToolList from "./TechToolList.vue";

const title = "Personal Projects";
const { projectsList } = storeToRefs(useProjectsStore());
const visibleProjects = computed(() =>
  projectsList.value.filter(({ visible }) => visible !== false),
);

function navigateToProjectAsset(url: string) {
  window.open(url, "_blank");
}
</script>

<template>
  <v-container class="pa-0" fluid full-width>
    <v-row class="align-center justify-md-center justify-sm-left">
      <v-col cols="12" class="mb-2">
        <h1 class="text-center">{{ title }}</h1>
      </v-col>

      <v-col class="mb-8 text-center">
        <h2>
          <a
            href="http://github.com/gtopsis"
            target="_blank"
            rel="noopener noreferrer"
            class="text-secondary"
            >See all projects</a
          >
        </h2>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col
        v-for="project in visibleProjects"
        :key="project.title"
        cols="12"
        md="4"
      >
        <v-card class="mx-auto mb-3" max-width="400">
          <v-img
            v-if="project.src"
            :img-attrs="{ style: 'display:block; width:100%' }"
            :src="project.src"
            :alt="project.imageDescription"
            placeholder
            loading="lazy"
            fit="cover"
            sizes="xs:400px sm:450px md:350px lg:350px xl:400px"
          ></v-img>
          <!-- <nuxt-image
            v-if="project.src"
            :img-attrs="{ style: 'display:block; width:100%' }"
            :src="project.src"
            :alt="project.imageDescription"
            placeholder
            loading="lazy"
            fit="cover"
            sizes="xs:400px sm:450px md:350px lg:350px xl:400px"
          /> -->

          <v-card-title :title="project.title">
            <strong> {{ project.title }} </strong>
          </v-card-title>

          <v-card-text>
            <p class="project-description">{{ project.description }}</p>

            <TechToolList
              v-if="project.buildingToolsIds.length"
              :tools="project.buildingToolsIds"
            />
          </v-card-text>

          <v-card-actions>
            <v-btn
              v-if="project.demo"
              color="secondary"
              @click="navigateToProjectAsset(project.demo)"
            >
              <font-awesome-icon
                class="text-secondary"
                :icon="['fas', 'arrow-up-right-from-square']"
                size="lg"
                aria-hidden="true"
              />
              <span class="ml-1"> Demo </span>
            </v-btn>

            <v-btn
              v-if="project.code"
              color="secondary"
              @click="navigateToProjectAsset(project.code)"
            >
              <font-awesome-icon
                class="text-secondary"
                :icon="['fa-brands', 'fa-github']"
                size="lg"
                aria-hidden="true"
              />
              <span class="ml-1"> Code </span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="text-center">
        <h4>
          Tool used for app previews/mockups is
          <a href="https://www.shots.so/" target="_blank" class="text-secondary"
            >Shots</a
          >
          ❤️
        </h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.project-description {
  min-height: 105px;
}
</style>
