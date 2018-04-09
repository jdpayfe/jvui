/**
 * Created by yangjiali on 2018/4/8.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import JVui from '../src/components/index.js'
Vue.use(JVui)

import App from './app'
import Index from './pages/index'
import Home from './pages/home'

// Basic
import Badge from './pages/badge'
import Button from './pages/button'

// Layout
import NavBar from './pages/nav-bar'
import Tabs from './pages/tabs'

// Advanced
import Area from './pages/area'
import Swipe from './pages/swipe'

const routes = [
    { path: '/', component: Index },
    { path: '/home', component: Home },
    { path: '/basic/badge', component: Badge },
    { path: '/basic/button', component: Button },
    { path: '/layout/navBar', component: NavBar },
    { path: '/layout/tabs', component: Tabs },
    { path: '/advanced/area', component: Area },
    { path: '/advanced/swipe', component: Swipe },
];


// const beforeEach = (toRoute, fromRoute, next) => {
//     const to = toRoute.path
//     const from = fromRoute.path
//     const scrollTop = Vonic.app.pageContentScrollTop()
//
//     let h = sess.get(to)
//     if (h && h.history) {
//         Vonic.app.nextDirection('back')
//         h.history = false
//         sess.set(to, h)
//     } else {
//         sess.set(from || '/', {
//             history: true,
//             scrollTop: scrollTop
//         })
//         Vonic.app.nextDirection('forward')
//     }
//
//     const tabbarRoutes = [
//         '/advanced/tabbar/home',
//         '/advanced/tabbar/discount',
//         '/advanced/tabbar/cart',
//         '/advanced/tabbar/user'
//     ]
//
//     if (from && tabbarRoutes.indexOf(from) > -1) {
//         sess.set(from, {
//             history: false,
//             scrollTop: scrollTop
//         })
//     }
//
//     // 某些页面定制 page transition direction
//     if (
//         (from == '/' && to == '/home') ||
//         (from == '/home' && to == '/advanced/tabbar/home') ||
//         (from == '/advanced/tabbar/user' && to == '/pageFromTabbar')
//     ) {
//         Vonic.app.nextDirection('forward')
//     }
//
//     if (
//         (to == '/' && from == '/home') ||
//         (to == '/home' && from == '/advanced/tabbar/home') ||
//         (to == '/advanced/tabbar/user' && from == '/pageFromTabbar')
//     ) {
//         Vonic.app.nextDirection('back')
//     }
//
//     next()
// }

// const afterEach = (toRoute, fromRoute) => {
//     const to = toRoute.path
//     const from = fromRoute.path
//     // [Custom Business] Never use history scrollTop when '/' => '/home'
//     if (from == '/' && to == '/home') return
//
//     const h = sess.get(to)
//     if (h && h.scrollTop) {
//         Vue.nextTick(() => {
//             Vonic.app.pageContentScrollTop(h.scrollTop)
//         })
//     }
// }

const router = new VueRouter({
    routes: routes
})

// register global guards
// router.beforeEach(beforeEach)
// router.afterEach(afterEach)

new Vue({ // eslint-disable-line
    render: h => h(App),
    router,
    el: '#app'
});
