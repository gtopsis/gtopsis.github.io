<script setup lang="ts">
const headline = {
  pre: "I'm ",
  name: {
    text: "Giorgos",
    pronunciation: "(/ɡi.ɔ̌ːr.ɡ.os/)",
  },
  post: "a Full-Stack Web Developer based in Heraklion of Crete.",
};
</script>

<template>
  <v-container class="hero-container pa-0 d-flex" fluid fill-height>
    <v-row no-gutters>
      <v-col class="px-0" cols="12" align-self="center">
        <h1
          class="headline text-h5 text-md-h5 text-lg-h4 font-weight-regular"
          data-testid="headline-1"
        >
          {{ headline.pre }}
          <nuxt-link :to="{ name: 'about' }" class="first-name text-secondary">
            {{ headline.name.text }}
          </nuxt-link>
          {{ headline.name.pronunciation }},
        </h1>

        <h1
          class="headline text-h5 text-md-h5 text-lg-h4 font-weight-regular"
          data-testid="headline-2"
        >
          {{ headline.post }}
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.hero-container {
  height: 70vh;
}

.headline {
  letter-spacing: 0.25rem !important;
}

.first-name {
  height: 50px;
  line-height: 50px;
  text-decoration: none;
  border-bottom: 4px dashed grey;
}
</style>
