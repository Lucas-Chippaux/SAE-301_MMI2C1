import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import Lunettes from '../views/lunettes.vue'
import Personnalisation from '../views/personnalisation.vue'
import Connexion from '../views/connexion.vue'




// Import pocketbase
import PocketBase from 'pocketbase'
// Objet pocketBase
const pb = new PocketBase("http://127.0.0.1:8090");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                      name: 'Index',                   component: Index },
    { path: '/lunettes',              name: 'Lunettes',                component: Lunettes },
    { path: '/personnalisation',      name: 'Personnalisation',        component: Personnalisation },
    { path: '/connexion',             name: 'Connexion',               component: Connexion },

  ]
})

export default router
