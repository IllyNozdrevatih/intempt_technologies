import PostList from './pages/PostList.vue'


export const postRoutes = [
    {
        path: '/',
        name: 'PostList',
        component: PostList
    },
    {
        path: '/:id',
        name: 'PostPage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './pages/PostPage.vue')
    }
]
