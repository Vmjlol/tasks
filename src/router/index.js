import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/components/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'login',
        // component: LoginView,
        component: LoginView
    },
    {
        path: '/tasks',
        name: 'tasks',
        // component: TasksView,
        component: () => import('./views/TasksView.vue')
    },
    {
        path: '/register',
        name: 'register',
        // component: RegisterView,
        component: () => import('./views/RegisterView.vue')
    },
  ]
})

export default router
