var path = require('path')
// 获取根目录
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  // 定义入口文件
  entry: {
    app: './src/main.js'
  },
  resolve: {
    // 自动解析拓展，可以在引用文件的时候不用写后缀
    extensions: ['.js', '.vue', '.json'],
    // 配置别名，避免在结构嵌套过深的情况下出现../../../../xxx这种写法
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  }
}