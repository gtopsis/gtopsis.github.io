<template>
  <v-container
    fluid
    pa-0
    fill-height
    class="hero-container d-flex align-center justify-center"
  >
    <v-row class="no-gutters content">
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
    </v-row>
  </v-container>
</template>

<style>
.hero-container {
  height: 100vh;
  background-color: var(--v-primary-base);
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
</style>
