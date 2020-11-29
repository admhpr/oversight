import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c953a518 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _7ba9cd2e = () => interopDefault(import('../pages/archive/index.vue' /* webpackChunkName: "pages/archive/index" */))
const _ba20189e = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _7f170fbe = () => interopDefault(import('../pages/archive/_slug.vue' /* webpackChunkName: "pages/archive/_slug" */))
const _bd8d5b2e = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _5d81ca76 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _c953a518,
    name: "about"
  }, {
    path: "/archive",
    component: _7ba9cd2e,
    name: "archive"
  }, {
    path: "/blog",
    component: _ba20189e,
    name: "blog"
  }, {
    path: "/archive/:slug",
    component: _7f170fbe,
    name: "archive-slug"
  }, {
    path: "/blog/:slug",
    component: _bd8d5b2e,
    name: "blog-slug"
  }, {
    path: "/",
    component: _5d81ca76,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
