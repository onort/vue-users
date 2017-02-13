<template>
  <nav class="nav has-shadow">
  <div class="container">
    <div class="nav-left">
      <router-link to="/">
        <h2 class="title is-3 nav-item">VueJS Users</h2>
      </router-link>
    </div>
    <div class="nav-right">
      <router-link to="/" exact class="nav-item is-tab">Home</router-link>
      <router-link to="/users" class="nav-item is-tab">Users</router-link>
    </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
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
</style>
