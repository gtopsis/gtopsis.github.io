<script setup lang="ts">
const title = "Technical Skills";

const { skillsList } = storeToRefs(useSkillsStore());
const skills = skillsList.value;
</script>

<template>
  <v-container fluid>
    <v-row align="center" class="justify-md-center justify-sm-left">
      <v-col cols="auto" class="mb-3">
        <h1>{{ title }}</h1>
      </v-col>
    </v-row>

    <v-row class="columns-container justify-md-space-between no-gutters">
      <v-col
        v-for="(skill, index) in skills"
        :key="index"
        class="column my-xs-3"
        :cols="3"
        :class="{ 'mx-md-5': index == 1 }"
      >
        <!-- Column -->
        <div class="column__content pa-6">
          <v-row no-gutters>
            <v-col cols="12" class="text-center column__header">
              <h3 class="">{{ skill.title }}</h3>
            </v-col>

            <v-col cols="12" class="column__main text-center">
              {{ skill.desc }}
            </v-col>

            <v-col cols="12" class="column__footer">
              <h4 class="text-center secondary-text mb-2">
                {{ skill.heading }}
              </h4>

              <ul class="ma-0 pa-0 tech-list text-center">
                <li v-for="(tech, j) in skill.technologies" :key="j">
                  <span v-if="tech.desc == ''"> {{ tech.title }} </span>
                  
                  <v-tooltip
                    v-else
                    top
                    small
                    aria-labelledby="skillTooltipText"
                  >
                    <template #activator="{ props }">
                      <span v-bind="props"> {{ tech.title }} </span>
                    </template>

                    <span id="skillTooltipText">{{ tech.desc }}</span>
                  </v-tooltip>
                </li>
              </ul>
            </v-col>
          </v-row>
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

#skillTooltipText {
  display: block;
  max-width: 250px;
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
