<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
				<!-- 使用组件 -->
				<MyHeader :addTodo="addTodo"></MyHeader>
				<MyList :todos='todos' :checkTodo='checkTodo' :deleteTodo='deleteTodo'></MyList>
				<MyFooter :todos='todos' :checkAllTodo="checkAllTodo" :clearAllTodo='clearAllTodo'></MyFooter>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import MyHeader from './components/MyHeader.vue'
	import MyList from './components/MyList.vue'
	import MyFooter from './components/MyFooter.vue'

	export default {
		name: "App",
		components: {
			// 注册组件
			MyHeader: MyHeader,
			MyList: MyList,
			MyFooter: MyFooter
		},
		data(){
			return{
				//一开始数据去locastorage里面取
				todos:JSON.parse(localStorage.getItem('todos')) || [],
			}
		},
		watch:{
			// 深度监视todos的变化
			todos:{
				deep: true,
				handler(value){
					localStorage.setItem('todos',JSON.stringify(value))
				}
				
			}
		},
		methods:{
			//向header传递一个函数 第一个参数就是接受过来的子组件传过来的参数  向list头部添加一个元素
			addTodo(todoObj){
				// 向list第一位添加一个元素
				this.todos.unshift(todoObj)
			},
			// 取反checkbox 拿到子组件传过来点击元素的id 跟所有id对比 如果能对应上 就把取过来的元素checked取反
			checkTodo(id){
				// 遍历todos 
				this.todos.forEach((todo) =>{
					if(todo.id === id){
						todo.done = !todo.done
					}
				})
			},
			// 删除todo 拿到子组件传过来的id 筛选todos 返回的是跟子组件传过来的id不一样的todo 然后在重新赋值给todos
			deleteTodo(id){
				this.todos = this.todos.filter((todo)=>{
					return todo.id !== id
				})
			},
			// 获取子组件传过来的状态 true或者false 然后遍历所有todo把所有todo的状态都改成子组件传过来的状态
			checkAllTodo(done){
				this.todos.forEach((todo)=>{
					todo.done = done
				})
			},
			// 删除所有被选中的checkbox 遍历所有todo 返回所有todo.done为false的元素 并重新赋值给todos
			clearAllTodo(){
				this.todos = this.todos.filter((todo)=>{
					return !todo.done
				})
			}
			
		}


	}
</script>

<style>
	/*base*/
	body {
		background: #fff;
	}

	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}

	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}

	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}

	.btn:focus {
		outline: none;
	}

	.todo-container {
		width: 600px;
		margin: 0 auto;
	}

	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}


</style>
