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
      <h1>
        <slot>{{ title }}</slot>
      </h1>
    </v-col>
  </v-row>
</template>
