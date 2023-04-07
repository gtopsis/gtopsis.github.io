// plugins/vuetify.js
import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, fa } from "vuetify/iconsets/fa";
import { mdi } from "vuetify/lib/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

const customLight: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#a46548",
    secondary: "#3b4e58",
    accent: "#dfe0e0",
    background: "#ffffff",
  },
};

const customDark: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#1976D2",
    secondary: "#424242",
    accent: "#82B1FF",
    background: "#34495e",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "customDark",
      themes: {
        customLight,
        customDark,
      },
    },
    icons: {
      defaultSet: "fa",
      aliases,
      sets: {
        mdi,
        fa,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
