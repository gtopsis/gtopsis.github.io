<script lang="ts" setup>
import { getTool } from "~/utils/tootls-descriptions";
import type { ITool } from "~/types/interfaces";

const props = defineProps<{
  tools: string[];
}>();

const sortedList = computed(() => {
  return [...props.tools].sort((a, b) => (a > b ? 1 : -1));
});

const toolById = computed(() => {
  const map = new Map<string, ITool>();
  for (const toolId of sortedList.value) {
    const tool = getTool(toolId);
    if (!tool) {
      console.warn(`Unknown tool id: "${toolId}"`);
      continue;
    }
    map.set(toolId, tool);
  }
  return map;
});
</script>

<template>
  <ul class="tool-list d-flex justify-center width-100">
    <li v-for="[toolId, tool] in toolById" :key="toolId" class="mr-2 shrink">
      <TechToolListItem :tool="tool" />
    </li>
  </ul>
</template>

<style scoped>
ul.tool-list {
  list-style-type: none;
}
</style>
