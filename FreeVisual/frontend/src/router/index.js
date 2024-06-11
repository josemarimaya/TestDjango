import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomePro.vue'; // Importa el componente para la página de inicio
import About from '@/views/AboutPro.vue'; // Importa el componente para la página de acerca de

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginPro.vue')
  }
  // Puedes agregar más rutas aquí según sea necesario
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
