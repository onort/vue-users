<template>
	<div>
		<section class="hero is-medium is-primary is-bold">
			<div class="hero-body">
				<div class="container">
				<h1 class="title is-1">
					{{ title }}
				</h1>
				<h3 class="subtitle is-3">
					{{ subtitle}}
				</h2>
				</div>
			</div>
		</section>
		<div class="container">
			<router-link to="/users">Click For Users List View</router-link>
		</div>
	</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: 'VueJS + Node',
      subtitle: 'User Data'
    }
  }
}
</script>

<style scoped>

</style>
