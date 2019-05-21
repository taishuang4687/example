<template>
    <div>
        <img @click='goList()' class='img-list' v-for='(obj,index) in musicList' :key='index' :src="obj.bg" alt=""/>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                musicList:[

                ]
            }
        },
        created(){
            axios.get('/data/musiclist.json')
            .then((result)=>{
                this.musicList = result.data.albums;
                // console.log(this.musicList);
            })
        },
        methods:{
            goList(){
                this.$router.push('/musicList')
            }
        }
    }
</script>

<style scoped>
    .img-list{
        width: 50%;
    }
</style>