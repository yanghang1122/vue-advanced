<template>
	<div class="root">
		<h1>{{msg}}</h1>
	</div>
</template>
、

<script>
	// 默认暴露  也可以删除中转变量和Vue.extend 直接暴露组件的配置对象
	// export default = Vue.extend({
	export default {
		//定义组件的名字
		name:"school",
		data() {
			return {
				msg: "school",
			}
		}
	}
</script>

<style>
	.root h1{
		color: red;
	}
</style>
