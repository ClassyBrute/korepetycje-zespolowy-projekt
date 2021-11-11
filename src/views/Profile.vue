<template>
 
  <div class="q-pa-md q-gutter-sm">

    <div class="q-pa-md" style="max-width: 400px">

    <q-avatar><img src="https://cdn.quasar.dev/img/avatar.png"></q-avatar>

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md">

      <q-input
        filled
        no-error-icon
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        no-error-icon
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>

  </div>

</template>

<script>

export default {

  data(){
    return{

    }
  },

  methods:{
    
  }
}

</script>

<style>


</style>