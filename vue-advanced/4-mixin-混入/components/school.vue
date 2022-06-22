<template>
	<div class="school">
		
		<h1 @click="btn">姓名：{{name}}</h1>
		<h1>年龄：{{sex}}</h1>
		
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
				alert(this.name)
			}
		}
		
	}
</script>

<style>
	
	
</style>