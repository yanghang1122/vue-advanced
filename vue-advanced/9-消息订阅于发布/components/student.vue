<template>
	<div class="school">
		
		<h1>姓名：{{name}}</h1>
		<h1>年龄：{{sex}}</h1>
	</div>
	
</template>


<script>
	import pubsub from 'pubsub-js'
	
	
	export default{
		name:"student",
		data(){
			return{
				name:'student-name',
				sex:"男",
				x:1
			}
		},
		mounted(){
			this.pubid = pubsub.subscribe("hello",(msgname,data)=>{
				console.log(msgname,data)
			})
			
		},
		beforeDestroy(){
			pubsub.unsubscribe(this.pubid)
		}
		
	
	
		
		
	}
</script>

<style scoped>
	.school{
		background-color: aquamarine;
	}
	
</style>