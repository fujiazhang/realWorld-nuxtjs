import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _334f6a24 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _0c08da59 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _754ab92f = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _0d723c6a = () => interopDefault(import('../pages/articel' /* webpackChunkName: "" */))
const _24da0ff6 = () => interopDefault(import('../pages/create' /* webpackChunkName: "" */))
const _26a7f9ef = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _3f97549d = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))

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
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _334f6a24,
    children: [{
      path: "/",
      component: _0c08da59,
      name: "home"
    }, {
      path: "/login",
      component: _754ab92f,
      name: "login"
    }, {
      path: "/regeister",
      component: _754ab92f,
      name: "regeister"
    }, {
      path: "/articel",
      component: _0d723c6a,
      name: "articel"
    }, {
      path: "/create",
      component: _24da0ff6,
      name: "create"
    }, {
      path: "/profile",
      component: _26a7f9ef,
      name: "profile"
    }, {
      path: "/settings",
      component: _3f97549d,
      name: "settings"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
