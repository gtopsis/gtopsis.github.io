<script setup lang="ts">
import { useDisplay } from "vuetify";

const { mdAndUp } = useDisplay();
</script>

<template>
  <v-app>
    <TheThemeToggle v-if="!mdAndUp" fab />

    <v-app-bar
      class="px-3"
      color="background"
      fixed
      app
      scroll-behavior="elevate"
    >
      <TheTopBar />
    </v-app-bar>

    <v-main role="main">
      <v-container class="relative" fluid fill-height pa-0>
        <slot />
      </v-container>
    </v-main>

    <v-footer role="contentinfo" class="mt-16">
      <TheFooter />
    </v-footer>
  </v-app>
</template>

<style scoped>
.logo {
  min-width: 0px;
}

.logo a {
  text-decoration: none;
  color: var(--v-theme-primary-base);
}

.theme--light .logo a {
  color: var(--v-theme-secondary-base);
}

.theme--dark .logo a {
  color: rgba(255, 255, 255, 0.87);
}

.v-toolbar__append {
  margin-right: 0;
}

.nav {
  min-width: 336px;
  list-style-type: none;
  padding: 0;
  background: transparent !important;
}

.nav .nav-item {
  background: transparent;
  transition: border-bottom 0.25s ease;
  border-bottom: 2px solid transparent;
  border-radius: 0;
}

.nav .nav-item a {
  font-size: 1.2rem;
  text-decoration: none;
}

/* counter measure in case :has is not supported on the browser */
.nav .nav-item:hover {
  border-bottom-color: rgb(var(--v-theme-secondary));
}

.nav .nav-item:has(a.router-link-active) {
  border-bottom-color: rgb(var(--v-theme-secondary));
}
</style>
