<template>
  <div class="backdrop" @click.self="closeSignUp">
    <div class="signupopen">
      <q-form @reset="onReset" @submit.prevent="onSubmit" class="q-gutter-md">
        <div style="font-size: 30px; font-weight: bold">Sign up for ...</div>

        <q-input
          filled
          no-error-icon
          v-model="name"
          name="name"
          label="Your name *"
          hint="Name"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          no-error-icon
          v-model="surname"
          name="surname"
          label="Your surname *"
          hint="Surname"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          no-error-icon
          v-model="email"
          name="email"
          type="email"
          label="Email *"
          hint="Email"
          :rules="[(val) => !!val || 'Email is missing']"
        />

        <q-input
          no-error-icon
          v-model="password"
          name="password"
          filled
          type="password"
          label="Password *"
          hint="Password"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <Datepicker 
          placeholder="Your birthday"
          v-model = 'age' 
          style="width: 350px; opacity:80%;">
        </Datepicker>

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      name: "",
      surname: "",
      email: "",
      password: "",
      age: "",
      accept: false,
    };
  },

  methods: {
    closeSignUp() {
      this.$emit("close");
    },

    onSubmit() {
      if (this.accept) {
        let data = {
          accountName: this.email,
          firstName: this.name,
          lastName: this.surname,
          email: this.email,
          password: this.password,
          birthday: this.age,
        };

        fetch("https://panoramx.ift.uni.wroc.pl:8888/v1/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then(
            function(response) {
              if (response.status == 403) {
                alert("Account already exists");
                return;
              }
              response.json().then((data123) => {
                document.cookie = "jwt=" + data123; // write
                window.location.replace("/home");
              });
            })
      } else {
        alert("Zgódź się na nasze nieistniejące TOS");
      }
    },

    onReset() {
      this.name = "";
      this.surname = "";
      this.email = "";
      this.password = "";
      this.age = "";
      this.accept = false;
    },
  },
};
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
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
</style>