<template>
	<div class="container">

		<category>
		
		</category>
		<hr />
		<hr />
		<hr />
		<person></person>

	
	</div>
</template>

<script>
	import category from './components/category.vue'
	import person from './components/person.vue'
	export default {
		name: "App",
		components: {
			category,
			person
		},
		
	}
</script>

<style>

</style>
