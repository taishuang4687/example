<template>
  <div id='app'>
    <common-header :selectMenu='selectMenu'></common-header>
    <div id='content'>
      <router-view></router-view>
    </div>
    
    <common-footer :menu='menu' :selectMenu='selectMenu' @change="fn"></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '@/components/CommonHeader.vue';
  import CommonFooter from '@/components/CommonFooter.vue';
  export default {
    components:{
      CommonHeader,
      CommonFooter
    },
    data(){
      return{
        menu:[
          {
            path:'/movie',
            name:'电影',
            bg:'pink'
          },{
            path:'/music',
            name:'音乐',
            bg:'#ccc'
          },{
            path:'/book',
            name:'书籍',
            bg:'#fabb63'
          },{
            path:'/photo',
            name:'图片',
            bg:'#c900ff'
          }
        ],
        selectMenu:{
          name:'电影',
          path:'/movie',
          bg:'pink'
        }
      }
    },
    methods:{
      fn(index){
        this.selectMenu = this.menu[index];
      }
    },
    created(){
      this.menu.forEach((obj,index)=>{
        if(obj.path == this.$route.path){
          this.selectMenu = obj;
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
