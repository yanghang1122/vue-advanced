<template>
	<div>
		<h2>人员列表</h2>
		<h3>上方组件求和为{{sum}}</h3>
		<input type="text" placeholder="新增人员" v-model="name"/>
		<button @click="add">点击新增人员</button>
		<ul>
			<li v-for="p in personlist" :key="p.id">{{p.name}}</li>
		</ul>
	</div>
	
</template>

<script>
	import {mapState,mapMutations} from "vuex"
	import {nanoid} from "nanoid"
	export default{
		name:"person",
		data(){
			return{
				name:""
			}
		},
		computed:{
			personlist(){
				return this.$store.state.persons
			},
			sum(){
				return this.$store.state.sum
			}
			
			// ...mapState({personlist:"persons"})
		},
		methods:{
			add(){
				const personobj = {id:nanoid(),name:this.name}
				this.name = ''
				this.$store.commit("ADD", personobj)
				
			}
		}
	}
</script>

<style>
</style>
