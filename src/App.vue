<template>

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-scroll fixed-top shadow-0 border-bottom border-dark">
    <div class="container">
      <a class="navbar-brand" href="#!"><i class="fab fa-mdb fa-4x"></i></a>
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#!">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">Settings</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">Sign In</a>
          </li>
          <button type="button" class="btn btn-dark ms-3">Sign Up</button>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Navbar -->

  <router-view/>

  <footer class="bg-light text-center text-lg-start fixed-bottom">
    <div class="text-center p-2" style="background-color: #1A2331; color: #777e88">
      © 2021 Copyright: Uniwersytet Wrocławski
    </div>
  </footer>

</template>

<script>
export default{

}

</script>


<style>
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%; width: 100%; 
  background: linear-gradient(0deg, #1A2331 0%, rgba(26, 35, 49, 0.640625) 35.94%, rgba(26, 35, 49, 0) 100%);
}

body, html {
    height: 100%; width: 100%; 
}

.navbar-scroll .nav-link,
.navbar-scroll .navbar-toggler-icon,
.navbar-scroll .navbar-brand {
  color: white;
}

.navbar-scroll .nav-link:hover{
  color: yellowgreen;
}

.navbar-scroll {
  background-color: #444444;
}

.navbar-brand {
  font-size: unset;
  height: 2rem;
}

</style>
