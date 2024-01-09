import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue'),
    },
    // router/index.js
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('@/views/ProjectsView.vue'),
      children: [
        {
          path: '',
          name: 'ProjectList',
          component: () => import('@/components/ProjectList.vue'),
        },
        {
          path: ':id',
          name: 'ProjectDetails',
          component: () => import('@/components/ProjectDetails.vue'),
        },
      ],
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/ContactView.vue'),
    },
  ]
})

export default router
