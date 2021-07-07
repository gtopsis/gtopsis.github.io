<template>
  <v-container fluid fill-height class="hero-container px-0">
    <v-row no-gutters align="center" justify="center">
      <v-col class="px-0">
        <h1 class="statement">
          I'm
          <nuxt-link to="about" class="first-name">Γιώργος</nuxt-link>
          (/Giórgos/),<br />
          a Full Stack Web Developer based in Heraklion of Crete.
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.hero-container {
  height: 60vh;
}
.content {
  max-width: 500px !important;
}
.hero-icon {
  font-size: 2.5rem !important;
}
.fullname {
  font-size: 3rem;
}
.statement {
  font-size: 2.5rem !important;
  letter-spacing: 0.2rem;
}
.first-name {
  height: 50px;
  line-height: 50px;
  text-decoration: none;
  border-bottom: 4px dashed grey;
}
</style>
