<script lang="ts" setup>
import { getTool } from "~/utils/tootls-descriptions";

const props = defineProps<{
  tools: string[];
}>();

const sortedList = computed(() => {
  return [...props.tools].sort((a, b) => (a > b ? 1 : -1));
});
</script>

<template>
  <ul class="tool-list d-flex justify-center width-100">
    <li v-for="toolId in sortedList" :key="toolId" class="mr-2 shrink">
      <TechToolListItem :tool="getTool(toolId)" />
    </li>
  </ul>
</template>

<style scoped>
ul.tool-list {
  list-style-type: none;
}
</style>
