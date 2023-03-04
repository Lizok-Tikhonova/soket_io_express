// подключение express
const express = require('express')
// создаем объект приложения
const app = express()

//соединяем сокет и express во едино
const http = require('http').createServer(app)
const io = require('socket.io')
//вызываем функцию с протоколом
(http)


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/insex.html')
    console.log(res)
})

// по умолчанию сделали что мы находимя в папке assets
app.use(express.static(__dirname + '/assets'))

io.on('connection', (socket)=>{
    socket.on('chat message', (data)=>{
        io.emit('chat message', {
            message:data.message, 
            name: data.name
        })
    })
})


http.listen(3000, ()=>{
    console.log('start')
})

