<template>
  <div>
		<section class="hero is-medium is-primary is-bold">
			<div class="hero-body">
				<div class="container">
          <h1 class="title">
            {{ fullname }}
          </h1>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default{
  name: 'UserProfile',
  created () {
    const username = this.$route.params.username
    this.$store.dispatch({ type: 'fetchUserByUsername', username })
  },
  computed: {
    ...mapGetters({
      user: 'singleUser'
    }),
    fullname () {
      const { first, last } = this.user.name
      return `${first.charAt(0).toUpperCase() + first.slice(1)} ${last.charAt(0).toUpperCase() + last.slice(1)}`
    }
  }
}
</script>

<style>

</style>
