import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Users from 'components/Users'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/users', name: 'Users', component: Users }
    // { path: '/user/:username', name: 'UserProfile', component: UserProfile }
  ]
})
