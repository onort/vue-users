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
    <template v-for="user in users">
     <div class="columns is-mobile users-list">
        <div class="column is-10 is-offset-1">
        <user-list-item :user="user"></user-list-item>
        </div>
      </div>
    </template>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserListItem from './UserListItem'

export default {
  name: 'hello',
  components: { UserListItem },
  data () {
    return {
      title: 'Users List View'
    }
  },
  computed: {
    ...mapGetters({
      users: 'allUsers'
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
