<script setup lang="ts">
import { useTheme } from "vuetify";

const title = "Giorgos Topsis";

const theme = useTheme();
const themesNames = ["customLight", "customDark"];

onMounted(() => {
  const isDarkThemeEnabled = localStorage.getItem("dark_theme");

  theme.global.name.value =
    !isDarkThemeEnabled || isDarkThemeEnabled === "false"
      ? themesNames[0]
      : themesNames[1];
});
</script>

<template>
  <v-toolbar color="background">
    <v-toolbar-items class="mx-auto align-center">
      <nav
        class="mr-0 w-full d-flex align-center justify-center"
        role="navigation"
        aria-label="Primary"
      >
        <v-list
          class="nav w-full d-inline-flex flex-row justify-space-between text-center"
          nav
        >
          <v-list-item class="nav-item mb-0 mr-1" role="option">
            <nuxt-link
              :to="{ name: 'index' }"
              class="text-subtitle-1 text-secondary"
            >
              Projects
            </nuxt-link>
          </v-list-item>

          <v-list-item class="logo mx-2 text-wrap" role="option">
            <span class="text-md-h5 font-weight-semibold">
              {{ title }}
            </span>
          </v-list-item>

          <v-list-item class="nav-item mb-0 ml-1" role="option">
            <nuxt-link
              :to="{ name: 'about' }"
              class="text-subtitle-1 text-secondary"
            >
              About
            </nuxt-link>
          </v-list-item>
        </v-list>
      </nav>

      <TheThemeToggle class="ml-1 hidden-sm-and-down" />
    </v-toolbar-items>
  </v-toolbar>
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
