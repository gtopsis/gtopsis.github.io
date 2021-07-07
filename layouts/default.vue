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

      <nav>
        <ul>
          <li class="nav-item">
            <nuxt-link to="/">Work</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about">About</nuxt-link>
          </li>
        </ul>
      </nav>

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
};
</script>
<style>
@font-face {
  font-family: "Vision";
  src: url("@/assets/fonts/Vision/WEB/Vision-Black.eot");
  src: url("@/assets/fonts/Vision/WEB/Vision-Black.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/fonts/Vision/WEB/Vision-Black.woff2") format("woff2"),
    url("@/assets/fonts/Vision/WEB/Vision-Black.woff") format("woff"),
    url("@/assets/fonts/Vision/TTF/Vision-Black.ttf") format("truetype");
}

@font-face {
  font-family: "Manrope";
  src: url("@/assets/fonts/Manrope/web/Manrope-Regular.woff2");
  src: url("@/assets/fonts/Manrope/web/Manrope-Regular.woff") format("woff"),
    url("@/assets/fonts/Manrope/otf/Manrope-Regular.otf")
      format("embedded-opentype"),
    url("@/assets/fonts/Manrope/ttf/Manrope-Regular.ttf") format("truetype");
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

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

ul li.nav-item {
  margin: 0 0.5rem;
  padding: 0 0.25rem;
  font-size: 1.2rem;
}

ul li.nav-item a {
  text-decoration: none;
}

.theme--light ul li.nav-item a {
  color: rgba(0, 0, 0, 0.87);
}

.theme--dark ul li.nav-item a {
  color: rgba(255, 255, 255, 0.87);
}
</style>
