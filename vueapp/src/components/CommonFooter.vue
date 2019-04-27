<template>
        <div class='footer'>
            <ul class='footer-list'>
                <li>
                    <router-link to='/movie'>电影</router-link>
                </li>
                <li>
                    <router-link to='/music'>音乐</router-link>
                </li>
                <li>
                    <router-link to='/book'>书籍</router-link>
                </li>
                <li>
                    <router-link to='/photo'>图片</router-link>
                </li>
            </ul>
        </div>
</template>

<script>
    export default {
        
    }
</script>
<style scoped>
    .footer{
        background: #f00;
        height: 1rem;
        line-height: 1rem;
        position:fixed;
        bottom:0;
        width: 100%;
    }
    .footer-list{
        display:flex;
    }
    .footer-list li{
        flex:1;
        text-align: center;
    }
    .footer-list a{
        color:#000;
        outline:none;
    }
    .footer-list a.router-link-exact-active{
        color:#fff;
    }

    

</style>