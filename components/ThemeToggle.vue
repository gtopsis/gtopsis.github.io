<template>
  <v-row align="center">
    <v-col>
      <span
        class="toggle"
        :class="{ active: darkMode }"
        @click="toggleDarkMode"
      ></span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    darkMode: false,
  }),
  computed: {},
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      if (theme == "true") {
        this.$vuetify.theme.dark = true;

        localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
      } else {
        this.$vuetify.theme.dark = false;
        localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
      }
    }
  },
  methods: {
    toggleDarkMode: function () {
      console.log(
        "🚀 ~ file: ThemeToggle.vue ~ line 24 ~ mounted ~ this.$vuetify.theme",
        this.$vuetify
      );
      document.querySelector(".toggle").classList.add("animate");

      setTimeout(
        () => document.querySelector(".toggle").classList.remove("animate"),
        300
      );
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.darkMode = !this.darkMode;
    },
  },
};
</script>

<style>
.toggle {
  position: absolute;
  cursor: pointer;
  top: 20px;
  right: 25px;
  font-size: 150%;
}

.toggle:before {
  content: "☀️";
}

.toggle.active:before {
  content: "🌒";
}
.toggle.animate {
  animation: animate 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes animate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
