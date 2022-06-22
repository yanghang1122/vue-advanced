import Vue from 'vue'
import App from './app.vue'

Vue.config.productionTip = false




const vm =  new Vue({
	el:"#app",
	render: h => h(App),
	beforeCreate(){
		// 安装全局事件总线 给vue的原型上添加一个$bus $bus就是自己vm
		Vue.prototype.$bus = this
	},
	// mounted(){
	// 	console.log(this)
	// }
})