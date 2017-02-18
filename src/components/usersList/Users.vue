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
     <div class="column is-10 is-offset-1">
        <template>
          <paginator :current="currentPage"
                      @next="nextPage"
                      :pages="pages"
                      @prev="previousPage"  
                      @setPage="setPage">
          </paginator>
        </template>
      </div>
    <div class="columns users-list is-multiline">
      <template v-for="(user, index) in usersToShow">
          <user-list-item :user="user" :index="index"></user-list-item>
      </template>
    </div>
      <div class="column is-10 is-offset-1">
        <template>
          <paginator :current="currentPage"
                      @next="nextPage"
                      :pages="pages"
                      @prev="previousPage"  
                      @setPage="setPage">
          </paginator>
        </template>
      </div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Paginator from './Paginator'
import Spinner from '../common/Spinner'
import UserListItem from './UserListItem'

export default {
  name: 'users',
  components: { Paginator, Spinner, UserListItem },
  data () {
    return {
      title: 'Users List View',
      userPerPage: 10,
      currentPage: 0
    }
  },
  computed: {
    ...mapGetters({
      users: 'allUsers',
      isLoading: 'isLoading'
    }),
    pages () {
      return Array.from(Array(this.users.length / this.userPerPage).keys())
    },
    usersToShow () {
      const allUsers = this.users
      const start = this.currentPage * this.userPerPage
      const end = start + this.userPerPage
      return allUsers.slice(start, end)
    }
  },
  methods: {
    fetchUsers () {
      this.$store.dispatch({ type: 'fetchUsers' })
    },
    nextPage () {
      if (this.currentPage === this.pages.length - 1) return
      this.currentPage++
    },
    previousPage () {
      if (this.currentPage === 0) return
      this.currentPage--
    },
    setPage (pageNumber) {
      this.currentPage = pageNumber
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
