<script setup lang="ts">
const title = "Giorgos Topsis";
</script>

<template>
  <v-toolbar class="top-toolbar" color="transparent" flat>
    <nav class="nav-pill mx-auto" aria-label="Primary">
      <nuxt-link :to="{ name: 'index' }" class="nav-link text-secondary">
        Projects
      </nuxt-link>

      <span class="logo text-h6 font-weight-semibold text-no-wrap">
        {{ title }}
      </span>

      <nuxt-link :to="{ name: 'about' }" class="nav-link text-secondary">
        About
      </nuxt-link>

      <TheThemeToggle class="ml-1" />
    </nav>
  </v-toolbar>
</template>

<style scoped>
.top-toolbar {
  pointer-events: none;
}

.top-toolbar :deep(.v-toolbar__content) {
  justify-content: center;
}

.nav-pill {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  max-width: calc(100vw - 32px);
  padding: 0.375rem 1.75rem;
  border: 1px solid var(--v-accent-darken2);
  border-radius: 999px;
  background-color: rgb(var(--v-theme-background));
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.18);
  pointer-events: auto;
}

.nav-link {
  font-size: 1.05rem;
  text-decoration: none;
  transition: border-bottom 0.25s ease;
  border-bottom: 2px solid transparent;
}

/* counter measure in case :has is not supported on the browser */
.nav-link:hover {
  border-bottom-color: rgb(var(--v-theme-secondary));
}

.nav-link.router-link-active {
  border-bottom-color: rgb(var(--v-theme-secondary));
}

@media only screen and (max-width: 600px) {
  .logo {
    font-size: 0.95rem !important;
  }

  .nav-pill {
    gap: 0.9rem;
    padding: 0.25rem 1rem;
  }
}
</style>
