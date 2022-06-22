<template>
	<div class="container">
		<search></search>
		<list></list>
	</div>
</template>

<script>
	// 引入css 
	// import './assets/bootstrap.css'


	import search from './components/search.vue'
	import list from './components/list.vue'
	export default {
		name: "App",
		components: {
			search,
			list
		}
	}
</script>

<style scoped>



</style>
