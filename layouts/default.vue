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

      <v-list nav class="nav">
        <v-list-item class="nav-item">
          <nuxt-link to="/">Work</nuxt-link>
        </v-list-item>

        <v-list-item class="nav-item">
          <nuxt-link to="/about">About</nuxt-link>
        </v-list-item>
      </v-list>

      <theme-toggle></theme-toggle>
    </v-app-bar>

    <v-main>
      <v-container fluid fill-height pa-0>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer>
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
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      if (theme == "true") {
        this.$vuetify.theme.dark = true;

        localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
      } else {
        this.$vuetify.theme.dark = false;
        localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
      }
    }
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: transparent !important;
}
.nav .nav-item {
  margin: 0 0.5rem;
  padding: 0 0.25rem;
  font-size: 1.2rem;
  display: inline;
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
