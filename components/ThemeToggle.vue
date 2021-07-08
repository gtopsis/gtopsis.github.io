<template>
  <div class="theme-toggle-container">
    <v-row align="center" justify="center" style="height: 100%" no-gutters>
      <v-col class="pa-0">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <span
              class="toggle"
              v-bind="attrs"
              :class="{ 'is-light-mode': !darkMode }"
              @click="toggleDarkMode"
              v-on="on"
            ></span>
          </template>
          <span>Enable {{ oppositeMode }} mode</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    darkMode: false,
  }),
  computed: {
    currentMode() {
      return this.darkMode ? "dark" : "light";
    },
    oppositeMode() {
      return this.currentMode == "light" ? "dark" : "light";
    },
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    console.log("🚀 ~ file: default.vue ~ line 47 ~ mounted ~ theme", theme);
    if (theme) {
      if (theme === "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    }
  },
  methods: {
    toggleDarkMode: function () {
      document.querySelector(".toggle").classList.add("animate");

      setTimeout(
        () => document.querySelector(".toggle").classList.remove("animate"),
        300
      );
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.darkMode = !this.darkMode;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
  },
};
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
  content: "🌞";
}

.toggle.is-light-mode:before {
  /* content: "🌒"; */
  content: "🌒";
}
</style>
