<template>
  <div class="box">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-black q-my-md"></h5>
      </div>
      <div class="row">
        <q-card rounded-borders class="q-pa-lg shadow-1" id="insidebox">
          <q-card-section>
            <q-form class="q-gutter-md" id="inputs">
              <q-input
                square
                filled
                v-model="email"
                type="email"
                label="Email *"
              />
              <q-input
                square
                filled
                v-model="password"
                type="password"
                label="Password *"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              @click="onSubmit"
              id="button"
              unelevated
              color="light-blue-7"
              size="lg"
              class="full-width"
              label="Login"
            />
          </q-card-actions>
          <q-card-section id="p1" class="text-center q-pa-none">
            <p @click="toggleSignUp" class="text-grey-6">
              Not registered? <a href="#">Create an account</a>
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>

  <div v-if="showSignUp">
    <SignUpPopup theme="sale" @close="offSignUp"> </SignUpPopup>
  </div>
</template>

<script>
import SignUpPopup from "../components/SignUpPopup";

export default {
  components: { SignUpPopup },
  data() {
    return {
      email: "",
      password: "",
      showSignUp: false,
    };
  },
  methods: {
    toggleSignUp() {
      this.showSignUp = !this.showSignUp;
    },
    offSignUp() {
      if (this.showSignUp == true) {
        this.showSignUp = false;
      }
    },
    onSubmit() {
      let data = {
        accountName: this.email,
        password: this.password,
      };

      fetch("https://panoramx.ift.uni.wroc.pl:8888/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => {
            if (response.status == 404) {
              alert("Wrong email or password");
              return;
            }
            response.json().then((data123) => {
              document.cookie = "jwt=" + data123; // write
              console.log(document.cookie); // read
              window.location.replace("/home");
            });
          })
    },
  },
};
</script>

<style>
.box {
  position: relative;
  width: 450px;
  margin: 0 auto;
  top: 120px;
}

#insidebox {
  height: 350px;
  width: 450px;
}

#inputs {
  top: 20px;
  width: 426px;
  left: -14px;
  padding-left: 2px;
  padding-right: 2px;
}

#button {
  top: 30px;
}

#p1 {
  top: 40px;
}
</style>