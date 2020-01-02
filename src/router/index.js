import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/board/index',
            name: 'Router',
            component: () => import('@/components/board/index')
        },
        {
            path: '/',
            name: 'login',
            component: () => import('@/components/user/login')
        },
        {
            path: '/404',
            name: '404',
            component: () => import('@/components/404/404')
        },
        { path: '*', redirect: '/404' }
    ]
})
