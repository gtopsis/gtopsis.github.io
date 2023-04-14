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
      <v-tooltip location="bottom end" aria-labelledby="themeTogglePromptText">
        <template v-slot:activator="{ props }">
          <font-awesome-icon
            class="toggle"
            :icon="['fas', disabledTheme === 'light' ? 'sun' : 'moon']"
            @click="toggleDarkMode"
            v-bind="props"
          >
          </font-awesome-icon>
        </template>

        <span id="themeTogglePromptText">Enable {{ disabledTheme }} mode</span>
      </v-tooltip>
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
