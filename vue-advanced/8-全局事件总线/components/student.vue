<template>
	<div class="school">
		
		<h1>姓名：{{name}}</h1>
		<h1>年龄：{{sex}}</h1>
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
		mounted(){
			//挂载完成的时候 给bus上通过$on添加一个事件hello 接收一个参数
			this.$bus.$on("hello",(data)=>{
				console.log("我是student组件 收到了数据"+ data)
			})
		},
		//销毁hello事件
		beforeDestroy(){
			this.$bus.$off("hello")
		}
	
	
		
		
	}
</script>

<style>
	
	
</style>