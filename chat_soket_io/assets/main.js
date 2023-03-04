
const socket = io()

const messages = document.querySelector('.mess')
const form = document.querySelector('.form')
const input = document.querySelector('.input')
const name = document.querySelector('.name')
const btn = document.querySelector('btn')

const userName = prompt('Ваше имя:')
console.log(userName)
name.textContent = `${userName}`


form.addEventListener('submit', (e)=>{
    e.preventDefault()

    if(input.value){
        //emit отправляет данные на сервер
        socket.emit('chat message', {
            message: input.value, 
            name:userName
        })
        input.value=''
    }
    
})

socket.on('chat message', (data)=>{
    console.log(data)
    const item = document.createElement('li')
    item.textContent=`${data.name}:  ${data.message}`

    messages.append(item)
})