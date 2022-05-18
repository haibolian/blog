import { createRouter, createWebHashHistory } from 'vue-router';


const Layout = () => import('@/layout/index.vue');
const Home = () => import('@/views/Home.vue');
const Notes = () => import('@/views/Notes.vue');
const About = () => import('@/views/About.vue');
const PostsView = () => import('@/views/PostsView.vue');

function redirectNotes (to){
  if(!to.params.category) {
    return { name: to.name, params: { category: 'Vue' } }
  }
  return true
}

const routes = [
  {
    name: 'root',
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        name: 'home',
        path: 'home',
        component: Home
      },
      {
        name: 'notes',
        path: 'notes/:category*',
        component: Notes,
        beforeEnter: [ redirectNotes ]
      },
      {
        name: 'about',
        path: 'about',
        component: About
      }
    ]
  },
  {
    name: 'postsview',
    path: '/notes/:category/:title',
    component: PostsView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router