<template>
	<div>
		<section class="hero is-dark is-bold">
			<div class="hero-body">
				<div class="container">
          <template v-if="isLoading">
            <spinner></spinner>
          </template>
          <h1 class="title is-2">
            {{ title }}
          </h1>
				</div>
			</div>
		</section>
    <template v-for="user in users">
     <div class="columns users-list">
        <div class="column is-8-tablet is-offset-2-tablet is-10-mobile is-offset-1-mobile">
        <user-list-item :user="user"></user-list-item>
        </div>
      </div>
    </template>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Spinner from '../common/Spinner'
import UserListItem from './UserListItem'

export default {
  name: 'hello',
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
</style>
