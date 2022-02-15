import Vue from 'vue'
import VueRouter from 'vue-router'
import {postRoutes} from "@/modules/posts/router";

Vue.use(VueRouter)

const router = new VueRouter({
   ...postRoutes
})

export default router
