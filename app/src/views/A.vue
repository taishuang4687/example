<template>
    <div>
        <h1>我是A页面</h1>
            <div>
                <router-link to='/test1'>test1页面</router-link>
            </div>
            <div>
                <router-link to='/test2'>test2页面</router-link>
            </div>
            <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>