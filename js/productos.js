// Mostrar imágenes en grande (Modal box)

function imageScaleUp() {
    var images = document.querySelectorAll('#imagenes-secundarias img, #foto-principal');
    images.forEach(image => {
        image.addEventListener('click', function () {
            var popupImage = document.querySelector('.popup-image');
            var popupImg = popupImage.querySelector('img');
            popupImg.src = image.src;
            popupImage.style.display = 'block';
        });
    });
}
// Llama a la función imageScaleUp() después de que el DOM haya cargado completamente
document.addEventListener('DOMContentLoaded', function () {
    imageScaleUp();
    // Cierra la ventana modal cuando se hace clic en la "X"
    document.querySelector('.popup-image span').addEventListener('click', function () {
        document.querySelector('.popup-image').style.display = 'none';
    });
});

// Fin mostrar imágenes en grande


window.addEventListener("DOMContentLoaded", function () {
    // Corazón

    document.getElementById('boton-corazon').addEventListener('click', function () {
        document.getElementById('boton-corazon').style.display = 'none';
        document.getElementById('boton-corazon-relleno').style.display = 'block';
    });

    document.getElementById('boton-corazon-relleno').addEventListener('click', function () {
        document.getElementById('boton-corazon').style.display = 'block';
        document.getElementById('boton-corazon-relleno').style.display = 'none';
    });

    // Fin corazón

    // Añadido correctamente
    const anyadirCarrito = document.getElementById('anyadir-carrito');
    anyadirCarrito.addEventListener("mouseover", function() {
        if (counterN > 0) {
            anyadirCarrito.style.cursor = "pointer";
            
        } else {
            anyadirCarrito.style.cursor = "not-allowed";
        }
    })
    anyadirCarrito.addEventListener("click", function () {
        if (counterN > 0) { // Validar que el contador de unidades sea mayor que 0
            
            swal({
                title: "¡Añadido correctamente!",
                text: "El producto se añadió a la cesta correctamente",
                icon: "success",
                timer: 1500,
                buttons: false,
            });
            counterN = 0; // Restablecemos el contador a 0
            text.textContent = counterN;
            updateTotal();
        } 
    });

    // Añadido correctamente apartado comprados juntos
    const carrito = document.querySelectorAll('#carrito')
    carrito.forEach(element => {
        element.addEventListener("click", function () {
            swal({
                title: "¡Añadido correctamente!",
                text: "El producto se añadió a la cesta correctamente",
                icon: "success",
                timer: 1500,
                buttons: false,
            });
        });
    });

    // Contador de unidades

    let counterN = 0; // Inicializamos el contador en 0
    const add = document.getElementById("addProduct");
    const less = document.getElementById("removeProduct");
    let text = document.getElementById("countText");
    let totalPrice = document.getElementById("precio").textContent; // Precio del producto

    add.addEventListener("click", function () {
        counterN++;
        text.textContent = counterN;
        updateTotal();
    });

    less.addEventListener("click", function () {
        if (counterN >= 1) {
            counterN--;
            text.textContent = counterN;
            updateTotal();
        }
    });



    function updateTotal() {
        let total = (counterN * totalPrice).toFixed(2); // Multiplicamos el contador por el precio
        document.getElementById("total").textContent = total; // Actualizamos el total en el HTML
    }
});
