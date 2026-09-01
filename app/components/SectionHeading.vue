<script setup lang="ts">
interface Props {
  title: string;
  justify?: string;
}

withDefaults(defineProps<Props>(), {
  justify: "justify-md-center justify-sm-left",
});
</script>

<template>
  <v-row align="center" :class="justify">
    <v-col cols="auto">
      <h2>
        <slot>{{ title }}</slot>
      </h2>
    </v-col>
  </v-row>
</template>
