<script setup lang="ts">
const personalMessage = "Build playing with Nuxt.js and Vuetify";

const footerText = "Giorgos Topsis 2022";
</script>

<template>
  <v-container class="pa-2">
    <v-row>
      <v-col cols="12" class="py-1">
        <p class="text-center ma-0">{{ personalMessage }}</p>
        <p class="text-center ma-0">&copy; {{ footerText }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
