<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="danger">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav>
            <b-nav-item :to="{name: 'home' }" >Home</b-nav-item>
            <b-nav-item :to="{name: 'about' }">About</b-nav-item>
            <b-nav-item :to="{name: 'fotos' }">Fotos</b-nav-item>
            <b-nav-item :to="{name: 'services' }">Services</b-nav-item>
            <b-nav-item :to="{name: 'grid' }">Grid</b-nav-item>
            <b-nav-item :to="{name: 'card' }">Card</b-nav-item>
            <b-nav-item :to="{name: 'form' }">Form</b-nav-item>
          </b-navbar-nav>
        </b-collapse>

      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
    name: 'Nav'
}
</script>
