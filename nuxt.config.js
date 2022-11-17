import colors from "vuetify/es5/util/colors";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Giorgos Topsis",
    // title: "Giorgos Topsis",
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
        content: 'Everything about my work experience, education, personal projects and hobbies.'
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },

      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      // {
      //   hid: 'twitter:url',
      //   name: 'twitter:url',
      //   content: 'https://nuxtjs.org'
      // },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Giorgos Topsis - My personal website!'
      }, {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Everything about my work experience, education, personal projects and hobbies.'
      }, {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: './images/portfolio.png'
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Giorgos Topsis - My personal website!'
      }, {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      }, {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://nuxtjs.org'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Giorgos Topsis - My personal website!'
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: 'Everything about my work experience, education, personal projects and hobbies.'
      },

      {
        hid: 'og:image',
        property: 'og:image',
        content: './images/Twitter-card.png'
      }, {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: './images/Twitter-card.png'
      },
      // {
      //   hid: 'og:image:alt',
      //   property: 'og:image:alt',
      //   content: 'NuxtJS'
      // }

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
  plugins: [ {
    src: '~/plugins/axe.js',
    mode: 'client'
  } ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    '@nuxtjs/fontawesome'
  ],

  fontawesome:{
    component: 'fa',
    icons:{
      solid: true,
      brands: true,
    }
  },

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
    defaultAssets: {
      font: false,
    },
    icons:{
      iconfont: 'fa'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};