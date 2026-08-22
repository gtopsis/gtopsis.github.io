<script setup lang="ts">
interface Technology {
  title: string;
  desc: string;
  key: string;
}

defineProps<{
  tech: Technology;
}>();
</script>

<template>
  <span v-if="tech.desc === ''">{{ tech.title }}</span>

  <v-tooltip v-else top small aria-labelledby="skillTooltipText">
    <template #activator="{ props }">
      <span v-bind="props">{{ tech.title }}</span>
    </template>

    <span id="skillTooltipText">{{ tech.desc }}</span>
  </v-tooltip>
</template>

<style scoped>
#skillTooltipText {
  display: block;
  max-width: 250px;
}
</style>
