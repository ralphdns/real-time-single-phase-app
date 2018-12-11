import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    // { path: '/login', component: Login }
   
  ]

  const router = new VueRouter({
    routes // short for `routes: routes`
  })

//hard-coded. to be caught at the app.js, so that it can be everywhr in our file
  export default router