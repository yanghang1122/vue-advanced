
// 分别暴露
export const mixin = {
	methods:{
		btn(){
			alert(this.name)
		}
	},
	mounted(){
		console.log("阿")
	}
}

export const mixin2 = {
	//如果混入的是一个重复的挂载或函数 就都会执行
	mounted(){
		console.log("阿")
	},
	//如果混入的是一个重复的数据 优先用组件里的
	data(){
		return{
			x:100,
			// 如果混入是没有的数据就会进行整合
			y:200
		}
	}
}