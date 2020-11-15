import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Distressed from './pages/Distressed'
import Investor from './pages/Investor'
import Realtor from './pages/Realtor'
import ShortSale from './pages/ShortSale'
import Contact from './pages/Contact'
import SubmitSuccess from './components/SubmitSuccess'
import SubmitFail from './components/SubmitFail'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/About',
            name: 'about',
            component: About
        },
        {
            path: '/Distressed',
            name: 'distressed',
            component: Distressed
        },
        {
            path: '/Investor',
            name: 'investor',
            component: Investor
        },
        {
            path: '/Realtor',
            name: 'realtor',
            component: Realtor
        },
        {
            path: '/Short-Sale',
            name: 'short-sale',
            component: ShortSale
        },
        {
            path: '/Contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/Thanks',
            name: 'success',
            component: SubmitSuccess
        },
        {
            path: '/404',
            name: 'fail',
            component: SubmitFail
        }
    ]
})