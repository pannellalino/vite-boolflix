<script>
import {store} from './data/store'

export default {
  name: 'AppHeader',
  data(){
    return{
      store
    }
  }

}
</script>

<template>
  <header class="d-flex justify-content-between">

    <img class="h-100" src="../img/logo-boolflix.png" alt="Logo">

  </header>
</template>  

<style lang="scss" scoped>
header{
  height: 80px;
  width: 100%;
  background-color: rgba(16, 16, 16, .8);
  padding: 15px;
  position: fixed;
  z-index: 999;
}

</style>