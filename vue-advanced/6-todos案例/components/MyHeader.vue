<template>
	<div class="todo-header">
		<input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" v-model="title" />
	</div>
</template>

<script>
	import {nanoid} from "nanoid"	
	
	export default {
		name:'MyHeater',
		props:["addTodo"],
		data(){
			return{
				// 用来装输入框里面输入的内容
				title:""
			}
		},
		methods:{
			add(event){
				if(!this.title){
					return
				}
				//获取输入框的内容
				// console.log(event.target.value)
				
				//模拟一条数据 调用父级组件传过来的函数 然后把模拟的数据传进去
				const todoObj = {id:nanoid(),title:this.title,done:false}
				
				this.addTodo(todoObj)
				this.title = ''
			}
		},
		
	}
</script> 

<style scoped>
	/*header*/
	.todo-header input {
		width: 560px;
		height: 28px;
		font-size: 14px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 7px;
	}
	
	.todo-header input:focus {
		outline: none;
		border-color: rgba(82, 168, 236, 0.8);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>
