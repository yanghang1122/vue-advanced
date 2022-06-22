<template>
	<div class="school">
		<h1>{{msg}}</h1>
		<h1>姓名：{{name}}</h1>
		<!-- 让接收过来的参数默认加1 -->
		<h1>年龄：{{myage+1}}</h1>
		<!-- 点击让年龄加1 -->
		<button @click="btn">修改年龄</button>
	</div>
	
</template>


<script>
	// props让组件接收外部传进来的数据
	// 直接在组件标签里写属性
	// props是只读的 如非要修改就复制一份props的内容到data中 然后去修改data里的值
	
	
	export default{
		name:"school",
		data(){
			return{
				msg:"school组件",
				//复制一份传过来的age参数给myage 然后点击给myage加1 插值语法里就写myage
				myage:this.age
			}
		},
		// 简单接收
		props:['name','age'],
		methods:{
			btn(){
				this.myage++
			}
		}
		
		//限制接收类型
		// props:{
		// 	name:String,
		// 	age:Number
		// }
		
		//完整类型 类型限制+必要性+默认值的指定
		/*props:{
			name:{
				type:String, //类型
				required:true//是否必传
			},
			age:{
				type:Number,
				default:99 //如果不传就走default
			},
		}*/
	}
</script>

<style>
	
	
</style>