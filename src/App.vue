<template>
  <div id="app">
    <navbar></navbar>
    <div @click="closeMenu">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from 'components/common/Navbar'

export default {
  name: 'app',
  components: { Navbar },
  methods: {
    closeMenu () {
      this.$store.dispatch('toggleMenu', 1)
    }
  }
}
</script>

<style>

</style>
