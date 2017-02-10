<template>
	<div>
		<section class="hero is-medium is-primary is-bold">
			<div class="hero-body">
				<div class="container">
          <h1 class="title">
            {{ title }}
          </h1>
				</div>
			</div>
		</section>
    <button class="button is-dark" @click="fetchUsers" >Fetch User Data</button>
	</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: 'Users List View',
      users: []
    }
  },
  compouted: {
    getUsers () {
      this.$store.getters.allUsers
    }
  },
  methods: {
    fetchUsers () {
      this.$store.dispatch({ type: 'fetchUsers' })
    }
  }
}
</script>

<style scoped>

</style>
