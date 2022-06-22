<template>
	<div>
		
		<!-- 向组件传递参数 -->
		<h1>学生的姓名是{{name}}</h1>
		<school></school>
		<!-- 父组件给子组件绑定一个自定义事件 -->
		<student @shijian="demo"></student>
		
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
		methods:{
			demo(name){
				console.log("demo被调用" + name)
			}
		}
		
	}
	
	
</script>

<style>
	
	
</style>