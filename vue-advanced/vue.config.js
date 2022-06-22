module.exports = {
  pages: {
    index: {
      // 切换入口
      entry: 'src/main.js',
    },
  },
  devServer:{
	  proxy: 'http://localhost:5000'
  },
  //关闭语法检查
  lintOnSave:false
}