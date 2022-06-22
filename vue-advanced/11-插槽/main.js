import Vue from 'vue'
import App from './app.vue'

Vue.config.productionTip = false




const vm =  new Vue({
	el:"#app",
	render: h => h(App),
	beforeCreate(){
		Vue.prototype.$bus = this
	}
	
})