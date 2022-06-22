<template>
	<div>
		<!-- 
			ref属性
			被用来给元素或子组件注册引用信息 （id替代者）
			应用在html标签上获取的是真实dom元素 应用在组件标签上是组件实例对象
			使用方式
			<h1 ref="tit"></h1>
			获取
			this.$refs.tit  
		-->
		<h1 v-text="msg" ref="tit"></h1>
		<school ref="tite"></school>
		<button @click="fun">点击</button>
	</div>
</template>

<script>
	import school from './components/school.vue'
	
	export default{
		name:"App",
		data(){
			return{
				msg:"哈哈"
			}
		},
		components:{
			school:school
		},
		methods:{
			fun(){
				//拿到真实dom
				console.log(this.$refs.tit)
				//拿到组件实例对象
				console.log(this.$refs.tite)
			}
		}
	}
	
	
</script>

<style>
	
	
</style>