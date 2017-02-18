<template>
  <nav class="nav has-shadow">
  <div class="container">
    <div class="nav-left">
      <router-link to="/">
        <h2 class="title is-3 nav-item">VueJS Users</h2>
      </router-link>
    </div>
      <div :class="[ menuVisible ? 'nav-menu is-active nav-right' : 'nav-menu nav-right' ]"
           @click="closeMenu">
        <router-link to="/" exact class="nav-item">Home</router-link>
        <router-link to="/users" class="nav-item">Users</router-link>
      </div>
     <span class="nav-toggle" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toggleMenu () {
      this.$store.dispatch('toggleMenu', 0)
    },
    closeMenu () {
      this.$store.dispatch('toggleMenu', 1)
    }
  },
  computed: {
    menuVisible () {
      return this.$store.getters.isMenuVisible
    }
  }
}
</script>

<style>
.nav-item.router-link-active {
  border-bottom-color: hsl(0, 0%, 20%);
  color: hsl(0, 0%, 20%);
}
a.nav-item.is-tab:hover {
  border-bottom-color: hsl(0, 0%, 29%) !important;
}
@media (max-width: 768px) {
  .nav-menu .nav-item {
    justify-content: center;
  }
}
</style>
