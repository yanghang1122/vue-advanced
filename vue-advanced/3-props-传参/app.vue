<template>
	<div>
		
		<!-- 向组件传递参数 -->
		<school name="张三" :age="18"></school>
		
		
	</div>
</template>

<script>
	import school from './components/school.vue'
	
	export default{
		name:"App",
		
		components:{
			school:school
		},
		
	}
	
	
</script>

<style>
	
	
</style>