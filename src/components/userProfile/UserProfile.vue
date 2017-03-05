<template>
  <div>
		<section class="hero is-dark is-bold">
			<div class="hero-body columns">
				<div class="container column is-10 is-offset-1">
          <template v-if="isLoading">
            <spinner></spinner>
          </template>
          <h2 class="title is-2">{{ fullname | capitalize }}</h2>
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
    this.$store.dispatch({ type: 'fetchContactByUsername', username })
  },
  components: { Spinner, Tabs },
  computed: {
    ...mapGetters({
      user: 'singleContact',
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

<style scoped>
@media screen and  (max-width: 768px) {
  .hero-body {
    padding: 2rem;
  }
  .title.is-2 {
    font-size: 1.75rem;
  }
  .subtitle.is-3 {
    font-size: 1.25rem;
  }
  .button.is-fullwidth {
    justify-content: center;
  }
}
</style>
