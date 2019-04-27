<template>
  <div>
    <div id="app">
      <router-link to='/a'>A页面</router-link>|
      <router-link :to='{name:"b",params:{name:"taishuang"}}'>B页面</router-link>|
      <router-link to='/c/666'>C页面</router-link>
      <transition name='fade'>
        <router-view></router-view>
      </transition>

      
    </div>
  </div>
</template>

<style>
  .fade-enter{
    transform: translateX(-100%);
  }
  .fade-enter-active{
    transition: transform 1s ease;
  }
  .fade-enter-to{
    transform: translateX(0);
  }
  .fade-leave{
    transform: translateX(0);
  }
  .fade-leave-active{
    transition: transform 1s ease;
  }
  .fade-leave-to{
    transform: translateX(100%);
  }

</style>
