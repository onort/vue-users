<template>
	<div>
		<section class="hero is-fullheight is-dark is-bold">
			<div class="hero-body">
				<div class="container">
				<h1 class="title is-1">
					{{ title }}
				</h1>
				<h3 class="subtitle is-3">
					{{ subtitle}}
				</h3>
				<router-link to="/users" class="button" >Click For Users List View</router-link>
				</div>
			</div>
		</section>
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
.button {
	margin-top: 20px;
}
.button:hover {
	background: #e2e2e2;
}
.hero.is-dark a {
	color: #363636;
}
.container {
	margin-left: 8.33333%;
}
</style>
