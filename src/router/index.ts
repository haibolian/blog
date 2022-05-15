import { createRouter, createWebHashHistory } from 'vue-router';

const Layout = () => import('@/layout/index.vue');
const Home = () => import('@/views/Home.vue');
const Notes = () => import('@/views/Notes.vue');
const About = () => import('@/views/About.vue');

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        component: Home
      },
      {
        name: 'notes',
        path: '/notes',
        component: Notes,
      },
      {
        path: '/about',
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