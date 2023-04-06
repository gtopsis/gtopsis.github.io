<script setup lang="ts">
import { useTheme } from "vuetify";

const theme = useTheme();

const disabledTheme = computed(() =>
  !theme.global.current.value.dark ? "dark" : "light"
);

onMounted(() => {
  const isDarkThemeEnabled = localStorage.getItem("dark_theme");

  theme.global.name.value = isDarkThemeEnabled === "false" ? "light" : "dark";
});

function toggleDarkMode() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";

  localStorage.setItem(
    "dark_theme",
    theme.global.current.value.dark.toString()
  );
}
</script>

<template>
  <v-row class="theme-toggle-container mx-0" align="center" justify="center">
    <v-col class="px-2 py-1">
      <i
        class="toggle fa-solid"
        :class="{
          'fa-sun': disabledTheme === 'light',
          'fa-moon': disabledTheme === 'dark',
        }"
        @click="toggleDarkMode"
      >
        <v-tooltip activator="parent" location="bottom end">
          <span>Enable {{ disabledTheme }} mode</span>
        </v-tooltip>
      </i>
    </v-col>
  </v-row>
</template>

<style scoped>
.theme-toggle-container {
  height: 100%;
  /* width: 40px !important; */
}
.toggle {
  cursor: pointer;
}
</style>
