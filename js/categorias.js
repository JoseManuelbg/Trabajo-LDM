// Corazón

document.getElementById('boton-corazon').addEventListener('click', function() {
    document.getElementById('boton-corazon').style.display = 'none';
    document.getElementById('boton-corazon-relleno').style.display = 'block';
});

document.getElementById('boton-corazon-relleno').addEventListener('click', function() {
    document.getElementById('boton-corazon').style.display = 'block';
    document.getElementById('boton-corazon-relleno').style.display = 'none';
});

// Fin corazón