<template>
	<div class="category">
		<h1>当前求和为：{{$store.state.sum}}</h1>
		<h2>十倍的和：{{$store.getters.bigsum}}</h2>
		<h3>{{xuexiao}}</h3>
		<h3>下方总人数是：{{persons.length}}</h3>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="jia(n)">+</button>
		<button @click="jian(n)">-</button>
		<button @click="odd(n)">当前求和为奇数在加</button>
		<button @click="wait(n)">等一等在加</button>
	</div>

</template>


<script>
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from 'vuex';
	
	export default {
		name: "category",
		data() {
			return {
				n: 1,
			}
		},
		methods: {
			// 配置一个函数 通过调用$store.dispatch走到actions里的jia函数
			// jia() {
			// 	//直接.commit调动mutations里的方法
			// 	this.$store.commit("jia",this.n)
			// },
			// jian() {
			// 	this.$store.commit("jian", this.n)
			// },


			// 借助mapMutations生成对应的方法 方法中会调用commit联系Mutations
			...mapMutations({
				jia: "JIA",
				jian: "JIAN",
				
			}),
	
			// odd() {
			// 	this.$store.dispatch("jiaodd", this.n)
			// },
			// wait() {
			// 	this.$store.dispatch("jiawait", this.n)
			// }
			...mapActions({
				odd: "jiaodd",
				wait: "jiawait"
			}),
			
		},
		computed: {
			// 借助mapstate生成计算属性 从stat里取数据
			...mapState({
				xuexiao: "school",
				persons:"persons"
			})
		},
		mounted() {
			// console.log(this)
		}
	}
</script>

<style>
	button {
		margin-left: 20px;
	}
</style>
