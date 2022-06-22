<template>
	<div>
		
		<!-- 向组件传递参数 -->
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
		
		
	}
	
	
</script>

<style>
	
	
</style>