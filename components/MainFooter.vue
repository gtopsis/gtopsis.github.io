<template>
  <v-container pa-2>
    <v-row>
      <v-col cols="12" class="socials-list-container">
        <v-row class="socials-list pa-2" justify="center">
          <v-col cols="auto" class="pa-1">
            <a
              href="https://www.linkedin.com/in/gtopsis"
              class="social-link"
              target="_blank"
            >
              <v-icon large="">mdi-linkedin</v-icon>
            </a>
          </v-col>
          <v-col cols="auto" class="pa-1">
            <a
              href="https://github.com/gtopsis"
              class="social-link"
              target="_blank"
            >
              <v-icon large="">mdi-github</v-icon>
            </a>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <p class="text-center ma-0">&copy; {{ footerText }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    footerText() {
      const now = new Date().getFullYear();
      return `Giorgos Topsis ${now}`;
    },
  },
};
</script>
<style scoped>
.socials-list-container {
  /* width: 100%; */
}
.socials-list {
  /* width: 100%; */
}
.socials-list a.social-link {
  text-decoration: none;
}

.socials-list a.social-link:hover .v-icon {
  color: blue;
}
</style>
