import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/list',
            name: 'list',
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
        {
            path: '/writeboard',
            name: 'writeboard',
            component: () => import('@/components/board/writeboard')
        },
        {
            path: '/image',
            name: 'image',
            component: () => import('@/components/board/imageboard')
        },
        {
            path: '/newAccount',
            name: 'newAccount',
            component: () => import('@/components/user/create')
        },
        {
            path: '/showboard',
            name: 'showboard',
            component: () => import('@/components/board/showboard')
        },
        {
            path: '/showimage',
            name: 'showimage',
            component: () => import('@/components/board/showimage')
        },
        { path: '*', redirect: '/404' }
    ]
})
