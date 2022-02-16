import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ContactsPage from '../views/ContactsPage.vue'
import ContactDetails from '../views/ContactDetails.vue'
import Dashboard from '../views/Dashboard.vue'
import ContactEdit from '../views/ContactEdit.vue'
import SignupPage from '../views/SignupPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage
    },
    {
      path: '/contact',
      name: 'contacts',
      component: ContactsPage,      
    },
    {
      path: '/contact/:id',
      name: 'contact details',
      component: ContactDetails,      
    },
    {
      path: '/contact/edit/:id?',
      name: 'contact edit',
      component: ContactEdit,      
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,      
    },
  ]
})

export default router
