<script lang="ts" setup>
import { getTool } from "~/utils/tootls-descriptions";

const props = defineProps<{
  tools: string[];
}>();

const sortedList = computed(() => {
  return [...props.tools].sort((a, b) => (a > b ? 1 : -1));
});

const getToolOrWarn = (toolId: string) => {
  const tool = getTool(toolId);
  if (!tool) {
    console.warn(`Unknown tool id: "${toolId}"`);
  }
  return tool;
};
</script>

<template>
  <ul class="tool-list d-flex justify-center width-100">
    <template v-for="toolId in sortedList" :key="toolId">
      <li v-if="getToolOrWarn(toolId)" class="mr-2 shrink">
        <TechToolListItem :tool="getToolOrWarn(toolId)!" />
      </li>
    </template>
  </ul>
</template>

<style scoped>
ul.tool-list {
  list-style-type: none;
}
</style>
