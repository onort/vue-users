<template>
  <div v-if="!isLoading">
    <div class="tabs is-centered">
      <ul>
        <li v-for="tab in tabs" :class="{ 'is-active': tab == activeTab }">
          <a @click="setTab(tab)">{{ tab | capitalize }}</a>
        </li>
      </ul>
    </div>
    <component :is="activeTab"></component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { capitalize } from '../../helpers'
import Person from './PersonTab'
import Notes from './NotesTab'

export default {
  props: [ 'user' ],
  components: { Person, Notes },
  data () {
    return {
      tabs: [ 'person', 'notes' ],
      activeTab: 'person'
    }
  },
  methods: {
    setTab (tab) {
      this.activeTab = tab
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading'
    })
  },
  filters: {
    capitalize
  }
}
</script>

<style scoped>
.tabs li.is-active a {
  color: hsl(0, 0%, 20%);
  border-bottom-color: hsl(0, 0%, 20%);
}

.tabs li a {
  color: #7a7a7a;
}
</style>
