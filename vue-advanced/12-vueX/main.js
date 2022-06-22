import Vue from 'vue'
import App from './app.vue'



// 引入store
import store from './store/index.js'

Vue.config.productionTip = false



const vm =  new Vue({
	el:"#app",
	render: h => h(App),
	store:store,
	beforeCreate(){
		Vue.prototype.$bus = this
	}
	
})