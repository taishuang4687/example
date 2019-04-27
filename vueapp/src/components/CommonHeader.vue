<template>
    <div>
        <div class='header' :style={background:selectMenu.bg}>
            <span class='header-btn'>首页</span>
            <span class='header-title'>{{selectMenu.name}}</span>
        </div>
        
    </div>
</template>

<script>
    export default {
        props:['selectMenu']
    }
</script>

<style scoped>
    .header{
        height: 1rem;
        line-height: 1rem;
        color:#fff;
        background: #f00;
        position:fixed;
        top:0;
        width: 100%;
    }
    .header-title{
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
    }

</style>