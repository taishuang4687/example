<template>
    <div class='movie-container'>
        <ul>
            <li class='movie-list' v-for='(obj,index) in movieList' :key='index'>
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
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                movieList:[

                ]
            }
        },
        created(){
            axios.get('/data/movie0.json')
            .then((result)=>{
                this.movieList = result.data.subjects;
                console.log(this.movieList);
            })
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
</style>