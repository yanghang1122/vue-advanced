import VueRouter from 'vue-router'
import About from '../pages/about.vue'
import Home from '../pages/home.vue'
import news from '../pages/news.vue'
import meesage from '../pages/meesage.vue'


//创建并暴露路由
export default new VueRouter({
	routes: [
		{
			path: "/about",
			component: About
		},
		{
			path: "/home",
			component: Home,
			children:[
				{
					path: "news",
					component: news
				},
				{
					path: "meesage",
					component: meesage
				},
			]
		},
		

	]

})
