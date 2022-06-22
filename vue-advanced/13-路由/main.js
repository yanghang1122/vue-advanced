import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import router from './router'




Vue.config.productionTip = false

Vue.use(VueRouter)

const vm =  new Vue({
	el:"#app",
	render: h => h(App),
	router:router
	
})