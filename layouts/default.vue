<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app elevate-on-scroll>
      <v-toolbar-title v-text="title" />
      <v-spacer />
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
</style>
