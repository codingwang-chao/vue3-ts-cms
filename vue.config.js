const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 1.配置方式一: CLI提供的属性
  outputDir: './build',
  // publicPath: './',
  devServer: {
    port: 8888,    //默认的打开端口号
    open: true,    //自动打开浏览器
    host: 'localhost', // 本地地址
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''  //这里是重写后的地址，baseUrl要换成这
        },
        changeOrigin: true  //开启跨域
      }
    }
  },
  configureWebpack: {
    name: '后台管理系统',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
}
