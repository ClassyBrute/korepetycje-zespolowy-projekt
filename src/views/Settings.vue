<template>
 
  <div>

    <router-link type="button" id="butt" class="btn btn-primary" :to="{ name: 'MenuSearch'}"> SEARCH </router-link>    
    <router-link type="button" id="butt" class="btn btn-primary" :to="{ name: 'MenuCreate'}"> CREATE </router-link>

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

<style>

  #butt{
    display: inline-block;
    background-color: #444444;
    color: white;
    font-family: Arial;
    font-size: 50px;
    border-radius: 100px;
    margin: 30px;
    margin-top: 250px;
    padding: 40px;
  }

</style>