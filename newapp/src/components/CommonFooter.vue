<template>
    <div class='footer'>
        <ul class='footer-list'>
            <li v-for='(obj,index) in menu' :key='index'>
                <router-link :to='obj.path'>{{obj.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['menu']
    }
</script>

<style scoped>
    .footer{
        height: 1rem;
        line-height: 1rem;
        background: pink;
        position: fixed;
        bottom: 0;
        width: 100%;
        /* color:#fff; */
    }
    .footer-list{
        display: flex;
        text-align: center;        
    }
    .footer-list li{
        flex: 1;
    }
    .footer-list a{
        color: #000;
        outline: none
    }
    .footer-list a.router-link-exact-active{
        color: #fff;
    }
</style>