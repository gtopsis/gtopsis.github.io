<script setup lang="ts">
const title = "Giorgos Topsis";
</script>

<template>
  <v-app>
    <v-app-bar class="px-3" fixed app elevate-on-scroll>
      <v-toolbar-title class="ml-0 logo text-h6 text-md-h5 text-wrap">
        <nuxt-link to="/"> {{ title }} </nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <template #append class="mr-0">
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
            <v-list-item class="nav-item mb-0 ml-1">
              <nuxt-link
                :to="{ name: 'AboutPage' }"
                class="text-subtitle-1 text-secondary"
                >About</nuxt-link
              >
            </v-list-item>
          </v-list>
        </nav>

        <theme-toggle class="ml-1"></theme-toggle>
      </template>
    </v-app-bar>

    <v-main role="main">
      <v-container fluid fill-height pa-0>
        <slot />
      </v-container>
    </v-main>

    <v-footer role="contentinfo" class="mt-16">
      <main-footer></main-footer>
    </v-footer>
  </v-app>
</template>

<style>
.logo {
  min-width: 170px;
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
