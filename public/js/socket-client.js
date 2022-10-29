//Referencias
const btnonline  = document.querySelector('#btnonline');
const btnoffline = document.querySelector('#btnoffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btn-enviar');

//Socket del cliente
const socket = io();

socket.on('connect', ()=>{
    /* console.log('Conectado'); */

    btnoffline.style.display = "none"
    btnonline.style.display = ""
})

socket.on('disconnect', ()=>{
    /* console.log('Desconectado del servidor') */

    btnoffline.style.display = ""
    btnonline.style.display = "none"
})

socket.on('mostrar-mensaje', (payload)=>{
    console.log(payload)
})

btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: 'Papacito',
        fecha: new Date().getTime()
    }
    
    socket.emit('enviar-mensaje', payload);
})