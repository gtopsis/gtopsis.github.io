<template>
  <v-container pa-2>
    <v-row>
      <v-col cols="12" class="socials-list-container">
        <v-row class="socials-list pa-2" justify="center">
          <v-col
            v-for="(social, index) in socials"
            :key="index"
            cols="auto"
            class="pa-1"
          >
            <a :href="social.link" class="social-link" target="_blank">
              <v-icon large="">{{ social.icon }}</v-icon>
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
    return {
      socials: [
        {
          icon: "mdi-linkedin",
          link: "https://www.linkedin.com/in/gtopsis",
        },
        {
          icon: "mdi-github",
          link: "https://github.com/gtopsis",
        },
      ],
    };
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
