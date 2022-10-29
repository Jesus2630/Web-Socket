const socketControllers = (socket) =>{

    console.log('Cliente conectado')

    //Desconexión del cliente
    socket.on('disconnect', ()=>{
        console.log('Cliente desconectado', socket.id )
    })

    socket.on('enviar-mensaje', (payload)=>{

        socket.broadcast.emit('mostrar-mensaje', payload)
    })

}


module.exports = {
    socketControllers
}