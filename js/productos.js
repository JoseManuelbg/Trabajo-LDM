// Corazón

function cambiarCorazonAOscuro(){
    document.getElementById('boton-corazon').style.display = 'none';
    document.getElementById('boton-corazon-relleno').style.display = 'block';
}

function cambiarCorazonAClaro(){
    document.getElementById('boton-corazon').style.display = 'block';
    document.getElementById('boton-corazon-relleno').style.display = 'none';
}

var precio = 123;

function setPrecioAparador1(){
    document.getElementById('precio').innerHTML = precio;
}
