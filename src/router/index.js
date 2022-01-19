import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../views/Form.vue'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
