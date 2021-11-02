<template>
  <div class="backdrop" @click.self="closeSignUp">
    <div class="signupopen">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md">

        <div style="font-size: 30px; font-weight: bold">Sign up for ...</div>

        <q-input
          filled
          no-error-icon
          v-model="name"
          label="Your name *"
          hint="Name"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"/>

        <q-input
          filled
          no-error-icon
          v-model="surname"
          label="Your name *"
          hint="Surname"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"/>

        <q-input  
          filled
          no-error-icon
          v-model="regEmail" 
          type="email" 
          label="Email *" 
          hint="Surname"
          :rules="[val => !!val || 'Email is missing']"/>

        <q-input 
          v-model="password" 
          filled type="password"
          label="Password *" 
          hint="Password" />

        <q-input
          filled
          no-error-icon
          type="number"
          v-model="age"
          label="Your age *"
          lazy-rules
          :rules="[val => val !== null && val !== '' || 'Please type your age',
            val => val > 0 && val < 100 || 'Please type a real age']"/>

        <q-toggle v-model="value" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {

  setup() {
    return {
      name: ref(''),
      surname: ref(''),
      regEmail: ref(''),
      age: ref(false),
      value: ref (false), //slider default value
      password: ref(''),
    }
  },

  methods: {
    closeSignUp() {
      this.$emit('close')
    }
  }

}
</script>

<style>
  .signupopen {
    width: 400px;
    padding: 20px;
    margin: 150px auto;
    background: white;
    border-radius: 10px;
  }
  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }

</style>