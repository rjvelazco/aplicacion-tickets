let socket = io();

var searchParams = new URLSearchParams(window.location.search);
var label = $('small');

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
};

var escritorio = searchParams.get('escritorio');

$('h1').text('Escritorio ' + escritorio);


$('button').on('click', function() {

    socket.emit('atenderTicket', { escritorio }, function(res) {
        if (!res.numero) {
            label.text(res.err.message);
            alert(res.err.message)
            return;
        }
        label.text(res.numero);
    });

})