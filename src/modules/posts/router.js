import PostList from './pages/PostList.vue'


export const postRoutes = [
    {
        path: '/',
        name: 'PostList',
        component: PostList
    },
    {
        path: '/post/create',
        name: 'PostCreate',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './pages/PostCreate.vue')
    },
    {
        path: '/post/:id',
        name: 'PostPage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './pages/PostPage.vue')
    },
    {
        path: '/post/:id/edit',
        name: 'PostEdit',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './pages/PostEdit.vue')
    }
]
