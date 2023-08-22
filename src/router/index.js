import { createRouter, createWebHistory } from 'vue-router'
import TasksView from '../views/TasksView.vue'
import TasksFormView from '../views/TasksFormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TasksView
    },
    {
      path: '/tasks/new',
      name: 'new',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TasksFormView
    }
  ]
})

export default router
