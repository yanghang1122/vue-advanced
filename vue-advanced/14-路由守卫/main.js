import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './app.vue'
import VueRouter from 'vue-router'
import router from './router'




Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)
const vm =  new Vue({
	el:"#app",
	render: h => h(App),
	router:router
	
})