import Vue from 'vue'
import Router from 'vue-router'

/* Views */
import Home from '@/views/home'

/* Middleware */
import checkAuth from '@/middlewares/checkAuth'
import authRedirect from '@/middlewares/authRedirect'

Vue.use(Router)

export default () => {
    return new Router({
        mode: 'history',
        base: process.env.BASE_URL,
        routes: [
            {
                path: '/',
                name: 'home',
                component: Home,
                meta: {
                    middlewares: [authRedirect]
                }
            },
            {
                path: '/trash',
                name: 'trash',
                component: () => import('@/views/home'),
                meta: {
                    middlewares: [checkAuth]
                }
            },
            /* Overview */
            {
                path: '/overview/:dir?',
                name: 'overview-dir',
                component: () => import('@/views/overview/_dir/index'),
                meta: {
                    middlewares: [checkAuth]
                }
            },
            /* Legal */
            {
                path: '/imprint',
                name: 'imprint',
                component: () => import('@/views/imprint')
            },
            {
                path: '/privacy',
                name: 'privacy',
                component: () => import('@/views/privacy')
            }
            /* Settings */
            // {
            //     path: '/settings',
            //     name: 'settings',
            //     component: () =>
            //         import('@/views/settings/index')
            // },
            // {
            //     path: '/settings/admin',
            //     name: 'settings-admin',
            //     component: () =>
            //         import('@/views/settings/admin/index')
            // },
        ]
    })
}
