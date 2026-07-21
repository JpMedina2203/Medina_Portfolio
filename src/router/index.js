import { createRouter, createWebHistory } from 'vue-router'

// import your pages/components
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Projects from '../pages/Projects.vue'
import Resume from '../pages/Resume.vue'

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
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
