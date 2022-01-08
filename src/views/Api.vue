<template>

<br>


<div v-for="data in api" :key="data">
  <p class="ptags">
    {{ data }}
  </p>
</div>

</template>

<script>

export default {
  name: 'Api',
  components: { },

  data(){
    return{
      api:[]
    }
  },
  mounted(){
    fetch("https://panoramx.ift.uni.wroc.pl:8888/openapi.json")
      .then(res => res.json())
      .then(data => this.api = data)
  },

  methods:{
    
  }
}

</script>

<style>

.ptags {
  color: white;
}

</style>