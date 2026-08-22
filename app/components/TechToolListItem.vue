<script lang="ts" setup>
import type { ITool } from "~/types/interfaces";

const props = defineProps<{
  tool: ITool;
}>();

const iconSizePx = 28;
const iconSrc = computed(() => `/tech_logos/${props.tool.icon}`);
const altText = computed(() => `Logo of tool ${props.tool.name}`);

const tooltipId = `tooltip${props.tool.name?.split(" ").join()}`;
</script>

<template>
  <v-tooltip :text="tool.name" location="top" small>
    <template #activator="{ props: tooltipProps }">
      <v-img
        v-bind="tooltipProps"
        :src="iconSrc"
        fit="fill"
        :width="iconSizePx"
        :height="iconSizePx"
        :alt="altText"
        :aria-describedby="tooltipId"
      ></v-img>
    </template>
  </v-tooltip>

  <!-- The following dummy span is used for accessibility reasons -->
  <span :id="tooltipId" class="d-none">
    {{ tool.name }}
  </span>
</template>

<style scoped>
ul.tool-list {
  list-style-type: none;
}
</style>
