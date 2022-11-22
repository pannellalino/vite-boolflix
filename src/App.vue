<script>
import axios from 'axios';
import {store} from './components/data/store'

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppCard from './components/AppCard.vue'

  export default {
    name: 'App',
    components:{
      AppHeader,
      AppMain,
      AppCard
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getApiMovies(){
        axios.get(store.apiUrlMovies, {
          params: {
            query: store.title
          }
        })
        .then(result =>{
          store.moviesList = result.data.results
          console.log(store.moviesList);
        })
        .catch(error =>{
          console.log(error);
        })
      }
    },
    getApiTv(){
        axios.get(store.apiUrlTv, {
          params: {
            query: store.title,
            poster_path: String
          }
        })
        .then(result =>{
          store.tvList = result.data.results
          console.log(store.tvList);
        })
        .catch(error =>{
          console.log(error);
        })
      },
      mounted(){
      }
  }
</script>


<template>

  <AppHeader />

  <AppMain @startSearch="getApiMovies()"/>

  <AppCard />

</template>


<style lang="scss">

@use './styles/general.scss';

</style>