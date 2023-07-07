<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link to="/"><img src="https://i.postimg.cc/y8NqKNwm/logo.jpg" alt="Logo"></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">About</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/resume">Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/project">Project</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/testimonial">Testimonial</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact">Contact</router-link>
          </li>
      </ul>
    </div>
  </div>
</nav><router-link to="/"></router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.nav-item{
    margin-right: 2rem;
}
img[alt="Logo"]{
    width:5rem;
    border-radius: 1rem;
}
</style>