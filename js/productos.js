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
// Modal box

function imageScaleUp() {
    var images = document.querySelectorAll('#imagenes-secundarias img');
    images.forEach(image => {
        image.addEventListener('click', function() {
            var popupImage = document.querySelector('.popup-image');
            var popupImg = popupImage.querySelector('img');
            popupImg.src = image.src;
            popupImage.style.display = 'block';
        });
    });
}
// Llama a la función imageScaleUp() después de que el DOM haya cargado completamente
document.addEventListener('DOMContentLoaded', function() {
    imageScaleUp();
     // Cierra la ventana modal cuando se hace clic en la "X"
     document.querySelector('.popup-image span').addEventListener('click', function() {
        document.querySelector('.popup-image').style.display = 'none';
    });
});