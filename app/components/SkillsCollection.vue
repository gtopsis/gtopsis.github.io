<script setup lang="ts">
import { useSkillsStore } from "~~/stores/skills";

const title = "Technical Skills";

const { skillsList } = storeToRefs(useSkillsStore());
</script>

<template>
  <v-container fluid>
    <SectionHeading :title="title" class="mb-3" />

    <v-row class="columns-container justify-md-space-between no-gutters">
      <v-col
        v-for="(skill, index) in skillsList"
        :key="index"
        class="column my-xs-3"
        :cols="3"
        :class="{ 'mx-md-5': index == 1 }"
      >
        <!-- Column -->
        <div class="column__content pa-6">
          <div class="text-center column__header">
            <h3>{{ skill.title }}</h3>
          </div>

          <div class="column__main text-center">
            {{ skill.desc }}
          </div>

          <div class="column__footer">
            <h4 class="text-center secondary-text mb-2">
              {{ skill.heading }}
            </h4>

            <ul class="ma-0 pa-0 tech-list text-center">
              <li v-for="(tech, j) in skill.technologies" :key="j">
                <SkillTechBadge :tech="tech" />
              </li>
            </ul>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.columns-container {
  width: 100%;
  height: 100%;
}

.column {
  border: 1px solid var(--v-accent-darken2);
  border-radius: 4px;
  box-shadow: 0px 3px 1px -2px var(--v-accent-darken2);
}

.content__icon {
  font-size: 2.5rem;
  color: var(--v-secondary-base);
}

.tech-list {
  list-style-type: none;
}

.column__header {
  height: 100px;
}

.column__main {
  height: 100px;
}

@media only screen and (max-width: 600px) {
  .column__main {
    height: 90px;
  }
}

.column__footer {
  height: auto;
}
</style>
