<template>
	<div class="school">
		
		<h1>姓名：{{name}}</h1>
		<h1>年龄：{{sex}}</h1>
		<button @click="btn">点击触发app的函数</button>
		<button @click="unbtn">解绑事件</button>
	</div>
	
</template>


<script>

	
	
	export default{
		name:"student",
		data(){
			return{
				name:'student-name',
				sex:"男",
				x:1
			}
		},
		methods:{
			btn(){
				// 触发自定义事件
				this.$emit("shijian",this.name)
			},
			unbtn(){
				//解绑自定义事件
				this.$off('shijian')
				// 解绑多个自定义事件
				// this.$off(['shijian','aaa'])
			}
		}
	
		
		
	}
</script>

<style>
	
	
</style>