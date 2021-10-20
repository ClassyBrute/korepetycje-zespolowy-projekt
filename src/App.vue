<template>
  
  <HeaderMenu/>

  <MenuButtons/>


</template>

<script>
import MenuButtons from './components/MenuButtons.vue'
import MenuSearch from './components/MenuSearch.vue'
import HeaderMenu from './components/HeaderMenu.vue'

export default {
  name: 'App',
  components: { MenuSearch, MenuButtons, HeaderMenu },

  data(){
    return{
      buttons: true
    }
  },

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.buttons{
    width: 200px;
    height: 100px;
    margin: 50px;
  }
</style>
