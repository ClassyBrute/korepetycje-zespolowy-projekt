<template>
  <!-- Navbar -->
  <nav
    @click.self="offSignUp"
    class="
      navbar navbar-expand-lg navbar-scroll
      fixed-top
      shadow-0
      border-bottom border-dark
    "
  >

    <div class="container">
      <img
        v-if="!loggedInCheck()"
        class="doge"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg00.deviantart.net%2Fecda%2Fi%2F2015%2F364%2F2%2F4%2Fbreadoge_by_anonimrealpl-d9m1hgh.png&f=1&nofb=1"
      />
      <router-link
        @click="offSignUp"
        class="navbar-brand"
        :to="{ name: 'Home' }"
        v-if="loggedInCheck()"
      >
        <img
          class="doge"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg00.deviantart.net%2Fecda%2Fi%2F2015%2F364%2F2%2F4%2Fbreadoge_by_anonimrealpl-d9m1hgh.png&f=1&nofb=1"
        />
      </router-link>
      <div
        @click.self="offSignUp"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav ms-auto">
          <li @click="offSignUp(); forceRender();" class="nav-item" v-if="loggedInCheck()">
            <router-link class="nav-link" :to="{ name: 'Profile', params: { accountId: loggedId} }"
              >Profile</router-link
            >
          </li>
          <li @click="offSignUp" class="nav-item" v-if="loggedInCheck()">
            <router-link class="nav-link" :to="{ name: 'About' }"
              >About</router-link
            >
          </li>
          <li @click="offSignUp" class="nav-item" v-if="!loggedInCheck()">
            <router-link class="nav-link" :to="{ name: 'SignIn' }"
              >Sign In</router-link
            >
          </li>
          <button @click="toggleSignUp" class="btn btn-dark ms-3" v-if="!loggedInCheck()">
            Sign Up
          </button>
          <button @click="logOut" class="btn btn-dark ms-3" v-if="loggedInCheck()">
            Log out
          </button>
        </ul>
      </div>
    </div>
  </nav>

  <br />
  <br />

  <router-view :key="componentKey" @click="offSignUp" />

  <div v-if="showSignUp">
    <SignUpPopup theme="sale" @close="offSignUp"> </SignUpPopup>
  </div>

  <!-- <button @click="activeTab = 'TabA'"> TabA</button>
  <button @click="activeTab = 'TabB'"> TabB</button>

  <TabA v-if="activeTab === 'TabA'" />
  <TabB v-if="activeTab === 'TabB'"/> -->
 


  <footer
    @click="offSignUp"
    class="bg-light text-center text-lg-start fixed-bottom">
    <div
      class="text-center p-2"
      style="background-color: #1a2331; color: #777e88">
      © 2021 Copyright: Uniwersytet Wrocławski
    </div>
  </footer>
</template>

<script>
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

import SignUpPopup from "./components/SignUpPopup";


export default {
  name: "App",
  components: { SignUpPopup},
  
  data() {
    return {
      showSignUp: false,
      loggedIn: false,
      loggedId: "",
      componentKey: 0,
      
      
    };
  },

  mounted() {
    fetch(`https://panoramx.ift.uni.wroc.pl:8888/v1/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + readCookie("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.loggedId = data._id;
        this.$globalVariable = this.loggedId;
        console.log(this.$globalVariable);

      });
  },


  methods: {
    forceRender() {
      this.componentKey += 1;
    },

    toggleSignUp() {
      this.showSignUp = !this.showSignUp;
    },
    offSignUp() {
      if (this.showSignUp == true) {
        this.showSignUp = false;
      }
    },
    loggedInCheck() {
      if (document.cookie.includes("jwt")) {
        this.loggedIn = true;
        return true;
      } else false;
    },
    logOut() {
      document.cookie = 'jwt=; Max-Age=0; path=/; domain=' + location.hostname;
      window.location.replace("sign_in");
    },
  },
};
</script>


<style>
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  background-image: url("assets/gradient.png"); 
  background-position: center;
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: cover;
  overflow: auto;
}

body,
html {
  height: 100%;
  width: 100%;
}

.navbar-scroll .nav-link,
.navbar-scroll .navbar-toggler-icon,
.navbar-scroll .navbar-brand {
  color: white;
}

.navbar-scroll .nav-link:hover,
.navbar-scroll .nav-link:focus {
  color: #1898e7;
}

.navbar-scroll {
  background-color: #444444;
}

.navbar-brand {
  font-size: unset;
  height: 2rem;
}

.doge {
  width: 120px;
  height: 2rem;
}

.btn .btn-dark .ms-3 {
  pointer-events: none;
}
</style>
