import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('views/home/Home.vue')

const routes = [
  {
    path: '/',
    name: 'DefaultHome',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: () => import('views/shopcart/ShopCart.vue'),
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('views/category/Category.vue'),
    meta: {
      title: '分类'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('views/profile/Profile.vue'),
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/productDetail',
    name: 'ProductDetail',
    component: () => import('views/product/ProductDetail.vue'),
    meta: {
      title: '个人中心'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  next()
  document.title = to.meta.title
})

export default router