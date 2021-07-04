import { wrapFunctional } from './utils'

export { default as Hero } from '../../components/Hero.vue'
export { default as Timeline } from '../../components/Timeline.vue'

export const LazyHero = import('../../components/Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
export const LazyTimeline = import('../../components/Timeline.vue' /* webpackChunkName: "components/timeline" */).then(c => wrapFunctional(c.default || c))
