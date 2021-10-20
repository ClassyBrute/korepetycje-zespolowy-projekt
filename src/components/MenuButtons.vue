<template>
  <div>
 
  	<button class="buttons" @click="searchForm"> SEARCH </button>

  	<button class="buttons" @click="createForm"> CREATE </button>

  	<div class="dupa" v-if="searchForm"> DUPSKO </div>

  </div>

</template>


<script>
export default {
 
	data(){
		return{
			issearchForm: false,
			iscreateForm: false	
		}
		
	},

	methods:{
		searchForm(){

			this.issearchForm = true
			this.$emit('issearchForm', this.issearchForm)
			// this.$router.push('./components/MenuSearch')
		},

		createForm(){
			this.iscreateForm = true
			this.$emit('iscreateForm', this.iscreateForm)
		}
	}
}
</script>


<style >
	.buttons{
		width: 200px;
		height: 100px;
		margin: 50px;
	}

</style>
