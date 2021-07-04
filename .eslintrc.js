module.exports = {
    root: true,
    env: {
        node: false,
        browser: true,
    },
    extends: [
        "plugin:vue/recommended",
        "eslint:recommended",
        "plugin:nuxt/recommended",
        // "plugin:prettier/recommended",
        "prettier",
    ],
    rules: {
        "vue/component-name-in-template-casing": [ "error", "PascalCase" ]
    },
    globals: {
        $nuxt: true,
    },
    parserOptions: {
        parser: "babel-eslint",
    },
};