<script setup lang="ts">
const socials = [
  {
    icon: "linkedin",
    link: "https://www.linkedin.com/in/gtopsis/",
    text: "Go to my LinkedIn profile",
  },
  {
    icon: "github",
    link: "https://github.com/gtopsis",
    text: "Go to my GitHub profile",
  },
];
const personalMessage = "Build playing with Nuxt.js and Vuetify";
const footerText = "Giorgos Topsis 2022";
</script>

<template>
  <v-container class="pa-2">
    <v-row>
      <v-col cols="12" class="socials-list-container py-1">
        <v-row class="socials-list ma-0" justify="center">
          <v-col
            v-for="(social, index) in socials"
            :key="index"
            cols="auto"
            class="pa-1"
          >
            <a :href="social.link" :aria-label="social.text" target="_blank">
              <span class="visually-hidden">{{ social.text }}</span>
              <font-awesome-icon
                class="social-link text-secondary"
                :icon="['fab', social.icon]"
                aria-hidden="true"
              />
            </a>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="py-1">
        <p class="text-center ma-0">{{ personalMessage }}</p>
        <p class="text-center ma-0">&copy; {{ footerText }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.socials-list a {
  padding: 0 5px;
}
.socials-list .social-link {
  font-size: 1.4rem;
}

.visually-hidden {
  display: none;
}
</style>
