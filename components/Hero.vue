<template>
  <v-container fluid fill-height class="hero-container px-0">
    <v-row no-gutters align="center" justify="center">
      <v-col class="px-0">
        <h1 class="statement">
          I'm
          <nuxt-link to="about" class="first-name">Giorgos</nuxt-link>
          , a Full Stack Web Developer based in Heraklion of Crete.
        </h1>
      </v-col>
    </v-row>
    <!-- <v-row class="no-gutters content">
      <v-col cols="12" class="text-center">
        <v-icon x-large class="hero-icon" white>mdi-laptop-chromebook</v-icon>
      </v-col>
      <v-col cols="12">
        <h2 class="text-center fullname" white>Giorgos topsis</h2>
      </v-col>
      <v-col cols="12">
        <h3 class="text-center">Full Stack Web Developer</h3>
        <h4 class="text-center">Studies in HCI field</h4>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<style>
.hero-container {
  height: 100vh;
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
  font-size: 2.7rem !important;
  letter-spacing: 0.2rem;
}
.first-name {
  height: 50px;
  line-height: 50px;
  text-decoration: none;
  border-bottom: 4px dashed grey;
}
</style>
