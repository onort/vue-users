<template>
  <div>
    <div class="tabs is-centered">
      <ul>
        <li class="is-active"><a>Personal</a></li>
        <li><a>Contact</a></li>
        <li><a>Entries</a></li>
      </ul>
    </div>
     <table class="table">
      <tr><th>Name</th><td>{{ user.name.first }}</td></tr>
      <tr><th>Age</th><td>{{ user.dob }}</td></tr>
      <tr><th>Email</th><td>{{ user.email }}</td></tr>
      <tr><th>Phone</th><td>{{ user.cell }}</td></tr>
      <tr><th>Address</th><td>{{ user.location.street }}<br/>
        {{ user.location.postcode }} {{user.location.city}}</td></tr>
      <tr><th>Registered on</th><td>{{ user.registered }}</td></tr>
    </table>
    <router-link to="/users" class="button is-outlined is-medium">Users</router-link>
  </div>
</template>

<script>
export default {
  props: [ 'user' ]
}
</script>

<style>

</style>
