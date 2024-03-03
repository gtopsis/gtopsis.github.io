<script setup lang="ts">
import { useTheme } from "vuetify";

const theme = useTheme();
const themesNames = ["customLight", "customDark"];

const disabledTheme = computed(() =>
  theme.global.current.value.dark ? "light" : "dark",
);

const themeToggleIcon = computed(() =>
  disabledTheme.value === "light" ? "sun" : "moon",
);

function toggleDarkMode() {
  const isDarkTheme = theme.global.current.value.dark;
  theme.global.name.value = isDarkTheme ? themesNames[0] : themesNames[1];

  localStorage.setItem("dark_theme", isDarkTheme.toString());
}
</script>

<template>
  <v-row class="theme-toggle-container mx-0" align="center" justify="center">
    <v-col class="px-2 py-1">
      <v-tooltip location="bottom end" aria-labelledby="themeTogglePromptText">
        <template #activator="{ props }">
          <font-awesome-icon
            class="toggle"
            :icon="['fas', themeToggleIcon]"
            v-bind="props"
            @click="toggleDarkMode"
          />
        </template>

        <span id="themeTogglePromptText">Enable {{ disabledTheme }} mode</span>
      </v-tooltip>
    </v-col>
  </v-row>
</template>

<style scoped>
.theme-toggle-container {
  height: 100%;
}

.toggle {
  cursor: pointer;
}
</style>
