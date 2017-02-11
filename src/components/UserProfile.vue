<template>
  <div>
		<section class="hero is-medium is-primary is-bold">
			<div class="hero-body">
				<div class="container">
          <template v-if="isLoading">
            <h1 class="title">Loading...</h3>
          </template>
          <h1 class="title">{{ fullname }}</h1>
          <h3 class="subtitle">{{ user.location.city }}</h3>
				</div>
			</div>
		</section>
    <tabs :user="user"></tabs>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Tabs from './Tabs'

export default{
  name: 'UserProfile',
  beforeMount () {
    const username = this.$route.params.username
    this.$store.dispatch({ type: 'fetchUserByUsername', username })
  },
  components: { Tabs },
  computed: {
    ...mapGetters({
      user: 'singleUser',
      isLoading: 'isLoading'
    }),
    fullname () {
      if (this.user.name) {
        const { first, last } = this.user.name
        return `${first.charAt(0).toUpperCase() + first.slice(1)} ${last.charAt(0).toUpperCase() + last.slice(1)}`
      }
    }
  }
}
</script>

<style>

</style>
