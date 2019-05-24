<template>
    <div>
        <img @click='goPhoto()' v-for='(obj,index) in photoList' :key='index' :src="obj.src" alt="">
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                photoList:[

                ]
            }
        },
        created(){
            axios.get('/data/photodata.json')
            .then((result)=>{
                this.photoList = result.data.photoData;
                // console.log(this.photoList);
            })
        },
        methods:{
            goPhoto(index){
                this.$router.push('./photoDetail')
            }
        }
    }
</script>

<style scoped>
    img{
        width: 50%;
    }
</style>