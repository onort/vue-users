<template>
  <div>
		<section class="hero is-primary is-bold">
			<div class="hero-body">
				<div class="container">
          <template v-if="isLoading">
            <h1 class="title is-1">Loading...</h3>
          </template>
          <h2 class="title is-2">{{ fullname | capitalize }}</h1>
          <h3 class="subtitle is-3">{{ user.location.city | capitalize }}</h3>
				</div>
			</div>
		</section>
    <tabs :user="user"></tabs>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Tabs from './Tabs'
import { capitalize } from '../../helpers'

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
      const { first, last } = this.user.name
      return `${first} ${last}`
    }
  },
  filters: {
    capitalize
  }
}
</script>

<style>

</style>
