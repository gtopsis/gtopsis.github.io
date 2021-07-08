<template>
  <v-container fluid fill-height class="hero-container px-0">
    <v-row no-gutters align="center" justify="center">
      <v-col class="px-0">
        <h1 class="headline text-h5 text-sm-h2 text-md-h4">
          {{ headline.pre }}
          <nuxt-link :to="headline.name.route" class="first-name">{{
            headline.name.text
          }}</nuxt-link>
          {{ headline.name.pronunciation }},<br />
          {{ headline.post }}
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headline: {
        pre: "I'm ",
        name: {
          text: "Γιώργος",
          pronunciation: "(/Giórgos/)",
          route: "about",
        },
        post: "a Full Stack Web Developer based in Heraklion of Crete.",
      },
    };
  },
};
</script>
<style scoped>
.hero-container {
  height: 60vh;
}

.hero-icon {
  font-size: 2.5rem !important;
}

.headline {
  /* font-size: 2.5rem !important; */
  letter-spacing: 0.25rem !important;
}
.first-name {
  height: 50px;
  line-height: 50px;
  text-decoration: none;
  border-bottom: 4px dashed grey;
}
</style>
