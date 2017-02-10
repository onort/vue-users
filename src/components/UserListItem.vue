<template>
  <article class="media list-item">
    <figure class="media-left">
      <p class="image is-96x96"><img :src="user.picture.large" :alt="user.name.first"></p>
    </figure>
    <div class="media-content">
      <div class="content">
        <h2 class="fullname">{{ fullname }}</h2>
        <h4 class="location">{{ user.location.city | capitilaze }}</h4>
        <router-link :to="profileLink">
          <button class="button">View Profile</button>
        </router-link>
      </div>
    </div>
    <div class="media-right">
      <button class="delete"></button>
    </div>
  </article>
</template>

<script>
export default{
  name: 'UserListItem',
  props: [ 'user' ],
  computed: {
    fullname () {
      const { first, last } = this.user.name
      return `${first.charAt(0).toUpperCase() + first.slice(1)} ${last.charAt(0).toUpperCase() + last.slice(1)}`
    },
    profileLink () {
      return `/user/${this.user.login.username}`
    }
  },
  filters: {
    capitilaze (city) {
      return city.charAt(0).toUpperCase() + city.slice(1)
    }
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

// .list-item:hover {
//   background: #e2e2e2
// }
</style>
