import colors from "vuetify/es5/util/colors";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s",
    title: "Giorgos Topsis",
    htmlAttrs: {
      lang: "en",
    },
    meta: [ {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },
    ],
    link: [ {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    }, ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ "~/assets/global.css" ],
  //

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: [ "~/assets/variables.scss" ],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#a46548',
          secondary: '#3b4e58',
          accent: '#dfe0e0',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: '#ffffff'

        },
        dark: {
          primary: '#d0826f',
          secondary: '#dfe0e0',
          accent: '#d0826f',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: '#121212'
        },
      },
      options: {
        customProperties: true
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};