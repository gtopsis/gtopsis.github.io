import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/gt0p/Personal Projects/gtopsis.github.io/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}