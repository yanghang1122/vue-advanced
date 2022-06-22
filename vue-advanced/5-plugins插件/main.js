import Vue from 'vue'
import App from './app.vue'
//引入插件
import plugins from './plugins.js'

Vue.config.productionTip = false
//使用插件
Vue.use(plugins)


new Vue({
	el:"#app",
	render: h => h(App)
})