import Vue from 'vue'

// 引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 准备actions 用于响应组件中的动作
const actions = {
	// 来到jia函数 通过commit调用mutations里的jia
	jia(context, value) {
		context.commit("JIA", value)
	},
	jian(context, value) {
		context.commit("JIAN", value)
	},
	jiaodd(context, value) {
		if (context.state.sum % 2) { 
			context.commit("JIA", value)
		}
	},
	jiawait(context, value) {
		setTimeout(() => {
			context.commit("JIA", value)
		}, 500)
	},
}



// 准备mutations 用于操作数据
const mutations = {
	// 调用mutations改变state里的数据 从新返回给页面
	JIA(state, value) {
		state.sum += value
	},
	JIAN(state, value) {
		state.sum -= value
	},
	ADD(state, value){
		state.persons.unshift(value)
	}

}

// 准备state 用于存储数据
const state = {
	sum: 0, //当前的和
	school:"哈哈",
	persons:[{id:"001",name:"张三"},{id:"002",name:"李四"}]
}

//准备getters用于state的数据进行加工
const getters = {
	bigsum(state){
		return state.sum * 10;
	}
}

// 创建并暴露store
export default new Vuex.Store({
	actions: actions,
	mutations: mutations,
	state: state,
	getters:getters

})
