<template>
 
  <div>

    <router-link class="buttons" :to="{ name: 'MenuSearch'}"> SEARCH </router-link>    
    <router-link class="buttons" :to="{ name: 'MenuCreate'}"> CREATE </router-link>

    <!-- <button class="buttons" @click="searchForm" > SEARCH </button> -->
    <!-- <button class="buttons" @click="createForm"> CREATE </button> -->
    

  </div>

</template>

<script>

export default {
  name: 'Home',
  components: { },

  data(){
    return{

    }
  },

  methods:{
    
  }
}

</script>

<style >
  .buttons{
    width: 200px;
    height: 100px;
    margin: 50px;
    background-color: yellowgreen;
    padding: 30px;
    border-radius: 10px;
    text-decoration: none;
  }

  .buttons:hover{
    background-color: yellow;
  }

</style>