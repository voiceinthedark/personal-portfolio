import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        transitionIn: 'slide-in-left',
        transitionOut: 'slide-out-left'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        transitionIn: 'slide-in-left',
        transitionOut: 'slide-out-left'
      }
    },    
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: {
        transitionIn: 'slide-in-right',
        transitionOut: 'slide-out-right'
      }
    }
  ],
  linkActiveClass: 'active'
})

export default router
