<script setup lang="ts">
const personalMessage = "Build playing with Nuxt.js and Vuetify";

const footerText = "Giorgos Topsis 2022";
</script>

<template>
  <div class="pa-2 py-1">
    <p class="text-center ma-0">{{ personalMessage }}</p>
    <p class="text-center ma-0">&copy; {{ footerText }}</p>
  </div>
</template>

<style scoped></style>
