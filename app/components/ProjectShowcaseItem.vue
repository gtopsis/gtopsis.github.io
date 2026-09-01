<script setup lang="ts">
import type { IProject } from "~/types/interfaces";

withDefaults(
  defineProps<{
    project: IProject;
    imagePosition?: "left" | "right";
  }>(),
  { imagePosition: "left" },
);
</script>

<template>
  <v-row align="center" class="project-row mb-12">
    <v-col
      v-if="project.src"
      cols="12"
      md="6"
      :order-md="imagePosition === 'left' ? 'first' : 'last'"
    >
      <nuxt-img
        class="project-image"
        :src="project.src"
        :alt="project.imageDescription"
        placeholder
        loading="lazy"
        fit="cover"
        sizes="xs:100vw sm:100vw md:50vw lg:600px xl:600px"
      />
    </v-col>

    <v-col cols="12" :md="project.src ? 6 : 8" :offset-md="project.src ? 0 : 2">
      <h3 class="text-h5 mb-3">{{ project.title }}</h3>

      <p class="text-body-1 mb-4">{{ project.description }}</p>

      <TechToolList
        v-if="project.buildingToolsIds.length"
        :tools="project.buildingToolsIds"
        class="mb-4"
      />

      <div class="d-flex ga-3">
        <v-btn
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          variant="text"
          color="secondary"
        >
          <font-awesome-icon
            :icon="['fas', 'arrow-up-right-from-square']"
            size="lg"
            aria-hidden="true"
          />
          <span class="ml-1"> Demo </span>
        </v-btn>

        <v-btn
          v-if="project.code"
          :href="project.code"
          target="_blank"
          rel="noopener noreferrer"
          variant="text"
          color="secondary"
        >
          <font-awesome-icon
            :icon="['fa-brands', 'fa-github']"
            size="lg"
            aria-hidden="true"
          />
          <span class="ml-1"> Code </span>
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped>
.project-image {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  border: 1px solid var(--v-accent-darken2);
  border-radius: 4px;
}
</style>
