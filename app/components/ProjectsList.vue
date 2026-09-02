<script setup lang="ts">
import projects from "~~/content/projects.json";

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
</script>

<template>
  <v-container class="pa-0" fluid full-width>
    <v-row class="align-center justify-md-center justify-sm-left mb-8">
      <v-col cols="12" class="pb-1">
        <h2 class="text-center text-h4">{{ title }}</h2>
      </v-col>

      <v-col cols="12" class="pt-0 text-center">
        <p class="text-h6 mb-0">
          <a
            :href="githubProfileHref || '#'"
            target="_blank"
            rel="nofollow noopener noreferrer"
            class="text-secondary"
            @focus="resolveGithubProfileHref"
            @pointerenter="resolveGithubProfileHref"
            @touchstart="resolveGithubProfileHref"
            @click="onActivateGithubProfile"
          >
            <font-awesome-icon
              :icon="['fa-brands', 'fa-github']"
              size="lg"
              aria-hidden="true"
            />
            <span class="ml-2">See all projects</span>
          </a>
        </p>
      </v-col>
    </v-row>

    <ProjectShowcaseItem
      v-for="(project, i) in visibleProjects"
      :key="project.title"
      :project="project"
      :image-position="i % 2 === 0 ? 'left' : 'right'"
    />

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
