<script setup lang="ts">
interface Headline {
  pre: string;
  name: {
    text: string;
    phoneticTranscription: string;
  };
  post: string;
}

const headline: Headline = {
  pre: "I'm ",
  name: {
    text: "Giorgos",
    phoneticTranscription: "/ˈjɔr.ɡos/",
  },
  post: "a Full-Stack Web Engineer based in Heraklion of Crete.",
};
</script>

<template>
  <div class="hero-container pa-0 d-flex align-center">
    <h1 class="headline text-h5 text-md-h4 font-weight-regular text-break">
      <span class="d-block" data-testid="headline-1">
        {{ headline.pre }}

        <nuxt-link :to="{ name: 'about' }" class="first-name text-secondary">
          {{ headline.name.text }}
        </nuxt-link>

        {{ headline.name.phoneticTranscription }},
      </span>

      <span class="d-block" data-testid="headline-2">
        {{ headline.post }}
      </span>
    </h1>
  </div>
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
