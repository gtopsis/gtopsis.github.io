import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      titleTemplate: "%s",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Everything about my work experience, education, personal projects and hobbies.",
        },
        {
          name: "format-detection",
          content: "telephone=no",
        },

        // Twitter
        // Test on: https://cards-dev.twitter.com/validator
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: "https://gtopsis.github.io",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Giorgos Topsis - My personal website!",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Everything about my work experience, education, personal projects and hobbies.",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "./public/images/portfolio.webp",
        },

        // Open Graph
        // Test on: https://developers.facebook.com/tools/debug/
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "Giorgos Topsis - My personal website!",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://gtopsis.github.io",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Giorgos Topsis - My personal website!",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Everything about my work experience, education, personal projects and hobbies.",
        },

        {
          hid: "og:image",
          property: "og:image",
          content: "./public/images/portfolio.webp",
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: "./public/images/portfolio.webp",
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content:
            "Picture of the hero sections of the website. It contains a logo, menu bar and a big heading introducing myself as a software engineer.",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  buildModules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate", "storeToRefs"],
      },
    ],
    "@nuxtjs/google-fonts",
    // "nuxt-purgecss",
  ],

  css: [
    "vuetify/styles",
    "vuetify/lib/styles/main.sass",
    "@/assets/global.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  build: {
    transpile: [
      "vuetify",
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/free-brands-svg-icons",
    ],
  },
  imports: {
    dirs: ["stores"],
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  },
  typescript: {
    typeCheck: {
      eslint: {
        files: "./**/*.{ts,js,vue}",
      },
    },
  },

  googleFonts: {
    families: {
      // Roboto: true,
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
    display: "swap", // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    prefetch: true,
  },
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    defaultAssets: false,
  },
});
