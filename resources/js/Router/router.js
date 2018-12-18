import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


//since we have a const variable, inspect what it holds, then import it.
//its holding a login component
import Login from '../components/login/Login'
import Signup from '../components/login/Signup'
import Forum from '../components/forum/Forum'
import Logout from '../components/login/Logout'

//this will be found by the route-link in toolbar.vue
const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/signup', component: Signup },
    //intoducing route name. this will be used in the (Signup.vue,and Login.vue), as we push users to Forum.vue, after signing up
    { path: '/forum', component: Forum, name:'forum' },
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