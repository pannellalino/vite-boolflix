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
            return 'gb'
          } else if (store.original_language = 'it') {
            return 'it'
          } else{
            return store.original_language
          }
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
        <div class="card-body">
          <img :src="store.poster_path + movie.poster_path" alt="{{movie.original_title}}">
          <h5 class="card-title text-white">{{movie.title}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{movie.original_title}}</h6>
          <span :class="'fi fi-' + changeFlag()">{{store.original_language}}</span>
        </div>
      </div>

      <div v-for="(serie, index) in store.tvList" :key="index" class="card border-0 mb-2 p-2 text-center">
        <h2>Serie Tv</h2>
        <div class="card-body">
          <img :src="store.poster_path + serie.poster_path" alt="{{serie.original_name}}">
          <h5 class="card-title text-white">{{serie.name}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{serie.original_name}}</h6>
          <span :class="'fi fi-' + changeFlag()">{{store.original_language}}</span>
        </div>
      </div>

      <div v-for="(pop, index) in store.popularList" :key="index" class="card border-0 mb-2 p-2 text-center">
        <div class="card-body">
          <img :src="store.poster_path + pop.poster_path" alt="{{pop.original_title}}">
          <h5 class="card-title text-white m-2">{{pop.title}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{pop.original_title}}</h6>
          <span :class="'fi fi-' + changeFlag()">{{store.original_language}}</span>
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
      filter: opacity(.1);
    }
    img{
      width: 100%;
    }
  }
}
</style>