// Importa las funciones necesarias de Vue Router
import { createRouter, createWebHistory } from 'vue-router'

// Crea las rutas
const routes = [
  {
    path: '/',
    component: () => import('@/pages/index.vue'),
  },
  {
    path: '/portafolio',
    component: () => import('@/components/Portafolio.vue')
  },
  // Puedes agregar más rutas aquí si es necesario
]

// Crea el enrutador
const router = createRouter({
  history: createWebHistory(),
  routes // Utiliza las rutas que has definido
})

export default router
