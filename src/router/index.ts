import { createRouter, createWebHashHistory } from 'vue-router';

import Layout from '@/layout/index.vue';
import Home from '@/views/Home.vue';
import Notes from '@/views/Notes.vue';
import About from '@/views/About.vue';
const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'notes',
        component: Notes,
      },
      {
        path: 'about',
        component: About
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router