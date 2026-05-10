import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Index.vue'
import Auth from '@/views/Auth.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      component: Home
    },
        {
      path: '/auth', 
      component: Auth
    },
  ],
})

export default router
