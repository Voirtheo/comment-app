const express = require('express')
const app = express()
app.use((request, response, next)=>{
    console.log('有人请求了5001端口')
    next()
})
app.get('/car',(request, response) => {
    const car = [
        {id:'001',name:'t456'},
        {id:'002',name:'345'},
        {id:'003',name:'123123'}
    ]
    response.send(car)
})

app.listen(5001,()=>{
    console.log("5001端口监听中...")
})