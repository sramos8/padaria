import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue')
const Feedbacks = () => import('../views/Feedbacks/index.vue')
const Credencials = () => import('../views/Credencials/index.vue')
const Produtos = () => import('../views/Produtos/index.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/credencials',
    name: 'Credencials',
    component: Credencials,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/produtos',
    name: 'Produtos',
    component: Produtos,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*', // caso tentem acessar uma rota que nao existe então é usado para redirecionar para a home
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
