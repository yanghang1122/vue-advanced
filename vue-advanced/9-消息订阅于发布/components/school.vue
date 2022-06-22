<template>
	<div class="school">
		
		<h1>姓名：{{name}}</h1>
		<h1>年龄：{{sex}}</h1>
		<button @click="sendName">传值</button>
	</div>
	
</template>


<script>
	
	import pubsub from 'pubsub-js'
	
	export default{
		name:"school",
		data(){
			return{
				name:'school-name',
				sex:"男"
			}
		},
		methods:{
			sendName(){
				pubsub.publish('hello',666)
			}
		}
		
	}
</script>

<style scoped>
	.school{
		background-color: #008000;
	}
	
</style>