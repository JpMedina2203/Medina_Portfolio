import { createRouter, createWebHistory } from 'vue-router'

// import your pages/components
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Projects from '../components/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
