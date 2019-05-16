<template>
  <div>
      <Common-header></Common-header>
      <div id="content">
        <router-view></router-view>
      </div>
      <Common-footer :menu='menu' :bg='bg'></Common-footer>
  </div>
</template>

<script>
  import CommonHeader from '@/components/CommonHeader.vue'
  import CommonFooter from '@/components/CommonFooter.vue'
  export default {
    components:{
      CommonHeader,
      CommonFooter
    },
    data(){
      return{
        menu:[
        {
          name:'电影',
          path:'/movie',
          bg:'pink'
        },{
          name:'音乐',
          path:'/music',
          bg:'#ccc'
        },{
          name:'书籍',
          path:'/book',
          bg:'cacbee'
        },{
          name:'图片',
          path:'/photo',
          bg:'aeefcc'
        }
      ]
      }
    }
  }
</script>

<style scoped>
  #content{
    margin:1rem 0;
  }
</style>