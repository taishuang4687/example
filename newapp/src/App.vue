<template>
  <div>
      <Common-header :selectMenu='selectMenu'></Common-header>
      <div id="content">
        <router-view></router-view>
      </div>
      <Common-footer :menu='menu' :selectMenu='selectMenu' @change='change'></Common-footer>
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
          bg:'#aeefcc'
        },{
          name:'图片',
          path:'/photo',
          bg:'#fabb63'
        }
      ],
      selectMenu:
        {
          name:'电影',
          path:'/movie',
          bg:'pink'
        }
      }
    },
    methods:{
      change(index){
        this.selectMenu = this.menu[index];
      }
    },
    created(){
      this.menu.forEach((obj,index)=>{
        if(obj.path==this.$route.path){
          this.selectMenu=obj;
        }
      })
    }
  }
</script>

<style scoped>
  #content{
    margin:1rem 0;
  }
</style>