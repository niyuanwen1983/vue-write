import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
import Course from '../containers/Course/Course.vue';
import Home from '../containers/Home/Home.vue';
import Profile from '../containers/Profile/Profile.vue';
import Login from '../containers/Login/Login.vue';
import Reg from '../containers/Reg/Reg.vue';

export default new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '/profile', component: Profile},
    {path: '/course/:cid', component: Course, meta: {needLogin: true},
      name:'course'
    },
    {path: '/login', component: Login},
    {path: '/reg', component: Reg},
  ]
})
