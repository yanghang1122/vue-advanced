<template>
	<div class="todo-footer">
		<label>
			<input type="checkbox" :checked="isAll" @click="checkAll" />
		</label>
		<span>
			<span>已完成{{doneTotal}}</span> / 全部{{todos.length}}
		</span>
		<button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
	</div>
</template>

<script>
	export default {
		name: 'MyFooter',
		props:["todos",'checkAllTodo','clearAllTodo'],
		computed:{
			// 获取当前所有checkbox被选中的数量 放在页面上 就是已完成的数量
			doneTotal(){
				const x = this.todos.reduce((pre,todo)=>{
					 return pre + (todo.done ? 1:0)
				},0)
				return x
			},
			// 如果checkbox被选中的数量跟todos的数量一样 并且todos的数量大于0的时候 就把allcheckbox选中
			isAll(){
				return this.doneTotal == this.todos.length && this.todos.length > 0
			}
		},
		methods:{
			// 获取allcheckbox的状态 调用父级组件传过来的函数 并把状态传递给函数
			checkAll(e){
				this.checkAllTodo(e.target.checked)
			},
			// 点击调用父组件传过来的函数
			clearAll(){
				this.clearAllTodo()
			}
		}
	}
</script>

<style scoped>
	/*footer*/
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style>
