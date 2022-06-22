<template>
	<ul>
	  <li>news001</li>
	  <li>news002</li>
	  <li>news003</li>
	</ul>
</template>

<script>
	export default{
		name:"news",
		activated(){
			console.log("new被激活")
		},
		deactivated(){
			console.log("new失活了")
		},
		beforeDestroy(){
			console.log("new销毁了")
		}
	}
</script>

<style>
</style>
