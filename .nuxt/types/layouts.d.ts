import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/home/gt0p/Personal Projects/gtopsis.github.io/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}