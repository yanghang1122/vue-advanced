<template>
	<div class="school">
		
		<h1>姓名：{{name}}</h1>
		<h1>年龄：{{sex}}</h1>
		<button @click="btn">点我测试方法</button>
	</div>
	
</template>


<script>
	
	
	
	export default{
		name:"school",
		data(){
			return{
				name:'school-name',
				sex:"男"
			}
		},
		methods:{
			btn(){
				this.demo()
			}
		}
		
		
	}
</script>

<style>
	
	
</style>