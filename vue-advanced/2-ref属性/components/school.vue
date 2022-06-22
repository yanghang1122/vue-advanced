<template>
	<div class="school">
		<h1>{{msg}}</h1>
	</div>
	
</template>


<script>
	export default{
		name:"school",
		data(){
			return{
				msg:"school组件"
			}
		}
	}
</script>

<style>
	.school h1{
		color: #FF0000;
	}
	
</style>