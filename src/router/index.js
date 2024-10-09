import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PaisesView from '../views/PaisesView.vue'
import AnimeView from '@/views/AnimeView.vue'
import MangaView from '@/views/MangaView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/paises',
    name: 'paises',
    component: PaisesView
  },
  {
    path: '/anime',
    name: 'anime',
    component: AnimeView
  },
  {
    path: '/manga',
    name: 'manga',
    component: MangaView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
