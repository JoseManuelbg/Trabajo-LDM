

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

// Anuncio descuento

document.getElementById('anyadir-carrito').addEventListener("click", function() {
    console.log("Entra");
    swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
        timer: 3000,
      });
});











var precio = 123;

function setPrecioAparador1(){
    document.getElementById('precio').innerHTML = precio;
}

// Mostrar imágenes en grande (Modal box)

function imageScaleUp() {
    var images = document.querySelectorAll('#imagenes-secundarias img, #foto-principal');
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

// Fin mostrar imágenes en grande