import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import useSocieties from '../composable/societies'

const { isLogin } = useSocieties();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/home',
      name: 'utama',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UtamaView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginUserView.vue')
    },
    {
      path: '/user',
      name: 'user',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UserView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/user/add',
      name: 'user-add',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AddSocietyView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/user/:id_society/edit/',
      name: 'user-edit',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EditSocietyView.vue'),
      meta: { requiresAuth: true },
      props: true,
    },
    {
      path: '/user/:id_society/show/',
      name: 'user-show',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ShowSocietyView.vue'),
      props: true,
      meta: { requiresAuth: true },
    },
  ]
})


router.beforeEach((to, from, next) => {
  // Cek apakah rute memerlukan autentikasi
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Cek apakah pengguna login
    if (!isLogin.value) {
      // Redirect ke halaman login jika belum login
      next('/login');
    } else {
      // Lanjutkan ke rute yang diminta jika sudah login
      next();
    }
  } else {
    // Untuk rute yang tidak memerlukan autentikasi, lanjutkan seperti biasa
    next();
  }
});

export default router
