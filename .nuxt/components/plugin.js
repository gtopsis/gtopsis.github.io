import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Hero: () => import('../../components/Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c)),
  MainFooter: () => import('../../components/MainFooter.vue' /* webpackChunkName: "components/main-footer" */).then(c => wrapFunctional(c.default || c)),
  Timeline: () => import('../../components/Timeline.vue' /* webpackChunkName: "components/timeline" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
