import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Authentication/Login.vue'
import Register from '../views/Authentication/Register.vue'

import Resource from "../views/Resource.vue"
import Users from "../views/Users.vue"
import UserProfile from "../views/UserProfile.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  },
  {
    path: '/resource',
    name: 'Resource',
    component: Resource,
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
  },
  {
    path: '/userprofile/:id',
    name: 'UserProfile',
    component: UserProfile,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
