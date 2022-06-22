import VueRouter from 'vue-router'
import About from '../pages/about.vue'
import Home from '../pages/home.vue'
import news from '../pages/news.vue'
import meesage from '../pages/meesage.vue'


//创建并暴露路由
 const router = new VueRouter({
	 mode:"history",
	routes: [
		{	
			name:"guanyu",
			path: "/about",
			component: About,
			meta:{
				isauth:true,
				title:"关于"
			}
		},
		{
			name:"shouye",
			path: "/home",
			component: Home,
			meta:{
				isauth:true,
				title:"首页"
			},
			children:[
				{
					path: "news",
					component: news,
					meta:{
						isauth:true,
						title:"新闻"
					}
				},
				{
					path: "meesage",
					component: meesage,
					meta:{
						isauth:true,
						title:"信息"
					}
				},
			]
		},
	]
 
})

// 独享路由守卫 是写在路径配置里的

 
//全局前置路由守卫 每次路由切换和初始化的时候被调用
router.beforeEach((to,from,next)=>{
	if(to.meta.isauth){
		if(localStorage.getItem("yang") == "hang"){
			next();
		}else{
			alert("名不对")
		}
	}else{
		next();
	}	
})


//全局后置路由守卫
router.afterEach((to,from)=>{
	document.title = to.meta.title || "yang"
})
export default router