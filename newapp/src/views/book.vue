<template>
    <div>
        <swipe class="my-swipe">
        <swipe-item class="slide1"></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
</swipe>
    </div>
</template>

<script>
    import {Swipe,SwipeItem} from 'vue-swipe';
    require('vue-swipe/dist/vue-swipe.css');
    export default {
        components:{
            Swipe,
            SwipeItem
        }
    }
</script>

<style scoped>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
.slide1 {
  background-color: #ccc;
  color: #fff;
}

.slide2 {
  background-color: pink;
  color: #000;
}
.slide3 {
  background-color: #fabb63;
  color: #fff;
}
</style>