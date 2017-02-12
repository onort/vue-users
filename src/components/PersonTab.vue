<template>
  <div class="columns container">
    <div class="column is-2 is-offset-1">
      <figure class="1by1 has-text-centered"><img :src="user.picture.large" alt=""></figure>
      <button class="button is-outlined is-fullwidth">
        <span class="icon is-small"><i class="fa fa-comment"></i></span>Send Message
      </button>
      <button class="button is-outlined is-fullwidth">
        <span class="icon is-small"><i class="fa fa-sticky-note"></i></span>Add Note
      </button>
    </div>
    <div class="column is-8 is-offset-1">
      <table class="table">
        <tr><th>Name</th><td>{{ fullname | capitalize }}</td></tr>
        <tr><th>Age</th><td>{{ user.dob }}</td></tr>
        <tr><th>Email</th><td>{{ user.email }}</td></tr>
        <tr><th>Phone</th><td>{{ user.cell }}</td></tr>
        <tr><th>Address</th><td>{{ user.location.street | capitalize }}<br/>
          {{ user.location.postcode }} {{ user.location.city | capitalize }}</td></tr>
        <tr><th>Registered on</th><td>{{ user.registered }}</td></tr>
      </table>
      <router-link to="/users" class="button is-outlined is-medium">
        <span class="icon is-small"><i class="fa fa-chevron-left"></i></span> Users
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { capitalize } from '../helpers'

export default {
  name: 'PersonTab',
  computed: {
    ...mapGetters({
      user: 'singleUser'
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
.icon {
  margin-right: 10px !important;
}
.button.is-fullwidth {
  margin: 10px auto;
  justify-content: flex-start;
}
</style>
