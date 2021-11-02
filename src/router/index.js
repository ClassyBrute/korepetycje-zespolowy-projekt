import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import MenuSearch from '../views/MenuSearch.vue'
import MenuCreate from '../views/MenuCreate.vue'
import SignIn from '../views/SignIn.vue'
import Profile from '../views/Profile.vue'
import Settings from '../views/Settings.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/menu_search',
    name: 'MenuSearch',
    component: MenuSearch
  },
  {
    path: '/menu_create',
    name: 'MenuCreate',
    component: MenuCreate
  },
  {
    path: '/sign_in',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },

  //catch all 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
