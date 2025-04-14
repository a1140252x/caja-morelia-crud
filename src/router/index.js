import { createRouter, createWebHistory } from 'vue-router'
import ClienteList from '../views/ClienteList.vue'
import ClienteCreate from '../views/ClienteCreate.vue'
import ClienteEdit from '../views/ClienteEdit.vue'

const routes = [
  {
    path: '/',
    name: 'Clientes',
    component: ClienteList
  },
  {
    path: '/add',
    name: 'AgregarCliente',
    component: ClienteCreate
  },
  {
    path: '/edit/:id',
    name: 'EditarCliente',
    component: ClienteEdit
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
