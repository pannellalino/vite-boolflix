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
      getApi(){
        axios.get(store.apiUrl)
        .then(result =>{
          store.moviesList = result.data.results
          console.log(store.moviesList);
        })
        .catch(error =>{
          console.log(error);
        })
      }
    },
    mounted(){
      this.getApi()
    } 
  }
</script>


<template>

  <AppHeader />

  <AppMain />

  <AppCard />

</template>


<style lang="scss">

@use './styles/general.scss';

</style>