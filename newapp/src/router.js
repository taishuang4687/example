import Vue from 'vue'
import Router from 'vue-router'
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import Movie from '@/views/movie.vue'
import Music from '@/views/music.vue'
import Book from '@/views/book.vue'
import Photo from '@/views/photo.vue'
import musicList from '@/views/musicList.vue'
import CommonHeader from '@/components/CommonHeader.vue'
import CommonFooter from '@/components/CommonFooter.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      component:CommonFooter,
      path:'/footer'
    },{
      component:CommonHeader,
      path:'/header'
    },{
      component:Movie,
      path:'/movie'
    },{
      component:Music,
      path:'/music'
    },{
      component:Book,
      path:'/book'
    },{
      component:Photo,
      path:'/photo'
    },{
      path:'/',
      redirect:'/movie',
    },{
      component:musicList,
      path:'/musiclist'
    }
  ]
})
