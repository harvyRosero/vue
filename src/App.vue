<template>
  <div id="app">
    <Nav/>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/fotos">Fotos</router-link> |
      <router-link to="/services">Services</router-link>
    </nav> -->
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>
