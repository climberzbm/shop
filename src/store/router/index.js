import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('views/home/Home.vue')

const routes = [
  {
    path: '/',
    name: 'DefaultHome',
    component: Home,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('views/cart/Cart.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('views/category/Category.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('views/profile/Profile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router