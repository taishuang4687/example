import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import A from './views/A.vue'
import B from './views/B.vue'
import Test1 from './views/Test1.vue'
import Test2 from './views/Test2.vue'
import C from './views/C.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path:'/a',
      component:A,
      children:[{
        path:'/test1',
        component:Test1
      },{
          path:'/test2',
          component:Test2
      }]
    },{
      path:'/b',
      name:'b',
      component:B
    },{
      path:'/c/:id',
      component:C
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
