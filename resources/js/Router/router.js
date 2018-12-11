import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


//since we have a const variable, inspect what it holds, then import it.
//its holding a login component
import Login from '../components/login/Login'

//this will be found by the route-link in toolbar.vue
const routes = [
    { path: '/login', component: Login }
  ]

  //copied
  const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang:false, //unshow hashtag in url
    mode:'history' //unshow hashtag in url
  })

//hard-coded. to be caught at the app.js, so that it can be everywhr in our file
//note: the const variable needs to be exported, so it can used smwhr else
  export default router