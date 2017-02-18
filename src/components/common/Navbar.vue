<template>
  <nav class="nav columns">
    <div class="container column is-10 is-offset-1">
      <div class="nav-left" @click="closeMenu">
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
nav.nav.columns {
  margin-bottom: 0;
}
.nav-item.router-link-active {
  border-bottom-color: hsl(0, 0%, 20%);
  color: hsl(0, 0%, 20%);
}
a.nav-item.is-tab:hover {
  border-bottom-color: hsl(0, 0%, 29%) !important;
}
@media screen and (max-width: 768px) {
  .nav-menu {
    margin-top: -200px;
    opacity: 0;
    display: block;
    transition: opacity .1s ease-in-out
  }
  .nav-menu.is-active {
    margin-top: 0px;
    opacity: 1
  }
  .nav-menu .nav-item {
    justify-content: center;
  }
  .nav-menu .nav-item:hover {
    background: #e2e2e2;
  }
}
</style>
