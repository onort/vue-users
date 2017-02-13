<template>
  <div>
		<section class="hero is-dark is-bold">
			<div class="hero-body">
				<div class="container">
          <template v-if="isLoading">
            <spinner></spinner>
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
import { capitalize } from '../../helpers'
import Spinner from '../common/Spinner'
import Tabs from './Tabs'

export default{
  name: 'UserProfile',
  beforeMount () {
    const username = this.$route.params.username
    this.$store.dispatch({ type: 'fetchUserByUsername', username })
  },
  components: { Spinner, Tabs },
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
