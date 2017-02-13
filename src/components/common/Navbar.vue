<template>
  <nav class="nav has-shadow">
  <div class="container">
    <div class="nav-left">
      <h2 class="title is-3 nav-item">VueJS Users</h2>
    </div>
    <div class="nav-right">
      <router-link to="/" class="nav-item is-tab">Home</router-link>
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

</style>
