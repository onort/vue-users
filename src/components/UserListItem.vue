<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64"><img :src="user.picture.medium" :alt="user.name.first"></p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>{{ fullname }}</p>
        <p>{{ user.location.city }}</p>
        <router-link :to="user.login.username">
          <button class="button is-dark">View Profile</button>
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
      return `${first} ${last}`
    }
  }
}
</script>

<style>

</style>
