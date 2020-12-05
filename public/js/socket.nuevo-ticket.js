// Comando para establecer la conexion
let socket = io();
let label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Usuario conectado al servidor.');
});

socket.on('disconnect', function() {
    console.log('Usuario desconectado del servidor.');
});

socket.on('estadoActual', function(data) {
    label.text(data.actual);
});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(data) {
        label.text(data.siguiente);
    });
})