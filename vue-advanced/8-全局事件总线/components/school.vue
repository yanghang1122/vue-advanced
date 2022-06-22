<template>
	<div class="school">
		
		<h1>姓名：{{name}}</h1>
		<h1>年龄：{{sex}}</h1>
		<button @click="sendName">传值</button>
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
			sendName(){
				// 点击按钮找到$bus 通过$emit触发$bus上的hello事件 传一个666
				this.$bus.$emit("hello",this.name)
			}
		}
		
	}
</script>

<style>
	
	
</style>