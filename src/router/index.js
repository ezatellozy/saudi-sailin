import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('@/views/Events.vue'),
    meta: {
      title: 'Events',
    },
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/News.vue'),
    meta: {
      title: 'News',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      title: 'About',
    },
  },
  {
    path: '/license',
    name: 'license',
    component: () => import('@/components/Accordian.vue'),
    meta: {
      title: 'License',
    },
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: () => import('@/components/Contact.vue'),
    meta: {
      title: 'Contact us',
    },
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: {
      guest: true,
      title: 'login',
    },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/Settings.vue'),
    meta: {
      auth: true,
      title: 'settings',
    },
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/views/Profile.vue'),
        meta: {
          auth: true,
          title: 'Profile',
        },
      },
      {
        path: 'athletes-membership',
        name: 'AthletesMembership',
        component: () => import('@/components/AthletesMembership.vue'),
        meta: {
          auth: true,
          title: 'AthletesMembership',
        },
      },
      {
        path: 'instructor-license',
        name: 'InstructorLicense',
        component: () => import('@/components/InstructorLicense.vue'),
        meta: {
          auth: true,
          title: 'InstructorLicense',
        },
      },
    ],
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue'),
    meta: {
      guest: true,
      title: 'Register',
    },
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('@/views/ForgotPassword.vue'),
    meta: {
      guest: true,
      title: 'ForgotPassword',
    },
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: 'Not Found',
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogedIn) {
    next('/login')
  } else if (to.meta.guest && store.getters.isLogedIn) {
    next('/')
  } else {
    next()
  }
})

export default router
