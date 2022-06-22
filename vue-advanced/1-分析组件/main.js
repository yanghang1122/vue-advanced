//该文件是整个项目的入口文件


//引入vue
import Vue from 'vue'
//引入app组件 他是所有组件的父组件
import App from './app.vue'

//关闭vue的生产提示
Vue.config.productionTip = false

//创建vue实例对象
new Vue({
  el:"#app",
  // vue.js是完整版的vue 包含核心功能和模板解析器
  // vue.runtime.xxx.js是运行版的vue只包含核心功能,没有模板解析器
  // 因为没有模板解析器 所以不能用template配置项 
  // 只能用render函数接收到createelement去指定具体内容
 
  
  render: h => h(App),
})
// .$mount('#app')