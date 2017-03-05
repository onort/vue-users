<template>
<div>
  <div class="columns container">
    <div class="column is-2 is-offset-1 is-8-mobile is-offset-2-mobile">
      <figure class="1by1 has-text-centered"><img :src="user.picture" alt=""></figure>
      <button class="button is-outlined is-fullwidth" @click="modalOpen = true">
        <span class="icon is-small"><i class="fa fa-sticky-note"></i></span>Add Note
      </button>
      <button class="button is-outlined is-fullwidth" disabled>
        <span class="icon is-small"><i class="fa fa-comment"></i></span>Message
      </button>
    </div>
    <div class="column is-8 is-offset-1 is-10-mobile is-offset-1-mobile">
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
  <transition name="fade">
    <note-modal v-if="modalOpen" 
      @closeModal="handleCloseModal" 
      @addNote="handleAddNote" >
    </note-modal>
  </transition>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { capitalize, formatDate, calculateAge } from '../../helpers'
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
      user: 'singleContact'
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
      if (note.length) this.$store.dispatch({ type: 'addNoteToContact', note })
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.33s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
@media (max-width: 768px) {
  .button.is-fullwidth {
    justify-content: center
  }
}
</style>
