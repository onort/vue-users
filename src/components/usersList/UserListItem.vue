<template>
  <article class="media list-item">
    <figure class="media-left">
      <p class="image is-96x96"><img :src="user.picture.large" :alt="user.name.first"></p>
    </figure>
    <div class="media-content">
      <div class="content">
        <h2 class="fullname">{{ fullname | capitalize }}</h2>
        <h4 class="location">{{ user.location.city | capitalize }}</h4>
        <router-link :to="profileLink" class="button is-outlined">
            <span class="icon is-small"><i class="fa fa-user-circle"></i></span> View Profile
        </router-link>
      </div>
    </div>
    <div class="media-right">
      <button class="delete"></button>
    </div>
  </article>
</template>

<script>
import { capitalize } from '../../helpers'

export default{
  name: 'UserListItem',
  props: [ 'user' ],
  computed: {
    fullname () {
      const { first, last } = this.user.name
      return `${first} ${last}`
    },
    profileLink () {
      return `/user/${this.user.login.username}`
    }
  },
  filters: {
    capitalize
  }
}
</script>

<style scoped>
.list-item {
  margin: 20px;
  padding: 20px;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
}

.list-item .fullname {
  font-size: 1.5em
}

.list-item .location {
  font-size: 1em
}

.icon {
  margin-right: 10px !important;
}

// .list-item:hover {
//   background: #e2e2e2
// }
</style>
