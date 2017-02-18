<template>
	<div>
		<section class="hero is-dark is-bold">
			<div class="hero-body columns">
				<div class="container column is-10 is-offset-1">
          <template v-if="isLoading">
            <spinner></spinner>
          </template>
          <h2 class="title is-2">{{ title }}</h2>
				</div>
			</div>
		</section>
     <div class="columns users-list is-multiline">
    <template v-for="(user, index) in users">
        <user-list-item :user="user" :index="index"></user-list-item>
    </template>
      </div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Spinner from '../common/Spinner'
import UserListItem from './UserListItem'

export default {
  name: 'users',
  components: { Spinner, UserListItem },
  data () {
    return {
      title: 'Users List View'
    }
  },
  computed: {
    ...mapGetters({
      users: 'allUsers',
      isLoading: 'isLoading'
    })
  },
  methods: {
    fetchUsers () {
      this.$store.dispatch({ type: 'fetchUsers' })
    }
  },
  created () {
    this.fetchUsers()
  }
}
</script>

<style scoped>
.users-list {
  margin-top: 10px;
}
@media (max-width: 768px) {
  .hero-body {
    padding: 3rem;
  }
  .title.is-2 {
    font-size: 2rem;
  }
}
</style>
