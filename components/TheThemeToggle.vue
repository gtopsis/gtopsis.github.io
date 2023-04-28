<script setup lang="ts">
import { useTheme } from "vuetify";

const theme = useTheme();
const themesNames = ["customLight", "customDark"];

const disabledTheme = computed(() =>
  theme.global.current.value.dark ? themesNames[0] : themesNames[1]
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
            :icon="['fas', disabledTheme === 'light' ? 'sun' : 'moon']"
            v-bind="props"
            @click="toggleDarkMode"
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
}
.toggle {
  cursor: pointer;
}
</style>
