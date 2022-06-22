<template>
	<div>
		
		<h1>app name:{{name}}</h1>
		<school></school>
		<student></student>
	</div>
</template>

<script>
	import school from './components/school.vue'
	import student from './components/student.vue'
	export default{
		name:"App",
		
		components:{
			school:school,
			student:student
		},
		data(){
			return{
				name:"app"
			}
		}
		
		
	}
	
	
</script>

<style>
	
	
</style>