<template>
  <div class="theme-toggle-container">
    <v-row align="center" justify="center" no-gutters>
      <v-col class="pa-0">
        <v-tooltip activator="parent" location="left">
          <template #activator="{ on, attrs }">
            <span
              class="toggle"
              v-bind="attrs"
              :class="{ 'is-light-mode': disabledTheme === 'dark' }"
              @click="toggleDarkMode"
              v-on="on"
            ></span>
          </template>

          <span>Enable {{ disabledTheme }} mode</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useTheme } from 'vuetify';

const theme = useTheme();

const disabledTheme = computed({
  get() {
    return !theme.global.current.value.dark ? 'dark' : 'light';
  },
});

onMounted(() => {
  const isDarkThemeEnabled = localStorage.getItem('dark_theme');

  theme.global.name.value = isDarkThemeEnabled === 'false' ? 'light' : 'dark';
});

function toggleDarkMode() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';

  localStorage.setItem(
    'dark_theme',
    theme.global.current.value.dark.toString()
  );
}
</script>

<style scoped>
.theme-toggle-container {
  position: relative;
  width: 50px;
  height: 100%;
}
.toggle {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  font-size: 150%;
  cursor: pointer;
}

.toggle:before {
  /* content: "☀️"; */
  content: '🌞';
}

.toggle.is-light-mode:before {
  /* content: "🌒"; */
  content: '🌒';
}
</style>
