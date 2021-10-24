<template>

  <div class="head">
    <div class="profile">
      Profile
      
    </div>
  </div>

  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>


  <router-view/>


</template>

<script>
export default{

}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.head{
  width: 100%;
  height: 100px;
  background-color: lightblue;
  top: 0;
  left: 0;
  position: absolute;
}

.profile{
  right: 20px;
  width: 200px;
  padding: 20px;
  float: right;
  margin-top: 20px;
  position: relative;
  background-color: royalblue;
}
</style>
