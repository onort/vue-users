<template>
<div>
  <div class="columns container">
    <div class="column is-2 is-offset-1">
      <figure class="1by1 has-text-centered"><img :src="user.picture.large" alt=""></figure>
      <button class="button is-outlined is-fullwidth" @click="modalOpen = true">
        <span class="icon is-small"><i class="fa fa-sticky-note"></i></span>Add Note
      </button>
      <button class="button is-outlined is-fullwidth" disabled>
        <span class="icon is-small"><i class="fa fa-comment"></i></span>Message
      </button>
    </div>
    <div class="column is-8 is-offset-1">
      <table class="table">
        <tr><th>Name</th><td>{{ fullname | capitalize }}</td></tr>
        <tr><th>Age</th><td>{{ age }}</td></tr>
        <tr><th>Date of Birth</th><td>{{ user.dob | formatDate }}</td></tr>
        <tr><th>Email</th><td>{{ user.email }}</td></tr>
        <tr><th>Phone</th><td>{{ user.cell }}</td></tr>
        <tr><th>Address</th><td>{{ user.location.street | capitalize }}<br/>
          {{ user.location.postcode }} {{ user.location.city | capitalize }}</td></tr>
        <tr><th>Registered on</th><td>{{ user.registered | formatDate }}</td></tr>
      </table>
      <router-link to="/users" class="button is-outlined is-medium">
        <span class="icon is-small"><i class="fa fa-chevron-left"></i></span> Users
      </router-link>
    </div>
  </div>
  <note-modal v-if="modalOpen" @closeModal="handleCloseModal" @addNote="handleAddNote"></note-modal>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { capitalize, formatDate, calculateAge } from '../helpers'
import NoteModal from './NoteModal'

export default {
  name: 'PersonTab',
  components: { NoteModal },
  data () {
    return {
      modalOpen: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'singleUser'
    }),
    fullname () {
      const { first, last } = this.user.name
      return `${first} ${last}`
    },
    age () {
      return calculateAge(new Date(this.user.dob))
    }
  },
  filters: {
    capitalize,
    formatDate
  },
  methods: {
    handleCloseModal () {
      this.modalOpen = false
    },
    handleAddNote (note) {
      this.$store.dispatch({ type: 'addNoteToUser', note })
      this.modalOpen = false
    }
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
