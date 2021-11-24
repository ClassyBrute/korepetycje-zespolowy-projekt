<template>
<div class="box" > 
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-black q-my-md"></h5>
      </div>
      <div class="row">
        <q-card rounded-borders class="q-pa-lg shadow-1" id="insidebox">
          <q-card-section>
            <q-form class="q-gutter-md" id="inputs">
              <q-input square filled clearable v-model="email" type="email" label="email" />
              <q-input square filled clearable v-model="password" type="password" label="password" />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md" >
            <q-btn id="button" unelevated color="light-blue-7" size="lg" class="full-width" label="Login" />
          </q-card-actions>
          <q-card-section id="p1" class="text-center q-pa-none">
            <p  @click="showSignUp" class="text-grey-6">Not reigistered?<router-link :to="{ path: '/about'}" replace>Create an account</router-link></p>
          </q-card-section>
        </q-card>
      </div>
    </div>
</div>

</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  }
}

</script>

<style>
.box{
  position: relative;
  width: 450px; 
  margin:0 auto;
  top: 120px;
  border-radius: 30px;
}

#insidebox {
  height: 350px;
}

#inputs {
  top: 20px;
}

#button{
  top: 30px;
}

#p1{
  top: 40px;
}
</style>