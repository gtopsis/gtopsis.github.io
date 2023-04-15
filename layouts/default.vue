<script setup lang="ts">
const title = "Giorgos Topsis";
</script>

<template>
  <v-app>
    <v-app-bar class="px-3" fixed app elevate-on-scroll>
      <v-toolbar-title class="ml-0">
        <h2 class="logo text-subtitle-1 text-sm-h6 text-md-h5 text-wrap">
          <nuxt-link to="/"> {{ title }} </nuxt-link>
        </h2>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <template #append>
        <nav role="navigation" aria-label="Primary">
          <v-list
            class="nav d-inline-flex flex-row justify-end"
            nav
            align="center"
          >
            <v-list-item class="nav-item mb-0">
              <nuxt-link to="/" class="text-subtitle-1 text-secondary"
                >Projects</nuxt-link
              >
            </v-list-item>
            <v-list-item class="nav-item mb-0">
              <nuxt-link to="/about" class="text-subtitle-1 text-secondary"
                >About</nuxt-link
              >
            </v-list-item>
          </v-list>
        </nav>

        <theme-toggle></theme-toggle>
      </template>
    </v-app-bar>

    <v-main role="main">
      <v-container fluid fill-height pa-0>
        <slot />
      </v-container>
    </v-main>

    <v-footer role="contentinfo">
      <main-footer></main-footer>
    </v-footer>
  </v-app>
</template>

<style>
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

.nav {
  list-style-type: none;
  padding: 0;
  background: transparent !important;
}

.nav .nav-item {
  background: transparent;
  transition: border-bottom 0.25s ease;
}

.nav .nav-item a {
  font-size: 1.2rem;
  text-decoration: none;
}

.nav .nav-item a:hover {
}

.nav .nav-item a.router-link-active {
}

.nav .nav-item:has(a:hover) {
  border-bottom: 1px solid rgb(var(--v-theme-secondary));
}

.nav .nav-item:has(a.router-link-active) {
  border-bottom: 1px solid rgb(var(--v-theme-secondary));
}
</style>
