<template>
	<div class="school">
		
		<h1 @click="btn">姓名：{{name}}</h1>
		<h1>年龄：{{sex}}</h1>
		
	</div>
	
</template>


<script>
	// 混合可以把多个组件共用的配置提取到成一个混入对象
	// 两种方式一个局部混入 一个全局混入
	
	// 全局混入就在main.js里引入mixin.js ↓
	// import {mixin} from '../mixin.js'
	// Vue.mixin(mixin)
	
	// 引入分别暴露的mixin
	import {mixin,mixin2} from '../mixin.js'
	
	
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
			console.log("阿")
		},
		mixins:[mixin,mixin2]
		
		
	}
</script>

<style>
	
	
</style>