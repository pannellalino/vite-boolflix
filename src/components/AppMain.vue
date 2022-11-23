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
        changeFlag(){
          if(store.original_language = 'en'){
            return 'us'
          } else if(store.original_language = 'it'){
            return 'it'
          }else {
            return store.original_language
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
          <span v-if="store.original_language === 'it'" :class="'fi fi-' + changeFlag()">{{original_language}}</span>
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
          <span :class="'fi fi-' + changeFlag()">{{original_language}}</span>
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
          <h6 class="card-subtitle text-muted">{{pop.original_title}}</h6>
          <span :class="'fi fi-' + changeFlag()">{{original_language}}</span>
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
      h6, .fi{
        display: block;
      }
    }
  }
  .text-overlay{
    width: 100%;
    &:hover{
      height: 100%;
      width: 100%;
      filter: opacity(1);
      z-index: 999;
      }
      h6{
        position: absolute;
        padding:10px 0;
        top: 20px;
        right: 0;
        width: 100%;
        display: none;
      }
      .fi{
        position: absolute;
        left: 0px;
        right: 0px;
        top: 70px;
        width: 100%;
        display: none;
      }
    }
    img{
      width: 100%;
      &:hover{
        opacity: .1;
      }
    }
    .checked{
      position: relative;
      color: orange;
    }
    .card-body{
      width: 100%;
    }
}
</style>