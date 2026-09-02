<script setup lang="ts">
const personalMessage = "Build playing with Nuxt.js and Vuetify";

const firstYear = 2022;
const currentYear = new Date().getFullYear();
const yearRange =
  currentYear > firstYear ? `${firstYear}–${currentYear}` : `${firstYear}`;

const footerText = `Giorgos Topsis ${yearRange}`;
</script>

<template>
  <div class="w-100 pa-2 py-1">
    <p class="text-center ma-0">{{ personalMessage }}</p>
    <p class="text-center ma-0">&copy; {{ footerText }}</p>
  </div>
</template>

<style scoped></style>
