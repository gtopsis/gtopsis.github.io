import { defineNuxtConfig } from "nuxt/config";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

const websitePreviewImage = "/images/website-preview.webp";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      titleTemplate: "%s - Giorgos Topsis",
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
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:url",
          content: "https://gtopsis.github.io",
        },
        {
          name: "twitter:title",
          content: "Giorgos Topsis - My personal website!",
        },
        {
          name: "twitter:description",
          content:
            "Everything about my work experience, education, personal projects and hobbies.",
        },
        {
          name: "twitter:image",
          content: websitePreviewImage,
        },

        // Open Graph
        // Test on: https://developers.facebook.com/tools/debug/
        {
          property: "og:site_name",
          content: "Giorgos Topsis - My personal website!",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://gtopsis.github.io",
        },
        {
          property: "og:title",
          content: "Giorgos Topsis - My personal website!",
        },
        {
          property: "og:description",
          content:
            "Everything about my work experience, education, personal projects and hobbies.",
        },

        {
          property: "og:image",
          content: websitePreviewImage,
        },
        {
          property: "og:image:secure_url",
          content: websitePreviewImage,
        },
        {
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

  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    // "nuxt-purgecss",
    "@nuxt/eslint",
    "@nuxtjs/google-fonts",
    // "@nuxt/image-edge",
    "@nuxt/image",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  image: {
    provider: "none",
  },

  css: [
    "vuetify/styles",
    // "vuetify/lib/styles/main.sass",
    "@/assets/global.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  build: {
    transpile: [
      "vuetify",
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-brands-svg-icons",
    ],
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
      Bellota: {
        wght: [100, 400],
        ital: [100],
      },
      "Josefin+Sans": true,
      // Lato: [100, 300],
      // Raleway: {
      //   wght: [100, 400],
      //   ital: [100],
      // },
    },
    display: "swap", // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    prefetch: true,
  },

  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    defaultAssets: false,
  },

  $production: {
    routeRules: {
      "/images/**": {
        headers: {
          "cache-control": "public,max-age=31536000,immutable",
        },
      },
      "/_nuxt/**": {
        headers: {
          "cache-control": "public,max-age=31536000,immutable",
        },
      },
    },
  },

  runtimeConfig: {
    public: {
      // Base64-encoded so the raw handle isn't a plain, greppable literal
      // sitting in the shipped client bundle/payload. This isn't a secret
      // (running atob() on it gets the value straight back) -- it only
      // raises the bar against bots that statically scan the bundle for
      // recognizable url/username substrings instead of rendering the page.
      // See SocialsAndMeetups.vue for where/why this is decoded.
      SOCIAL_NETWORKS_USERNAME_B64: process.env.SOCIAL_NETWORKS_USERNAME
        ? Buffer.from(process.env.SOCIAL_NETWORKS_USERNAME).toString("base64")
        : "",
    },
  },

  compatibilityDate: "2024-10-16",
});
