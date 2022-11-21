<script>
import {store} from './data/store';

export default {
  name: 'AppMain',
  data(){
    return{
      store
    }
  }
}
</script>


<template>
  <div class="container d-flex flex-wrap">
    <div v-for="(movie, index) in store.moviesList" :key="index" class="card">
    <div class="card-body">
      <h5 class="card-title">{{movie.title}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{movie.original_title}}</h6>
      <h6 class="card-subtitle mb-2 text-muted">{{movie.original_language}}</h6>
      <p class="card-text">{{movie.overview}}</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
  </div>
</template>  

<style lang="scss" scoped>
.card{
  width: calc(100% / 4);
}
</style>