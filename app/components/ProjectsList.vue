<script setup lang="ts">
import projects from "~~/content/projects.json";
import TechToolList from "./TechToolList.vue";

const title = "Personal Projects";
const visibleProjects = computed(() =>
  projects.filter(({ visible }) => visible !== false),
);

const runtimeConfig = useRuntimeConfig();

// Same lazy-resolution approach as SocialsAndMeetups.vue: the GitHub
// profile URL isn't written into the DOM until a genuine interaction
// (focus/hover/touch) signals a real visitor, so bulk DOM-scraping bots
// see an inert "#" instead of a usable profile link.
const githubProfileHref = ref("");

function resolveGithubProfileHref() {
  if (githubProfileHref.value) return;

  const username = atob(
    runtimeConfig.public.SOCIAL_NETWORKS_USERNAME_B64 || "",
  );
  githubProfileHref.value = `https://github.com/${username}`;
}

function onActivateGithubProfile(event: MouseEvent) {
  if (githubProfileHref.value) return;

  event.preventDefault();
  resolveGithubProfileHref();
  window.open(githubProfileHref.value, "_blank", "noopener,noreferrer");
}

function navigateToProjectAsset(url: string) {
  window.open(url, "_blank");
}
</script>

<template>
  <v-container class="pa-0" fluid full-width>
    <v-row class="align-center justify-md-center justify-sm-left">
      <v-col cols="12" class="mb-2">
        <h2 class="text-center text-h4">{{ title }}</h2>
      </v-col>

      <v-col class="mb-8 text-center">
        <p class="text-h6">
          <a
            :href="githubProfileHref || '#'"
            target="_blank"
            rel="nofollow noopener noreferrer"
            class="text-secondary"
            @focus="resolveGithubProfileHref"
            @pointerenter="resolveGithubProfileHref"
            @touchstart="resolveGithubProfileHref"
            @click="onActivateGithubProfile"
            >See all projects</a
          >
        </p>
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
          <nuxt-img
            v-if="project.src"
            class="project-image"
            :src="project.src"
            :alt="project.imageDescription"
            placeholder
            loading="lazy"
            fit="cover"
            sizes="xs:400px sm:450px md:350px lg:350px xl:400px"
          />

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
        <p class="mb-0">
          Tool used for app previews/mockups is
          <a href="https://www.shots.so/" target="_blank" class="text-secondary"
            >Shots</a
          >
          ❤️
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.project-image {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
}

.project-description {
  min-height: 105px;
}
</style>
