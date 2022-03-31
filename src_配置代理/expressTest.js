const express = require('express')
const app = express()
app.use((request, response, next)=>{
    console.log('有人请求了5000端口')
    next()
})
app.get('/student',(request, response) => {
    const student = [
        {id:'001',name:'tom'},
        {id:'002',name:'som'},
        {id:'003',name:'sdghm'}
    ]
    response.send(student)
})

app.listen(5000,()=>{
    console.log("5000端口监听中...")
})