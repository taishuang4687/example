<template>
    <div class='movie-container'>
        <ul>
            <li @click='goDetail(obj.id)' class='movie-list' v-for='(obj,index) in movieList' :key='index'>
            <img class='movie-img' :src="obj.images.medium" alt="">
            <div class='movie-content'>
                <h4>{{obj.title}}</h4>
                <p>
                    <span v-for='(cast,index) in obj.casts' :key='index'>{{cast.name}}</span>
                </p>
                <p>{{obj.id}}人观看</p>
                <p>年份:{{obj.year}}</p>
                <p>
                    <span v-for='(gen,index) in obj.genres' :key="index">{{gen}}</span>
                </p>
            </div>
            </li>
        </ul>
        <div v-show='isShow' class='loading'>
            <img src="@/assets/img/loading.gif" alt="">
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    
    export default {
        data(){
            return {
                movieList:[

                ],
                isShow:true,
                isLength:true
            }
        },
        methods:{
            goDetail(id){
                this.$router.push('/movieDetail/'+id)//编程式导航
            },
            getMovie(){
            this.isShow = true;
            axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=广州&start='+this.movieList.length+'&count=10')
            .then((result)=>{
                this.isShow = false;
                this.movieList = [...this.movieList,result.data.subjects];
                if(this.movieList.length == result.data.total){
                    this.isLength = false;
                }
                // console.log(this.movieList);
            })
            }
        },
        created(){
            this.getMovie();
            window.onscroll = ()=>{
                let scrollTop = document.documentElement.scrollTop;
                let scrollHeight = document.documentElement.scrollHeight;
                let clientHeight = document.documentElement.clientHeight;
                // console.log(scrollTop,clientHeight,scrollHeight);
                if(scrollTop+clientHeight == scrollHeight && this.isLength){
                    this.getMovie();
                }
            }
        }
        
    }
</script>

<style scoped>
    .movie-container{
        padding: 0 0.2rem;
    }
    .movie-list{
        display:flex;
        padding: 0.2rem 0;
        border-bottom:1px solid #000;
    }
    .movie-img{
        width: 100px;
        height: 150px;
        margin-right: 0.2rem;
    }
    .movie-content{
        flex:1;
    }
    .loading{
        position:fixed;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
</style>