import globals from "globals";

import js from "@eslint/js";
import eslintPluginVue from "eslint-plugin-vue";
import ts from "typescript-eslint";

import vitest from "@vitest/eslint-plugin";
import pluginVueA11y from "eslint-plugin-vuejs-accessibility";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

import pluginSecurity from "eslint-plugin-security";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  ts.config(
    {
      languageOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        globals: {
          ...globals.browser,
        },
      },
    },
  
    js.configs.recommended,
    ...ts.configs.recommended,
    pluginSecurity.configs.recommended,
    ...eslintPluginVue.configs["flat/recommended"],
    {
      files: ["*.vue", "**/*.vue"],
      languageOptions: {
        parserOptions: {
          ecmaVersion: "latest",
          sourceType: "module",
          parser: "@typescript-eslint/parser",
        },
      },
      rules: {
        // Nuxt pages/layouts are routed by filename, so single-word
        // names like about.vue/index.vue/default.vue are intentional.
        "vue/multi-word-component-names": [
          "error",
          { ignores: ["about", "index", "default"] },
        ],
      },
    },
  
    eslintPluginPrettierRecommended,
  
    ...pluginVueA11y.configs["flat/recommended"],
    {
      rules: {
        // override/add rules settings here, such as:
        // "vuejs-accessibility/alt-text": "error"
      },
    },
  
    {
      files: ["**/*.test.ts"],
      plugins: {
        vitest,
      },
      rules: {
        ...vitest.configs.recommended.rules,
      },
    },
  
    { ignores: ["**/node_modules/**", "**/dist/**", "old/**"] },
  )
)
