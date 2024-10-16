const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index')
const app = express()

app.use(bodyParser.json())
app.use('/api', indexRouter)

const mongoURI = `mongodb://localhost:27017/todo-demo`

mongoose
    .connect(mongoURI)
    .then(()=>{
        console.log('몽구스 연결')
    }).catch((err)=> {
        console.log('몽구스 연결실패', err)
    })

app.listen(5000, ()=> {
    console.log('server on 5000')
})
