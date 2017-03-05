<template>
  <div :class="[ index % 2 ? 
      'column is-5-tablet is-10-mobile is-offset-1-mobile' : 
      'column is-5-tablet is-offset-1-tablet is-10-mobile is-offset-1-mobile' ]">
    <article class="media list-item">
      <figure class="media-left">
        <p class="image is-96x96"><img :src="user.picture" :alt="user.name.first"></p>
      </figure>
      <div class="media-content ">
        <div class="content">
          <h2 class="fullname">{{ fullname | capitalize }}</h2>
          <h4 class="location">{{ user.location.city | capitalize }}</h4>
          <div class="item-actions has-text-right">
            <router-link :to="profileLink" class="button is-outlined">
              <span class="icon is-small"><i class="fa fa-user-circle"></i></span> View Profile
            </router-link>
            <a class="button is-outlined is-disabled">
              <span class="icon is-small"><i class="fa fa-remove"></i></span> Remove
            </a>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { capitalize } from '../../helpers'

export default{
  name: 'UserListItem',
  props: [ 'user', 'index' ],
  computed: {
    fullname () {
      const { first, last } = this.user.name
      return `${first} ${last}`
    },
    profileLink () {
      return `/user/${this.user.username}`
    }
  },
  filters: {
    capitalize
  }
}
</script>

<style scoped>
.content {
  padding-top: 10px;
}
.list-item {
  margin: 20px;
  padding: 20px;
  border: 1px solid #b9b9b9;
  border-radius: 5px;
}
.image img {
  border: 1px solid #dbdbdb;
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
.fa-remove {
  color: #d82424;
}
@media screen and (max-width: 1150px) {
  .item-actions {
    text-align: center;
  }
  .item-actions .button {
    width: 100%;
    margin-bottom: .5rem;
  }
}
@media screen and (max-width: 768px) {
  .item-actions {
    text-align: right;
  }
  .item-actions .button {
    width: auto;
  }
}
</style>
