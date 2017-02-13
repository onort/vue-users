<template>
  <div class="columns">
    <div class="column container is-8 is-offset-2">
      <ul class="notes">
        <li v-if="user.notes.length" v-for="note in user.notes">
          {{ note }}
        </li>
      </ul>
      <p v-if="!user.notes">No notes to display.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NotesTab',
  computed: {
    ...mapGetters({
      user: 'singleUser'
    })
  }
}
</script>

<style scoped>
.notes {
  list-style: circle;
}

.notes li {
  line-height: 2em;
}
</style>
