<script>
import {store} from './data/store';

export default {
  name: 'AppMain',
  data(){
    return{
      store
    }
  },
  methods:{
        startReset(){
          store.moviesList = [],
          store.tvList = [],
          store.title = ''
        },
        changeFlag(original_language){
          console.log('original language', original_language)
          if(original_language === 'en'){
            return 'us'
          } else if(original_language === 'it'){
            return 'it'
          }else {
            return original_language
          }
        },
        getRating(voto){
          return Math.ceil(voto / 2) 
        }
      }
    }

</script>


<template>
  <main>
    <div class="container d-flex justify-content-center">
      <input 
        v-model.trim="store.title"
        @keyup.enter="$emit('search')"
        type="text" 
        class="form-control w-25" 
        placeholder="Search Movie">
        <button @click="startReset()" type="button" class="ms-2 btn btn-outline-light">Reset</button>
    </div>
    
    <div class="container d-flex flex-wrap">
      
      <div v-for="(movie, index) in store.moviesList" :key="index" class="card border-0 mb-2 p-2 text-center">
        <div class="card-body text-overlay">
          <img :src="store.poster_path + movie.poster_path" alt="{{movie.original_title}}">
          <h6 class="card-subtitle mb-2 text-muted">{{movie.original_title}}</h6>
          <span  :class="'fi fi-' + changeFlag(movie.original_language)">{{original_language}}</span>
        </div>
        <h5 class="card-title text-white m-1">{{movie.title}}</h5>
          <div class="stars">
            <span v-for="star in getRating(movie.vote_average)" :key="star" class="fa fa-star checked"></span>
            <span v-for="star in (5 - getRating(movie.vote_average))" :key="star" class="fa fa-star"></span>
          </div>
      </div>

      <div v-for="(serie, index) in store.tvList" :key="index" class="card border-0 mb-2 p-2 text-center">
        <div class="card-body text-overlay">
          <img :src="store.poster_path + serie.poster_path" alt="{{serie.original_name}}">
          <h6 class="card-subtitle mb-2 text-muted">{{serie.original_name}}</h6>
          <span :class="'fi fi-' + changeFlag(serie.original_language)">{{original_language}}</span>
        </div>
        <h5 class="card-title text-white m-1">{{serie.name}}</h5>
          <div class="stars">
            <span v-for="star in getRating(serie.vote_average)" :key="star" class="fa fa-star checked"></span>
            <span v-for="star in (5 - getRating(serie.vote_average))" :key="star" class="fa fa-star"></span>
          </div>
      </div>

      <div v-for="(pop, index) in store.popularList" :key="index" class="card border-0 mb-2 text-center">
        <div class="card-body text-overlay">
          <img :src="store.poster_path + pop.poster_path" alt="{{pop.original_title}}">
          <div class="overlay">
            <h6 class="card-subtitle text-muted">{{pop.original_title}}</h6>
            <span :class="'fi fi-' + changeFlag(pop.original_language)">{{original_language}}</span>
            <p class="p-4">{{pop.overview}}</p>
          </div>
          <h5 class="card-title text-white m-1">{{pop.title}}</h5> 
          <div class="stars">
            <span v-for="star in getRating(pop.vote_average)" :key="star" class="fa fa-star checked"></span>
            <span v-for="star in (5 - getRating(pop.vote_average))" :key="star" class="fa fa-star"></span>
          </div>
        </div>
      </div>

    </div>
  </main>
</template>  

<style lang="scss" scoped>
main{
  padding-top: 80px;
  input, button{
    background-color: rgba(37, 37, 37, 0.42);
    color: white;
  }
  .card{
    width: calc(100% / 5);
    background-color: rgb(16, 16, 16);
    &:hover{
      cursor: pointer;   
      h6, .fi, p{
        display: block;
      }
    }
  }
  .overlay{
    height: 340px;
    width: 100%;
    background-color: rgba(0,0,0,.5);
    opacity: 0;
    overflow: scroll;
    &:hover{
      opacity: 1;
    }

  }
  .text-overlay{
    h6{
        padding:10px 0;
        top: 20px;
        right: 0;
        width: 100%;
        display: none;
      }
      .fi{
        left: 0px;
        right: 0px;
        top: 70px;
        width: 100%;
        display: none;
      }
      p{
        color: rgb(199, 199, 199);
        left: 0px;
        right: 0px;
        top: 80px;
        width: 100%;
        height: 100%;
        display: none;
        overflow: scroll;
      }
    }
    
    img{
      width: 100%;
    }
    .checked{
      position: relative;
      color: orange;
    }
    .card-body{
      width: 100%;
      height: 100%;
      position: relative;
    }
}
</style>