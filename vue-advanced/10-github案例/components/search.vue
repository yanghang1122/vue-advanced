<template>
	<section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input v-model="keyword" type="text" placeholder="enter the name you search" />&nbsp;
			<button @click="searchusers">Search</button>
		</div>
	</section>

</template>


<script>
	import axios from 'axios'
	export default {
		name: "search",
		data() {
			return {
				keyword: ''
			}
		},
		methods: {
			searchusers() {
				//请求前更新list
				this.$bus.$emit('updatalistdata', {isfirst:false,isloading:true,errmsg:'',users:[]})


				axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
					response => {
						//请求中
						this.$bus.$emit('updatalistdata', {isloading:false,errmsg:'',users:response.data.items})
					},
					error => {
						console.log("失败")
							this.$bus.$emit('updatalistdata', {isloading:false,errmsg:error.message,users:[]})
					}

				)
			}
		}
	}
</script>

<style scoped>


</style>
