<template>
		<div class="category">
			<h3>{{title}}</h3>
			<!-- 默认插槽 把标签体里的内容放在 slot里--> 
			<slot name="test1"></slot>	
			<slot name="test2"></slot>	
		</div>

</template>


<script>
	export default {
		name: "category",
		props:["title","list"]
		


	}
</script>

<style scoped>
	.category{
		width: 200px;
		background-color: orange;
	}
	.category h3{
		text-align: center;
	}
	.category img{
		width: 100%;
	}
</style>
