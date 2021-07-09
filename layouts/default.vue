<template>
  <v-app light>
    <v-app-bar fixed app elevate-on-scroll>
      <v-toolbar-title>
        <h2 class="logo">
          <nuxt-link to="/">
            {{ title }}
          </nuxt-link>
        </h2>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <nav role="navigation">
        <v-list nav class="nav d-inline-flex flex-row justify-end align-center">
          <v-list-item class="nav-item mb-0">
            <nuxt-link to="/">Work</nuxt-link>
          </v-list-item>
          <v-list-item class="nav-item mb-0">
            <nuxt-link to="/about">About</nuxt-link>
          </v-list-item>
        </v-list>
      </nav>

      <theme-toggle></theme-toggle>
    </v-app-bar>

    <v-main role="main">
      <v-container fluid fill-height pa-0>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer role="contentinfo">
      <main-footer></main-footer>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: "{GT}",
    };
  },
};
</script>
<style>
.logo {
  font-size: 1.9rem;
}
.logo a {
  text-decoration: none;
  color: var(--v-primary-base);
}
.theme--light .logo a {
  color: rgba(0, 0, 0, 0.87);
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
  /* margin: 0 0.5rem;
  padding: 0 0.25rem; */
  font-size: 1.2rem;
  /* display: inline-block; */
  background: transparent;
}

.nav .nav-item a {
  text-decoration: none;
}
.nav .nav-item a.nuxt-link-exact-active {
  color: var(--v-secondary-darken2);
}

/* .theme--light ul li.nav-item a {
  color: rgba(0, 0, 0, 0.87);
}

.theme--dark ul li.nav-item a {
  color: rgba(255, 255, 255, 0.87);
} */
</style>
