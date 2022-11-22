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
        <div v-for="(movie, index) in store.moviesList" :key="index" class="card border-0 mb-4 p-2 text-center">
        <div class="card-body">
          <img src="https://image.tmdb.org/t/p/w300{{movie.poster_path}}" alt="">
          <h5 class="card-title text-white">{{movie.title}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{movie.original_title}}</h6>
          <h6 class="card-subtitle mb-2 text-muted">{{movie.original_language}}</h6>
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
    width: calc(100% / 4);
    background-color: rgb(16, 16, 16);
  }
}
</style>