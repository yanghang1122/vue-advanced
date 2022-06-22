export default {
	//定义插件
	install(Vue){
		Vue.prototype.demo = ()=>{
			alert("原型")
		}
	}
}