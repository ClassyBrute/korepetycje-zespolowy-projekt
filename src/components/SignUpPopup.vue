<template>
  <div class="backdrop" @click.self="closeSignUp">
    <div class="signupopen">
<!--       <q-form
        @reset="onReset"
        @submit.prevent=""
        class="q-gutter-md"
        action="http://78.8.98.73:3000/users" 
        method="post" >

        <div style="font-size: 30px; font-weight: bold">Sign up for ...</div>

        <q-input
          filled
          no-error-icon
          v-model="name"
          name = "name"
          label="Your name *"
          hint="Name"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"/>

        <q-input
          filled
          no-error-icon
          v-model="surname"
          name = "surname"
          label="Your name *"
          hint="Surname"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"/>

        <q-input  
          filled
          no-error-icon
          v-model="regEmail" 
          name = "email"
          type="email" 
          label="Email *" 
          hint="Email"
          :rules="[val => !!val || 'Email is missing']"/>

        <q-input 
          v-model="password" 
          name = "password"
          filled type="password"
          label="Password *" 
          hint="Password" />

        <q-input
          filled
          no-error-icon
          type="number"
          v-model="age"
          label="Your age *"
          hint="Age"
          lazy-rules
          :rules="[val => val !== null && val !== '' || 'Please type your age',
            val => val > 0 && val < 100 || 'Please type a real age']"/>

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form> -->

      <form action="http://78.8.98.73:3000/users" 
        method="post" @submit.prevent="onSubmit">
        <input v-model="name" type="text" name="name">
        <input v-model="surname" type="text" name="surname">
        <input v-model="email" type="text" name="email">
        <input v-model="password" type="text" name="password">
        <button type="submit">dupsko</button>

      </form>

    </div>
  </div>

</template>

<script>
import { ref } from 'vue'

export default {

  data(){
    return{
        name: "asdasda",
        surname: "asdasdasdas",
        email: "jajo@jajo",
        password: "asopdkas"
      }
  },



  // setup() {
    // const name = ref(null)
    // const surname = ref(null)
    // const regEmail = "asdjas@asodas"
    // const password = ref(null)
    // const age = ref(null)
    // const accept = ref(false)

    // return {
      // name,
      // surname,
      // regEmail,
      // password,
      // age,
      // accept,

      

      // onReset () {
      //     name.value = null
      //     surname.value = null
      //     regEmail.value = null
      //     password.value = null
      //     age.value = null
      //     accept.value = false
      // },

    // }
  // },

  methods: {
    closeSignUp() {
      this.$emit('close');
    },


    onSubmit() {

      let data = {name: this.name, surname: this.surname, email: this.email, password: this.password};


      fetch('http://78.8.98.73:3000/users', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
        

      }).then(res => {
        console.log(res);
      });

      // if (accept.value !== true) {
      //   alert("Zgódź się na nasze nieistniejące TOS")
      // }
      // else {
      //   closeSignUp    
      // }
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