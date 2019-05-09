<template>
    <div class='movie-container'>
        <ul>
            <li v-for="(obj,index) in movieList" :key="index" class='movie-list'>
                <img class='movie-img' :src="obj.images.small" alt="">
                <div class='movie-text'>
                    <h4>{{obj.title}}</h4>
                    <p>
                        <span v-for='(casts,index) in obj.casts' :key='index'>{{casts.name}}</span>
                    </p>
                    <p>{{obj.id}}人已观看</p>
                    <p>年份:{{obj.year}}</p>
                    <p>
                        <span v-for='(genres,index) in obj.genres' :key='index'>{{genres}}</span>
                    </p>
                </div>
            </li>
        </ul>
        <div class='loading' v-show='isShow'>
            <img src="@/assets/imgs/loading.gif" alt="">
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                movieList:[],
                isShow:true,
                isBottom:false
            }
        },
        created(){
            //表单用post，请求量大时
            //域名、协议、端口号一个不同时即为跨域 安全限制，jsonbird支持跨域
            this.getMovie();
            window.onscroll = ()=>{
                let scrollTop = document.documentElement.scrollTop;
                let clineHeight = document.documentElement.clientHeight;
                let height = document.documentElement.scrollHeight;
                if(scrollTop + clineHeight == height&&!this.isBottom){
                    this.getMovie();
                }
            }
        },
        methods:{
            getMovie(){
                this.isShow=true;
                axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=广州&start='+this.movieList.length+'&count=10')
                .then((result)=>{
                    this.isShow=false;
                    this.movieList = {...this.movieList,...result.data.subjects};
                    if(this.movieList.length==result.data.total){
                        this.isBottom=true;
                    }
                    console.log(this.movieList);
                })
            }
        }
    }
</script>

<style scoped>
    .movie-container{
        padding:0 0.2rem;
    }
    .movie-list{
        display: flex;
        border-bottom:1px solid #ccc;
        padding:0.2rem 0;
    }
    .movie-img{
        width: 100px;
        height: 150px;
        margin-right:0.2rem;
    }
    .movie-text{
        flex:1;
    }
    .loading{
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
    }
</style>