<template>
    <div class='header'>
        <div class='header-list'>
            <span>首页</span>
            <span class='imp'>电影</span>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .header{
        height: 1rem;
        line-height: 1rem;
        background: pink;
        /* font-size: 18px; */
        position: fixed;
        top:0;
        width: 100%;
        color:#fff;
    }
    .header-list .imp{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
</style>