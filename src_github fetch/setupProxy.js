const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        proxy('/api1',{//遇见api1前缀的请求，就会出发该代理配置
            target:'http://localhost:5000',
            changeOrigin:true,//控制服务器收到的响应头中host字段的值
            pathRewrite:{'^/api1':''}//重写请求路径
        })
    )
}