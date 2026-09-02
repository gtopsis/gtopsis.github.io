<template>
  <v-app>
    <v-app-bar class="top-bar px-3" flat fixed app>
      <TheTopBar />
    </v-app-bar>

    <v-main role="main">
      <v-container class="relative" fluid fill-height pa-0>
        <slot />
      </v-container>
    </v-main>

    <v-footer role="contentinfo" class="mt-16">
      <TheFooter />
    </v-footer>
  </v-app>
</template>

<style scoped>
.top-bar {
  background: transparent;
  pointer-events: none;
}

.top-bar :deep(.v-toolbar__content) {
  pointer-events: none;
}
</style>
